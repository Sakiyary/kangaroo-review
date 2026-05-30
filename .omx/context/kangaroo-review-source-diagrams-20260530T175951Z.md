# Kangaroo Review Source Library And Diagram Expansion

## Task Statement

Continue the Kangaroo review-site iteration under Ralph. Clean empty/duplicate source-library entries, rename and repurpose the current whiteboards page so it hosts the site-owned grounded diagrams rather than Feishu/AI-outline boards, add more slide-grounded diagrams where useful, and make knowledge explanations closer to the diagram text and logic.

## Desired Outcome

- Source library removes blank/useless sources such as `考题手敲中文版.rtf` and reduces obvious duplicate entries.
- The current whiteboards page is renamed/reframed as a diagram gallery or similar study-aid page, prioritizing locally redrawn diagrams.
- Existing Feishu smart-note / AI-outline boards are not treated as primary visual study material.
- Additional diagrams are selected only when they can be grounded in trusted review slides or teacher slides.
- Diagram cards are connected to topic explanations so each visual's text is explained in the relevant knowledge detail.
- Rendered diagrams and the page are visually verified after changes.

## Known Facts / Evidence

- Previous ground-truth snapshot: `.omx/context/review-site-groundtruth-refactor-20260530T105439Z.md`.
- Highest source priority remains complete review recording + complete review minutes + review slides.
- Trusted existing diagrams include `site/assets/diagrams/add-roadmap.svg` and `site/assets/diagrams/architecture-design-process.svg`; recent smoke checks also verified the current diagram asset set loads successfully.
- The site currently has `site/content.js`, `site/app.js`, `site/styles.css`, `site/data/sources.*`, and `site/assets/diagrams/*.svg` as likely touchpoints.
- Public GitHub should still exclude raw/slides, but deployed site may mirror source files.

## Constraints

- Do not add `/Users/bytedance/Codes/Self/kangaroo-2` to the source library.
- Avoid hallucinated visuals: each new diagram must be grounded by slides/OCR text and should be checked after rendering.
- User explicitly allows skipping Ralph's final external architect verification; local verification and Ralph state completion audit remain required.
- Use apply_patch for manual edits.
- Keep frontend mobile readability and no-horizontal-overflow guarantees.

## Unknowns / Open Questions

- Exact duplicate source criteria need local inspection: identical paths are safe to remove; near-duplicates should be merged only with clear evidence.
- Need inspect existing whiteboard data and route labels before deciding final page name.
- Need identify which additional diagram candidates have enough slide grounding and are worth adding this iteration.

## Likely Codebase Touchpoints

- `site/content.js`
- `site/app.js`
- `site/styles.css`
- `site/data/sources.json`
- `site/data/sources.js`
- `site/assets/diagrams/*.svg`
- `tools/smoke-site.mjs`
- `README.md`
