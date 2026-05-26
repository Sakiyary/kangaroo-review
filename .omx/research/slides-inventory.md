# Slides / Materials Inventory

更新时间：2026-05-27

## Scope

- 只检查 `slides/` 与 `raw/` 下的课件/材料文件。
- 尝试了本机已有工具：
  - `PDFKit`（通过本地 `swift` 脚本）提取 PDF 页数与文本层
  - `textutil` 提取 `.docx`
  - 直接读取 `.md` / `.rtf`
  - `sips` 渲染了若干 PDF 首页缩略图，辅助判断讲者/风格
- 未安装任何依赖。

## Quick Findings

- `slides/` 下共有 10 份课程 PDF；其中 8 份可直接抽文本，2 份看起来是图片型/无可读文本层：
  - `slides/Lecture 1: Introduction - 2026_PG_SoftArch01_Introduction.pdf`
  - `slides/Lecture 2-4: Quality Attributes & Tactics - 2026_PG_SoftArch02-04_Quality Attributes.pdf`
- `raw/` 下大多是往年考题、复习笔记、整理稿，绝大多数都可抽文本。
- `raw/zqx考试复习资料/考题手敲中文版.rtf` 当前不是正文，而是一个 Git LFS pointer；仓库里没有实际 RTF 内容。
- 提取出的文本统一放在 `data/extracted/slides/`，命名规则是“原相对路径中的 `/` 替换为 `__`，扩展名统一变成 `.txt`”。

## Course Slides

| File | Pages | Text extractable | Likely lecturer / style | Likely topics |
| --- | ---: | --- | --- | --- |
| `slides/Lecture 1: Introduction - 2026_PG_SoftArch01_Introduction.pdf` | 37 | No | 官方课程导入课件；首页为“软件体系结构 / Software Architecture”绿白模板 | 课程介绍、软件体系结构基本概念、课程脉络 |
| `slides/Lecture 2-4: Quality Attributes & Tactics - 2026_PG_SoftArch02-04_Quality Attributes.pdf` | 125 | No | 与 Lecture 1 同套官方模板；应为图片型导出 | 质量属性、stimulus-response 场景、架构 tactics |
| `slides/Lecture 3: Architectural Patterns - 软件架构模式.pdf` | 73 | Yes | 吕骏，南京大学；独立讲义风格，首页可见校徽与姓名 | 架构模式、模式分类、个人简介后进入正文 |
| `slides/Lecture 6-7: Microservices Architecture - Microservices Patterns.pdf` | 102 | Yes | 李杉杉；南大课程正式课件 | 微服务基础、发展历程、核心设计模式、拆分与通信、部署复杂性 |
| `slides/Lecture 8-9: Domain Driven Design - 领域驱动设计项目实战讲解.pdf` | 105 | Yes | 张逸（Bruce Zhang）；外部讲师/布道师型分享课件 | DDD 基础、案例教学、事件风暴、AI 与 DDD 双向赋能 |
| `slides/Lecture 10-11: Enterprise Architecture - 企业架构设计实战课-南京大学_课件版.pdf` | 140 | Yes | 付晓岩；偏行业嘉宾讲座，企业架构/AI 应用主题 | 企业架构设计、业务架构、数字化转型、AI 应用探索 |
| `slides/Lecture 12: Attribute-Driven Design - Designing Software Architectures - ADD 3.0.pdf` | 125 | Yes | 李杉杉；英文主课件，沿用南大蓝金模板 | 架构驱动因素、设计策略、ADD 3.0、架构文档化、Hotel Pricing System 案例引入 |
| `slides/Lecture 13: Attributes Driven Design - Case Study.pdf` | 95 | Yes | 李杉杉；与 Lecture 12 配套的案例课件 | Hotel Pricing System 案例、业务背景、云上定价系统设计 |
| `slides/Lecture 14: Course Review - 3 - 课程复习.pdf` | 17 | Yes | 李杉杉；中文复习提纲 | 题型说明、ADD/文档化、微服务、领域驱动等考试回顾 |
| `slides/Lecture 14: Course Review - softarch2026-review-1.pdf` | 7 | Yes | 简版英文复习页；黑白极简风 | Final Exam 结构、成绩构成、课程大纲回顾、AI-enabled / AI-native 架构 |

## Supplementary Materials (`raw/`)

| File | Kind | Pages | Text extractable | Likely lecturer / style | Likely topics |
| --- | --- | ---: | --- | --- | --- |
| `raw/(2025-05-21)南京大学软件学院-2024-软件体系结构（研究生）期末复习参考_timeErrors.md` | md | N/A | Yes | 外部整理稿；作者 `timeErrors` | 期末复习总纲，覆盖微服务、DDD、企业架构等 |
| `raw/架构.md` | md | N/A | Yes | 自整理笔记风格 | 软件架构定义、来源、架构过程、ASR、质量属性 |
| `raw/架构.pdf` | pdf | 6 | Yes | `架构.md` 的导出版 | 同上，偏精简提纲 |
| `raw/软件系统设计-系统架构（简）zhy.pdf` | pdf | 64 | Yes | `zhy` 整理版/复习讲义 | 软件系统架构基础、软硬件区别、演化、考试范围 |
| `raw/软统整理-体系结构部分.pdf` | pdf | 51 | Yes | 学生整理稿 | 软件架构通识、概念复习、体系结构部分摘录 |
| `raw/体系结构往年考题整理：.pdf` | pdf | 10 | Yes | 往年题整理版 | 研究生相关考题、答案要点、来源/利益相关者/模式/tactics |
| `raw/体系结构考题回忆版.pdf` | pdf | 1 | Yes | 极简考后回忆 | 定义与重要性、需求/质量属性/ASR、建模题等 |
| `raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md` | md | N/A | Yes | 面向“张贺老师”课程的往年题汇总 | 15/17 年考题、ATAM、SOA、视图、SPL/MDA |
| `raw/zqx考试复习资料/考题手敲英文版.md` | md | N/A | Yes | 手敲英文题目清单 | 往年英文题面 |
| `raw/zqx考试复习资料/考题手敲中文版.rtf` | rtf | N/A | Pointer only | 当前不是正文，是 Git LFS pointer | 无法得到真实中文手敲内容 |
| `raw/zqx考试复习资料/往年资料以及答案.docx` | docx | N/A | Yes | 往年题+答案整理 | 多年考题与中英混合答案 |
| `raw/zqx考试复习资料/往年资料以及答案.pdf` | pdf | 24 | Yes | 上述整理的 PDF 版 | 同上 |
| `raw/zqx考试复习资料/【批量下载】18年等/18年.pdf` | pdf | 3 | Yes | 简短题目/答案页 | 软件架构关注点、利益相关方等短答题 |
| `raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx` | docx | N/A | Yes | 试卷原件/转存版 | 2015 A 卷 |
| `raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx` | docx | N/A | Yes | 试卷原件/转存版 | 2015 B 卷 |
| `raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx` | docx | N/A | Yes | 试卷+答案较完整版本 | 2016 A 卷，含中英答案段落 |
| `raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.pdf` | pdf | 18 | Yes | 上述内容的 PDF 版 | 2016 A 卷，内容完整度高 |
| `raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx` | docx | N/A | Yes | 试卷原件/转存版 | 2016 B 卷 |

## Extracted Text Coverage

- 已成功生成提取文本：
  - 大部分 `raw/` 材料
  - `slides/` 中除 `Lecture 1`、`Lecture 2-4` 之外的全部 PDF
- 未生成有效提取文本：
  - `slides/Lecture 1: Introduction - 2026_PG_SoftArch01_Introduction.pdf`
  - `slides/Lecture 2-4: Quality Attributes & Tactics - 2026_PG_SoftArch02-04_Quality Attributes.pdf`
  - `raw/zqx考试复习资料/考题手敲中文版.rtf` 只有 LFS pointer 文本

## Notable Extracted Files

- `data/extracted/slides/slides__Lecture 10-11: Enterprise Architecture - 企业架构设计实战课-南京大学_课件版.txt`
- `data/extracted/slides/slides__Lecture 12: Attribute-Driven Design - Designing Software Architectures - ADD 3.0.txt`
- `data/extracted/slides/slides__Lecture 13: Attributes Driven Design - Case Study.txt`
- `data/extracted/slides/slides__Lecture 14: Course Review - 3 - 课程复习.txt`
- `data/extracted/slides/slides__Lecture 14: Course Review - softarch2026-review-1.txt`
- `data/extracted/slides/slides__Lecture 3: Architectural Patterns - 软件架构模式.txt`
- `data/extracted/slides/slides__Lecture 6-7: Microservices Architecture - Microservices Patterns.txt`
- `data/extracted/slides/slides__Lecture 8-9: Domain Driven Design - 领域驱动设计项目实战讲解.txt`
- `data/extracted/slides/raw__体系结构往年考题整理：.txt`
- `data/extracted/slides/raw__软件系统设计-系统架构（简）zhy.txt`

## Caveats

- 本次“Text extractable”是基于本机 `PDFKit`/`textutil` 实测结果，不是文件格式名义上的理论可提取性。
- `.docx` / `.md` / `.rtf` 未做页数估算，因此 `Pages` 记为 `N/A`。
- 讲者/风格/主题是基于首页渲染、文件名、抽取文本前几十行做的高概率判断，不是课程官方目录。
