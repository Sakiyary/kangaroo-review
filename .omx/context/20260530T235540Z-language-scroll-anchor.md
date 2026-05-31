# Language Switch Scroll Anchor Fix

## Problem

The deployed papers page preserved only the global page scroll ratio during language switching. When several exam questions were expanded, a re-render collapsed all but the last remembered question. The document height changed sharply, so the ratio was technically similar while the visible question jumped.

Observed on the deployed page before the fix:

- Expanded questions before switch: `q_arch_sources`, `q_quality_scenarios`, `q_add_process`, `q_microservices_vs_soa`
- Expanded questions after switch: `q_microservices_vs_soa`
- View center before switch: `q_microservices_vs_soa`
- View center after switch: `q_availability_mtbf_mttr`

## Fix

`site/app.js` now keeps a multi-question open state in `state.openQuestionIds` and preserves it across renders. Major rendered blocks now carry stable `data-scroll-key` anchors, including question sections, mind-map nodes, route/priority blocks, topic notes, diagrams, glossary terms, and source rows.

The language switch scroll snapshot now stores both:

- fallback global page ratio
- semantic anchor near the viewport center, with stable key and local offset

Restore first tries to return to that semantic anchor, then falls back to page ratio when the anchor is unavailable.

## Verification

Local browser regression covered three language transitions with multiple questions expanded:

- `mix -> zh`, anchored on `q_quality_scenarios`
- `zh -> en`, anchored on `q_microservices_vs_soa`
- `en -> mix`, anchored on `q_add_process`

All cases kept the same expanded question set and the same viewport anchor.

The follow-up regression script `tools/check-language-scroll.mjs` covers:

- papers page with only the default question expanded
- papers page with multiple questions expanded
- scope/mind-map page
- review route page
- knowledge topic detail page
- diagram gallery page
- glossary page
- source library page

All cases restore the application-captured anchor after language switching.

Static and smoke checks passed:

- `node --check site/app.js`
- `node --check tools/check-language-scroll.mjs`
- `tools/check-language-scroll.mjs` against `http://127.0.0.1:18080/site/index.html`
- `node tools/audit-i18n-point-parity.mjs`
- `node tools/ground_question_answers.mjs --check`
- `tools/smoke-site.mjs` against `http://127.0.0.1:18080/site/index.html`
