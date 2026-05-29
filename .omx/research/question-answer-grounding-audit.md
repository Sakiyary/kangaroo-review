# 真题答题框架来源校对

更新时间：2026-05-29

## 来源优先级

1. 绝对基准：已重绘并人工校正的 `add-roadmap.svg`、`architecture-design-process.svg`、`quality-scenario.svg`。
2. 中心纲领：张贺、李杉杉复习课纪要。
3. 课程 slide / OCR 文案。
4. 学长博客、前人复习资料。
5. 旧卷和相邻课程资料，只作补充或练习题来源。

## 用户指出的“五类来源”问题

结论：不是纯幻觉，但原页面写法需要收紧。

有据可查的旧卷答案是：

- Requirements
- System stakeholders
- Development organization
- Architects
- Technical environment

因此“需求、系统利益相关者、开发组织、架构师、技术/运行环境”可以作为旧卷五项必答。原页面把 `Architects` 解释成“架构师经验”是可理解但不够贴近原文，已改为“架构师”，并在解释里说明包含其知识、经验和判断。

“业务目标”在复习课纪要中是 ASR 识别和优先级判断的重要驱动，但不是这道旧卷五项列表中的替代项。页面已改成“业务目标是补充驱动，不写成第六个标准答案”。

## 主要修正

| 题簇 | 问题 | 修正 |
|---|---|---|
| `q_quality_scenarios` | 之前使用了自造的订单服务切备用实例例子。 | 改为 `quality-scenario.svg` 表格里的 Heartbeat 监视器、服务器无响应、处理器、正常操作、通知操作者并继续操作、无停机时间。 |
| `q_arch_process` | 之前把架构过程写成五活动，并把演化维护放成核心第五步。 | 按复习课和过程图改为四活动：Specifying ASRs、Architecture design、Documenting、Architecture Evaluation。演化维护只作生命周期补充。 |
| `q_arch_sources` | 五类来源和业务目标混写，容易误导。 | 改为旧卷五项必答 + 当前复习课 NFR/ASR/business goals 补充说明。 |
| `q_asr_sources` | 来源列表过散，把多种分析方法放成同级。 | 改为复习课证据：需求文档、stakeholder workshop/interview/QAW、business goals、utility tree。 |
| `q_generic_design_strategies` | 把 SOA、插件化等也列成通用策略。 | 改为 source-backed 五项：abstraction、decomposition、generate-and-test、iteration/refinement、reuse。 |
| `q_patterns_tactics` | tactic 例子堆了若干来源不清的词。 | 改为质量属性下的保守例子：heartbeat、redundancy/failover、caching/load balancing、限制依赖、认证/授权/审计。 |
| `q_microservice_food_delivery_design` | API Gateway、事件、Saga 容易看成题干必需。 | 改为示例拆法，并明确不是唯一标准。 |
| `q_operability_performance_scenarios` | 具体时间和吞吐数值没有强证据。 | 改为示范性六要素写法，不再把数值当成原题固定答案。 |

## 全题状态

已给 39 条 `site/data/questions.json` 题簇写入 `source_audit_zh` / `source_audit_en`，并补充 `source_audit_sources` 作为校对证据路径；前端真题展开区会显示“来源校对”。重点结论如下：

- P0 题中，`q_requirement_kinds`、`q_quality_scenarios`、`q_add_process`、`q_microservices_vs_soa` 均有复习课或重绘图支撑。
- `q_add_process` 以 ADD 3.0 重绘图为准，七步和反馈环已核对。
- `q_arch_process` 以架构设计过程图为准，不再采用旧资料中泛化的“演化/管理”第五步。
- ATAM、SPL、MDA、Pipe-and-Filter 代码题、分布式缓存题等主要来自旧卷或相邻课程，保留为 P2 或辅助练习，不提升为今年主线。
- 微服务特性、SOA 对比、DDD/企业架构等仍按今年复习课主纲保留，但具体设计题中的服务名、事件名、Saga 等仅作为示例。

## 复现命令

```bash
node tools/ground_question_answers.mjs
node tools/ground_question_answers.mjs --check
```

该脚本会更新：

- `site/data/questions.json`
- `site/data/questions.js`

脚本会校验题簇数量、ID 唯一性、逐题校对字段和证据路径；写文件时使用临时文件再 rename，避免 `questions.json` 与 `questions.js` 半写入不一致。

如果之后重新运行 `tools/integrate_2025_materials.mjs` 合并新资料，需再运行一次 `tools/ground_question_answers.mjs`，以免来源校对字段被旧流程覆盖。
