const state = {
  lang: "mix",
  page: "overview",
  priority: "all",
  query: "",
  topicGroup: "core",
  selectedTopicId: "",
  cluster: "all",
  glossary: "all",
  sourceGroup: "all",
  metricCounts: {},
  metricsAvailable: true,
  onlineCounts: { page: null, site: null, window_seconds: 90 },
  onlineAvailable: true,
  lastOnlineHeartbeatAt: 0,
  lastOnlineHeartbeatPage: "",
  onlineTimer: 0,
  metricsSessionId: "",
  lastTrackedPage: "",
  lastTrackedTopic: "",
  rewardProvider: "wechat",
  checklist: {},
  checklistMessage: "",
  commentsByPage: {},
  commentsStatusByPage: {},
  commentsExpandedByPage: {},
  questions: [],
  sources: [],
  openQuestionId: "",
  suppressedQuestionToggleId: "",
  activeTermKey: ""
};

const content = window.reviewContent;
const pages = new Set(["overview", "scope", "plan", "knowledge", "papers", "glossary", "whiteboards", "sources"]);
const metricLabels = {
  site_visit: { zh: "站点访问", en: "site visits" },
  page_view: { zh: "本页查看", en: "page views" },
  page_click: { zh: "导航点击", en: "nav clicks" },
  topic_view: { zh: "知识点查看", en: "topic views" },
  glossary_view: { zh: "词条查看", en: "term views" },
  question_view: { zh: "真题查看", en: "question views" },
  source_preview: { zh: "预览", en: "previews" },
  source_open: { zh: "打开/下载", en: "opens/downloads" },
  filter_change: { zh: "筛选变更", en: "filter changes" },
  diagram_open: { zh: "图解放大", en: "diagram zooms" },
  mindmap_node_click: { zh: "节点点击", en: "node clicks" },
  whiteboard_open: { zh: "画板放大", en: "whiteboard zooms" },
  reward_open: { zh: "打赏弹窗", en: "reward opens" }
};
const metricSessionKey = "kangaroo-review-session";
const browserIdentityKey = "kangaroo-review-browser-id";
const checklistStorageKey = "kangaroo-review-checklist-v1";
const commentNicknameKey = "kangaroo-review-comment-nickname";
const checklistExportMarker = "KANGAROO_REVIEW_CHECKLIST_JSON:";
const onlineHeartbeatMs = 30 * 1000;
const rewardOptions = {
  wechat: {
    label: { zh: "微信", en: "WeChat" },
    src: "assets/reward/wechat.png"
  },
  alipay: {
    label: { zh: "支付宝", en: "Alipay" },
    src: "assets/reward/alipay.jpg"
  }
};

function escapeHtml(text) {
  return String(text ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[char]));
}

function localize(value, mode = state.lang) {
  if (!value || typeof value === "string") return value || "";
  if (mode === "zh") return value.zh || value.en || "";
  if (mode === "en") return value.en || value.zh || "";
  const zh = value.zh || "";
  const en = value.en || "";
  if (!zh) return en;
  if (!en || zh === en) return zh;
  return `${zh}\n${en}`;
}

function htmlText(value) {
  return localize(value)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<span>${escapeHtml(line)}</span>`)
    .join("");
}

let inlineTermVariantCache = null;

function isAsciiWordChar(char) {
  return Boolean(char && /[A-Za-z0-9_]/.test(char));
}

function normalizeTermVariant(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function termByKey(key) {
  return content.glossary.find((term) => glossaryMetricKey(term) === key);
}

function termAliasValues(term) {
  const aliases = term.aliases || [];
  if (Array.isArray(aliases)) return aliases;
  if (aliases && typeof aliases === "object") {
    return Object.values(aliases).flat().filter(Boolean);
  }
  return [];
}

function addTermVariant(variants, value) {
  const text = normalizeTermVariant(value);
  if (!text) return;
  variants.add(text);
  const withoutParentheses = normalizeTermVariant(text.replace(/\s*\([^)]*\)\s*/g, " "));
  if (withoutParentheses && withoutParentheses !== text) variants.add(withoutParentheses);
  for (const match of text.matchAll(/\(([A-Za-z][A-Za-z0-9+/.-]{1,16})\)/g)) {
    variants.add(match[1]);
    variants.add(`${match[1]}s`);
  }
  text.split(/[\/,，、;；]/).map(normalizeTermVariant).filter(Boolean).forEach((part) => {
    if (part.length >= 3 || /[\u4e00-\u9fff]{2,}/.test(part)) variants.add(part);
  });
  if (/^[A-Za-z][A-Za-z0-9+.-]{1,16}$/.test(text) && !/s$/i.test(text)) {
    variants.add(`${text}s`);
  }
}

function termVariantStrings(term) {
  const variants = new Set();
  [term.zh, term.en, term.id, ...termAliasValues(term)].forEach((value) => addTermVariant(variants, value));
  return Array.from(variants).filter((variant) => {
    if (/^[A-Za-z0-9+/.-]+$/.test(variant)) return variant.length >= 2;
    return variant.length >= 2;
  });
}

function inlineTermVariants() {
  if (inlineTermVariantCache) return inlineTermVariantCache;
  const byText = new Map();
  content.glossary.forEach((term) => {
    const key = glossaryMetricKey(term);
    termVariantStrings(term).forEach((variant) => {
      const lower = variant.toLocaleLowerCase();
      const existing = byText.get(lower);
      if (!existing || variant.length > existing.text.length) {
        byText.set(lower, {
          key,
          text: variant,
          lower,
          ascii: /^[A-Za-z0-9+/.-]+$/.test(variant)
        });
      }
    });
  });
  inlineTermVariantCache = Array.from(byText.values()).sort((a, b) => b.text.length - a.text.length);
  return inlineTermVariantCache;
}

function matchInlineTermAt(text, index) {
  const lowerText = text.toLocaleLowerCase();
  for (const variant of inlineTermVariants()) {
    if (!lowerText.startsWith(variant.lower, index)) continue;
    if (variant.ascii) {
      const before = text[index - 1];
      const after = text[index + variant.text.length];
      if (isAsciiWordChar(before) || isAsciiWordChar(after)) continue;
    }
    return variant;
  }
  return null;
}

function annotateInlineTerms(line) {
  const text = String(line || "");
  let output = "";
  let cursor = 0;
  let index = 0;
  let count = 0;
  while (index < text.length) {
    const match = count < 24 ? matchInlineTermAt(text, index) : null;
    if (!match) {
      index += 1;
      continue;
    }
    output += escapeHtml(text.slice(cursor, index));
    const label = text.slice(index, index + match.text.length);
    output += `<button type="button" class="term-ref" data-action="term-ref" data-term-key="${escapeHtml(match.key)}">${escapeHtml(label)}</button>`;
    index += match.text.length;
    cursor = index;
    count += 1;
  }
  output += escapeHtml(text.slice(cursor));
  return output;
}

function richText(value) {
  return localize(value)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<span>${annotateInlineTerms(line)}</span>`)
    .join("");
}

function splitAfterMarks(text, marks) {
  const chunks = [];
  let buffer = "";
  Array.from(text).forEach((char) => {
    buffer += char;
    if (marks.includes(char)) {
      const value = buffer.trim();
      if (value) chunks.push(value);
      buffer = "";
    }
  });
  const rest = buffer.trim();
  if (rest) chunks.push(rest);
  return chunks;
}

function splitStudyText(value) {
  const text = localize(value).replace(/\r/g, "\n").trim();
  if (!text) return [];
  const rawLines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const points = [];
  rawLines.forEach((line) => {
    const stripped = line.replace(/^([0-9]+[.)、]\s*|[-*•]\s*)/, "").trim();
    if (!stripped) return;
    const sentenceMarks = /[A-Za-z]/.test(stripped) && !/[\u4e00-\u9fff]/.test(stripped)
      ? ".!?;"
      : "。！？；;";
    const chunks = stripped.length > 84
      ? splitAfterMarks(stripped, sentenceMarks)
      : [stripped];
    chunks.forEach((chunk) => {
      const part = chunk.trim();
      if (part) points.push(part);
    });
  });
  return points;
}

function renderPointList(value, className = "note-list") {
  const points = splitStudyText(value);
  if (!points.length) return "";
  return `<ul class="${escapeHtml(className)}">${points.map((point) => `<li>${richText(point)}</li>`).join("")}</ul>`;
}

function toTextList(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean).map(String);
  return String(value).split("\n").filter(Boolean);
}

function localizedList(item, zhKey, enKey) {
  if (!item) return [];
  const zh = toTextList(item[zhKey]);
  const en = toTextList(item[enKey]);
  if (state.lang === "zh") return zh.length ? zh : en;
  if (state.lang === "en") return en.length ? en : zh;
  const max = Math.max(zh.length, en.length);
  return Array.from({ length: max }, (_, index) => {
    const zhLine = zh[index] || "";
    const enLine = en[index] || "";
    if (!zhLine) return enLine;
    if (!enLine || zhLine === enLine) return zhLine;
    return `${zhLine}\n${enLine}`;
  }).filter(Boolean);
}

function labelText(value) {
  return localize(value).replace(/\n/g, " / ");
}

function diagramSource(diagram) {
  if (!diagram) return "";
  if (state.lang === "zh") return diagram.srcZh || diagram.src || diagram.srcEn || "";
  if (state.lang === "en") return diagram.srcEn || diagram.src || diagram.srcZh || "";
  return diagram.src || diagram.srcZh || diagram.srcEn || "";
}

const diagramPriorityOverrides = {
  "three-tier-reference": "P2",
  "cache-invalidation-reference": "P2",
  "mvc-cnc-reference": "P2",
  "soa-cnc-reference": "P2",
  "pipe-filter-text-pipeline": "P2",
  "broker-pattern-topology": "P2",
  "atam-phase-outputs": "P2",
  "enterprise-4a": "P1",
  "enterprise-methods-togaf-cbm": "P1"
};

function diagramPriority(diagram) {
  if (!diagram) return "";
  return diagram.priority || diagramPriorityOverrides[diagram.id] || "P0";
}

function relatedTopicsForDiagram(diagramId) {
  return content.topics.filter((topic) => (topic.diagramIds || []).includes(diagramId));
}

function localizedPair(item, zhKey, enKey) {
  if (!item) return "";
  if (state.lang === "en") return item[enKey] || item[zhKey] || "";
  if (state.lang === "zh") return item[zhKey] || item[enKey] || "";
  const zh = item[zhKey] || "";
  const en = item[enKey] || "";
  if (!zh) return en;
  if (!en || zh === en) return zh;
  return `${zh}\n${en}`;
}

function textForLanguage(zh, en, mixedSeparator = "\n") {
  if (state.lang === "en") return en;
  if (state.lang === "zh") return zh;
  return `${zh}${mixedSeparator}${en}`;
}

function reviewDisclaimerText() {
  return textForLanguage(
    "本复习资料由 Codex（GPT-5.5）辅助整理生成，专门针对 2026 南京大学软件学院研究生《软件体系结构》期末复习；未经任课老师确认，不保证适用于未来年份或本科《软件系统设计》，请以课程原始 slides、完整复习课录音/整理纪要和老师说明为准。",
    "This review material was organized with Codex (GPT-5.5) assistance for the 2026 NJU Software Institute graduate Software Architecture final review. It has not been endorsed by the instructors and is not guaranteed for future offerings or the undergraduate Software System Design course; prefer the original slides, complete review-class recording/minutes, and instructor guidance."
  );
}

function diagramById(id) {
  return (content.diagrams || []).find((diagram) => diagram.id === id);
}

function flattenValues(value) {
  if (value == null) return [];
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return [String(value)];
  if (Array.isArray(value)) return value.flatMap(flattenValues);
  if (typeof value === "object") return Object.values(value).flatMap(flattenValues);
  return [];
}

function includesQuery(...values) {
  const q = state.query.trim().toLowerCase();
  if (!q) return true;
  return values.flatMap(flattenValues).join(" ").toLowerCase().includes(q);
}

async function loadJson(path, fallback, validate = () => true) {
  if (window.location.protocol === "file:") return fallback;
  try {
    const res = await fetch(path);
    if (!res.ok) return fallback;
    const data = await res.json();
    return validate(data) ? data : fallback;
  } catch {
    return fallback;
  }
}

function metricApiBase() {
  if (window.location.protocol === "file:") return "";
  if (window.location.pathname.startsWith("/kangaroo-review/")) return "/kangaroo-review/api";
  return "/api";
}

function metricItemId(eventType, key) {
  return `${eventType}::${key}`;
}

function metricLabel(eventType) {
  return metricLabels[eventType] || { zh: "统计", en: "metrics" };
}

function stableMetricKey(prefix, value) {
  const raw = String(value || "unknown")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w:/.\-\u4e00-\u9fa5]+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 180)
    .replace(/^-|-$/g, "");
  return `${prefix}:${raw || "unknown"}`;
}

function pageMetricKey(page = state.page) {
  return stableMetricKey("page", page);
}

function topicMetricKey(topicId) {
  return stableMetricKey("topic", topicId);
}

function glossaryMetricKey(term) {
  return stableMetricKey("glossary", `${term.category}:${term.en || term.zh}`);
}

function mindmapNodeMetricKey(nodeId) {
  return stableMetricKey("mindmap", nodeId);
}

function questionMetricKey(question) {
  return stableMetricKey("question", question.id || question.canonical_question);
}

function questionId(question) {
  return String(question?.id || question?.canonical_question || "");
}

function questionById(id) {
  return state.questions.find((question) => questionId(question) === String(id || ""));
}

function sourceMetricKey(source) {
  return stableMetricKey("source", source.path || source.title || source.url);
}

function metricCount(eventType, key) {
  const value = state.metricCounts[metricItemId(eventType, key)];
  if (Number.isFinite(value)) return String(value);
  return state.metricsAvailable ? "…" : (state.lang === "en" ? "off" : "离线");
}

function onlineCount(value) {
  if (Number.isFinite(value)) return String(value);
  return state.onlineAvailable ? "…" : (state.lang === "en" ? "off" : "离线");
}

function renderMetricBadge(eventType, key, label = metricLabel(eventType)) {
  return `
    <span class="metric-badge" data-metric-type="${escapeHtml(eventType)}" data-metric-key="${escapeHtml(key)}">
      <b>${escapeHtml(metricCount(eventType, key))}</b>
      <em>${htmlText(label)}</em>
    </span>
  `;
}

function renderOnlineBadge() {
  const pageText = state.lang === "en" ? "online here" : "当前页在线";
  const siteText = state.lang === "en" ? "site-wide" : "全站在线";
  return `
    <span class="online-badge${state.onlineAvailable ? "" : " offline"}" data-online-indicator title="${state.lang === "en" ? "Estimated from recent browser heartbeats." : "根据最近浏览器心跳估算。"}">
      <em>${escapeHtml(pageText)}</em>
      <b data-online-page>${escapeHtml(onlineCount(state.onlineCounts.page))}</b>
      <span aria-hidden="true">·</span>
      <em>${escapeHtml(siteText)}</em>
      <b data-online-site>${escapeHtml(onlineCount(state.onlineCounts.site))}</b>
    </span>
  `;
}

function pageMetricFooter() {
  const key = pageMetricKey();
  return `
    ${renderChecklistTools()}
    <footer class="page-metrics" aria-label="${state.lang === "en" ? "Page metrics" : "页面统计"}">
      ${renderOnlineBadge()}
      ${renderMetricBadge("site_visit", "site")}
      ${renderMetricBadge("page_view", key)}
      ${renderMetricBadge("page_click", key)}
      <span>${state.lang === "en" ? "Metrics update after the lightweight SQLite service receives events." : "统计由轻量 SQLite 服务实时累加，服务离线时页面仍可正常复习。"}</span>
      <button class="reward-trigger" type="button" data-action="open-reward">${state.lang === "en" ? "Help reimburse a little Codex?" : "你想帮我报销一点Codex吗？"}</button>
    </footer>
  `;
}

function createMetricSessionId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function ensureMetricSession() {
  if (state.metricsSessionId) return state.metricsSessionId;
  try {
    let value = window.sessionStorage.getItem(metricSessionKey);
    if (!value) {
      value = createMetricSessionId();
      window.sessionStorage.setItem(metricSessionKey, value);
    }
    state.metricsSessionId = value;
  } catch {
    state.metricsSessionId = createMetricSessionId();
  }
  return state.metricsSessionId;
}

function ensureBrowserIdentity() {
  try {
    let value = window.localStorage.getItem(browserIdentityKey);
    if (!value) {
      value = createMetricSessionId();
      window.localStorage.setItem(browserIdentityKey, value);
    }
    return value;
  } catch {
    return ensureMetricSession();
  }
}

function safeStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Browser privacy modes may disable localStorage; the UI remains usable for reading.
  }
}

function checklistKey(kind, id) {
  return `${kind}:${String(id || "unknown")}`;
}

function routeStepId(step, index) {
  if (step?.id) return step.id;
  const zhTitle = localize(step?.title, "zh") || localize(step?.title, "en") || `step-${index + 1}`;
  return stableMetricKey("route-step", zhTitle);
}

function mindmapNodes() {
  return (content.examMindmap?.groups || []).flatMap((group) =>
    (group.nodes || []).map((node) => ({
      ...node,
      groupId: group.id,
      groupTitle: group.title,
      priority: node.priority || group.priority || ""
    }))
  );
}

function checklistCurrentItems() {
  const items = [];
  content.topics.forEach((topic) => {
    if (isOutOfScopePriority(topic.priority)) return;
    items.push({
      key: checklistKey("topic", topic.id),
      kind: "topic",
      label: labelText(topic.title),
      priority: topic.priority || "",
      page: "knowledge"
    });
  });
  state.questions.forEach((question) => {
    if (isOutOfScopePriority(question.priority)) return;
    items.push({
      key: checklistKey("question", question.id || question.canonical_question),
      kind: "question",
      label: state.lang === "en" ? question.canonical_question : (question.question_zh || question.canonical_question),
      priority: question.priority || "",
      page: "papers"
    });
  });
  content.glossary.forEach((term) => {
    items.push({
      key: checklistKey("glossary", glossaryMetricKey(term)),
      kind: "glossary",
      label: `${term.zh || ""} / ${term.en || ""}`.trim(),
      priority: "",
      page: "glossary"
    });
  });
  content.diagrams.forEach((diagram) => {
    const priority = diagramPriority(diagram);
    if (isOutOfScopePriority(priority)) return;
    items.push({
      key: checklistKey("diagram", diagram.id),
      kind: "diagram",
      label: labelText(diagram.title),
      priority,
      page: "whiteboards"
    });
  });
  state.sources.forEach((source) => {
    items.push({
      key: checklistKey("source", sourceMetricKey(source)),
      kind: "source",
      label: sourceLabel(source),
      priority: sourceTrustLabel(source),
      page: "sources"
    });
  });
  content.studyPlan.forEach((step, index) => {
    items.push({
      key: checklistKey("route", routeStepId(step, index)),
      kind: "route",
      label: labelText(step.title),
      priority: "",
      page: "plan"
    });
  });
  mindmapNodes().forEach((node) => {
    if (isOutOfScopePriority(node.priority)) return;
    items.push({
      key: checklistKey("mindmap", node.id),
      kind: "mindmap",
      label: labelText(node.title),
      priority: node.priority || "",
      page: "scope"
    });
  });
  return items;
}

function checklistImportAliases() {
  const aliases = {};
  content.studyPlan.forEach((step, index) => {
    const stableKey = checklistKey("route", routeStepId(step, index));
    const oldKey = checklistKey("route", `step-${index + 1}`);
    if (oldKey !== stableKey) aliases[oldKey] = stableKey;
  });
  return aliases;
}

function migrateChecklistKeys(items) {
  const aliases = checklistImportAliases();
  const currentItems = new Map(checklistCurrentItems().map((item) => [item.key, item]));
  const migrated = {};
  Object.entries(items || {}).forEach(([key, value]) => {
    const targetKey = aliases[key] || key;
    const current = currentItems.get(targetKey);
    migrated[targetKey] = {
      ...value,
      label: current?.label || value.label || targetKey
    };
  });
  return migrated;
}

function checklistStats() {
  const items = checklistCurrentItems();
  const done = items.filter((item) => state.checklist[item.key]?.done).length;
  return { done, total: items.length };
}

function loadChecklist() {
  const raw = safeStorageGet(checklistStorageKey);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    state.checklist = migrateChecklistKeys(normalizeChecklistPayload(data));
    saveChecklist();
  } catch {
    state.checklist = {};
  }
}

function normalizeChecklistPayload(data) {
  const sourceItems = data?.items || data?.checklist || {};
  const normalized = {};
  if (Array.isArray(sourceItems)) {
    sourceItems.forEach((item) => {
      if (!item?.key) return;
      normalized[item.key] = {
        done: Boolean(item.done),
        label: String(item.label || item.key),
        updatedAt: item.updatedAt || data.exportedAt || ""
      };
    });
  } else if (sourceItems && typeof sourceItems === "object") {
    Object.entries(sourceItems).forEach(([key, value]) => {
      if (typeof value === "boolean") {
        normalized[key] = { done: value, label: key, updatedAt: "" };
      } else if (value && typeof value === "object") {
        normalized[key] = {
          done: Boolean(value.done),
          label: String(value.label || key),
          updatedAt: value.updatedAt || data?.exportedAt || ""
        };
      }
    });
  }
  return normalized;
}

function saveChecklist() {
  safeStorageSet(checklistStorageKey, JSON.stringify({
    app: "kangaroo-review",
    schema: 1,
    savedAt: new Date().toISOString(),
    items: state.checklist
  }));
}

function setChecklistDone(key, done, label = key) {
  state.checklist[key] = {
    done,
    label,
    updatedAt: new Date().toISOString()
  };
  saveChecklist();
  updateChecklistSummary();
  syncChecklistControls(key);
}

function syncChecklistControls(key) {
  const checked = Boolean(state.checklist[key]?.done);
  const text = checked
    ? (state.lang === "en" ? "Done" : "已读")
    : (state.lang === "en" ? "Todo" : "未读");
  document.querySelectorAll("[data-check-key]").forEach((input) => {
    if (input.dataset.checkKey !== key) return;
    input.checked = checked;
    const label = input.closest(".check-control")?.querySelector("span");
    if (label) label.textContent = text;
  });
}

function renderChecklistControl(kind, id, label, extraClass = "") {
  const key = checklistKey(kind, id);
  const checked = Boolean(state.checklist[key]?.done);
  const doneLabel = state.lang === "en" ? "Reviewed" : "已复习";
  const todoLabel = state.lang === "en" ? "Mark reviewed" : "标记已复习";
  return `
    <label class="check-control ${extraClass}" title="${escapeHtml(checked ? doneLabel : todoLabel)}">
      <input type="checkbox" data-check-key="${escapeHtml(key)}" data-check-label="${escapeHtml(label)}" ${checked ? "checked" : ""} />
      <span>${checked ? (state.lang === "en" ? "Done" : "已读") : (state.lang === "en" ? "Todo" : "未读")}</span>
    </label>
  `;
}

function renderChecklistTools() {
  const stats = checklistStats();
  const percent = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
  return `
    <section class="checklist-tools" aria-label="${state.lang === "en" ? "Review checklist" : "复习进度清单"}">
      <div>
        <strong>${state.lang === "en" ? "Review checklist" : "复习清单"}</strong>
        <span data-checklist-summary>${stats.done}/${stats.total} · ${percent}%</span>
      </div>
      <p>${state.lang === "en"
        ? "Saved in this browser. Export a readable TXT and import it on another device."
        : "保存在当前浏览器。可导出可读 TXT，再到另一台设备导入。跨版本导入时，新内容默认未读。"}</p>
      <div class="checklist-actions">
        <button type="button" data-action="export-checklist">${state.lang === "en" ? "Export" : "导出"}</button>
        <button type="button" data-action="import-checklist">${state.lang === "en" ? "Import" : "导入"}</button>
        <input id="checklist-import-input" type="file" accept=".txt,.json,text/plain,application/json" hidden />
      </div>
      ${state.checklistMessage ? `<small class="checklist-message">${escapeHtml(state.checklistMessage)}</small>` : ""}
    </section>
  `;
}

function updateChecklistSummary() {
  const stats = checklistStats();
  const percent = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
  const node = document.querySelector("[data-checklist-summary]");
  if (node) node.textContent = `${stats.done}/${stats.total} · ${percent}%`;
}

function exportChecklist() {
  const currentItems = checklistCurrentItems();
  const currentKeys = new Set(currentItems.map((item) => item.key));
  const unknownItems = Object.entries(state.checklist)
    .filter(([key]) => !currentKeys.has(key))
    .map(([key, value]) => ({
      key,
      kind: "legacy",
      label: value.label || key,
      page: "legacy",
      priority: "",
      legacy: true
    }));
  const readableItems = [...currentItems, ...unknownItems];
  const exportedItems = {};
  Object.entries(state.checklist).forEach(([key, value]) => {
    exportedItems[key] = {
      done: Boolean(value.done),
      label: value.label || key,
      kind: "legacy",
      page: "legacy",
      priority: "",
      updatedAt: value.updatedAt || ""
    };
  });
  currentItems.forEach((item) => {
    const existing = state.checklist[item.key] || {};
    exportedItems[item.key] = {
      done: Boolean(existing.done),
      label: item.label,
      kind: item.kind,
      page: item.page,
      priority: item.priority || "",
      updatedAt: existing.updatedAt || ""
    };
  });
  const payload = {
    app: "kangaroo-review",
    schema: 1,
    exportedAt: new Date().toISOString(),
    course: localize(content.meta.title, "zh"),
    items: exportedItems
  };
  const stats = checklistStats();
  const lines = [
    "Kangaroo Review Checklist v1",
    `Course: ${payload.course}`,
    `Exported: ${payload.exportedAt}`,
    `Progress: ${stats.done}/${stats.total}`,
    "",
    "Human readable list:",
    ...readableItems.map((item) => {
      const done = Boolean(exportedItems[item.key]?.done);
      return `[${done ? "done" : "todo"}] ${item.key} | ${item.label}`;
    }),
    "",
    "Machine readable payload:",
    `${checklistExportMarker}${JSON.stringify(payload)}`
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `kangaroo-review-checklist-${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  state.checklistMessage = state.lang === "en" ? "Checklist exported." : "清单已导出。";
  renderAll();
}

function parseChecklistImport(text) {
  const markerIndex = text.indexOf(checklistExportMarker);
  if (markerIndex >= 0) {
    const jsonText = text.slice(markerIndex + checklistExportMarker.length).trim();
    return normalizeChecklistPayload(JSON.parse(jsonText));
  }
  const normalized = {};
  text.split(/\r?\n/).forEach((line) => {
    const match = line.match(/^\[(done|todo|x| |已读|未读)\]\s+([^|]+?)(?:\s+\|\s*(.*))?$/i);
    if (!match) return;
    const done = /^(done|x|已读)$/i.test(match[1].trim());
    const key = match[2].trim();
    normalized[key] = {
      done,
      label: (match[3] || key).trim(),
      updatedAt: new Date().toISOString()
    };
  });
  if (!Object.keys(normalized).length) throw new Error("No checklist entries found");
  return normalized;
}

async function importChecklistFile(file) {
  if (!file) return;
  try {
    state.checklist = migrateChecklistKeys(parseChecklistImport(await file.text()));
    saveChecklist();
    state.checklistMessage = state.lang === "en"
      ? "Checklist imported. New items stay unread."
      : "清单已导入；新版本新增内容保持未读。";
  } catch (error) {
    state.checklistMessage = state.lang === "en"
      ? `Import failed: ${error.message}`
      : `导入失败：${error.message}`;
  }
  renderAll();
}

function commentApiAvailable() {
  return Boolean(metricApiBase());
}

function commentNickname() {
  return safeStorageGet(commentNicknameKey) || (state.lang === "en" ? "Anonymous classmate" : "匿名同学");
}

function commentPageState(page = state.page) {
  return state.commentsByPage[page] || [];
}

function commentStatus(page = state.page) {
  return state.commentsStatusByPage[page] || "";
}

function commentTimestamp(comment) {
  const time = new Date(comment?.created_at || "").getTime();
  return Number.isNaN(time) ? 0 : time;
}

function sortedCommentsForDisplay(page = state.page) {
  return [...commentPageState(page)].sort((a, b) => {
    const byTime = commentTimestamp(b) - commentTimestamp(a);
    if (byTime) return byTime;
    return Number(b?.id || 0) - Number(a?.id || 0);
  });
}

function renderCommentsPanel() {
  const comments = sortedCommentsForDisplay();
  const status = commentStatus();
  const disabled = commentApiAvailable() ? "" : "disabled";
  const expanded = Boolean(state.commentsExpandedByPage[state.page]);
  const visibleComments = expanded ? comments : comments.slice(0, 5);
  return `
    <section class="panel comments-panel" aria-label="${state.lang === "en" ? "Page comments" : "本页评论"}" data-comments-page="${escapeHtml(state.page)}">
      <div class="section-head split">
        <div>
          <p class="section-kicker">Comments</p>
          <h2>${state.lang === "en" ? "Page Comments" : "本页评论"}</h2>
        </div>
        <span class="count-pill">${comments.length} ${state.lang === "en" ? "comments" : "条"}</span>
      </div>
      <p class="source-note">${state.lang === "en"
        ? "Anonymous, flat comments stored in SQLite. Obvious spam words and rapid bursts are rejected."
        : "轻量匿名评论，按页面落到 SQLite。明显垃圾词和短时间刷屏会被拒绝。"}</p>
      <form class="comment-form" data-action="submit-comment">
        <input name="nickname" maxlength="32" value="${escapeHtml(commentNickname())}" placeholder="${state.lang === "en" ? "Nickname" : "昵称"}" ${disabled} />
        <textarea name="body" maxlength="1000" rows="3" placeholder="${state.lang === "en" ? "Leave a review note or correction..." : "留下复习提醒、纠错或补充..."}" ${disabled}></textarea>
        <button type="submit" ${disabled}>${state.lang === "en" ? "Post" : "发布"}</button>
      </form>
      ${status ? `<p class="comment-status">${escapeHtml(status)}</p>` : ""}
      <div class="comment-list">
        ${comments.length ? visibleComments.map((comment) => `
          <article class="comment-item">
            <header>
              <strong>${escapeHtml(comment.nickname || (state.lang === "en" ? "Anonymous" : "匿名同学"))}</strong>
              <time datetime="${escapeHtml(comment.created_at || "")}">${escapeHtml(formatCommentTime(comment.created_at))}</time>
            </header>
            <p>${escapeHtml(comment.body || "")}</p>
          </article>
        `).join("") : `<p class="empty">${commentApiAvailable()
          ? (state.lang === "en" ? "No comments yet." : "还没有评论。")
          : (state.lang === "en" ? "Comments require the local/online SQLite service." : "评论区需要通过本地或线上 SQLite 服务访问。")}</p>`}
      </div>
      ${comments.length > 5 ? `
        <button class="comment-toggle" type="button" data-action="toggle-comments" data-comments-page="${escapeHtml(state.page)}" aria-expanded="${expanded}">
          ${expanded
            ? (state.lang === "en" ? "Collapse comments" : "收起评论")
            : (state.lang === "en" ? `Show all ${comments.length} comments` : `展开全部 ${comments.length} 条评论`)}
        </button>
      ` : ""}
    </section>
  `;
}

function formatCommentTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString(state.lang === "en" ? "en-US" : "zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function commentSubmitErrorMessage(message) {
  if (/blocked words/i.test(message || "")) {
    return state.lang === "en"
      ? "This comment contains words blocked by the simple moderation list. Please rephrase it before posting."
      : "这条评论包含屏蔽词，请换一种表达后再发布。";
  }
  if (/rate limit/i.test(message || "")) {
    return state.lang === "en"
      ? "Posting too quickly. Please wait a little before trying again."
      : "发布太频繁了，稍等一会儿再试。";
  }
  return state.lang === "en"
    ? `Post failed: ${message}`
    : `发布失败：${message}`;
}

async function loadComments(page = state.page, force = false) {
  const apiBase = metricApiBase();
  if (!apiBase) return;
  if (!force && state.commentsByPage[page]) return;
  state.commentsStatusByPage[page] = state.lang === "en" ? "Loading comments..." : "正在加载评论...";
  refreshCommentsPanel(page);
  try {
    const res = await fetch(`${apiBase}/comments?page=${encodeURIComponent(page)}&limit=50`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    state.commentsByPage[page] = Array.isArray(data.comments) ? data.comments : [];
    state.commentsStatusByPage[page] = "";
  } catch (error) {
    state.commentsStatusByPage[page] = state.lang === "en"
      ? `Comments unavailable: ${error.message}`
      : `评论暂不可用：${error.message}`;
  }
  refreshCommentsPanel(page);
}

function refreshCommentsPanel(page = state.page) {
  const node = [...document.querySelectorAll("[data-comments-page]")]
    .find((item) => item.dataset.commentsPage === page);
  if (!node) return;
  node.outerHTML = renderCommentsPanel();
}

async function submitComment(form) {
  const apiBase = metricApiBase();
  if (!apiBase) return;
  const nickname = form.elements.nickname.value.trim() || commentNickname();
  const body = form.elements.body.value.trim();
  const page = state.page;
  safeStorageSet(commentNicknameKey, nickname);
  if (body.length < 2) {
    state.commentsStatusByPage[page] = state.lang === "en" ? "Please write at least two characters." : "至少写两个字再发布。";
    refreshCommentsPanel(page);
    return;
  }
  state.commentsStatusByPage[page] = state.lang === "en" ? "Posting..." : "正在发布...";
  refreshCommentsPanel(page);
  try {
    const response = await fetch(`${apiBase}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page,
        nickname,
        body,
        client_id: ensureBrowserIdentity(),
        session_id: ensureMetricSession()
      })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) throw new Error(data.error || `HTTP ${response.status}`);
    state.commentsStatusByPage[page] = state.lang === "en" ? "Posted." : "已发布。";
    await loadComments(page, true);
  } catch (error) {
    state.commentsStatusByPage[page] = commentSubmitErrorMessage(error.message);
    refreshCommentsPanel(page);
  }
}

async function trackMetric(eventType, key, label, meta = {}) {
  const apiBase = metricApiBase();
  if (!apiBase || !key) return;
  const payload = {
    event_type: eventType,
    key,
    label,
    page: state.page,
    target: window.location.hash || window.location.pathname,
    session_id: ensureMetricSession(),
    meta
  };
  try {
    const response = await fetch(`${apiBase}/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true
    });
    state.metricsAvailable = response.ok;
    window.setTimeout(refreshVisibleMetrics, 160);
  } catch {
    state.metricsAvailable = false;
    updateMetricBadges();
  }
}

async function refreshVisibleMetrics() {
  const apiBase = metricApiBase();
  const items = visibleMetricItems();
  if (!apiBase || !items.length) return;
  try {
    const res = await fetch(`${apiBase}/stats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
      cache: "no-store"
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    state.metricCounts = { ...state.metricCounts, ...(data.counts || {}) };
    state.metricsAvailable = true;
  } catch {
    state.metricsAvailable = false;
  }
  updateMetricBadges();
}

function visibleMetricItems() {
  const items = new Set();
  document.querySelectorAll("[data-metric-type][data-metric-key]").forEach((node) => {
    items.add(metricItemId(node.dataset.metricType, node.dataset.metricKey));
  });
  return [...items];
}

function updateMetricBadges() {
  document.querySelectorAll("[data-metric-type][data-metric-key]").forEach((node) => {
    const value = metricCount(node.dataset.metricType, node.dataset.metricKey);
    const number = node.querySelector("b");
    if (number) number.textContent = value;
    node.classList.toggle("offline", !state.metricsAvailable);
  });
}

function updateOnlineBadge() {
  const node = document.querySelector("[data-online-indicator]");
  if (!node) return;
  const pageCount = node.querySelector("[data-online-page]");
  const siteCount = node.querySelector("[data-online-site]");
  if (pageCount) pageCount.textContent = onlineCount(state.onlineCounts.page);
  if (siteCount) siteCount.textContent = onlineCount(state.onlineCounts.site);
  node.classList.toggle("offline", !state.onlineAvailable);
}

async function heartbeatOnline(force = false) {
  const apiBase = metricApiBase();
  if (!apiBase) {
    state.onlineAvailable = false;
    updateOnlineBadge();
    return;
  }
  const now = Date.now();
  const page = state.page;
  if (!force && state.lastOnlineHeartbeatPage === page && now - state.lastOnlineHeartbeatAt < onlineHeartbeatMs) {
    updateOnlineBadge();
    return;
  }
  state.lastOnlineHeartbeatAt = now;
  state.lastOnlineHeartbeatPage = page;
  try {
    const response = await fetch(`${apiBase}/online`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page,
        client_id: ensureBrowserIdentity(),
        session_id: ensureMetricSession()
      }),
      keepalive: true
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.online) throw new Error(data.error || `HTTP ${response.status}`);
    if (page === state.page) {
      state.onlineCounts = {
        page: Number(data.online.page),
        site: Number(data.online.site),
        window_seconds: Number(data.online.window_seconds || 90)
      };
      state.onlineAvailable = true;
    }
  } catch {
    state.onlineAvailable = false;
  }
  updateOnlineBadge();
}

function startOnlineHeartbeat() {
  if (state.onlineTimer || !metricApiBase()) return;
  state.onlineTimer = window.setInterval(() => {
    heartbeatOnline(false);
  }, onlineHeartbeatMs);
}

function trackPageView(page) {
  const key = pageMetricKey(page);
  if (state.lastTrackedPage === `${page}:${window.location.hash}`) return;
  state.lastTrackedPage = `${page}:${window.location.hash}`;
  trackMetric("page_view", key, page);
}

function trackCurrentDetailView() {
  if (state.page !== "knowledge" || !state.selectedTopicId) return;
  if (state.lastTrackedTopic === state.selectedTopicId) return;
  state.lastTrackedTopic = state.selectedTopicId;
  const topic = content.topics.find((item) => item.id === state.selectedTopicId);
  trackMetric("topic_view", topicMetricKey(state.selectedTopicId), topic ? labelText(topic.title) : state.selectedTopicId);
}

function questionPriorityRank(question) {
  return { P0: 0, P1: 1, P2: 2, P3: 3 }[question.priority || "P2"] ?? 4;
}

function sortQuestionsForReview(questions) {
  return [...questions].sort((left, right) => {
    const priority = questionPriorityRank(left) - questionPriorityRank(right);
    if (priority) return priority;
    const leftCluster = left.cluster || "";
    const rightCluster = right.cluster || "";
    if (leftCluster !== rightCluster) return leftCluster.localeCompare(rightCluster);
    return (left.question_zh || left.canonical_question || "").localeCompare(right.question_zh || right.canonical_question || "");
  });
}

function relatedQuestionsForTopic(topic) {
  if (!topic) return [];
  return sortQuestionsForReview(
    state.questions.filter((question) => (question.topicIds || []).includes(topic.id))
  );
}

function setPage(page) {
  const nextPage = pages.has(page) ? page : "overview";
  if (state.page !== nextPage) state.lastTrackedTopic = "";
  state.page = nextPage;
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === state.page);
  });
}

function sourceLabel(source) {
  return source.title || source.path || source.url || "source";
}

function sourceKindName(kind) {
  return ({
    blog: state.lang === "en" ? "Blog" : "博客",
    "cleanup-notes": state.lang === "en" ? "Terminology notes" : "术语说明",
    "complete-transcript": state.lang === "en" ? "Transcript" : "完整转写",
    docx: state.lang === "en" ? "Document" : "文档",
    "feishu-docx": state.lang === "en" ? "Archived note" : "归档纪要",
    "feishu-note": state.lang === "en" ? "Archived note" : "归档纪要",
    "feishu-wiki": state.lang === "en" ? "Archived wiki" : "归档 Wiki",
    jpg: state.lang === "en" ? "Image" : "图片",
    md: state.lang === "en" ? "Notes" : "笔记",
    "mindmap-source": state.lang === "en" ? "Mind map" : "思维导图",
    mubu: state.lang === "en" ? "Mind map" : "思维导图",
    pdf: state.lang === "en" ? "PDF" : "PDF",
    "review-outline": state.lang === "en" ? "Review outline" : "复习提纲",
    "whiteboard-raw": state.lang === "en" ? "Archived board" : "归档画板"
  })[kind] || kind || (state.lang === "en" ? "Source" : "资料");
}

function sourceGroupName(group) {
  return ({
    primary_review_recording: state.lang === "en" ? "Primary review material" : "核心复习材料",
    primary_review_outline: state.lang === "en" ? "Review outline" : "复习提纲",
    review_class_slides: state.lang === "en" ? "Review slides" : "复习课件",
    archived_feishu_notes: state.lang === "en" ? "Archived Feishu notes" : "飞书纪要归档",
    teacher_slides: state.lang === "en" ? "Teacher slides" : "教师课件",
    recent_current_past_papers: state.lang === "en" ? "Recent current-course papers" : "近年本课真题",
    adjacent_recent_past_papers: state.lang === "en" ? "Recent adjacent papers" : "近年相邻课程真题",
    historical_past_papers: state.lang === "en" ? "Historical papers" : "历史真题",
    current_course_2025_review: state.lang === "en" ? "2025 current-course review" : "2025 本课冲刺资料",
    current_course_2025_reference: state.lang === "en" ? "2025 senior blog" : "2025 学长博客",
    adjacent_2025_notes: state.lang === "en" ? "2025 adjacent notes" : "2025 相邻课程笔记",
    raw_predecessor_notes: state.lang === "en" ? "Past notes" : "前人资料",
    peer_ai_notes: state.lang === "en" ? "Peer AI notes" : "同学 AI 整理",
    ai_generated_notes: state.lang === "en" ? "Peer AI notes" : "同学 AI 整理"
  })[group] || group || "Other";
}

function sourceTrustLabel(source = {}) {
  const group = source.source_group || "";
  const trust = source.trust || "";
  if (group === "primary_review_recording" || group === "primary_review_outline" || group === "review_class_slides" || trust.startsWith("highest_ground_truth")) {
    return state.lang === "en" ? "Core material" : "核心材料";
  }
  if (group === "teacher_slides" || trust === "authoritative_slide_detail") {
    return state.lang === "en" ? "Course slides" : "课程课件";
  }
  if (group === "recent_current_past_papers" || group === "adjacent_recent_past_papers" || group === "historical_past_papers" || trust.includes("past_paper")) {
    return state.lang === "en" ? "Past-paper reference" : "真题参考";
  }
  if (group === "current_course_2025_review" || group === "current_course_2025_reference" || group === "adjacent_2025_notes" || trust.includes("2025")) {
    return state.lang === "en" ? "Supplementary review" : "补充复习";
  }
  if (group === "archived_feishu_notes" || trust.startsWith("archived_")) {
    return state.lang === "en" ? "Archived reference" : "归档参考";
  }
  return state.lang === "en" ? "Auxiliary reference" : "辅助参考";
}

function sourceGroupRank(group) {
  const order = {
    primary_review_recording: 0,
    primary_review_outline: 1,
    review_class_slides: 2,
    teacher_slides: 3,
    recent_current_past_papers: 4,
    adjacent_recent_past_papers: 5,
    historical_past_papers: 6,
    current_course_2025_review: 7,
    current_course_2025_reference: 8,
    adjacent_2025_notes: 9,
    raw_predecessor_notes: 10,
    peer_ai_notes: 11,
    ai_generated_notes: 11,
    archived_feishu_notes: 12
  };
  return order[group || "other"] ?? 99;
}

function priorityName(priority) {
  return ({
    P0: state.lang === "en" ? "Must know" : "必考/必会",
    P1: state.lang === "en" ? "High frequency" : "高频",
    P2: state.lang === "en" ? "Support" : "补充",
    P3: state.lang === "en" ? "Background" : "只读背景"
  })[priority] || priority;
}

function isOutOfScopePriority(priority) {
  return priority === "P2" || priority === "P3";
}

function scopeMeta(item = {}) {
  const priority = item.priority || item.level || "";
  if (priority === "P3") {
    return {
      className: "out-of-scope",
      label: state.lang === "en" ? "Outside current review scope" : "复习课外，可跳过",
      title: state.lang === "en"
        ? "Kept only as historical context; not counted in the review checklist."
        : "仅保留作历史背景，不计入复习清单。"
    };
  }
  if (priority === "P2") {
    return {
      className: "historical-scope",
      label: state.lang === "en" ? "Historical backup" : "历史保底，低优先",
      title: state.lang === "en"
        ? "Useful for backup practice, but not part of the first pass."
        : "可作为补充练习，不放入第一轮主背。"
    };
  }
  if (priority === "P1") {
    return {
      className: "adjacent-scope",
      label: state.lang === "en" ? "Core-adjacent" : "核心相邻",
      title: state.lang === "en" ? "Review after P0." : "P0 之后复习。"
    };
  }
  return {
    className: "current-scope",
    label: state.lang === "en" ? "Core focus" : "核心范围",
    title: state.lang === "en" ? "Counted in the review checklist." : "计入复习清单。"
  };
}

function renderScopeTag(item) {
  const meta = scopeMeta(item);
  return `<span class="scope-tag ${escapeHtml(meta.className)}" title="${escapeHtml(meta.title)}">${escapeHtml(meta.label)}</span>`;
}

function renderScopedChecklist(kind, id, label, extraClass = "", item = {}) {
  if (!isOutOfScopePriority(item.priority || item.level || "")) {
    return renderChecklistControl(kind, id, label, extraClass);
  }
  const meta = scopeMeta(item);
  return `<span class="check-skipped ${escapeHtml(extraClass)}" title="${escapeHtml(meta.title)}">${escapeHtml(state.lang === "en" ? "Skipped" : "不计入清单")}</span>`;
}

function currentTopics() {
  return content.topics
    .filter((topic) => state.priority === "all" || topic.priority === state.priority)
    .filter((topic) => state.topicGroup === "all" || topic.group === state.topicGroup)
    .filter((topic) => includesQuery(topic.id, topic.priority, topic.title, topic.takeaway, topic.answerFrame, topic.bullets, topic.deepDive, topic.lectureNotes, topic.memorize, topic.examTemplate));
}

function currentSources() {
  return state.sources
    .filter((source) => state.sourceGroup === "all" || (source.source_group || "other") === state.sourceGroup)
    .filter((source) => includesQuery(source.title, source.path, source.url, source.kind, source.source_group, source.trust, source.summary, source.extraction))
    .sort((left, right) => {
      const groupRank = sourceGroupRank(left.source_group) - sourceGroupRank(right.source_group);
      if (groupRank) return groupRank;
      return sourceLabel(left).localeCompare(sourceLabel(right));
    });
}

function renderOverview() {
  const stats = [
    { label: { zh: "知识点", en: "Topics" }, value: content.topics.length },
    { label: { zh: "真题簇", en: "Question clusters" }, value: state.questions.length },
    { label: { zh: "术语", en: "Glossary terms" }, value: content.glossary.length },
    { label: { zh: "资料源", en: "Sources" }, value: state.sources.length }
  ];
  const p0 = content.topics.filter((topic) => topic.priority === "P0");
  return `
    <section class="hero-panel">
      <div class="hero-copy">
        <p class="section-kicker">Review Dashboard</p>
        <h1>${htmlText(content.meta.title)}</h1>
        <p>${state.lang === "en"
          ? "Chinese-first review with English prompts kept close enough for exam recognition. Start from P0, then use past-paper clusters to practice answer shapes."
          : "中文优先复习，英文题干保留作考试识别。先啃 P0，再用真题簇练答题结构。"}</p>
      </div>
      <dl class="stats-strip">
        ${stats.map((item) => `
          <div>
            <dt>${htmlText(item.label)}</dt>
            <dd>${item.value}</dd>
          </div>
        `).join("")}
      </dl>
    </section>

    <section class="disclaimer-band" aria-label="${state.lang === "en" ? "Accuracy disclaimer" : "准确性提示"}">
      <strong>${state.lang === "en" ? "Accuracy note" : "准确性提示"}</strong>
      <p>${htmlText(reviewDisclaimerText())}</p>
    </section>

    <section class="panel-grid two">
      <article class="panel">
        <div class="section-head">
          <p class="section-kicker">Exam Facts</p>
          <h2>${state.lang === "en" ? "Read this first" : "先确认考试信息"}</h2>
        </div>
        <ol class="fact-list">
          ${content.meta.exam.map((item) => `<li>${htmlText(item)}</li>`).join("")}
        </ol>
      </article>
      <article class="panel">
        <div class="section-head">
          <p class="section-kicker">P0 Focus</p>
          <h2>${state.lang === "en" ? "High-value targets" : "最值得先背的东西"}</h2>
        </div>
        <div class="focus-list">
          ${p0.map((topic) => `
            <a href="#knowledge" class="focus-row" data-action="jump-topic" data-topic-id="${escapeHtml(topic.id)}">
              <span>${escapeHtml(topic.priority)}</span>
              <strong>${htmlText(topic.title)}</strong>
              <em>${htmlText(topic.examWeight || topic.takeaway)}</em>
            </a>
          `).join("")}
        </div>
      </article>
    </section>

  `;
}

function renderScope() {
  const groups = content.examMindmap?.groups || [];
  return `
    <section class="panel scope-panel">
      <div class="section-head split">
        <div>
          <p class="section-kicker">Review-Class Scope</p>
          <h1>${htmlText(content.examMindmap?.title || { zh: "复习课纲领", en: "Review Scope" })}</h1>
          <p>${htmlText(content.examMindmap?.note || "")}</p>
        </div>
        <span class="count-pill">${mindmapNodes().length} ${state.lang === "en" ? "nodes" : "节点"}</span>
      </div>
      <div class="scope-board">
        ${groups.map((group) => renderMindmapGroup(group)).join("")}
      </div>
    </section>
  `;
}

function renderMindmapGroup(group) {
  const priorityClass = group.priority ? group.priority.toLowerCase() : "scope";
  const nodes = group.nodes || [];
  return `
    <section class="mindmap-group ${priorityClass}">
      <header>
        <span>${escapeHtml(group.priority || "scope")}</span>
        <h2>${htmlText(group.title)}</h2>
      </header>
      <div class="mindmap-nodes">
        ${nodes.map((node) => renderMindmapNode(node, group)).join("")}
      </div>
    </section>
  `;
}

function renderMindmapNode(node, group) {
  const priority = node.priority || group.priority || "";
  const metricKey = mindmapNodeMetricKey(node.id);
  const topic = node.topicId ? content.topics.find((item) => item.id === node.topicId) : null;
  return `
    <article class="mindmap-node ${priority ? priority.toLowerCase() : ""}" data-action="mindmap-node" data-node-id="${escapeHtml(node.id)}" tabindex="0">
      <div class="mindmap-node-main">
        <span>${escapeHtml(priority || "scope")}</span>
        <strong>${htmlText(node.title)}</strong>
        <p>${htmlText(node.note || "")}</p>
      </div>
      <div class="mindmap-node-actions">
        ${renderMetricBadge("mindmap_node_click", metricKey)}
        ${renderScopedChecklist("mindmap", node.id, labelText(node.title), "compact-check", { priority })}
        ${topic ? `<a href="#knowledge" data-action="jump-topic" data-topic-id="${escapeHtml(topic.id)}">${state.lang === "en" ? "Open topic" : "打开知识点"}</a>` : ""}
      </div>
    </article>
  `;
}

function renderPlan() {
  return `
    <section class="panel">
      <div class="section-head">
        <p class="section-kicker">Priority Path</p>
        <h1>${state.lang === "en" ? "Review Route" : "复习路线"}</h1>
      </div>
      <div class="route-board">
        ${content.studyPlan.map((step, index) => `
          <section class="route-step">
            <div class="route-step-head">
              <b>${htmlText(step.day)}</b>
              ${renderChecklistControl("route", routeStepId(step, index), labelText(step.title), "compact-check")}
            </div>
            <h2>${htmlText(step.title)}</h2>
            <ul>
              ${step.items.map((item) => `<li>${htmlText(item)}</li>`).join("")}
            </ul>
          </section>
        `).join("")}
      </div>
    </section>

    <section class="panel">
      <div class="section-head">
        <p class="section-kicker">Priority Matrix</p>
        <h2>${state.lang === "en" ? "Importance by exam yield" : "按得分收益分层"}</h2>
      </div>
      <div class="priority-lanes">
        ${content.priorities
          .filter((group) => state.priority === "all" || group.level === state.priority)
          .map((group) => `
            <article class="priority-lane ${group.level.toLowerCase()}">
              <header>
                <span>${escapeHtml(group.level)}</span>
                <strong>${htmlText(group.title)}</strong>
                <em>${escapeHtml(group.weight)}</em>
              </header>
              <p>${htmlText(group.summary)}</p>
              <ul>
                ${group.items.map((item) => `
                  <li>
                    ${renderScopedChecklist("topic", item.topicId, labelText(item), "inline-check", group)}
                    <a href="#knowledge" data-action="jump-topic" data-topic-id="${escapeHtml(item.topicId)}">${htmlText(item)}</a>
                  </li>
                `).join("")}
              </ul>
            </article>
          `).join("")}
      </div>
    </section>
  `;
}

function renderKnowledge() {
  const groups = [{ id: "all", title: { zh: "全部", en: "All" }, note: { zh: "所有知识点", en: "All topics" } }, ...(content.topicGroups || [])];
  const topics = currentTopics();
  if (!topics.some((topic) => topic.id === state.selectedTopicId)) {
    state.selectedTopicId = topics[0]?.id || "";
  }
  const selected = topics.find((topic) => topic.id === state.selectedTopicId);
  return `
    <section class="panel">
      <div class="section-head split">
        <div>
          <p class="section-kicker">Knowledge Base</p>
          <h1>${state.lang === "en" ? "Chapter Tabs, Not a Card Wall" : "按章节分页浏览知识点"}</h1>
        </div>
        <span class="count-pill">${topics.length} ${state.lang === "en" ? "topics" : "条"}</span>
      </div>
      <div class="tab-strip" role="tablist" aria-label="Topic groups">
        ${groups.map((group) => `
          <button class="tab ${state.topicGroup === group.id ? "active" : ""}" type="button" data-action="topic-group" data-topic-group="${escapeHtml(group.id)}">
            ${escapeHtml(labelText(group.title))}
          </button>
        `).join("")}
      </div>
      <div class="knowledge-layout">
        <nav class="topic-index" aria-label="Topics">
          ${topics.map((topic) => `
            <button class="${topic.id === state.selectedTopicId ? "active" : ""}" type="button" data-action="select-topic" data-topic-id="${escapeHtml(topic.id)}">
              <span>${escapeHtml(topic.priority)} · ${priorityName(topic.priority)}</span>
              <strong>${htmlText(topic.title)}</strong>
            </button>
          `).join("") || `<p class="empty">${state.lang === "en" ? "No topic matches current filters." : "当前筛选下没有知识点。"}</p>`}
        </nav>
        <article class="topic-detail">
          ${selected ? renderTopicDetail(selected) : ""}
        </article>
      </div>
    </section>
  `;
}

function renderTopicDetail(topic) {
  const relatedQuestions = relatedQuestionsForTopic(topic);
  const related = relatedQuestions.length;
  const diagrams = (topic.diagramIds || []).map(diagramById).filter(Boolean);
  return `
    <header class="detail-head">
      <div>
        <p class="section-kicker">${escapeHtml(topic.id)}</p>
        <h2>${htmlText(topic.title)}</h2>
      </div>
      <div class="detail-badges">
        ${renderScopedChecklist("topic", topic.id, labelText(topic.title), "compact-check", topic)}
        <span>${escapeHtml(topic.priority)}</span>
        <span>${escapeHtml(topic.examWeight || priorityName(topic.priority))}</span>
        ${renderScopeTag(topic)}
        ${renderMetricBadge("topic_view", topicMetricKey(topic.id))}
      </div>
    </header>
    <p class="takeaway">${richText(topic.takeaway)}</p>
    <section class="answer-box">
      <b>${state.lang === "en" ? "Answer frame" : "答题框架"}</b>
      ${renderPointList(topic.answerFrame, "answer-list")}
    </section>
    ${renderTopicStudyAid(topic)}
    ${renderLectureNotes(topic)}
    <section class="detail-columns single">
      <div>
        <h3>${state.lang === "en" ? "Key points" : "关键点"}</h3>
        <ul class="dense-list">
          ${(topic.bullets || []).map((item) => `<li>${richText(item)}</li>`).join("")}
        </ul>
      </div>
    </section>
    ${renderDeepDive(topic)}
    ${diagrams.length ? `
      <section class="diagram-section">
        <h3>${state.lang === "en" ? "Diagrams to memorize" : "建议背下来的图解"}</h3>
        <div class="diagram-grid">
          ${diagrams.map((diagram) => renderDiagramCard(diagram)).join("")}
        </div>
      </section>
    ` : ""}
    ${relatedQuestions.length ? `
      <section class="related-questions">
        <div class="related-questions-head">
          <h3>${state.lang === "en" ? "Related past-paper practice" : "关联真题练习"}</h3>
          <span>${relatedQuestions.length} ${state.lang === "en" ? "questions" : "题"}</span>
        </div>
        <div class="mini-question-list">
          ${relatedQuestions.map((question) => `
            <button type="button" data-action="toggle-inline-question" data-question-id="${escapeHtml(question.id)}" aria-expanded="false">
              <span>${escapeHtml(question.cluster)}</span>
              <strong>${escapeHtml(state.lang === "en" ? question.canonical_question : question.question_zh || question.canonical_question)}</strong>
            </button>
            <div class="mini-question-body" data-question-id="${escapeHtml(question.id)}" hidden>
              ${renderQuestionBody(question)}
            </div>
          `).join("")}
        </div>
      </section>
    ` : ""}
  `;
}

function renderTopicStudyAid(topic) {
  if (!topic.memorize && !topic.examTemplate) return "";
  return `
    <section class="study-aid">
      ${topic.memorize ? `
        <details class="study-aid-card" open>
          <summary>
            <span>${state.lang === "en" ? "Memorize" : "速背"}</span>
            <strong>${state.lang === "en" ? "Memorize this" : "背诵清单"}</strong>
          </summary>
          <ul class="dense-list">
            ${splitStudyText(topic.memorize).map((line) => `<li>${richText(line)}</li>`).join("")}
          </ul>
        </details>
      ` : ""}
      ${topic.examTemplate ? `
        <details class="study-aid-card" open>
          <summary>
            <span>${state.lang === "en" ? "Exam" : "答法"}</span>
            <strong>${state.lang === "en" ? "Exam wording" : "考场答法"}</strong>
          </summary>
          ${renderPointList(topic.examTemplate, "note-list")}
        </details>
      ` : ""}
    </section>
  `;
}

function renderLectureNotes(topic) {
  const notes = topic.lectureNotes || [];
  if (!notes.length) return "";
  return `
    <section class="lecture-notes">
      <header>
        <div>
          <h3>${state.lang === "en" ? "Full study notes" : "详细讲义：这块到底怎么理解"}</h3>
          <p>${state.lang === "en"
            ? "Open the parts you are not fluent with. Each block separates understanding, memorization, and exam wording."
            : "按不会的地方展开看。每块都分成怎么理解、背什么和怎么答，尽量不让框架词自己悬空。"}</p>
        </div>
        <span>${notes.length} ${state.lang === "en" ? "blocks" : "块"}</span>
      </header>
      <div class="lecture-note-list">
        ${notes.map((item, index) => `
          <details class="lecture-note" ${index === 0 ? "open" : ""}>
            <summary>
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${htmlText(item.title)}</strong>
              <em>${htmlText(item.summary)}</em>
            </summary>
            <div class="lecture-note-body">
              <section>
                <h4>${state.lang === "en" ? "How to understand it" : "怎么理解"}</h4>
                ${renderPointList(item.explain, "note-list")}
              </section>
              <section>
                <h4>${state.lang === "en" ? "What to memorize" : "背什么"}</h4>
                ${renderPointList(item.memorize, "note-list")}
              </section>
              <section>
                <h4>${state.lang === "en" ? "How to answer" : "怎么写答案"}</h4>
                ${renderPointList(item.answer, "note-list")}
              </section>
            </div>
          </details>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDeepDive(topic) {
  const sections = topic.deepDive || [];
  if (!sections.length) return "";
  return `
    <section class="deep-dive">
      <h3>${state.lang === "en" ? "Expanded notes" : "展开讲解：背什么，怎么写，哪里易错"}</h3>
      <div class="deep-dive-list">
        ${sections.map((section) => `
          <details class="deep-dive-row">
            <summary>
              <b>${htmlText(section.title)}</b>
              <span>${htmlText(section.summary || "")}</span>
            </summary>
            <div class="deep-dive-body">
              <section>
                <span>${state.lang === "en" ? "Must memorize" : "必须背"}</span>
                ${renderPointList(section.must, "note-list compact")}
              </section>
              <section>
                <span>${state.lang === "en" ? "How to answer" : "怎么答"}</span>
                ${renderPointList(section.answer, "note-list compact")}
              </section>
              <section>
                <span>${state.lang === "en" ? "Common trap" : "易错点"}</span>
                ${renderPointList(section.trap, "note-list compact")}
              </section>
            </div>
          </details>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDiagramVisual(diagram, mode = "card") {
  const label = escapeHtml(labelText(diagram.title));
  return `<img class="diagram-image" src="${escapeHtml(diagramSource(diagram))}" alt="${label}" />`;
}

function renderDiagramCard(diagram, compact = false) {
  return `
    <article class="diagram-card ${compact ? "compact" : ""}">
      <button type="button" data-action="open-diagram" data-diagram-id="${escapeHtml(diagram.id)}">
        <div class="diagram-preview">
          ${renderDiagramVisual(diagram, "card")}
        </div>
        <span class="zoom-label">${state.lang === "en" ? "Zoom" : "放大"}</span>
      </button>
      <div>
        <strong>${htmlText(diagram.title)}</strong>
        <p>${htmlText(diagram.note)}</p>
        ${diagram.use ? `<small>${htmlText(diagram.use)}</small>` : ""}
      </div>
    </article>
  `;
}

function renderPapers() {
  const priorityQuestions = state.questions
    .filter((question) => state.priority === "all" || question.priority === state.priority);
  const clusters = ["all", ...new Set(priorityQuestions.map((q) => q.cluster).sort())];
  const questions = priorityQuestions
    .filter((question) => state.cluster === "all" || question.cluster === state.cluster)
    .filter((question) => includesQuery(question.cluster, question.priority, question.canonical_question, question.question_zh, question.likely_answer_pattern, question.answer_zh, question.sample_answer_zh, question.sample_answer_en, question.recurring_terms, question.english_keywords));
  const openQuestionId = questions.some((question) => questionId(question) === state.openQuestionId)
    ? state.openQuestionId
    : "";
  return `
    <section class="panel">
      <div class="section-head split">
        <div>
          <p class="section-kicker">Past Papers</p>
          <h1>${state.lang === "en" ? "Question Clusters With Chinese Answers" : "往年真题：中文答案 + 英文对照"}</h1>
        </div>
        <label class="select-label">
          <span>${state.lang === "en" ? "Cluster" : "题簇"}</span>
          <select id="cluster-select">
            ${clusters.map((cluster) => `<option value="${escapeHtml(cluster)}" ${state.cluster === cluster ? "selected" : ""}>${escapeHtml(cluster)}</option>`).join("")}
          </select>
        </label>
      </div>
      <p class="source-note">${state.lang === "en"
        ? "P0/P1 are the core review items. P2/P3 are backup practice or background and are not counted in the checklist."
        : "P0/P1 是核心内容；P2/P3 只作补充练习或背景了解，不计入复习清单。"}</p>
      <div class="question-list">
        ${questions.map((question, index) => renderQuestion(question, openQuestionId ? questionId(question) === openQuestionId : index === 0)).join("") || `<p class="empty">${state.lang === "en" ? "No question matches current filters." : "当前筛选下没有真题。"}</p>`}
      </div>
    </section>
  `;
}

function renderQuestionBody(question) {
  const zhAnswer = question.answer_zh || question.likely_answer_pattern;
  const sample = localizedPair(question, "sample_answer_zh", "sample_answer_en");
  const visualHint = localizedPair(question, "visual_hint_zh", "visual_hint_en");
  const drawingSteps = localizedList(question, "drawing_steps_zh", "drawing_steps_en");
  const answerPoints = localizedList(question, "answer_points_zh", "answer_points_en");
  const diagram = question.diagram_id ? diagramById(question.diagram_id) : null;
  const answer = textForLanguage(zhAnswer, question.likely_answer_pattern);
  const title = textForLanguage(question.question_zh || question.canonical_question, question.canonical_question);
  const answerPointItems = answerPoints.length ? answerPoints : splitStudyText(sample || answer);
  return `
    <div class="question-actions">
      ${renderScopedChecklist("question", question.id || question.canonical_question, labelText(title), "compact-check", question)}
      ${renderScopeTag(question)}
    </div>
    <div class="question-body">
      <section>
        <h3>${state.lang === "en" ? "Likely answer pattern" : "建议答题框架"}</h3>
        ${renderPointList(answer, "answer-list")}
      </section>
      ${answerPointItems.length ? `
        <section class="answer-points">
          <h3>${state.lang === "en" ? "Answer by points" : "按点作答"}</h3>
          <ol>
            ${answerPointItems.map((point) => `<li>${richText(point)}</li>`).join("")}
          </ol>
        </section>
      ` : ""}
      ${sample ? `
        <section class="sample-answer">
          <h3>${state.lang === "en" ? "Exam-ready sample answer" : "可直接背的示例答案"}</h3>
          ${renderPointList(sample, "sample-list")}
        </section>
      ` : ""}
      ${drawingSteps.length ? `
        <section class="drawing-guide">
          <h3>${state.lang === "en" ? "How to draw it in the exam" : "考场怎么画图"}</h3>
          <ol>
            ${drawingSteps.map((step) => `<li>${richText(step)}</li>`).join("")}
          </ol>
        </section>
      ` : ""}
      ${diagram ? `
        <section class="question-diagram">
          <h3>${state.lang === "en" ? "Reference diagram" : "参考答案图 / 配套图解"}</h3>
          ${renderDiagramCard(diagram, true)}
          ${visualHint ? `<p>${richText(visualHint)}</p>` : ""}
        </section>
      ` : visualHint ? `
        <section class="question-diagram">
          <h3>${state.lang === "en" ? "Diagram hint" : "画图提示"}</h3>
          <p>${richText(visualHint)}</p>
        </section>
      ` : ""}
      <div class="question-meta">
        <div class="tag-stack">
          ${[...(question.english_keywords || question.recurring_terms || [])].map((term) => `<span>${escapeHtml(term)}</span>`).join("")}
        </div>
      </div>
    </div>`;
}

function renderQuestion(question, open) {
  const zhQuestion = question.question_zh || question.canonical_question;
  const title = textForLanguage(zhQuestion, question.canonical_question);
  const priority = question.priority || "P2";
  const id = questionId(question);
  return `
    <details class="question-item" data-question-id="${escapeHtml(id)}" ${open ? "open" : ""}>
      <summary>
        <span class="question-kicker">
          <em class="question-priority ${escapeHtml(priority.toLowerCase())}">${escapeHtml(priority)} · ${escapeHtml(priorityName(priority))}</em>
          ${renderScopeTag(question)}
          ${escapeHtml(question.cluster)}
        </span>
        <strong>${htmlText(title)}</strong>
        ${renderMetricBadge("question_view", questionMetricKey(question))}
      </summary>
      ${renderQuestionBody(question)}
    </details>
  `;
}

function glossaryTermByLabel(label) {
  const needle = normalizeTermVariant(label).toLocaleLowerCase();
  if (!needle) return null;
  return content.glossary.find((term) => {
    const values = [term.id, term.zh, term.en, ...termAliasValues(term)]
      .map((value) => normalizeTermVariant(value).toLocaleLowerCase())
      .filter(Boolean);
    return values.includes(needle);
  }) || null;
}

function renderGraphTerm(label) {
  const term = glossaryTermByLabel(label);
  if (!term) return `<span class="term-graph-node muted">${escapeHtml(label)}</span>`;
  return `
    <button type="button" class="term-graph-node" data-action="term-ref" data-term-key="${escapeHtml(glossaryMetricKey(term))}">
      ${escapeHtml(textForLanguage(term.zh || term.en, term.en || term.zh, " / "))}
    </button>
  `;
}

function renderGlossaryGraph() {
  const graph = content.glossaryGraph || [];
  if (!graph.length) return "";
  return `
    <section class="term-graph">
      <div class="term-graph-head">
        <div>
          <p class="section-kicker">Context Graph</p>
          <h2>${state.lang === "en" ? "Term Context Map" : "术语语境知识图谱"}</h2>
        </div>
        <p>${state.lang === "en"
          ? "Similar terms are grouped by instructor/topic context so they are not mixed in exam answers."
          : "相近术语按老师和知识语境分组，避免把不同部分的概念混答。"}
        </p>
      </div>
      <div class="term-graph-grid">
        ${graph.map((group) => `
          <article class="term-graph-lane">
            <header>
              <strong>${htmlText(group.title)}</strong>
              <p>${richText(localize(group.note || ""))}</p>
            </header>
            <div class="term-graph-nodes">
              ${(group.terms || []).map(renderGraphTerm).join("")}
            </div>
            ${(group.edges || []).length ? `
              <div class="term-graph-edges">
                ${(group.edges || []).map(([from, relation, to]) => `
                  <span>${escapeHtml(from)} <b>${escapeHtml(relation)}</b> ${escapeHtml(to)}</span>
                `).join("")}
              </div>
            ` : ""}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderGlossary() {
  const categories = ["all", ...new Set(content.glossary.map((item) => item.category).sort())];
  const items = content.glossary
    .filter((item) => state.glossary === "all" || item.category === state.glossary)
    .filter((item) => includesQuery(item.category, item.zh, item.en, item.noteZh, item.noteEn, item.context, item.boundaryType, termAliasValues(item), item.related));
  return `
    <section class="panel">
      <div class="section-head split">
        <div>
          <p class="section-kicker">Glossary</p>
          <h1>${state.lang === "en" ? "Bilingual Terminology" : "中英文术语表"}</h1>
        </div>
        <label class="select-label">
          <span>${state.lang === "en" ? "Category" : "分类"}</span>
          <select id="glossary-select">
            ${categories.map((category) => `<option value="${escapeHtml(category)}" ${state.glossary === category ? "selected" : ""}>${escapeHtml(category)}</option>`).join("")}
          </select>
        </label>
      </div>
      ${renderGlossaryGraph()}
      <div class="glossary-table">
        ${items.map((item) => {
          const key = glossaryMetricKey(item);
          const aliases = termAliasValues(item).slice(0, 6);
          return `
          <div class="term-row" data-action="glossary-term" data-term-key="${escapeHtml(key)}">
            <span>${escapeHtml(item.category)}</span>
            <strong>${state.lang === "en" ? escapeHtml(item.en) : escapeHtml(item.zh)}</strong>
            <b>${state.lang === "en" ? escapeHtml(item.zh) : escapeHtml(item.en)}</b>
            <p>
              ${textForLanguage(escapeHtml(item.noteZh), escapeHtml(item.noteEn), " / ")}
              ${item.context ? `<small class="term-context">${escapeHtml(item.context)}</small>` : ""}
              ${item.boundaryType ? `<small class="term-context">${state.lang === "en" ? "Boundary: " : "边界语境："}${escapeHtml(item.boundaryType)}</small>` : ""}
              ${aliases.length ? `<small class="term-context">${state.lang === "en" ? "Aliases: " : "别名："}${escapeHtml(aliases.join(" / "))}</small>` : ""}
            </p>
            <div class="term-actions">
              ${renderMetricBadge("glossary_view", key)}
              ${renderChecklistControl("glossary", key, `${item.zh || ""} / ${item.en || ""}`, "compact-check")}
            </div>
          </div>
        `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderDiagramGallery() {
  const groups = [
    {
      priority: "P0",
      title: { zh: "P0 核心图解", en: "P0 Core Diagrams" },
      note: { zh: "优先背图和图下详解，并能把图转成分点答案。", en: "Memorize these with the topic notes first, and turn each diagram into answer points." }
    },
    {
      priority: "P1",
      title: { zh: "P1 概念理解图解", en: "P1 Concept Diagrams" },
      note: { zh: "用于基础分析和检查视角，不需要像 P0 一样反复刷。", en: "Useful for basic analysis/checking questions, but lighter than P0." }
    },
    {
      priority: "P2",
      title: { zh: "P2 补充题参考图", en: "P2 Backup Diagrams" },
      note: { zh: "补充练习使用，不计入首轮清单。", en: "Backup practice only; not counted in the first-pass checklist." }
    }
  ];
  return `
    <section class="panel">
      <div class="section-head">
        <p class="section-kicker">Diagram Gallery</p>
        <h1>${state.lang === "en" ? "Grounded Diagram Library" : "图解库：按图背知识点"}</h1>
        <p>${state.lang === "en"
          ? "This page focuses on course-grounded diagrams redrawn from review slides. Feishu/AI boards are kept below only as archived source references."
          : "本页以按课程课件重绘的图解为主；飞书/AI 画板归档在下方，作为原始参考。"
        }</p>
      </div>
      <div class="diagram-gallery-list">
        ${groups.map((group) => {
          const diagrams = content.diagrams.filter((diagram) => diagramPriority(diagram) === group.priority);
          if (!diagrams.length) return "";
          return `
            <section class="diagram-gallery-group">
              <header>
                <div>
                  <span>${escapeHtml(group.priority)}</span>
                  <h2>${htmlText(group.title)}</h2>
                  <p>${htmlText(group.note)}</p>
                </div>
                <strong>${diagrams.length}</strong>
              </header>
              ${diagrams.map((diagram) => {
                const topics = relatedTopicsForDiagram(diagram.id);
                return `
                  <article class="diagram-gallery-row">
                    ${renderDiagramCard(diagram)}
                    <div class="diagram-gallery-meta">
                      ${group.priority !== "P2" ? renderChecklistControl("diagram", diagram.id, labelText(diagram.title), "compact-check") : ""}
                      <p>${htmlText(diagram.use || diagram.note)}</p>
                      ${topics.length ? `
                        <div class="diagram-topic-links">
                          <span>${state.lang === "en" ? "Related topics" : "关联知识点"}</span>
                          ${topics.map((topic) => `<a href="#knowledge" data-action="jump-topic" data-topic-id="${escapeHtml(topic.id)}">${htmlText(topic.title)}</a>`).join("")}
                        </div>
                      ` : ""}
                    </div>
                  </article>
                `;
              }).join("")}
            </section>
          `;
        }).join("")}
        <details class="archived-whiteboards">
          <summary>${state.lang === "en" ? "Archived Feishu / AI whiteboards" : "归档：飞书 / AI 画板原图"}</summary>
          <div class="whiteboard-list">
            ${content.whiteboards.map((board) => `
              <article class="whiteboard-row">
                <button class="whiteboard-thumb" type="button" data-action="open-whiteboard" data-board-id="${escapeHtml(board.id)}">
                  <img src="${escapeHtml(board.src)}" alt="${escapeHtml(labelText(board.title))}" loading="lazy" />
                  <span>${state.lang === "en" ? "Zoom" : "点击放大"}</span>
                </button>
                <div>
                  <h2>${htmlText(board.title)}</h2>
                  <p>${htmlText(board.note)}</p>
                </div>
              </article>
            `).join("")}
          </div>
        </details>
      </div>
    </section>
  `;
}

function renderSources() {
  const groups = ["all", ...new Set(state.sources.map((source) => source.source_group || "other"))]
    .sort((left, right) => {
      if (left === "all") return -1;
      if (right === "all") return 1;
      const rank = sourceGroupRank(left) - sourceGroupRank(right);
      if (rank) return rank;
      return sourceGroupName(left).localeCompare(sourceGroupName(right));
    });
  const rows = currentSources();
  return `
    <section class="panel">
      <div class="section-head split">
        <div>
          <p class="section-kicker">Source Library</p>
          <h1>${state.lang === "en" ? "Clickable Source Library" : "可点击资料库"}</h1>
        </div>
        <label class="select-label">
          <span>${state.lang === "en" ? "Source type" : "资料类型"}</span>
          <select id="source-select">
            ${groups.map((group) => `<option value="${escapeHtml(group)}" ${state.sourceGroup === group ? "selected" : ""}>${escapeHtml(group === "all" ? "all" : sourceGroupName(group))}</option>`).join("")}
          </select>
        </label>
      </div>
      <p class="source-note">${state.lang === "en"
        ? "Use Preview for extracted text and Open file/Open URL for the original material when it is available in this deployment."
        : "可用“预览抽取”查看整理文本；若当前部署包含源文件，可用“打开源文件/外链”阅读原始材料。"}</p>
      <div class="source-table">
        ${rows.map((source, index) => {
          const key = sourceMetricKey(source);
          const label = sourceLabel(source);
          return `
          <article class="source-row">
            <div>
              <span>${escapeHtml(sourceKindName(source.kind))} · ${escapeHtml(sourceGroupName(source.source_group))}</span>
              <strong>${escapeHtml(label)}</strong>
              <p>${escapeHtml(source.summary || source.path || "")}</p>
            </div>
            <em>${escapeHtml(sourceTrustLabel(source))}${source.needs_ocr ? " · OCR" : ""}</em>
            <small>${source.page_count ? `${source.page_count} pages` : ""}${source.text_chars ? ` · ${source.text_chars} chars` : ""}</small>
            <div class="source-metrics">
              ${renderMetricBadge("source_preview", key)}
              ${renderMetricBadge("source_open", key)}
              ${renderChecklistControl("source", key, label, "compact-check")}
            </div>
            <div class="source-actions">
              <button type="button" data-action="preview-source" data-source-index="${index}">${state.lang === "en" ? "Preview" : "预览抽取"}</button>
              ${renderSourceLink(source, key, label)}
            </div>
          </article>
        `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderSourceLink(source, key = sourceMetricKey(source), sourceName = sourceLabel(source)) {
  const href = source.url || normalizeDeployPath(source.open_path || "");
  if (!href) return "";
  const label = source.url
    ? (state.lang === "en" ? "Open URL" : "打开外链")
    : (state.lang === "en" ? "Open file" : "打开源文件");
  return `
    <a href="${escapeHtml(href)}" target="_blank" rel="noopener" data-action="open-source" data-source-key="${escapeHtml(key)}" data-source-label="${escapeHtml(sourceName)}">
      ${label}
    </a>
  `;
}

function renderCurrentPage() {
  const view = document.getElementById("app-view");
  const renderers = {
    overview: renderOverview,
    scope: renderScope,
    plan: renderPlan,
    knowledge: renderKnowledge,
    papers: renderPapers,
    glossary: renderGlossary,
    whiteboards: renderDiagramGallery,
    sources: renderSources
  };
  view.innerHTML = `${renderers[state.page]()}${renderCommentsPanel()}${pageMetricFooter()}`;
}

function renderMeta() {
  document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
  document.getElementById("page-title").innerHTML = htmlText(content.meta.title);
  const navLabels = {
    overview: { zh: "总览", en: "Overview" },
    scope: { zh: "纲领", en: "Scope" },
    plan: { zh: "路线", en: "Plan" },
    knowledge: { zh: "知识库", en: "Knowledge" },
    papers: { zh: "真题", en: "Papers" },
    glossary: { zh: "术语", en: "Glossary" },
    whiteboards: { zh: "图解", en: "Diagrams" },
    sources: { zh: "资料库", en: "Sources" }
  };
  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    link.textContent = localize(navLabels[link.dataset.page]);
  });
  const searchLabel = document.querySelector(".search span");
  if (searchLabel) searchLabel.textContent = state.lang === "en" ? "Search" : "搜索";
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.placeholder = state.lang === "en" ? "ASR / DDD / quality attribute" : "ASR / DDD / 质量属性";
    if (searchInput.value !== state.query) searchInput.value = state.query;
  }
  document.querySelectorAll("[data-priority]").forEach((button) => {
    button.classList.toggle("active", button.dataset.priority === state.priority);
  });
  const railLabel = document.querySelector(".rail-filter > span");
  if (railLabel) railLabel.textContent = state.lang === "en" ? "Priority" : "优先级";
}

function renderAll() {
  closeTermPopover();
  setPage(state.page);
  renderMeta();
  renderCurrentPage();
  trackCurrentDetailView();
  refreshVisibleMetrics();
  loadComments(state.page);
  heartbeatOnline(state.lastOnlineHeartbeatPage !== state.page);
}

function setPageFromHash() {
  const next = window.location.hash.replace("#", "") || "overview";
  setPage(next);
  renderAll();
  trackPageView(state.page);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function trackQuestionOpen(question) {
  trackMetric("question_view", questionMetricKey(question), question.question_zh || question.canonical_question);
}

function relatedTermsFor(term) {
  const explicit = (term.related || [])
    .map((label) => glossaryTermByLabel(label))
    .filter(Boolean);
  const haystack = `${term.noteZh || ""}\n${term.noteEn || ""}`.toLocaleLowerCase();
  const currentKey = glossaryMetricKey(term);
  const inferred = haystack.trim() ? content.glossary
    .filter((candidate) => glossaryMetricKey(candidate) !== currentKey)
    .filter((candidate) => termVariantStrings(candidate).some((variant) => haystack.includes(variant.toLocaleLowerCase())))
    : [];
  const byKey = new Map();
  [...explicit, ...inferred].forEach((item) => {
    const key = glossaryMetricKey(item);
    if (key !== currentKey && !byKey.has(key)) byKey.set(key, item);
  });
  return [...byKey.values()].slice(0, 8);
}

function closeTermPopover() {
  const popover = document.querySelector(".term-popover");
  if (popover) popover.remove();
  state.activeTermKey = "";
}

function openTermPopover(trigger) {
  const key = trigger?.dataset?.termKey || "";
  const term = termByKey(key);
  if (!term) return;
  closeTermPopover();
  state.activeTermKey = key;
  const relatedTerms = relatedTermsFor(term);
  const note = textForLanguage(term.noteZh || "", term.noteEn || "");
  const popover = document.createElement("aside");
  popover.className = "term-popover";
  popover.setAttribute("role", "dialog");
  popover.setAttribute("aria-label", labelText({ zh: term.zh, en: term.en }));
  popover.innerHTML = `
    <div class="term-popover-head">
      <span>${escapeHtml(term.category || "term")}</span>
      <strong>${escapeHtml(textForLanguage(term.zh || term.en, term.en || term.zh, " / "))}</strong>
    </div>
    <p>${richText(note)}</p>
    ${relatedTerms.length ? `
      <div class="term-related">
        <span>${state.lang === "en" ? "Related" : "相关术语"}</span>
        ${relatedTerms.map((item) => `
          <button type="button" data-action="term-ref" data-term-key="${escapeHtml(glossaryMetricKey(item))}">
            ${escapeHtml(textForLanguage(item.zh || item.en, item.en || item.zh, " / "))}
          </button>
        `).join("")}
      </div>
    ` : ""}
  `;
  document.body.appendChild(popover);
  const margin = 14;
  popover.style.maxHeight = `${Math.max(220, window.innerHeight - margin * 2)}px`;
  popover.style.overflowY = "auto";
  const triggerRect = trigger.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  const maxLeft = window.scrollX + window.innerWidth - popoverRect.width - margin;
  const left = Math.max(window.scrollX + margin, Math.min(window.scrollX + triggerRect.left, maxLeft));
  let top = window.scrollY + triggerRect.bottom + 10;
  if (triggerRect.bottom + popoverRect.height + 20 > window.innerHeight && triggerRect.top > popoverRect.height + 20) {
    top = window.scrollY + triggerRect.top - popoverRect.height - 10;
  }
  const minTop = window.scrollY + margin;
  const maxTop = window.scrollY + window.innerHeight - popoverRect.height - margin;
  top = Math.max(minTop, Math.min(top, maxTop));
  popover.style.left = `${Math.round(left)}px`;
  popover.style.top = `${Math.round(top)}px`;
  trackMetric("glossary_view", key, labelText({ zh: term.zh, en: term.en }));
}

function revealQuestion(targetQuestionId, options = {}) {
  const item = [...document.querySelectorAll(".question-item")]
    .find((node) => node.dataset.questionId === String(targetQuestionId || ""));
  const question = questionById(targetQuestionId);
  if (!item || !question) return;
  if (!item.open) {
    item.dataset.programmaticOpen = "1";
    item.open = true;
  }
  item.classList.add("is-targeted");
  const summary = item.querySelector("summary");
  (summary || item).scrollIntoView({ block: "center", behavior: "smooth" });
  summary?.focus({ preventScroll: true });
  if (options.track) trackQuestionOpen(question);
  window.setTimeout(() => {
    if (state.suppressedQuestionToggleId === String(targetQuestionId || "")) {
      state.suppressedQuestionToggleId = "";
    }
  }, 0);
  window.setTimeout(() => item.classList.remove("is-targeted"), 1600);
}

function setupEvents() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-lang]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.lang = button.dataset.lang;
      renderAll();
    });
  });

  document.querySelectorAll("[data-priority]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-priority]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.priority = button.dataset.priority;
      state.cluster = "all";
      renderAll();
    });
  });

  document.getElementById("search-input").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderAll();
  });

  window.addEventListener("hashchange", setPageFromHash);

  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    link.addEventListener("click", () => {
      const page = link.dataset.page || "overview";
      trackMetric("page_click", pageMetricKey(page), page);
    });
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-check-key]")) {
      setChecklistDone(event.target.dataset.checkKey, event.target.checked, event.target.dataset.checkLabel || event.target.dataset.checkKey);
      const label = event.target.closest(".check-control")?.querySelector("span");
      if (label) label.textContent = event.target.checked
        ? (state.lang === "en" ? "Done" : "已读")
        : (state.lang === "en" ? "Todo" : "未读");
      return;
    }
    if (event.target.id === "checklist-import-input") {
      importChecklistFile(event.target.files?.[0]);
      event.target.value = "";
      return;
    }
    if (event.target.id === "cluster-select") {
      state.cluster = event.target.value;
      renderAll();
    }
    if (event.target.id === "glossary-select") {
      state.glossary = event.target.value;
      renderAll();
    }
    if (event.target.id === "source-select") {
      state.sourceGroup = event.target.value;
      renderAll();
    }
  });

  document.addEventListener("submit", (event) => {
    const form = event.target.closest?.('[data-action="submit-comment"]');
    if (!form) return;
    event.preventDefault();
    submitComment(form);
  });

  document.addEventListener("click", (event) => {
    const inlineTerm = event.target.closest('[data-action="term-ref"]');
    if (inlineTerm) {
      event.preventDefault();
      event.stopPropagation();
      openTermPopover(inlineTerm);
      return;
    }
    if (!event.target.closest(".term-popover")) closeTermPopover();
    if (event.target.closest(".check-control")) {
      event.stopPropagation();
      return;
    }
    const target = event.target.closest("[data-action]");
    if (!target) return;
    switch (target.dataset.action) {
      case "topic-group":
        state.topicGroup = target.dataset.topicGroup;
        state.selectedTopicId = "";
        state.lastTrackedTopic = "";
        trackMetric("filter_change", stableMetricKey("topic-group", state.topicGroup), state.topicGroup);
        renderAll();
        break;
      case "select-topic":
        state.selectedTopicId = target.dataset.topicId;
        state.lastTrackedTopic = "";
        renderAll();
        break;
      case "jump-topic": {
        const mindmapNode = target.closest(".mindmap-node");
        if (mindmapNode?.dataset.nodeId) {
          const node = mindmapNodes().find((item) => item.id === mindmapNode.dataset.nodeId);
          trackMetric("mindmap_node_click", mindmapNodeMetricKey(mindmapNode.dataset.nodeId), node ? labelText(node.title) : mindmapNode.dataset.nodeId);
        }
        state.selectedTopicId = target.dataset.topicId;
        const topic = content.topics.find((item) => item.id === state.selectedTopicId);
        state.topicGroup = topic?.group || "all";
        break;
      }
      case "mindmap-node": {
        const nodeId = target.dataset.nodeId;
        const node = mindmapNodes().find((item) => item.id === nodeId);
        trackMetric("mindmap_node_click", mindmapNodeMetricKey(nodeId), node ? labelText(node.title) : nodeId);
        break;
      }
      case "toggle-inline-question": {
        event.preventDefault();
        const body = target.parentElement.querySelector(`.mini-question-body[data-question-id="${target.dataset.questionId}"]`);
        if (!body) return;
        const wasHidden = body.hidden;
        body.hidden = !body.hidden;
        target.setAttribute("aria-expanded", String(wasHidden));
        target.classList.toggle("active", wasHidden);
        const question = questionById(target.dataset.questionId);
        if (wasHidden && question) trackQuestionOpen(question);
        break;
      }
      case "toggle-comments": {
        event.preventDefault();
        const page = target.dataset.commentsPage || state.page;
        state.commentsExpandedByPage[page] = !state.commentsExpandedByPage[page];
        refreshCommentsPanel(page);
        break;
      }
      case "open-whiteboard":
        event.preventDefault();
        trackMetric("whiteboard_open", stableMetricKey("whiteboard", target.dataset.boardId), target.dataset.boardId);
        openWhiteboard(target.dataset.boardId);
        break;
      case "open-diagram":
        event.preventDefault();
        trackMetric("diagram_open", stableMetricKey("diagram", target.dataset.diagramId), target.dataset.diagramId);
        openDiagram(target.dataset.diagramId);
        break;
      case "preview-source": {
        event.preventDefault();
        const source = currentSources()[Number(target.dataset.sourceIndex)];
        if (source) trackMetric("source_preview", sourceMetricKey(source), sourceLabel(source));
        previewSource(source);
        break;
      }
      case "open-source":
        trackMetric("source_open", target.dataset.sourceKey, target.dataset.sourceLabel || target.href, {
          href: target.href
        });
        break;
      case "open-reward":
        event.preventDefault();
        trackMetric("reward_open", "reward", "Reward modal");
        openReward();
        break;
      case "export-checklist":
        event.preventDefault();
        exportChecklist();
        break;
      case "import-checklist":
        event.preventDefault();
        document.getElementById("checklist-import-input")?.click();
        break;
      case "reward-provider":
        event.preventDefault();
        state.rewardProvider = rewardOptions[target.dataset.rewardProvider] ? target.dataset.rewardProvider : "wechat";
        openReward();
        break;
      case "glossary-term":
        trackMetric("glossary_view", target.dataset.termKey, target.textContent.replace(/\s+/g, " ").trim().slice(0, 120));
        break;
      case "close-modal":
        closeModal();
        break;
      case "zoom-board": {
        const zoomTarget = document.querySelector(".modal-zoom-target") || document.querySelector(".modal-image");
        const current = Number(zoomTarget?.dataset.zoom || "1");
        const next = Math.min(3, Math.max(0.75, current + Number(target.dataset.delta)));
        if (zoomTarget) {
          zoomTarget.dataset.zoom = String(next);
          zoomTarget.style.width = `${Math.round(next * 100)}%`;
        }
        break;
      }
    }
  });

  document.addEventListener("toggle", (event) => {
    const item = event.target.closest?.(".question-item");
    if (!item || !item.open) return;
    if (item.dataset.programmaticOpen === "1") {
      delete item.dataset.programmaticOpen;
      return;
    }
    if (state.suppressedQuestionToggleId === item.dataset.questionId) {
      state.suppressedQuestionToggleId = "";
      return;
    }
    const question = questionById(item.dataset.questionId);
    if (question) {
      state.openQuestionId = questionId(question);
      trackQuestionOpen(question);
    }
  }, true);

  window.addEventListener("scroll", closeTermPopover, { passive: true });
  window.addEventListener("resize", closeTermPopover);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeTermPopover();
      closeModal();
    }
  });
}

function openModal(markup) {
  const root = document.getElementById("modal-root");
  root.innerHTML = markup;
  root.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  const root = document.getElementById("modal-root");
  root.hidden = true;
  root.innerHTML = "";
  document.body.classList.remove("modal-open");
}

function openWhiteboard(id) {
  const board = content.whiteboards.find((item) => item.id === id);
  if (!board) return;
  openModal(`
    <div class="modal-backdrop" data-action="close-modal"></div>
    <section class="modal-panel wide" role="dialog" aria-modal="true" aria-label="${escapeHtml(labelText(board.title))}">
      <header class="modal-head">
        <div>
          <p class="section-kicker">${state.lang === "en" ? "Archived Board" : "归档画板"}</p>
          <h2>${htmlText(board.title)}</h2>
        </div>
        <div class="modal-actions">
          <button type="button" data-action="zoom-board" data-delta="-0.25">−</button>
          <button type="button" data-action="zoom-board" data-delta="0.25">+</button>
          <button type="button" data-action="close-modal">${state.lang === "en" ? "Close" : "关闭"}</button>
        </div>
      </header>
      <div class="modal-scroll">
        <img class="modal-image modal-zoom-target" data-zoom="1" src="${escapeHtml(board.src)}" alt="${escapeHtml(labelText(board.title))}" />
      </div>
    </section>
  `);
}

function openDiagram(id) {
  const diagram = diagramById(id);
  if (!diagram) return;
  openModal(`
    <div class="modal-backdrop" data-action="close-modal"></div>
    <section class="modal-panel wide" role="dialog" aria-modal="true" aria-label="${escapeHtml(labelText(diagram.title))}">
      <header class="modal-head">
        <div>
          <p class="section-kicker">${state.lang === "en" ? "Diagram" : "图解"}</p>
          <h2>${htmlText(diagram.title)}</h2>
          <p>${htmlText(diagram.note)}</p>
        </div>
        <div class="modal-actions">
          <button type="button" data-action="zoom-board" data-delta="-0.25">−</button>
          <button type="button" data-action="zoom-board" data-delta="0.25">+</button>
          <button type="button" data-action="close-modal">${state.lang === "en" ? "Close" : "关闭"}</button>
        </div>
      </header>
      <div class="modal-scroll">
        <img class="modal-image modal-zoom-target" data-zoom="1" src="${escapeHtml(diagramSource(diagram))}" alt="${escapeHtml(labelText(diagram.title))}" />
      </div>
    </section>
  `);
}

function openReward() {
  const providerKey = rewardOptions[state.rewardProvider] ? state.rewardProvider : "wechat";
  const provider = rewardOptions[providerKey];
  openModal(`
    <div class="modal-backdrop" data-action="close-modal"></div>
    <section class="modal-panel reward-modal" role="dialog" aria-modal="true" aria-label="${state.lang === "en" ? "Reward QR code" : "打赏收款码"}">
      <header class="modal-head">
        <div>
          <p class="section-kicker">${state.lang === "en" ? "Tiny Support" : "一点点支持"}</p>
          <h2>${state.lang === "en" ? "Help reimburse a little Codex?" : "你想帮我报销一点Codex吗？"}</h2>
        </div>
        <button type="button" data-action="close-modal">${state.lang === "en" ? "Close" : "关闭"}</button>
      </header>
      <div class="reward-body">
        <div class="reward-copy">
          <p>${state.lang === "en"
            ? "Thank you for even opening this. A tiny tip helps offset the Codex bill and buys future review notes a little more runway. ✨"
            : "谢谢你点开这个小角落！一点点投喂都会变成 Codex 账单里的回血，也会变成下一次更认真整理资料的动力。✨"}</p>
          <p>${state.lang === "en"
            ? "No pressure at all. If this site saved you time before the exam, that is already a very good ending. 🙌"
            : "完全不强求，真的。只要这份资料帮你少熬一点夜、多拿一点分，就已经很值得了。🙌"}</p>
        </div>
        <div class="reward-card">
          <div class="reward-tabs" role="tablist" aria-label="${state.lang === "en" ? "Payment method" : "收款方式"}">
            ${Object.entries(rewardOptions).map(([key, item]) => `
              <button class="${key === providerKey ? "active" : ""}" type="button" data-action="reward-provider" data-reward-provider="${escapeHtml(key)}">
                ${escapeHtml(localize(item.label))}
              </button>
            `).join("")}
          </div>
          <figure>
            <img class="reward-qr" src="${escapeHtml(provider.src)}" alt="${escapeHtml(localize(provider.label))}" />
            <figcaption>${state.lang === "en"
              ? `Scan with ${escapeHtml(localize(provider.label))}. Thank you, genuinely. ☕️`
              : `使用${escapeHtml(localize(provider.label))}扫码。谢谢你，真的会很开心。☕️`}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  `);
}

function normalizeDeployPath(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  if (window.location.protocol !== "file:" && !window.location.pathname.includes("/site/")) {
    return path.replace(/^(\.\.\/)+/, "");
  }
  return path;
}

function normalizePreviewPath(source) {
  const path = source?.preview_path || (source?.extracted_path ? `../${source.extracted_path}` : "");
  if (!path) return "";
  if (path.startsWith("../") || path.startsWith("http")) return normalizeDeployPath(path);
  if (path.startsWith("data/")) return normalizeDeployPath(`../${path}`);
  return path;
}

async function previewSource(source) {
  if (!source) return;
  openModal(`
    <div class="modal-backdrop" data-action="close-modal"></div>
    <section class="modal-panel" role="dialog" aria-modal="true" aria-label="${escapeHtml(sourceLabel(source))}">
      <header class="modal-head">
        <div>
          <p class="section-kicker">Source Preview</p>
          <h2>${escapeHtml(sourceLabel(source))}</h2>
        </div>
        <button type="button" data-action="close-modal">${state.lang === "en" ? "Close" : "关闭"}</button>
      </header>
      <pre class="source-preview">${state.lang === "en" ? "Loading local preview..." : "正在读取本机抽取内容..."}</pre>
    </section>
  `);
  const pre = document.querySelector(".source-preview");
  const path = normalizePreviewPath(source);
  if (!path) {
    pre.textContent = state.lang === "en" ? "No extracted preview path is available for this source." : "这条资料没有可预览的抽取路径。";
    return;
  }
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await sourceTextFromResponse(res, path);
    pre.textContent = text.slice(0, 18000) || (state.lang === "en" ? "Preview is empty." : "预览内容为空。");
  } catch (error) {
    pre.textContent = sourceFallbackText(source, error);
  }
}

function sourceFallbackText(source, error) {
  const lines = state.lang === "en"
    ? [
      `Local extracted preview is unavailable here (${error.message}).`,
      "Use the source action on this row to open the original material if it is available here.",
      source.summary ? `Summary: ${source.summary}` : "",
      source.path ? `Local path: ${source.path}` : "",
      source.url ? `Source URL: ${source.url}` : ""
    ]
    : [
      `这里无法读取本机抽取预览（${error.message}）。`,
      "可使用本行的源文件操作打开当前可用的原始材料。",
      source.summary ? `摘要：${source.summary}` : "",
      source.path ? `本机路径：${source.path}` : "",
      source.url ? `外链：${source.url}` : ""
    ];
  return lines.filter(Boolean).join("\n\n");
}

async function sourceTextFromResponse(res, path) {
  if (path.endsWith(".json")) {
    const data = await res.json();
    if (Array.isArray(data.pages)) {
      return data.pages.map((page) => `# Page ${page.page}\n${page.text || ""}`).join("\n\n");
    }
    return JSON.stringify(data, null, 2);
  }
  const raw = await res.text();
  if (path.endsWith(".html")) {
    const doc = new DOMParser().parseFromString(raw, "text/html");
    doc.querySelectorAll("script, style, nav, footer").forEach((node) => node.remove());
    const body = doc.querySelector(".post-body") || doc.body;
    return body.textContent.replace(/\n{3,}/g, "\n\n").trim();
  }
  return raw;
}

async function boot() {
  state.questions = await loadJson("data/questions.json", window.reviewQuestions || [], Array.isArray);
  state.sources = await loadJson("data/sources.json", window.reviewSources || [], Array.isArray);
  loadChecklist();
  state.page = pages.has(window.location.hash.replace("#", "")) ? window.location.hash.replace("#", "") : "overview";
  setupEvents();
  renderAll();
  startOnlineHeartbeat();
  trackMetric("site_visit", "site", "Software Architecture Review", {
    path: window.location.pathname
  });
  trackPageView(state.page);
}

boot();
