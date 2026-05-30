# i18n Point-Parity Audit

## Task Statement

The user still sees many i18n inconsistencies after the previous pass: one language may have four explicit points while the other has only three, or one language may contain multiple semicolon/period-separated points inside a single paragraph instead of using point structure. Audit and repair these inconsistencies.

## Desired Outcome

- Chinese and English study copy should explain the same concepts, steps, examples, boundaries, and answer points.
- If either language presents multiple memorization points, both languages should use a comparable point structure.
- Keep the preferred study style: concrete, point-by-point, detailed enough to memorize, and free of internal audit/change/prompt wording.
- Preserve metrics, checklist, comments, diagrams, and existing routing behavior.
- Finish with verification, commit, push, and deployment.

## Known Facts / Evidence

- Previous check covered English-with-Chinese leaks and existing array length mismatches, but it did not detect paragraph-level point parity.
- Main content files are `site/content.js`, `site/data/questions.json`, and generated `site/data/questions.js`.
- `tools/ground_question_answers.mjs` regenerates/synchronizes `site/data/questions.js` from `site/data/questions.json`.
- Existing smoke test is `tools/smoke-site.mjs`.

## Constraints

- Highest study-copy authority remains complete review recording + review slides, then slides and vetted past-paper material.
- Chinese answers should be precise and mostly Chinese, with only necessary abbreviations like DDD, ADD, ASR, NFR, QAW.
- Do not expose audit/change/prompt wording in public study copy.
- Use persistent scripts/checks so context compression does not lose pending audit work.

## Likely Touchpoints

- `site/content.js`
- `site/data/questions.json`
- `site/data/questions.js`
- Potential new audit helper under `tools/`

## Open Questions

- Exact user-observed examples were not provided beyond the pattern, so this pass should scan broadly and fix detected high-risk cases.
