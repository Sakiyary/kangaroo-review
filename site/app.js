const state = {
  lang: "mix",
  priority: "all",
  query: "",
  cluster: "all",
  glossary: "all",
  questions: [],
  sources: []
};

const content = window.reviewContent;

const t = (value) => {
  if (!value || typeof value === "string") return value || "";
  if (state.lang === "zh") return value.zh || value.en || "";
  if (state.lang === "en") return value.en || value.zh || "";
  const zh = value.zh || "";
  const en = value.en || "";
  if (!zh) return en;
  if (!en || zh === en) return zh;
  return `${zh}\n${en}`;
};

const htmlText = (value) => t(value).split("\n").map((line) => `<span>${escapeHtml(line)}</span>`).join("");

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[char]));
}

function includesQuery(...values) {
  const q = state.query.trim().toLowerCase();
  if (!q) return true;
  return values.join(" ").toLowerCase().includes(q);
}

async function loadJson(path, fallback) {
  if (window.location.protocol === "file:") return fallback;
  try {
    const res = await fetch(path);
    if (!res.ok) return fallback;
    return await res.json();
  } catch {
    return fallback;
  }
}

function renderMeta() {
  document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
  document.getElementById("page-title").innerHTML = htmlText(content.meta.title);
  document.querySelector("[data-i18n='dashboardTitle']").textContent =
    state.lang === "en" ? "Secure the basics, then attack design questions" : "先保底，再冲设计题";
  document.querySelector("[data-i18n='dashboardCopy']").textContent =
    state.lang === "en"
      ? "This review is organized by review-class priority: fundamentals and quality attributes stabilize short-answer points, while ADD, DDD, microservices, and enterprise architecture support design-analysis and advanced points."
      : "这份资料按复习课优先级组织：基础概念和质量属性负责拿稳简答题，ADD/DDD/微服务/企业架构负责设计分析题和进阶分。";

  document.getElementById("exam-facts").innerHTML = content.meta.exam.map((item, index) => `
    <article class="fact-card">
      <b>${String(index + 1).padStart(2, "0")}</b>
      <p>${htmlText(item)}</p>
    </article>
  `).join("");

  document.getElementById("evidence-strip").innerHTML = content.meta.evidence.map((item) => `
    <div class="evidence-pill">${htmlText(item)}</div>
  `).join("");
}

function renderPriorities() {
  const nodes = content.priorities
    .filter((group) => state.priority === "all" || group.level === state.priority)
    .filter((group) => includesQuery(group.level, group.weight, t(group.title), t(group.summary), group.items.map((item) => `${item.zh} ${item.en}`).join(" ")))
    .map((group) => `
      <article class="priority-card ${group.level.toLowerCase()}">
        <div class="card-head">
          <span class="badge">${group.level}</span>
          <span class="weight">${escapeHtml(group.weight)}</span>
        </div>
        <h3>${htmlText(group.title)}</h3>
        <p>${htmlText(group.summary)}</p>
        <ul>
          ${group.items.map((item) => `<li><a href="#topic-${item.topicId}">${htmlText(item)}</a></li>`).join("")}
        </ul>
      </article>
    `);
  document.getElementById("priority-path").innerHTML = nodes.join("");
}

function renderTopics() {
  const topics = content.topics
    .filter((topic) => state.priority === "all" || topic.priority === state.priority)
    .filter((topic) => includesQuery(topic.id, topic.priority, t(topic.title), t(topic.takeaway), t(topic.answerFrame), topic.bullets.map((item) => `${item.zh} ${item.en}`).join(" ")))
    .map((topic) => `
      <article class="topic-card" id="topic-${topic.id}" data-priority="${topic.priority}">
        <div class="card-head">
          <span class="badge">${topic.priority}</span>
          <span class="source-count">${topic.sources.length} sources</span>
        </div>
        <h3>${htmlText(topic.title)}</h3>
        <p class="takeaway">${htmlText(topic.takeaway)}</p>
        <div class="answer-frame">${htmlText(topic.answerFrame)}</div>
        <ul>
          ${topic.bullets.map((item) => `<li>${htmlText(item)}</li>`).join("")}
        </ul>
        <footer>${topic.sources.map((source) => `<span>${escapeHtml(source)}</span>`).join("")}</footer>
      </article>
    `);
  document.getElementById("topic-grid").innerHTML = topics.join("");
}

function renderQuestions() {
  const select = document.getElementById("cluster-select");
  if (select.options.length <= 1) {
    [...new Set(state.questions.map((q) => q.cluster))].sort().forEach((cluster) => {
      const option = document.createElement("option");
      option.value = cluster;
      option.textContent = cluster;
      select.appendChild(option);
    });
  }

  const questions = state.questions
    .filter((question) => state.cluster === "all" || question.cluster === state.cluster)
    .filter((question) => includesQuery(question.cluster, question.canonical_question, question.likely_answer_pattern, (question.recurring_terms || []).join(" ")))
    .slice(0, 36)
    .map((question) => `
      <article class="question-card">
        <div class="card-head">
          <span class="badge muted">${escapeHtml(question.cluster)}</span>
          <span>${(question.appearances || []).length} hits</span>
        </div>
        <h3>${escapeHtml(question.canonical_question)}</h3>
        <p>${escapeHtml(question.likely_answer_pattern)}</p>
        <div class="term-row">${(question.recurring_terms || []).slice(0, 8).map((term) => `<span>${escapeHtml(term)}</span>`).join("")}</div>
      </article>
    `);
  document.getElementById("question-grid").innerHTML = questions.join("");
}

function renderGlossary() {
  const select = document.getElementById("glossary-select");
  if (select.options.length <= 1) {
    [...new Set(content.glossary.map((item) => item.category))].sort().forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      select.appendChild(option);
    });
  }

  const items = content.glossary
    .filter((item) => state.glossary === "all" || item.category === state.glossary)
    .filter((item) => includesQuery(item.category, item.zh, item.en, item.noteZh, item.noteEn))
    .map((item) => `
      <article class="glossary-card">
        <span>${escapeHtml(item.category)}</span>
        <h3>${state.lang === "en" ? escapeHtml(item.en) : escapeHtml(item.zh)}</h3>
        <b>${state.lang === "en" ? escapeHtml(item.zh) : escapeHtml(item.en)}</b>
        <p>${state.lang === "en" ? escapeHtml(item.noteEn) : state.lang === "zh" ? escapeHtml(item.noteZh) : `${escapeHtml(item.noteZh)} / ${escapeHtml(item.noteEn)}`}</p>
      </article>
    `);
  document.getElementById("glossary-grid").innerHTML = items.join("");
}

function renderSources() {
  document.getElementById("asset-strip").innerHTML = content.assets.map((asset) => `
    <figure class="asset-card">
      <img src="${asset.src}" alt="${escapeHtml(t(asset.title))}" loading="lazy" />
      <figcaption>
        <b>${htmlText(asset.title)}</b>
        <span>${htmlText(asset.note)}</span>
      </figcaption>
    </figure>
  `).join("");

  const rows = state.sources
    .filter((source) => includesQuery(source.path, source.kind, source.extraction, source.needs_ocr ? "ocr" : "text"))
    .map((source) => `
      <div class="source-row">
        <span>${escapeHtml(source.kind)}</span>
        <b>${escapeHtml(source.path)}</b>
        <em>${escapeHtml(source.extraction || "unknown")}${source.needs_ocr ? " · OCR" : ""}</em>
        <small>${source.page_count ? `${source.page_count} pages` : ""}${source.text_chars ? ` · ${source.text_chars} chars` : ""}</small>
      </div>
    `);
  document.getElementById("source-table").innerHTML = rows.join("");
}

function renderAll() {
  renderMeta();
  renderPriorities();
  renderTopics();
  renderQuestions();
  renderGlossary();
  renderSources();
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
      renderAll();
    });
  });

  document.getElementById("search-input").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderAll();
  });

  document.getElementById("cluster-select").addEventListener("change", (event) => {
    state.cluster = event.target.value;
    renderQuestions();
  });

  document.getElementById("glossary-select").addEventListener("change", (event) => {
    state.glossary = event.target.value;
    renderGlossary();
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  document.querySelectorAll(".band").forEach((section) => observer.observe(section));
}

async function boot() {
  state.questions = await loadJson("data/questions.json", window.reviewQuestions || []);
  state.sources = await loadJson("data/sources.json", window.reviewSources || []);
  setupEvents();
  renderAll();
}

boot();
