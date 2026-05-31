import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const baseUrl = process.env.KANGAROO_BASE_URL || "http://127.0.0.1:18080/site/index.html";
const executablePath = process.env.PLAYWRIGHT_CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const headless = process.env.KANGAROO_HEADLESS !== "0";

const anchorSelectors = [
  "[data-scroll-key]",
  ".question-item[data-question-id]",
  ".mindmap-node[data-node-id]",
  ".route-step",
  ".priority-lane",
  ".topic-index button[data-topic-id]",
  ".lecture-note",
  ".deep-dive-row",
  ".diagram-gallery-row",
  ".diagram-card",
  ".term-row[data-term-key]",
  ".term-graph-lane",
  ".source-row"
];

function urlFor(hash) {
  return `${baseUrl.split("#")[0]}#${hash}`;
}

async function pageAnchor(page) {
  return page.evaluate((selectors) => {
    const viewportY = Math.round(window.innerHeight * 0.46);
    const anchorY = window.scrollY + viewportY;
    let best = null;
    let bestDistance = Number.POSITIVE_INFINITY;
    for (const selector of selectors) {
      const nodes = [...document.querySelectorAll(selector)];
      nodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect();
        if (!rect.height || rect.bottom < 0 || rect.top > window.innerHeight) return;
        const top = window.scrollY + rect.top;
        const bottom = top + rect.height;
        const distance = anchorY < top ? top - anchorY : anchorY > bottom ? anchorY - bottom : 0;
        if (distance < bestDistance || (distance === bestDistance && rect.height < (best?.height || Number.POSITIVE_INFINITY))) {
          bestDistance = distance;
          best = {
            selector,
            index,
            key: node.dataset.scrollKey || node.dataset.questionId || node.dataset.nodeId || node.dataset.topicId || node.dataset.termKey || `${selector}:${index}`,
            text: node.textContent.replace(/\s+/g, " ").trim().slice(0, 120),
            y: Math.round(window.scrollY),
            ratio: window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight),
            height: Math.round(rect.height)
          };
        }
      });
    }
    return best;
  }, anchorSelectors);
}

async function switchLanguage(page, lang) {
  await page.click(`button[data-lang="${lang}"]`);
  await page.waitForTimeout(850);
}

async function scrollSelectorToCenter(page, selector) {
  await page.locator(selector).first().evaluate((node) => node.scrollIntoView({ block: "center", behavior: "instant" }));
  await page.waitForTimeout(250);
}

async function runCase(browser, testCase) {
  const page = await browser.newPage({ viewport: testCase.viewport || { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(urlFor(testCase.hash), { waitUntil: "domcontentloaded" });
  await page.waitForSelector(testCase.waitFor);
  await page.waitForTimeout(600);
  if (testCase.setup) await testCase.setup(page);
  if (testCase.target) await scrollSelectorToCenter(page, testCase.target);
  const before = await pageAnchor(page);
  const appSnapshot = await page.evaluate(() => window.captureRelativeScroll?.() || null);
  await switchLanguage(page, testCase.lang);
  const after = await pageAnchor(page);
  const appAnchorRestored = await page.evaluate((key) => {
    if (!key) return false;
    const node = document.querySelector(`[data-scroll-key="${CSS.escape(key)}"]`);
    if (!node) return false;
    const viewportY = Math.round(window.innerHeight * 0.46);
    const rect = node.getBoundingClientRect();
    return rect.top <= viewportY && rect.bottom >= viewportY;
  }, appSnapshot?.anchor?.key || "");
  const beforeOpen = await page.locator(".question-item[open]").evaluateAll((nodes) => nodes.map((node) => node.dataset.questionId));
  const result = {
    name: testCase.name,
    hash: testCase.hash,
    lang: testCase.lang,
    before,
    after,
    appAnchor: appSnapshot?.anchor || null,
    appAnchorRestored,
    sameAnchor: Boolean(after && (appSnapshot?.anchor?.key ? appAnchorRestored || after.key === appSnapshot.anchor.key : before?.key === after.key)),
    openQuestions: beforeOpen,
    errors
  };
  await page.close();
  return result;
}

const tests = [
  {
    name: "papers-default-collapsed-items",
    hash: "papers",
    waitFor: ".question-item",
    target: '.question-item[data-question-id="q_microservices_vs_soa"]',
    lang: "zh"
  },
  {
    name: "papers-multiple-open",
    hash: "papers",
    waitFor: ".question-item",
    lang: "en",
    setup: async (page) => {
      for (const id of ["q_quality_scenarios", "q_add_process", "q_microservices_vs_soa"]) {
        await page.locator(`.question-item[data-question-id="${id}"] summary`).click();
        await page.waitForTimeout(100);
      }
      await scrollSelectorToCenter(page, '.question-item[data-question-id="q_add_process"] .drawing-guide');
    }
  },
  {
    name: "mock-exam-answer-open",
    hash: "mock",
    waitFor: ".mock-question",
    lang: "en",
    setup: async (page) => {
      await page.locator('.mock-answer[data-mock-question-id="mock-q12"] > summary').click();
      await page.waitForSelector('.mock-answer[data-mock-question-id="mock-q12"][open] .mock-answer-block');
      await scrollSelectorToCenter(page, '.mock-answer[data-mock-question-id="mock-q12"] .mock-answer-block');
    }
  },
  {
    name: "scope-mindmap",
    hash: "scope",
    waitFor: ".mindmap-node",
    target: '.mindmap-node[data-node-id="mind-add"]',
    lang: "en"
  },
  {
    name: "plan-route",
    hash: "plan",
    waitFor: ".route-step",
    target: ".priority-lane:nth-of-type(2)",
    lang: "zh"
  },
  {
    name: "knowledge-topic-detail",
    hash: "knowledge",
    waitFor: ".topic-detail",
    lang: "en",
    setup: async (page) => {
      await page.click('button[data-topic-group="modern"]');
      await page.click('button[data-action="select-topic"][data-topic-id="enterprise"]');
      await page.waitForSelector(".lecture-note");
      await scrollSelectorToCenter(page, ".deep-dive-row");
    }
  },
  {
    name: "whiteboards-diagram-gallery",
    hash: "whiteboards",
    waitFor: ".diagram-gallery-row",
    target: ".diagram-gallery-row:nth-of-type(5)",
    lang: "zh"
  },
  {
    name: "glossary-terms",
    hash: "glossary",
    waitFor: ".term-row",
    target: ".term-row:nth-of-type(12)",
    lang: "en"
  },
  {
    name: "sources-list",
    hash: "sources",
    waitFor: ".source-row",
    target: ".source-row:nth-of-type(10)",
    lang: "zh"
  }
];

const browser = await chromium.launch({ headless, executablePath });
try {
  const results = [];
  for (const testCase of tests) {
    results.push(await runCase(browser, testCase));
  }
  console.log(JSON.stringify({ baseUrl, results }, null, 2));
  const failures = results.filter((item) => !item.sameAnchor || item.errors.length);
  if (failures.length) process.exitCode = 1;
} finally {
  await browser.close();
}
