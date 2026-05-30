#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

global.window = {};
await import(pathToFileUrl(path.join(repoRoot, "site/content.js")));
const content = global.window.reviewContent;
const questions = JSON.parse(fs.readFileSync(path.join(repoRoot, "site/data/questions.json"), "utf8"));

const findings = [];

function pathToFileUrl(filePath) {
  return new URL(`file://${filePath}`).href;
}

function splitNonEmpty(value, separator) {
  return String(value || "")
    .split(separator)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function explicitPointCount(text, lang) {
  const normalized = String(text || "")
    .replace(/\r/g, "\n")
    .replace(/\s+/g, " ")
    .trim();
  if (!normalized) return 0;

  const newlinePoints = splitNonEmpty(String(text || ""), /\n+/);
  if (newlinePoints.length >= 2) return newlinePoints.length;

  if (lang === "zh") {
    const numbered = normalized.match(/(?:^|[。；;：:\s])(?:第[一二三四五六七八九十]+|[一二三四五六七八九十][、.]|[0-9]+[、.])(?=[，,:：\s]|是)/g);
    if (numbered && numbered.length >= 2) return numbered.length;
    const ordinalWords = normalized.match(/(?:首先|其次|再次|然后|最后|第一|第二|第三|第四|第五|第六|第七|第八|第九|第十)[，,:：]/g);
    if (ordinalWords && ordinalWords.length >= 2) return ordinalWords.length;
    const semicolonParts = splitNonEmpty(normalized, /；/);
    if (semicolonParts.length >= 3) return semicolonParts.length;
    const sentenceParts = splitNonEmpty(normalized, /。/);
    if (sentenceParts.length >= 4 && sentenceParts.every((part) => part.length >= 8)) return sentenceParts.length;
    return 1;
  }

  const numbered = normalized.match(/(?:^|[.;:\s])(?:First|Second|Third|Fourth|Fifth|Sixth|Seventh|Eighth|Ninth|Tenth|Finally|[0-9]+[.)])(?:,|:|\s)/gi);
  if (numbered && numbered.length >= 2) return numbered.length;
  const semicolonParts = splitNonEmpty(normalized, /;/);
  if (semicolonParts.length >= 3) return semicolonParts.length;
  const sentenceParts = splitNonEmpty(normalized, /\.\s+/);
  if (sentenceParts.length >= 4 && sentenceParts.every((part) => part.length >= 8)) return sentenceParts.length;
  return 1;
}

function addFinding(kind, location, zh, en, extra = {}) {
  const zhCount = explicitPointCount(zh, "zh");
  const enCount = explicitPointCount(en, "en");
  const isHighRisk = Math.abs(zhCount - enCount) >= 2 || (zhCount === 1 && enCount >= 3) || (enCount === 1 && zhCount >= 3);
  const isMediumRisk = zhCount !== enCount && Math.max(zhCount, enCount) >= 3;
  if (!isHighRisk && !isMediumRisk) return;
  findings.push({
    kind,
    location,
    zhCount,
    enCount,
    risk: isHighRisk ? "high" : "medium",
    zh: String(zh || "").slice(0, 420),
    en: String(en || "").slice(0, 420),
    ...extra
  });
}

function walkLocalized(node, location) {
  if (Array.isArray(node)) {
    node.forEach((item, index) => walkLocalized(item, `${location}[${index}]`));
    return;
  }
  if (!node || typeof node !== "object") return;
  if (typeof node.zh === "string" && typeof node.en === "string") {
    addFinding("localized", location, node.zh, node.en);
  }
  Object.entries(node).forEach(([key, value]) => walkLocalized(value, `${location}.${key}`));
}

walkLocalized(content, "content");

for (const question of questions) {
  const base = `questions.${question.id}`;
  for (const [zhKey, enKey] of [
    ["sample_answer_zh", "sample_answer_en"],
    ["answer_zh", "answer_en"],
    ["priority_reason_zh", "priority_reason_en"],
    ["visual_hint_zh", "visual_hint_en"],
    ["source_audit_zh", "source_audit_en"]
  ]) {
    if (typeof question[zhKey] === "string" && typeof question[enKey] === "string") {
      addFinding("question-string", `${base}.${zhKey}/${enKey}`, question[zhKey], question[enKey]);
    }
  }
  for (const [zhKey, enKey] of [
    ["answer_points_zh", "answer_points_en"],
    ["drawing_steps_zh", "drawing_steps_en"]
  ]) {
    if (Array.isArray(question[zhKey]) || Array.isArray(question[enKey])) {
      const zhLength = Array.isArray(question[zhKey]) ? question[zhKey].length : 0;
      const enLength = Array.isArray(question[enKey]) ? question[enKey].length : 0;
      if (zhLength !== enLength) {
        findings.push({
          kind: "question-array",
          location: `${base}.${zhKey}/${enKey}`,
          zhCount: zhLength,
          enCount: enLength,
          risk: "high",
          zh: Array.isArray(question[zhKey]) ? question[zhKey].join(" / ").slice(0, 420) : "",
          en: Array.isArray(question[enKey]) ? question[enKey].join(" / ").slice(0, 420) : ""
        });
      }
    }
  }
}

findings.sort((a, b) => {
  const riskOrder = { high: 0, medium: 1 };
  return riskOrder[a.risk] - riskOrder[b.risk] || a.location.localeCompare(b.location);
});

const high = findings.filter((item) => item.risk === "high").length;
const medium = findings.filter((item) => item.risk === "medium").length;
console.log(JSON.stringify({ high, medium, findings }, null, 2));
process.exit(high ? 1 : 0);
