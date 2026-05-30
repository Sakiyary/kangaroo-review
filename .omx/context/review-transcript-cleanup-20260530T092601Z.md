# 复习课完整录音术语清洗上下文

## Task Statement
清洗 `data/复习课完整录音-张贺吕骏李杉杉.txt` 中由录音转写造成的术语误识别、误翻译和误转换。用户已将原始新增文件放入 Git 暂存区，希望先检查清洗后的术语是否正确。

## Desired Outcome
产出一份保留原始时间戳和说话人结构的清洗版完整录音稿，并附带可审计的术语清洗说明。此阶段不替换前端中心纲领、不重构网页内容。

## Known Facts / Evidence
- 录音稿位于 `data/复习课完整录音-张贺吕骏李杉杉.txt`，约 90 KB，342 行。
- 三段录音对应的 PPT ground truth：
  - 张贺：`slides/Lecture 14: Course Review - softarch2026-review-1.pdf`
  - 吕骏：`slides/Lecture 3: Architectural Patterns - 软件架构模式.pdf`
  - 李杉杉：`slides/Lecture 14: Course Review - 3 - 课程复习.pdf`
- 这些 PPT 已有提取文本在 `data/extracted/slides/` 下。
- Feishu 智能纪要同样来自录音转文字，不能作为术语最高权威。

## Constraints
- 不把 `/Users/bytedance/Codes/Self/kangaroo-2` 纳入资料库。
- 先做术语和文本清洗，避免基于猜测重写内容。
- 以 PPT 提取文本为最高优先级，录音稿上下文次之，学长资料更低。
- 需要保留可审计性，让用户检查术语清洗是否正确。

## Unknowns / Open Questions
- 部分低置信语音识别片段可能只能标记待确认，不能强行改写。
- 是否最终用完整录音替换三份智能纪要作为中心纲领，留到用户检查术语后再做。

## Likely Touchpoints
- `data/复习课完整录音-张贺吕骏李杉杉.txt`
- `data/extracted/slides/lecture-14-course-review-softarch2026-review-1-f8f5184a.json`
- `data/extracted/slides/slides__Lecture 3: Architectural Patterns - 软件架构模式.txt`
- `data/extracted/slides/slides__Lecture 14: Course Review - 3 - 课程复习.txt`
- 新增清洗说明文档：`data/复习课完整录音-术语清洗说明.md`
