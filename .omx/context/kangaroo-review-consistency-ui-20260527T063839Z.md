# Kangaroo Review Consistency/UI Pass

## Task Statement

Use `$ralph` to review, correct, and verify the current review website after multiple source-library additions and UI refactors.

## Desired Outcome

- The published website stays aligned with the 2026 NJU Software Institute graduate course "Software Architecture" review-class outline.
- Material from adjacent course "Software System Design" is clearly treated as auxiliary and excluded/downgraded when outside this course's review focus.
- The homepage title explicitly says the site is for the 2026 NJU Software Institute graduate Software Architecture course and is not guaranteed to fit future offerings or 2026 undergraduate Software System Design.
- Homepage `evidence-band` no longer reads like a changelog and instead presents consolidated evidence/focus.
- Route-page P0/P1/P2 priority blocks are visually cleaner than the current heavy black background.
- UI regressions and data-count regressions are checked on desktop/mobile.

## Known Facts/Evidence

- Current app files: `site/index.html`, `site/app.js`, `site/content.js`, `site/styles.css`, `site/data/questions.json`, `site/data/sources.json`.
- Existing smoke scripts: `tools/smoke-site.mjs`, `tools/smoke-metrics.mjs`.
- Current data claims from README: 15 topics, 39 question clusters, 79 glossary items, 52 sources, 11 diagrams, 4 whiteboards.
- Review-class authoritative sources were previously extracted from Feishu notes, slide PDFs, and local extraction data.
- User reports suspected issue: Lecture 3 may have shifted to architecture evolution and may no longer include some pattern content; this must be verified from trusted local sources instead of accepted as rumor.

## Constraints

- Do not revert unrelated user/workflow files.
- Preserve public/private source boundary: raw/slides/data source files may be deployed but not necessarily pushed.
- Use review class as the main outline; newer past papers and adjacent-course materials are auxiliary.
- Changes should be scoped, reviewable, and verified.

## Unknowns/Open Questions

- Which current question clusters are P2 because they appear in prior/adjacent materials but are not explicitly review-class focus?
- Whether any current P0/P1 content is unjustified by review-class notes.
- Whether the UI has responsive/console issues after recent refactors.

## Likely Touchpoints

- `site/content.js`: homepage copy, evidence-band content, route labels/priority text, course specificity disclaimer.
- `site/app.js`: route priority rendering and source/question rendering if necessary.
- `site/styles.css`: evidence-band and route priority UI styling.
- `site/data/questions.json` and `site/data/questions.js`: priority/demotion consistency if content audit finds drift.
- `README.md`: update claims and verification record if behavior/content changes.
- `.omx/state`: Ralph progress/completion state.
