import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const qPath = path.join(cwd, "site/data/questions.json");
const questions = JSON.parse(fs.readFileSync(qPath, "utf8"));
const checkMode = process.argv.includes("--check");

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function patchQuestion(id, fields) {
  const question = questions.find((item) => item.id === id);
  if (!question) throw new Error(`Unknown question id: ${id}`);
  Object.assign(question, fields);
}

function mergeQuestionArray(id, field, values) {
  const question = questions.find((item) => item.id === id);
  if (!question) throw new Error(`Unknown question id: ${id}`);
  question[field] = unique([...(question[field] || []), ...values]);
}

function writeAtomic(filePath, contents) {
  const tempPath = `${filePath}.${process.pid}.tmp`;
  fs.writeFileSync(tempPath, contents);
  fs.renameSync(tempPath, filePath);
}

patchQuestion("q_arch_sources", {
  likely_answer_pattern: "For the old-paper wording, list exactly five sources: requirements, system stakeholders, development organization, architects, and technical environment. Then, if space allows, connect the 2026 review focus to NFRs/ASRs/quality requirements and business goals.",
  answer_zh: "旧卷五项按原题列：需求、系统利益相关者、开发组织、架构师，以及技术/运行环境。业务目标可以作为复习课强调的补充驱动来说明，但不要把它写成替代这五项的“第六个标准答案”。",
  sample_answer_zh: "软件架构不是只从需求文档里自然长出来的。旧卷标准式五项可以写：第一，requirements，包含功能需求、质量需求和约束；第二，system stakeholders，例如用户、运维、测试、监管者等带来的 concerns；第三，development organization，例如团队结构、技能、进度和成本会影响模块边界；第四，architects，也就是架构师已有知识、经验和对模式/技术的判断；第五，technical environment，例如数据库、中间件、部署平台、遗留系统和运行环境。结合 2026 复习课还可补一句：今年主线更强调其中的 NFRs、quality requirements 和 ASRs，并用 business goals 来筛选优先级。",
  sample_answer_en: "Architecture is not derived only from a requirements document. For the old-paper wording, list five sources: requirements; system stakeholders and their concerns; the development organization, including team structure, skills, schedule, and cost; architects, including their knowledge and judgement; and the technical/operational environment such as databases, middleware, deployment platforms, legacy systems, and runtime constraints. In the 2026 review-class framing, emphasize NFRs, quality requirements, ASRs, and business goals for prioritization.",
  priority_reason_zh: "旧卷有精确五项答案；今年复习课把“架构来源”收束到 NFR/质量需求/ASR 与业务目标筛选，作为基础简答保留。",
  priority_reason_en: "Old papers provide the exact five-item answer; the current review class narrows the focus to NFRs, quality requirements, ASRs, and business-goal prioritization."
});

patchQuestion("q_arch_design_structure", {
  answer_zh: "所有架构都是设计的一部分，但并非所有设计都上升到架构层次；架构关注早期、高层、会影响质量属性和系统结构的重要设计决定。structure 强调元素、关系和外部可见属性；architecture 使用一个或多个 structure 表达方案，并进一步服务 ASR、运行时依赖、通信和后续演化。",
  sample_answer_zh: "Design 是更宽泛的设计活动；architecture 是其中高抽象、影响全局质量和后续实现的部分，所以 every architecture is design, but not every design is architecture。Structure 更偏“表达对象”：系统有哪些元素、元素之间有什么关系、外部可见属性是什么。Architecture 会使用这些 structure，但答题时还要说明它为什么这样组织：它要回应 ASR，协调运行时依赖、通信、部署和演化等关注点。因此 structure 可以看作架构的表示材料之一，architecture 是围绕重要设计决定形成的整体方案。",
  sample_answer_en: "Design is broader; architecture is the high-level part of design that affects system-wide qualities and later implementation. Structure describes elements, relations, and externally visible properties. Architecture uses one or more structures, but also explains why they are organized this way to satisfy ASRs and to coordinate runtime dependencies, communication, deployment, and evolution."
});

patchQuestion("q_quality_scenarios", {
  likely_answer_pattern: "Draw or describe the six-part quality attribute scenario in the table order: source, stimulus, artifact, environment, response, response measure; provide requested attributes such as availability, performance, modifiability, or interoperability.",
  answer_zh: "画出或描述六要素，并按重绘表格顺序背：刺激源、刺激、制品/工件、环境、响应、响应度量。按题目要求套入可用性、性能、可修改性、互操作性等质量属性。",
  recurring_terms: ["source of stimulus", "stimulus", "artifact", "environment", "response", "response measure", "availability", "performance", "modifiability", "interoperability"],
  english_keywords: ["source of stimulus", "stimulus", "artifact", "environment", "response", "response measure", "availability", "performance", "modifiability", "interoperability"],
  sample_answer_zh: "质量属性场景用于把模糊的质量需求改写成可测试的架构需求。一个完整场景包含六个部分：刺激源、刺激、制品、环境、响应、响应度量。按原表中的 Availability 例子可直接写：刺激源是 Heartbeat 监视器；刺激是服务器无响应；制品是处理器；环境是正常操作；响应是通知操作者并继续操作；响应度量是没有停机时间。答题时先画六列表，再把题目给出的可用性、性能、可修改性等需求填进去。",
  sample_answer_en: "A quality attribute scenario turns a vague quality requirement into a testable architectural requirement. It has six parts: source of stimulus, stimulus, artifact, environment, response, and response measure. In the table's Availability example: the source is a heartbeat monitor; the stimulus is that the server does not respond; the artifact is the processor; the environment is normal operation; the response is to notify the operator and continue operation; and the response measure is no downtime.",
  visual_hint_zh: "优先照着重绘表格背六列：source、stimulus、artifact、environment、response、measure。不要把订单服务切备用实例作为来源原文；如需举例请标注为自拟示例。",
  visual_hint_en: "Use the redrawn table as the source of truth: source, stimulus, artifact, environment, response, measure. Do not treat the order-service failover variant as source wording; mark it as a self-made example if used."
});

patchQuestion("q_asr_sources", {
  likely_answer_pattern: "Define ASRs as requirements with strong architectural impact. For 2026 review-class wording, gather/identify them from requirement documents, stakeholder workshops/interviews/QAW, business goals, and utility-tree prioritization; scenarios are the measurable representation.",
  answer_zh: "ASR 是对架构设计决定有显著影响的需求。按复习课讲法，识别来源/方法主要是需求文档、stakeholder workshop/interview 或 QAW、业务目标，以及用效用树组织和排序。约束和质量属性场景是重要输入/表达形式，但不要把所有“用例分析”都写成同等来源。",
  recurring_terms: ["ASR", "requirements documents", "stakeholder workshop", "interviews", "business goals", "utility tree"],
  english_keywords: ["ASR", "requirements documents", "stakeholder workshop", "interviews", "business goals", "utility tree"],
  sample_answer_zh: "ASR 不是所有需求，而是会强烈影响架构结构、模式、技术选择和质量取舍的需求。识别时先读 requirement documents，找功能需求、质量需求和约束；再通过 stakeholder workshop/interview 或 QAW 补全需求文档里没写清的质量关注点；同时用 business goals 判断哪些质量目标真正重要；最后把候选 ASR 写成质量属性场景，并放入 utility tree 做重要性和实现难度排序。优先处理业务价值高且架构影响大的叶节点。",
  sample_answer_en: "An ASR is not every requirement, but a requirement that strongly affects architectural structure, patterns, technology choices, and tradeoffs. Identify ASRs from requirement documents, stakeholder workshops/interviews or QAW, business goals, and utility-tree prioritization. Express candidate ASRs as quality attribute scenarios and prioritize them by value and architectural impact."
});

patchQuestion("q_arch_process", {
  likely_answer_pattern: "Use the four-activity process from the review notes and process figure: specify ASRs, design the architecture, document it, and evaluate it. Explain inputs, artifacts, and feedback; treat evolution/maintenance as lifecycle context, not the fifth core step in this figure.",
  answer_zh: "按本课程复习课和过程图回答四个早期架构活动：规约 ASR，进行 architecture design，documenting，architecture evaluation。输入包括 stakeholder concerns、优先级质量属性场景、需求、约束、patterns/tactics；输出是候选视图、组合后的视图、视图之外文档和评估反馈。演化维护可作为生命周期补充，不列成该图的第五个核心活动。",
  sample_answer_zh: "软件架构过程在这门课里可按四个活动答。第一，Specifying ASRs，把利益相关者关注点、需求、约束和业务目标整理成可度量的质量属性场景，并排序。第二，Architecture design，利用 requirements/constraints、patterns and tactics 形成候选架构和 candidate views。第三，Documenting，把候选视图选择、合并，形成 chosen combined views plus documentation beyond views，例如接口、映射、设计理由和约束。第四，Architecture Evaluation，用场景检查架构是否满足 stakeholder concerns，发现 risks、sensitivity points 和 trade-off points，并把结果反馈到下一轮设计。",
  sample_answer_en: "For this course, answer with four early architecture activities. First, specify ASRs by turning stakeholder concerns, requirements, constraints, and business goals into prioritized measurable quality scenarios. Second, perform architecture design using requirements, constraints, patterns, and tactics to form candidate views. Third, document the chosen and combined views plus beyond-view information such as interfaces, mappings, rationale, and constraints. Fourth, evaluate the architecture against scenarios to identify risks, sensitivity points, tradeoff points, and feedback for the next design iteration."
});

patchQuestion("q_atam_outputs", {
  sample_answer_zh: "ATAM 的输出按阶段组织。Phase 0 是准备阶段，输出 evaluation plan，包括参与者、时间、范围和报告对象。Phase 1 面向项目决策者，输出 business drivers、architecture presentation、utility tree、优先质量场景、risks/non-risks、sensitivity points 和 trade-off points。Phase 2 引入更广泛的 stakeholders，输出新增/合并后的 stakeholder scenarios、优先场景列表和 risk themes。Phase 3 输出 final report，汇总场景、风险、敏感点、权衡点和风险主题。",
  sample_answer_en: "ATAM outputs are phase-based: Phase 0 produces the evaluation plan. Phase 1 produces business drivers, an architecture presentation, a utility tree, prioritized scenarios, risks/non-risks, sensitivity points, and tradeoff points. Phase 2 adds broader stakeholder scenarios, merged/prioritized scenario lists, and risk themes. Phase 3 produces the final report."
});

patchQuestion("q_atam_stakeholders", {
  sample_answer_zh: "ATAM 中至少要说明几类角色。评估团队负责组织评估、介绍 ATAM 方法、引导场景生成、记录风险并形成报告。项目决策者/管理者说明 business drivers、范围和评估目标。首席架构师陈述当前架构、关键设计决定和理由。更广泛的 stakeholders 在 Phase 2 参与，例如用户、测试、运维、维护、安全或业务代表，他们提出并排序场景，帮助确认风险主题。不要把这些例子背成固定名单，重点是角色如何提供业务目标、架构信息、场景和风险验证。",
  sample_answer_en: "Explain ATAM roles rather than a fixed exhaustive list. The evaluation team organizes the evaluation, presents the method, elicits scenarios, records risks, and writes the report. Project decision makers/managers provide business drivers, scope, and evaluation goals. The lead architect presents the architecture and key rationale. Broader stakeholders in Phase 2, such as users, testers, operators, maintainers, security, or business representatives, propose and prioritize scenarios and help validate risk themes."
});

patchQuestion("q_patterns_tactics", {
  likely_answer_pattern: "Tactics are fine-grained design decisions for one quality driver; patterns/styles package larger recurring structures and often combine multiple tactics. Use examples only as examples, not as an exhaustive source list.",
  answer_zh: "Tactic 是面向某个质量属性响应的较小设计动作；pattern/style 是更大粒度、可复用的结构方案，常把多个 tactic 和约束组合起来。例子可以写：可用性里的 heartbeat、redundancy、failover；性能里的 caching、load balancing、control resource demand；可修改性里的提高内聚、限制依赖；安全里的认证、授权、审计。",
  sample_answer_zh: "Tactic 和 pattern 的区别在粒度。Tactic 通常针对一个质量属性的某个响应点，是较原子的设计动作；pattern/style 解决反复出现的一类架构问题，会规定元素、连接关系、约束和质量取舍，往往组合多个 tactics。例如为了 Availability，可以用 heartbeat 做故障检测，用 redundancy/failover 做恢复；这些 tactic 组合到具体系统里，可能形成 broker、client-server 或微服务等更大结构中的一部分。答题时不要只堆名词，要说明 tactic 服务单一质量驱动力，pattern 提供较完整的架构骨架。",
  sample_answer_en: "The difference is granularity. A tactic is a small design action for a quality-attribute response; a pattern/style is a larger reusable architectural solution that defines elements, relations, constraints, and tradeoffs, often combining several tactics. For availability, heartbeat detects failure and redundancy/failover supports recovery. In a concrete system these tactics may be part of a larger broker, client-server, or microservice structure."
});

patchQuestion("q_generic_design_strategies", {
  likely_answer_pattern: "Use the source-backed generic strategies: abstraction, decomposition, generate-and-test, iteration/refinement, and reuse. Treat layering, SOA, plugins, etc. as design concepts or architectural styles, not the core generic-strategy list.",
  answer_zh: "通用设计策略优先背五个有据可查的词：抽象、分解、生成-测试、迭代/细化、复用。分层、SOA、插件化、组件化等可以作为这些策略落到架构上的例子或设计概念，不要和通用策略清单混在一起当作同级必答。",
  sample_answer_zh: "软件设计的通用策略可以这样答：Abstraction 用抽象隐藏实现细节，让架构师先关注组件、连接件或模块；Decomposition 把系统或模块按关注点拆开；Generate-and-test 先提出候选方案，再用质量属性场景和约束评估；Iteration/Refinement 通过多轮设计逐步细化，ADD 就是典型迭代方法；Reuse 复用既有架构、模式、框架或组件来降低风险。分层、SOA、插件化等可以写成这些策略的应用例子，而不是把它们并列成“通用策略”。",
  sample_answer_en: "Source-backed generic design strategies are abstraction, decomposition, generate-and-test, iteration/refinement, and reuse. Abstraction hides implementation detail; decomposition separates concerns; generate-and-test creates and evaluates alternatives; iteration/refinement gradually improves the design, as in ADD; reuse lowers risk by using existing architectures, patterns, frameworks, or components. Layering, SOA, and plugins are applications or design concepts, not the core generic-strategy list."
});

patchQuestion("q_microservices_vs_soa", {
  sample_answer_zh: "微服务和 SOA 都强调服务化、分布式、松耦合和复用，但粒度和治理方式不同。SOA 往往面向企业级集成，服务粒度较大，治理更集中，可能借助 ESB、服务注册表、编排或全局数据模型。微服务通常围绕业务能力或子域拆分，服务更小，由团队独立开发、部署和运维，更强调轻量通信、服务自治、服务自有数据和基础设施自动化。微服务提高局部演进和持续交付能力，但也带来服务发现、分布式事务、一致性、链路追踪和运维复杂度。",
  sample_answer_en: "Microservices and SOA both use services, distribution, loose coupling, and reuse, but differ in granularity and governance. SOA is often enterprise-integration oriented, with larger services and more centralized governance, possibly using ESB, registries, orchestration, or global data models. Microservices are usually smaller and organized around business capabilities or subdomains, with independent team ownership, deployment, lightweight communication, service-owned data, and infrastructure automation. Microservices improve local evolution and continuous delivery but add discovery, distributed transactions, consistency, tracing, and operations complexity."
});

patchQuestion("q_microservice_food_delivery_design", {
  likely_answer_pattern: "Explain why the scenario fits microservices, identify operations from verbs, map business capabilities/subdomains to services, then describe APIs/events, data ownership, and quality tradeoffs. Concrete service names and Saga/events are an illustrative decomposition, not mandatory source wording.",
  answer_zh: "先说明外卖平台业务域多、流量峰值明显、团队可按业务能力并行演进，因此适合微服务。再从动词识别系统操作：浏览菜单、下单、支付、接单、配送、通知、结算。服务可示例拆为用户、商家/菜单、订单、支付、配送调度、通知、结算/评价等。每个服务拥有自己的数据，跨服务可用同步 API 或异步事件协作；如果涉及跨服务一致性，再补最终一致性和补偿策略。",
  recurring_terms: ["microservice decomposition", "business capability", "bounded context", "service-owned data", "service collaboration", "eventual consistency"],
  english_keywords: ["food delivery", "business capability", "service boundary", "service-owned data", "sync API / async event", "eventual consistency"],
  sample_answer_zh: "示例答案：外卖平台适合微服务，因为用户、商家、菜单、订单、支付、骑手调度和通知属于不同业务能力，访问压力和变化频率也不同，可以独立扩展和迭代。系统操作包括浏览餐厅和菜单、创建订单、支付订单、商家接单、分配骑手、更新配送状态、发送通知和结算。一个合理拆分是 User Service、Restaurant/Menu Service、Order Service、Payment Service、Delivery/Dispatch Service、Notification Service、Settlement Service。每个服务拥有自己的数据边界，用户请求可先进入 API Gateway；订单、支付、配送之间可通过同步 API 或异步事件协作。若题目追问一致性，可以补充最终一致性、Saga 或补偿操作，但这些是示例设计手段，不是题干固定要求。",
  sample_answer_en: "Illustrative answer: a food-delivery platform fits microservices because user, restaurant/menu, order, payment, delivery, notification, and settlement capabilities evolve and scale differently. Map operations to services: browse menus, create order, pay, accept order, dispatch rider, update delivery, notify, and settle. A reasonable split is User, Restaurant/Menu, Order, Payment, Delivery/Dispatch, Notification, and Settlement services. Each owns its data boundary; requests may enter through an API Gateway; services coordinate through synchronous APIs or asynchronous events. If the prompt asks about consistency, add eventual consistency, Saga, or compensation, but these are example design mechanisms rather than fixed wording in the prompt.",
  visual_hint_zh: "优先按业务能力画 6-7 个服务，并标出各自数据边界和协作方式。API Gateway、事件箭头或补偿流程可以作为一种示例画法；若题目只要求拆分，重点写服务边界、数据归属和协作方式。",
  visual_hint_en: "Prioritize 6-7 capability-based services, their data boundaries, and collaboration. API Gateway, event arrows, or compensation flows can be used as one illustrative drawing style; if the prompt only asks for decomposition, focus on boundaries, data ownership, and collaboration."
});

patchQuestion("q_operability_performance_scenarios", {
  english_keywords: ["source of stimulus", "stimulus", "artifact", "environment", "response", "response measure", "operability", "performance"],
  visual_hint_zh: "两个场景都画同一张六要素图，只是 source、stimulus、artifact、response measure 换成“运维操作”和“高并发请求”。",
  visual_hint_en: "Use the same six-part diagram for both; change the source, stimulus, artifact, and response measure for operator action vs high-load request.",
  sample_answer_zh: "这类题仍然用六要素模板，不要把下面数值当成原题固定标准。可操作性示例：刺激源是运维人员；刺激是在正常运行环境下收到故障告警并执行诊断/回滚；制品是监控控制台和目标服务；响应是展示日志、指标、链路和依赖状态，并允许执行回滚；响应度量可写“在限定时间内定位并完成操作，且不影响已完成业务”。性能示例：刺激源是用户或外部系统；刺激是在峰值负载下发起请求；制品是目标服务/API；环境是正常运行或高峰期；响应是完成处理并返回结果；响应度量写延迟、吞吐、错误率或资源占用阈值。",
  sample_answer_en: "Use the same six-part template; do not treat the following numbers or scenario details as fixed source wording. For operability: the source is an operator; the stimulus is a diagnosis/configuration/rollback action after an alarm during normal operation; the artifact is the console and target service; the response is showing logs, metrics, traces, dependencies, and allowing the operation; measures include bounded diagnosis/operation time and no disruption to completed business. For performance: the source is a user or external system; the stimulus is a request under normal or peak load; the artifact is the target service/API; the response is processing and returning the result; measures are latency, throughput, error rate, or resource usage."
});

const auditNotes = {
  q_arch_sources: ["有据可查：旧卷精确支持五项 requirements / system stakeholders / development organization / architects / technical environment；复习课支持 NFR/ASR/quality requirements 与 business goals 作为当前主线。已把业务目标标成补充驱动。", "Grounded: old papers support the exact five items. Review notes support NFR/ASR/quality-requirement and business-goal framing. Business goals are now marked as supplemental, not a replacement item."],
  q_arch_design_structure: ["复习课点名 architecture/design/structure；答案只保留高层设计、结构元素/关系/属性和 ASR/运行时关注，避免把理由/原则写成定义本体。", "The review class names architecture/design/structure. The answer keeps high-level design, elements/relations/properties, and ASR/runtime concerns without turning rationale/principles into the definition itself."],
  q_req_quality_asr: ["复习课明确：需求分功能需求、质量需求和约束；ASR 是影响架构的子集，通常来自重要且困难的质量需求或强约束。", "Review-class grounded: requirements include functional requirements, quality requirements, and constraints; ASRs are the architecture-shaping subset."],
  q_requirement_kinds: ["P0 主线：张贺和李杉杉复习纪要都明确功能需求、质量需求、约束是架构输入，质量需求需场景化。", "P0 core: both review notes identify functional requirements, quality requirements, and constraints as architecture inputs; quality requirements should be scenario-based."],
  q_quality_scenarios: ["P0 主线且以重绘表格作 ground truth；Availability 示例按表格使用 Heartbeat 监视器、服务器无响应、处理器、正常操作、通知操作者并继续操作、无停机时间。", "P0 core with the redrawn table as ground truth. The Availability example follows the table: heartbeat monitor, server does not respond, processor, normal operation, notify operator and continue operation, and no downtime."],
  q_asr_sources: ["复习课支持 requirements、workshop/interviews、business goals、utility tree；约束和场景作为输入/表达，不再泛化成一串同级来源。", "Review notes support requirements, workshops/interviews, business goals, and utility tree. Constraints/scenarios are framed as inputs/representations rather than a loose equal-level list."],
  q_risk_sensitivity_tradeoff: ["主要来自 ATAM/旧卷材料，复习课没有放在最高优先级；保留定义和例子，但标为 P2。", "Mainly ATAM/old-paper grounded, not current top priority; definitions and examples are kept as P2."],
  q_arch_process: ["以复习纪要和架构设计过程图为准，核心是四活动：Specifying ASRs、Architecture design、Documenting、Architecture Evaluation；演化维护降为生命周期补充。", "Grounded in review notes and the architecture-process diagram: four activities, not a five-step process with evolution as a core step."],
  q_add_process: ["以 ADD 3.0 重绘图为绝对基准；七步、五个 driver、Step 7 反馈回 Step 2 均与图一致。", "The redrawn ADD 3.0 diagram is the ground truth; seven steps, five drivers, and Step 7 feedback to Step 2 are aligned."],
  q_atam_outputs: ["旧卷/ATAM 资料支持，但今年复习主线弱；已移除无来源的“改进建议/action plan”口吻，只保留阶段产物骨架。", "Old-paper/ATAM grounded but not current mainline; unsupported improvement-action wording was removed."],
  q_atam_stakeholders: ["旧卷支持角色题，但具体人员名单不应绝对化；答案改成角色职责，测试/运维/安全等仅为 Phase 2 broader stakeholders 示例。", "Old-paper grounded; concrete stakeholder lists are examples. The answer focuses on roles and responsibilities."],
  q_style_view_mapping: ["旧卷高频且 Views and Beyond/slide 支持 module、C&C、allocation 三类；视图例子按课程常见分类保留。", "Old-paper high frequency and Views-and-Beyond/slides support module, C&C, and allocation categories."],
  q_different_views: ["复习课点名 architecture views/4+1，ADD 文档化部分支持根据 stakeholder concerns 选择多视图。", "Review notes mention architecture views/4+1; ADD documentation supports selecting views by stakeholder concerns."],
  q_doc_package: ["来源是 ADD 文档化与 Views and Beyond；属于文档化框架题，保留为 P1，但具体包内容按课程文档化术语表达。", "Grounded in ADD documentation and Views and Beyond; kept as P1 documentation framework."],
  q_4_plus_1: ["复习课和 slide 明确 Logical/Process/Physical/Development + use cases；保留标准五项。", "Review notes/slides explicitly cover Logical, Process, Physical, Development, plus use cases."],
  q_patterns_tactics: ["复习课明确 strategies/tactics/patterns/styles 关系；已把 tactic 例子改成可用性/性能/可修改性/安全的保守示例，不再堆不明来源词。", "Review notes support the tactics/patterns/styles relationship. Examples were tightened to conservative quality-attribute examples."],
  q_generic_design_strategies: ["原文/PPT 支持 abstraction、decomposition、generate-and-test、iteration/refinement、reuse；已把 SOA/插件化等从通用策略清单移到应用例子。", "Slides support abstraction, decomposition, generate-and-test, iteration/refinement, and reuse. SOA/plugins are now examples, not core strategies."],
  q_cnc_mvc: ["C&C 与 MVC 来自架构模式/视图材料；旧卷或课程模式部分支持，作为模式理解题保留。", "C&C and MVC are grounded in architecture-pattern/view materials and kept as a pattern-understanding question."],
  q_broker_pattern: ["旧卷和架构模式材料支持 Broker 的上下文、收益、局限；例子保持通用，不绑定具体系统。", "Old papers and pattern material support Broker context, benefits, and limits."],
  q_layered_style: ["旧卷和模式材料支持分层的上下文、收益、局限；答案保守聚焦 allowed-to-use、关注点分离和性能/跨层代价。", "Old papers and pattern material support layered context, benefits, and limits."],
  q_layered_vs_multitier: ["旧卷明确 Layered 是 module style、Multi-tier 是 allocation/deployment 视角；答案与该区分一致。", "Old papers explicitly distinguish layered as module style and multi-tier as allocation/deployment."],
  q_soa_quality: ["旧卷/讲义支持 SOA 原则及互操作性、可伸缩性、安全/性能影响；答案避免把收益写成无条件。", "Old papers/slides support SOA principles and quality impacts; benefits are not phrased as unconditional."],
  q_soa_ws_esb: ["旧卷原题支持 SOA、Web Service、ESB 三者关系；答案按思想/技术/基础设施区分。", "Old-paper grounded: SOA is style/principle, Web Service is implementation technology, ESB is infrastructure."],
  q_microservices_vs_soa: ["今年复习课明确微服务与 SOA 演进/对比是主线；已把 SOA 全局数据模型/ESB 等改成 often/may，避免绝对化。", "Current review mainline; SOA ESB/global-data wording is phrased as often/may, not universal."],
  q_spl_vs_single: ["主要来自旧卷和前人资料，非今年最高优先级；保留共性/可变性/核心资产骨架。", "Mainly old-paper/senior material, not current top priority; keep commonality/variability/core-assets skeleton."],
  q_reuse_spl_mda_soa: ["旧卷支持 SPL/MDA/SOA 复用比较；今年主线弱，P2 保留。", "Old-paper grounded SPL/MDA/SOA reuse comparison; P2 because it is weak in the current review outline."],
  q_spl_variability: ["旧卷和前人资料支持 variation points/mechanisms/binding time；今年主线弱，按 P2 骨架记忆。", "Old-paper/senior material supports variation points/mechanisms/binding time; keep as P2 skeleton."],
  q_binding_time: ["设计决定七类里有 binding time；三维变化题主要来自旧卷，故保留但降权。", "Binding time is in the seven design-decision categories; the three-dimension change question is mainly old-paper grounded."],
  q_three_tier_design: ["来自相邻/旧题的设计练习；三层示例是说明性答案，重点是 Views and Beyond 文档化，不作为今年主线。", "Adjacent/old design-practice prompt; the three-tier example is illustrative, with Views-and-Beyond as the main architecture skill."],
  q_distributed_cache_design: ["来自相邻/旧题；缓存失效协调器/Broker/Observer 是合理架构解法示例，非复习课核心主线。", "Adjacent/old prompt; coordinator/Broker/Observer is a reasonable illustrative architecture solution, not current core."],
  q_stakeholder_concerns: ["复习课反复强调 stakeholder concerns；角色列表是常见示例，不是封闭名单。", "Review notes repeatedly emphasize stakeholder concerns; the role list is illustrative, not exhaustive."],
  q_availability_mtbf_mttr: ["可用性是质量属性核心；MTBF/MTTR 计算主要来自相邻/旧题，因此降为 P2 辅助。", "Availability is core; MTBF/MTTR calculation is mainly adjacent/old-paper material, so P2."],
  q_pattern_architecture_boundary: ["模式和架构边界来自复习课的 pattern/style 讨论与旧题；用于防止 GoF 设计模式和架构模式混淆。", "Grounded in review discussion of pattern/style and old prompts; prevents confusing GoF patterns with architectural patterns."],
  q_design_decisions_importance: ["复习课明确七类设计决定，且强调架构不只是图；答案围绕结构 + 决策 + rationale。", "Review notes explicitly list seven design-decision categories and stress that architecture is more than diagrams."],
  q_cnc_soa: ["相邻/旧题支持 C&C + SOA 解释；今年复习把 SOA 放在演进/模式理解中，故 P2。", "Adjacent/old prompt supports C&C + SOA; current review treats SOA as evolution/pattern understanding, so P2."],
  q_pipe_filter_text_design: ["相邻课程题；已明确只保留架构组件/连接器/质量取舍，排除 Java 代码实现。", "Adjacent-course prompt; only architecture components/connectors/tradeoffs are kept, excluding Java implementation."],
  q_operability_performance_scenarios: ["六要素模板来自复习课；可操作性/性能组合来自 2025 相邻材料，具体数值已改为示范性表达而非原题标准。", "Six-part template is review-class core; operability/performance pairing is 2025 adjacent material. Concrete numbers are now illustrative, not fixed source wording."],
  q_microservices_characteristics: ["今年复习课明确微服务特性和对比是重点；六点特征来自李杉杉课件/前人资料，P0 保留。", "Current review emphasizes microservice characteristics/comparison; six traits are supported by Li Shanshan slides/senior material."],
  q_microservice_food_delivery_design: ["外卖平台来自 2025 相邻回忆题；服务名、API Gateway、事件、Saga 是示例拆法，已明确不是题干唯一标准。", "Food-delivery scenario comes from a 2025 adjacent recall; service names, API Gateway, events, and Saga are illustrative, not mandatory wording."]
};

for (const question of questions) {
  const note = auditNotes[question.id];
  if (!note) throw new Error(`Missing audit note for ${question.id}`);
  question.source_audit_zh = note[0];
  question.source_audit_en = note[1];
}

const reviewNotes = ["data/feishu/zhang-he-course-review.md", "data/feishu/li-shanshan-course-review.md", "data/extracted/slides/slides__Lecture 14: Course Review - softarch2026-review-1.txt"];
const processEvidence = [...reviewNotes, "site/assets/diagrams/architecture-design-process.svg"];
const qualityEvidence = [...reviewNotes, "site/assets/diagrams/quality-scenario.svg"];
const addEvidence = [...reviewNotes, "site/assets/diagrams/add-roadmap.svg", "data/extracted/slides/slides__Lecture 12: Attribute-Driven Design - Designing Software Architectures - ADD 3.0.txt"];
const docEvidence = [...reviewNotes, "data/extracted/slides/slides__Lecture 12: Attribute-Driven Design - Designing Software Architectures - ADD 3.0.txt"];
const patternEvidence = ["data/feishu/lu-jun-architectural-patterns-review.md", "data/extracted/slides/slides__Lecture 3: Architectural Patterns - 软件架构模式.txt", "data/extracted/slides/raw__架构.txt"];
const microEvidence = ["data/feishu/li-shanshan-course-review.md", "data/extracted/slides/slides__Lecture 6-7: Microservices Architecture - Microservices Patterns.txt", "data/blog/eaglebear-45083-review.html"];

const sourceAuditSources = {
  q_arch_sources: [...reviewNotes, "data/extracted/slides/raw__体系结构往年考题整理：.txt", "data/extracted/slides/raw__zqx考试复习资料__【批量下载】18年等__体系结构2015年春季2班A卷.txt", "data/extracted/slides/raw__zqx考试复习资料__【批量下载】18年等__体系结构2016年春季2班A卷.txt"],
  q_arch_design_structure: reviewNotes,
  q_req_quality_asr: reviewNotes,
  q_requirement_kinds: reviewNotes,
  q_quality_scenarios: qualityEvidence,
  q_asr_sources: [...reviewNotes, "data/extracted/slides/slides__Lecture 12: Attribute-Driven Design - Designing Software Architectures - ADD 3.0.txt"],
  q_risk_sensitivity_tradeoff: ["data/extracted/slides/raw__zqx考试复习资料__往年资料以及答案.txt", "data/extracted/slides/raw__架构.txt"],
  q_arch_process: processEvidence,
  q_add_process: addEvidence,
  q_atam_outputs: ["data/extracted/slides/raw__架构.txt", "data/extracted/slides/raw__zqx考试复习资料__【批量下载】18年等__体系结构2015年春季2班A卷.txt"],
  q_atam_stakeholders: ["data/extracted/slides/raw__架构.txt", "data/extracted/slides/raw__zqx考试复习资料__【批量下载】18年等__体系结构2015年春季2班B卷.txt"],
  q_style_view_mapping: docEvidence,
  q_different_views: docEvidence,
  q_doc_package: docEvidence,
  q_4_plus_1: reviewNotes,
  q_patterns_tactics: [...reviewNotes, ...patternEvidence],
  q_generic_design_strategies: ["data/extracted/slides/slides__Lecture 12: Attribute-Driven Design - Designing Software Architectures - ADD 3.0.txt", "data/extracted/slides/raw__架构.txt"],
  q_cnc_mvc: patternEvidence,
  q_broker_pattern: patternEvidence,
  q_layered_style: patternEvidence,
  q_layered_vs_multitier: patternEvidence,
  q_soa_quality: [...patternEvidence, "data/extracted/slides/raw__体系结构往年考题整理：.txt"],
  q_soa_ws_esb: [...patternEvidence, "data/extracted/slides/raw__体系结构往年考题整理：.txt"],
  q_microservices_vs_soa: microEvidence,
  q_spl_vs_single: ["data/extracted/slides/raw__体系结构往年考题整理：.txt"],
  q_reuse_spl_mda_soa: ["data/extracted/slides/raw__体系结构往年考题整理：.txt"],
  q_spl_variability: ["data/extracted/slides/raw__体系结构往年考题整理：.txt"],
  q_binding_time: [...reviewNotes, "data/extracted/slides/raw__体系结构往年考题整理：.txt"],
  q_three_tier_design: ["data/extracted/slides/raw__体系结构往年考题整理：.txt"],
  q_distributed_cache_design: ["data/extracted/slides/raw__体系结构往年考题整理：.txt"],
  q_stakeholder_concerns: reviewNotes,
  q_availability_mtbf_mttr: qualityEvidence,
  q_pattern_architecture_boundary: [...reviewNotes, ...patternEvidence],
  q_design_decisions_importance: reviewNotes,
  q_cnc_soa: [...patternEvidence, "raw/25软件系统设计回忆版.jpg", "data/extracted/raw/softsys-2025-architecture-filter.md"],
  q_pipe_filter_text_design: ["data/extracted/slides/raw__体系结构往年考题整理：.txt"],
  q_operability_performance_scenarios: [...qualityEvidence, "raw/25软件系统设计回忆版.jpg", "data/extracted/raw/softsys-2025-architecture-filter.md"],
  q_microservices_characteristics: microEvidence,
  q_microservice_food_delivery_design: [...microEvidence, "raw/25软件系统设计回忆版.jpg", "data/extracted/raw/softsys-2025-architecture-filter.md"]
};

for (const question of questions) {
  const evidence = sourceAuditSources[question.id] || [];
  question.source_audit_sources = unique([...(question.source_paths || []), ...evidence]);
  if (evidence.length) {
    mergeQuestionArray(question.id, "source_paths", evidence);
  }
}

const ids = new Set(questions.map((question) => question.id));
if (ids.size !== questions.length) throw new Error("Duplicate question ids detected");
if (questions.length !== 39) throw new Error(`Expected 39 questions, found ${questions.length}`);
const missingAudit = questions.filter((question) => !question.source_audit_zh || !question.source_audit_en || !question.source_audit_sources?.length);
if (missingAudit.length) throw new Error(`Missing source audit fields: ${missingAudit.map((question) => question.id).join(", ")}`);

const jsonOutput = `${JSON.stringify(questions, null, 2)}\n`;
const jsPath = path.join(cwd, "site/data/questions.js");
const jsOutput = `window.reviewQuestions = ${JSON.stringify(questions, null, 2)};\n`;

if (checkMode) {
  if (fs.readFileSync(qPath, "utf8") !== jsonOutput) throw new Error(`${path.relative(cwd, qPath)} is not grounded`);
  if (fs.readFileSync(jsPath, "utf8") !== jsOutput) throw new Error(`${path.relative(cwd, jsPath)} is not grounded`);
} else {
  writeAtomic(qPath, jsonOutput);
  writeAtomic(jsPath, jsOutput);
}

console.log(JSON.stringify({ groundedQuestions: questions.length, check: checkMode }, null, 2));
