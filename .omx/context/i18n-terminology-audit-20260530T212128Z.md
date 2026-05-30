# Task Statement

全面审查并修复 kangaroo-review 当前网页中的中英文 i18n 不一致问题、术语弹窗误标问题，并把“中文知识点详解/真题答案应分点、具体、方便背诵”的文风作为持续约束。完成后提交、推送并部署到 docs.cpl.icu/kangaroo-review。

# Desired Outcome

- 中文和英文内容在知识点、真题、术语、页面说明等主要可见区域中语义对应，不出现明显“中文讲 A、英文讲 B”的错位。
- 中文知识点详解和真题答案继续保持分点、具体、可背诵的风格；英文对应内容也应尽量按相同结构表达，而不是一整段泛泛概括。
- 术语自动下划线不应把普通词或其他上下文中的词误标，例如 `GoF 设计模式` 中的 `模式` 不应被错误链接为 architecture pattern。
- 保持既有约束：完整录音+复习课 slides 为最高纲领，slides 为 ground truth；不在学生可见正文出现审计/变更/prompt 内部口吻；不破坏 checklist、metrics、comments、online count、资料库源文件部署。
- 本轮 Ralph 状态和审计证据写入 `.omx/state`，最终提交、推送、部署并线上验证。

# Known Facts / Evidence

- 当前 `master` 与 `origin/master` 同步，上一轮提交为 `f1d81a4 Fix page consistency and mobile visual bugs`。
- 前端主内容在 `site/content.js`，真题题库在 `site/data/questions.json` 与 fallback `site/data/questions.js`，渲染和术语自动链接在 `site/app.js`，样式在 `site/styles.css`。
- README 记录当前结构：15 个知识点、40 条真题、125 条术语、51 条资料、23 张图解。
- 线上部署需要镜像 `raw/`、`slides/`、`data/` 等源资料，但 public repo 仍不应把重型/私有源资料纳入 Git。

# Constraints

- 中文答题正文中除 DDD、ADD、NFR、ASR、GoF 等必要缩写外，尽量使用一致中文术语，不中英文混用。
- 学习正文的文风约束：知识点详解与真题参考答案应保持“分点、具体、可背诵”。优先写清定义、构成、步骤、例子、取舍和适用场景；避免空泛框架、内部审计口吻、只说“不应如何答”的提示式废话。
- 英文 i18n 不要求逐词直译，但必须与中文覆盖同一组考点、步骤、例子和边界；中文若是分点答案，英文也应具备可对应的分点结构。
- 资料正文中不保留“审计修订、旧题口径、今年复习课口吻、prompt 要求、变更信息”等对学生无用的内部表达。
- 不将 `/Users/bytedance/Codes/Self/kangaroo-2` 加入资料库。
- 如需调整术语自动链接，应尽量通过算法/元数据降低误标，而不是手工删掉有用术语解释。
- 提交前必须运行数据/语法/烟测；部署后必须做线上冒烟验证。

# Unknowns / Open Questions

- 中英文错位的实际分布：可能集中在 `answer_points_en`、`sample_answer_en`、`detail`/`deepDive`、术语别名与页面说明。
- 哪些中文短词作为术语自动链接的误伤最多，需要通过扫描和页面抽检判断。
- 是否需要新增专门的 i18n 审查脚本或只用临时脚本完成本轮修复。

# Likely Codebase Touchpoints

- `site/content.js`
- `site/data/questions.json`
- `site/data/questions.js`
- `site/app.js`
- `site/styles.css`
- `README.md`
- `.omx/context/`
- `.omx/state/`
