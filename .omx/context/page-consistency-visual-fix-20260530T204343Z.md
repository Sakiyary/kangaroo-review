# Page Consistency Visual Fix - 2026-05-30T20:43:43Z

## Task Statement

Audit and fix cross-page inconsistencies and visible UI bugs without breaking recent constraints. The current high-priority user-visible bugs are:

- The metric badge in the past-paper question header can become too wide on mobile, compressing the question text and causing overflow inside the pale green question card.
- Diagram page group headings such as "P0 核心图解 / P0 Core Diagrams" are wrapped in visually heavy boxes and look noisy.
- Each page should be visually checked with screenshots after fixes.
- After verification, persist Ralph context, commit, push, and deploy.

## Desired Outcome

- Mobile and desktop pages have no obvious overflow or awkward boxed labels.
- Metric badges remain readable without stealing width from titles.
- Diagram gallery group headers read as clean section headers rather than framed cards.
- Existing checklist, metrics, comments, online counts, glossary popovers, related-question expansion, source previews, and hidden metrics page keep working.
- The public study UI does not expose internal audit/change/trust enum wording.

## Known Facts / Evidence

- Three subagents already reviewed content/data/UI consistency.
- Confirmed data counts: 15 topics, 40 question clusters, 125 glossary terms, 51 sources, 23 diagrams, 4 archived boards.
- Already fixed in this session before this snapshot: source trust labels are friendly, README counts updated, P0 questions no longer point to P2 ATAM, mobile glossary popover got viewport clamping, smoke threshold raised to 40 questions.
- `node --check`, `jq empty`, `node tools/ground_question_answers.mjs --check`, and `git diff --check` passed after those fixes.
- Playwright smoke passed once after escalation with desktop/mobile no horizontal overflow, 40 questions, 23 diagrams, and 46 diagram assets loaded.

## Constraints

- Complete review recording and review-class slides remain the highest content ground truth.
- Public study pages should not show internal audit/change/prompt/trust enum wording.
- Do not regress checklist/metrics behavior; if new interactions change, metrics should remain compatible.
- Hidden metrics page remains hidden.
- `raw/`, `slides/`, and `data/` are served on deployment, but heavy/private source dirs are excluded from public repo.
- `kangaroo-2` private assignment must never be added as source/public material.
- Visible page name should be 图解/Diagrams even if the route key remains `whiteboards`.

## Unknowns / Open Questions

- Whether further subtle visual bugs appear only in screenshots, especially on mobile.
- Whether the deployment server has any local state changes that require preserving.

## Likely Codebase Touchpoints

- `site/styles.css`
- `site/app.js`
- `site/content.js`
- `site/data/questions.json`
- `site/data/questions.js`
- `tools/smoke-site.mjs`
- `README.md`
- `.omx/context/`
