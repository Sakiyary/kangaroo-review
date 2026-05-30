# i18n Answer Frame Schema Cleanup

## Task Statement

Continue the interrupted i18n alignment flow for the review site, especially the question answer-frame fields where Chinese and English point structure drifted.

## Desired Outcome

- Question answer frames have explicit Chinese/English pairs.
- Separate answer points are stored as explicit newline-separated lines or as matched arrays.
- Mixed-language mode renders Chinese and English ordered lists without number continuation.
- Switching language keeps the viewer at the same relative page position.
- Verification evidence is fresh before commit, push, and deployment.

## Known Facts / Evidence

- The old question schema mixed `answer_zh` and `likely_answer_pattern`; the UI rendered them as the answer frame, which made future i18n checks easy to miss.
- `splitStudyText()` previously split long text by punctuation, so English with semicolons could become multiple rendered points while Chinese stayed as one paragraph.
- Read-only subagent audits found examples in `q_broker_pattern`, `q_req_quality_asr`, ATAM drawing steps, and several `site/content.js` study blocks.
- `node tools/audit-i18n-point-parity.mjs` must report zero high/medium findings before release.

## Constraints

- Do not reintroduce visible audit/change-log wording into study content.
- Preserve the detailed, point-by-point Chinese study style the user prefers.
- Keep comments and maintenance-only evidence in code/data fields that are not rendered in the study UI.
- Do not break checklist or metrics behavior; only extend/repair rendering behavior where needed.

## Decisions

- Rename rendered question-frame fields to `answer_frame_zh` / `answer_frame_en`.
- Keep `sample_answer_*` for the full memorisable answer, and `answer_points_*` / `drawing_steps_*` as array-based ordered-list fields.
- Make `splitStudyText()` split only on explicit newlines; punctuation no longer creates hidden points.
- Render mixed-language ordered content as two separate ordered lists so English numbering restarts from 1.
- Preserve relative scroll on language switches with repeated layout-timing correction because async comments, metrics, and image loads can alter page height after the first render frame.

## Verification Plan

- Normalize and check question data with `tools/ground_question_answers.mjs`.
- Run `tools/audit-i18n-point-parity.mjs`.
- Run JS syntax checks and JSON parsing checks.
- Run Playwright smoke against the local site.
- Run a targeted browser check for mixed-language question lists and language-switch scroll retention.
