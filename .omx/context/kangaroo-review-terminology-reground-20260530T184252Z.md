# Kangaroo review terminology and 2026 question re-grounding

- Task: Re-ground old exam questions and knowledge phrasing to 2026 complete review recording + review slides; remove old-paper caveats from student-facing answers; normalize Chinese terminology; add glossary terms and context graph; fix plural aliases such as ASRs/NFRs.
- Desired outcome: “软件架构从哪里来？” and related ASR/source questions use current review-class wording. Chinese answers avoid unnecessary English mixing except accepted abbreviations such as ASR, NFR, DDD, ADD. English answers are also structured, not one long paragraph. Glossary is more complete and context-aware, with a graph on the glossary page.
- Ground truth: data/复习课完整录音-张贺吕骏李杉杉.txt; data/review-class/complete-review-minutes.md; extracted Zhang He review-1 slide page 2/3; Lecture 12 ADD driver slides.
- Constraints: skip final Ralph architect review by user request; keep checklist/metrics behavior working; preserve old route ids unless necessary.
- Likely touchpoints: site/content.js, site/data/questions.json/js, site/app.js, site/styles.css, README if counts/features change, tools/smoke-site.mjs if glossary graph should be verified.
- Verification: node --check, jq empty, targeted grep checks for old caveats/English mixing, Playwright smoke and a glossary-page screenshot.
