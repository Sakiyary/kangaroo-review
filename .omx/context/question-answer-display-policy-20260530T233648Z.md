# Question Answer Display Policy

## Task Statement

Refine the past-paper question page so answer content is readable without deleting useful distinctions between answer outline, point-form answer, and memorisable reference answer.

## Desired Outcome

- Keep the three answer sections only when they serve different purposes.
- Do not generate an `Answer by points` section from `sample_answer_*`; show it only when a question has independent `answer_points_zh/en`.
- Keep `sample_answer_*` by default because it often provides fuller phrasing, examples, or exam-ready wording.
- Hide `sample_answer_*` only for manually reviewed question ids where it duplicates `answer_points_*`.
- Split long memorisable answers into explicit newline points.

## Manual Review Notes

- Ten question clusters currently have independent `answer_points_*`.
- `q_microservices_characteristics` is the only manually reviewed cluster where `answer_points_*` and `sample_answer_*` are almost identical; it uses `hide_sample_answer: true`.
- Other clusters with `answer_points_*` still keep the sample answer because the sample includes fuller explanation, examples, or complete answer flow.
- `q_quality_scenarios` has no independent `answer_points_*`; it now shows only `答题提纲` and a nine-point `可背参考答案`.

## Implementation Notes

- `site/app.js` uses `shouldRenderSampleAnswer(question)` and checks `question.hide_sample_answer`.
- `answer_points_*` rendering is independent from `sample_answer_*` rendering.
- `sample_answer_*` long paragraphs were split in `site/data/questions.json`, then regenerated into `site/data/questions.js`.
- `tools/integrate_2025_materials.mjs` mirrors the same formatting for 2025 material integration so reruns do not reintroduce long unpointed samples.

## Verification Plan

- Run i18n point parity audit.
- Run grounded question normalization check.
- Run JS and JSON syntax checks.
- Run browser smoke or targeted Playwright check for question section visibility.
- Persist Ralph completion audit before final delivery.
