# Software Architecture Review Site - Ralph Context Snapshot

## Task Statement

整理《软件体系结构》课程复习资料。输入包括：

- `slides/` 下老师课件 PDF，大量是图片型 PDF，需要 OCR 或视觉理解。
- `raw/` 下多份前人复习资料、往年题、拍照试卷、PDF/DOCX/RTF/Markdown/图片。
- 飞书智能纪要：
  - 张贺复习课纪要：https://my.feishu.cn/docx/EOjedYSMpoNscoxzPBCcNKVDncc
  - 李杉杉复习课纪要：https://my.feishu.cn/docx/RrjOdIMTioXr6px8zmdcuQB5nSh
  - 吕骏回顾架构模式纪要：https://my.feishu.cn/docx/YcXldb3cootFPax3OAYcPrf4nJe

## Desired Outcome

在当前目录生成一个可在电脑和手机浏览的前端复习网站，内容至少包括：

- 考点大纲与复习路线，按必考/易拿分/可能考/难拿分区分主次。
- 各知识点整理，优先以复习课内容为基准，以 slides 为佐证，以 raw 中前人资料做提炼。
- 往年真题与题型整理。
- 名词解释与中英文对照，支持纯中文、纯英文、中英对照三种阅读模式。
- OCR/抽取中间数据持久化，便于后续复核和迭代。
- 可选 git 管理，并用 `/Users/bytedance/Codes/Self/suitcase` 相同的 git user.name/user.email；最终尽量用 gh CLI 创建 public repo 并上传。

## Known Facts / Evidence

- 当前目录不是 git 仓库。
- `slides/` 包含 10 个 PDF，其中核心复习课文件是 `Lecture 14: Course Review - 3 - 课程复习.pdf`，另有 `Lecture 14: Course Review - softarch2026-review-1.pdf`。
- `raw/` 包含 Markdown、PDF、DOCX、RTF、PNG 等前人资料和往年题。
- 本机未发现 `pdftotext`、`pdfinfo`、`pdftoppm`、`tesseract`、`magick`。
- 可用工具包括 macOS `sips`、Node、npm、git、gh，以及 Codex workspace bundled Python/Node runtime。
- `suitcase` 的 git 身份为 `Sakiyary <sakiyary19@qq.com>`。
- Codex goal mode 当前无 active goal；Ralph 状态需要用 `.omx` 和 `omx state` 维持。
- bytedcli Lark 命令可用于 `lark docs fetch`、媒体下载、whiteboard 查询等。

## Constraints

- 复习课内容为基准；slides 为佐证；raw 资料只做提炼，不能当标准答案。
- PDF/图片抽取需要保留来源与置信度，避免把 OCR 错误写成确定事实。
- 重大架构调整前需要清楚说明方案；实现层面可自主决策。
- 前端需要实际可用，不做空壳 landing page。
- git push/gh 创建远端会触发网络/凭证相关步骤，若 sandbox 或鉴权阻塞需显式说明。

## Unknowns / Open Questions

- 飞书文档权限是否足够读取正文、画板和媒体。
- 图片型 PDF 是否可通过本地 runtime 直接渲染/识别；如果本地缺 OCR，需要采用分层策略：先抽可读文本和页面预览，再让多模态 agent 核读关键页。
- 课程最终考试覆盖范围是否完全等同于复习课提示，需通过三份纪要交叉验证。
- 张贺与李杉杉在同名复习课 PDF 中的页段边界需要通过纪要和课件风格确认。

## Likely Touchpoints

- `.omx/context/`、`.omx/state/`、`.omx/plans/`：Ralph 工作流状态。
- `data/catalog/`：输入源清单、页数、抽取状态。
- `data/extracted/`：PDF/DOCX/RTF/Markdown 抽取文本。
- `data/feishu/`：飞书纪要与画板/媒体抽取。
- `data/ocr/`：OCR/页面视觉复核中间数据。
- `site/`：前端应用源码与静态资源。

## Initial Work Plan

1. 建立资料目录和抽取流水线，先最大化抽取可读文本、DOCX/RTF/Markdown。
2. 读取三份飞书纪要，并尽量获取画板/媒体内容。
3. 并行拆分 slides/raw OCR 与知识提炼任务，产出结构化 JSON/Markdown。
4. 建立复习资料信息架构：大纲、知识点、真题、术语表、复习路线。
5. 实现响应式前端，支持三种语言展示模式和重点层级筛选。
6. 本地构建/浏览器验证，修复视觉和交互问题。
7. 初始化 git，使用 suitcase 的 user.name/user.email；若 gh 可用则创建 public repo 并 push。
8. Ralph 完成审计、deslop、回归验证后收尾。
