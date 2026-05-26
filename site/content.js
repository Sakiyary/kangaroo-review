window.reviewContent = {
  meta: {
    title: {
      zh: "软件体系结构复习资料",
      en: "Software Architecture Exam Review"
    },
    exam: [
      { zh: "期末 60%，平时 40%", en: "Final exam 60%, coursework 40%" },
      { zh: "英文出题，可中文或英文作答，但不要中英混用", en: "Questions are in English; answer in Chinese or English, but do not mix languages" },
      { zh: "题型：简答题、论述/问答题、设计分析题", en: "Question types: short answers, essay/Q&A, design analysis" },
      { zh: "个别题目可能需要画图，带铅笔等画图工具", en: "Some questions may require diagrams; bring drawing tools" }
    ],
    evidence: [
      { zh: "复习课纪要：张贺、李杉杉、吕骏三份飞书智能纪要已抓取", en: "Review notes: three Feishu AI notes from Zhang He, Li Shanshan, and Lu Jun were fetched" },
      { zh: "课件：10 份 slides 已建清单；Lecture 1 与 Lecture 2-4 已走 Vision OCR", en: "Slides: 10 PDFs cataloged; Lecture 1 and Lecture 2-4 were processed by Vision OCR" },
      { zh: "前人资料：raw 中 Markdown/DOCX/RTF/PDF 已抽取，真题聚类 33 条", en: "Raw materials: Markdown/DOCX/RTF/PDF extracted; 33 past-paper clusters normalized" }
    ]
  },
  priorities: [
    {
      level: "P0",
      weight: "必看 / Highest",
      title: { zh: "复习课明确点名的主线", en: "Current Review-Class Focus" },
      summary: {
        zh: "先拿这些：ADD 3.0、微服务、DDD、企业架构。李杉杉复习课明确说这些约 30-40 分，设计题大概率继续偏 DDD/ADD。",
        en: "Start here: ADD 3.0, microservices, DDD, and enterprise architecture. Li Shanshan's review class said these account for about 30-40 points, with design questions likely around DDD/ADD."
      },
      items: [
        {
          topicId: "add",
          zh: "ADD 3.0：会流程、会迭代目标、会文档化与评审",
          en: "ADD 3.0: know the process, iteration goals, documentation, and review"
        },
        {
          topicId: "microservices",
          zh: "微服务：拆分、通信、部署、可观测性模式",
          en: "Microservices: decomposition, communication, deployment, and observability patterns"
        },
        {
          topicId: "ddd",
          zh: "DDD：战略/战术设计、限界上下文、事件风暴",
          en: "DDD: strategic/tactical design, bounded context, event storming"
        },
        {
          topicId: "enterprise",
          zh: "企业架构：4A/5A、TOGAF/ADM、CBM、建模落地",
          en: "Enterprise architecture: 4A/5A, TOGAF/ADM, CBM, modeling and implementation"
        }
      ]
    },
    {
      level: "P1",
      weight: "高频 / High",
      title: { zh: "往年题高频核心", en: "Historical High-Frequency Core" },
      summary: {
        zh: "这些是往年题反复出现的基本盘，也是简答题最稳的得分来源。",
        en: "These recur in past papers and are the safest source of short-answer points."
      },
      items: [
        { topicId: "quality", zh: "质量属性场景：六要素模板必须熟", en: "Quality attribute scenarios: memorize the six-part template" },
        { topicId: "asr", zh: "ASR：来源、识别、效用树优先级", en: "ASRs: sources, identification, utility tree priorities" },
        { topicId: "views", zh: "视图与文档：4+1、Views and Beyond、三类 viewtype", en: "Views and documentation: 4+1, Views and Beyond, three viewtype families" },
        { topicId: "patterns", zh: "模式/风格/战术：会比较、会说取舍", en: "Patterns/styles/tactics: compare and explain tradeoffs" }
      ]
    },
    {
      level: "P2",
      weight: "辅助 / Support",
      title: { zh: "背景与补充", en: "Supporting Background" },
      summary: {
        zh: "用于论述题提气和补充上下文；AI 增强/AI 原生按复习课说法不作为考试重点。",
        en: "Useful context for essays; AI-enabled/AI-native architecture is not a central exam target according to the review notes."
      },
      items: [
        { topicId: "foundation", zh: "软件架构定义、架构 vs 设计/结构、架构师职责", en: "Definitions, architecture vs design/structure, architect responsibilities" },
        { topicId: "evolution", zh: "架构演进：主机终端、C/S、分层、SOA、微服务、云原生", en: "Evolution: mainframe/terminal, C/S, layered, SOA, microservices, cloud native" },
        { topicId: "ai", zh: "AI 赋能架构：背景了解，不当作主复习负担", en: "AI-enabled architecture: background only, not the main review load" }
      ]
    }
  ],
  topics: [
    {
      id: "foundation",
      priority: "P1",
      title: { zh: "软件架构基础", en: "Software Architecture Foundations" },
      takeaway: {
        zh: "架构是高抽象层次的设计，关注元素、关系、属性及其演化；不仅是静态结构，也包含运行时依赖、通信和动态关系。",
        en: "Architecture is high-level design about elements, relations, properties, and evolution; it is not only static structure, but also runtime dependencies, communication, and dynamics."
      },
      answerFrame: {
        zh: "答题先说定义，再区分 design/structure，最后落到“解决用户与开发者的矛盾”：用户要更多功能和快速变化，开发者要易开发、低成本、易维护。",
        en: "Answer by defining architecture, distinguishing it from design/structure, then connecting it to the core tension: users want more features and fast change; developers need ease of development, lower cost, and maintainability."
      },
      bullets: [
        { zh: "架构来源：需求、利益相关者、开发组织、架构师经验、技术/运行环境、业务目标。", en: "Sources: requirements, stakeholders, development organization, architect experience, technical/operational environment, business goals." },
        { zh: "架构师四类工作：协调利益相关者、软件工程经验/最佳实践、技术知识、风险管理。", en: "Architect work: stakeholder liaison, software engineering practices, technical knowledge, risk management." },
        { zh: "架构活动：识别 ASR、设计架构、输出文档、评估架构，并随需求演化维护。", en: "Activities: identify ASRs, design the architecture, document it, evaluate it, and evolve it as requirements change." }
      ],
      sources: ["Zhang He review notes", "Lecture 14 softarch2026 review", "Lecture 1 OCR"]
    },
    {
      id: "quality",
      priority: "P1",
      title: { zh: "质量属性与场景建模", en: "Quality Attributes and Scenario Modeling" },
      takeaway: {
        zh: "质量属性是架构设计的主要依据。只有被场景化描述的质量需求，才适合作为架构设计输入。",
        en: "Quality attributes are primary drivers of architecture. Only scenario-based quality requirements are suitable architectural inputs."
      },
      answerFrame: {
        zh: "固定六要素：source of stimulus、stimulus、environment、artifact、response、response measure。题目要画图时，把六个节点都标出来。",
        en: "Use the fixed six elements: source of stimulus, stimulus, environment, artifact, response, response measure. If a diagram is requested, label all six nodes."
      },
      bullets: [
        { zh: "外部质量属性：可用性、性能、易用性等，用户能感知。", en: "External attributes: availability, performance, usability, etc.; visible to users." },
        { zh: "内部质量属性：可修改性、可维护性、可测试性、可移植性等，开发者更关注。", en: "Internal attributes: modifiability, maintainability, testability, portability, etc.; mostly developer concerns." },
        { zh: "tactic 是解决质量属性问题的原子设计决定，多个 tactic 可组合成 pattern。", en: "A tactic is an atomic design decision for a quality concern; multiple tactics can combine into a pattern." }
      ],
      sources: ["Zhang He review notes", "Li Shanshan review notes", "Lecture 14 review slide"]
    },
    {
      id: "asr",
      priority: "P1",
      title: { zh: "ASR 与效用树", en: "ASRs and Utility Tree" },
      takeaway: {
        zh: "ASR 是会显著影响架构设计决定的需求，不等于所有需求。复习课强调要从需求文档、访谈/workshop 和业务目标中补齐。",
        en: "An ASR is a requirement that significantly affects architectural decisions. It is not every requirement. The review notes emphasize documents, interviews/workshops, and business goals."
      },
      answerFrame: {
        zh: "先定义 ASR，再说来源，最后说效用树：系统效用分解为质量属性、场景、度量；叶子节点从用户价值与开发难度/利益两维评估。",
        en: "Define ASR, list sources, then explain the utility tree: system utility breaks down into quality attributes, scenarios, and measures; leaves are prioritized by user value and development impact/difficulty."
      },
      bullets: [
        { zh: "需求文档里的 NFR 常不够场景化，需要 stakeholder workshop 或 interview。", en: "NFRs in requirement documents are often not scenario-based enough; use stakeholder workshops or interviews." },
        { zh: "高用户价值且高开发影响的叶节点应优先进入架构设计。", en: "Leaves with high user value and high development impact should be handled first." },
        { zh: "约束是预先给定的设计决定，也会影响架构空间。", en: "Constraints are pre-made design decisions that shape the architecture space." }
      ],
      sources: ["Zhang He review notes", "Past paper clusters"]
    },
    {
      id: "add",
      priority: "P0",
      title: { zh: "ADD 3.0 属性驱动设计", en: "ADD 3.0 Attribute-Driven Design" },
      takeaway: {
        zh: "ADD 是结构化、迭代式架构设计方法。复习重点不是背定义，而是会用驱动因素组织设计轮次。",
        en: "ADD is a structured, iterative architecture design method. The key is not the definition, but using drivers to organize design iterations."
      },
      answerFrame: {
        zh: "按流程答：确认设计目标，选择驱动因素，细化系统元素，选择设计概念，实例化元素并分配职责，定义接口，文档化，评审与迭代。",
        en: "Answer by process: establish design purpose, select drivers, refine system elements, choose design concepts, instantiate elements and responsibilities, define interfaces, document, review, iterate."
      },
      bullets: [
        { zh: "驱动因素包括功能需求、质量属性、设计目标、约束。", en: "Drivers include functional requirements, quality attributes, design goals, and constraints." },
        { zh: "复习课提到酒店定价系统案例：可按 roadmap 做 3-4 轮迭代。", en: "The review class mentioned a hotel pricing case: use a roadmap of about 3-4 design iterations." },
        { zh: "常见轮次：整体结构、核心功能、质量属性、开发/部署/运营需求。", en: "Common iterations: overall structure, core functionality, quality attributes, development/deployment/operations concerns." }
      ],
      sources: ["Li Shanshan review notes", "Lecture 12/13 extracted text", "Lecture 14 course review slide"]
    },
    {
      id: "microservices",
      priority: "P0",
      title: { zh: "微服务架构", en: "Microservices Architecture" },
      takeaway: {
        zh: "考试不重定义，重特性、对比、模式和设计取舍。要能解释它解决分层/SOA 的哪些痛点，又带来哪些部署、通信和运维复杂性。",
        en: "The exam is less about definition and more about characteristics, comparisons, patterns, and tradeoffs. Explain what pain points microservices solve and what communication, deployment, and operations complexity they add."
      },
      answerFrame: {
        zh: "先说演进动因，再分四组模式：拆分、通信、部署、可观测性。最后点出权衡：自治/独立部署 vs 分布式复杂性。",
        en: "Start with evolution motivation, then organize patterns into decomposition, communication, deployment, and observability. Finish with the tradeoff: autonomy/independent deployment vs distributed complexity."
      },
      bullets: [
        { zh: "拆分：按业务能力、按子域；目标是高内聚、低耦合、SRP、CCP、团队自治。", en: "Decomposition: by business capability or subdomain; goals are high cohesion, loose coupling, SRP, CCP, team autonomy." },
        { zh: "通信：Circuit Breaker、服务发现、API Gateway，处理局部故障和外部访问。", en: "Communication: Circuit Breaker, service discovery, API Gateway; handle partial failure and external access." },
        { zh: "部署：容器、服务部署平台、serverless，解决隔离、扩展、成本与异构技术。", en: "Deployment: containers, service deployment platform, serverless; handle isolation, scaling, cost, and technology heterogeneity." },
        { zh: "可观测性：日志聚合、审计日志、指标、分布式追踪、异常跟踪、健康检查 API。", en: "Observability: log aggregation, audit logging, metrics, distributed tracing, exception tracking, health check API." }
      ],
      sources: ["Li Shanshan review notes", "Lecture 14 course review slide", "Lecture 6-7 extracted text"]
    },
    {
      id: "ddd",
      priority: "P0",
      title: { zh: "领域驱动设计 DDD", en: "Domain-Driven Design" },
      takeaway: {
        zh: "DDD 适合业务复杂、耦合变化关系复杂的系统，不是万能方法。复习要抓从问题空间到解空间的流程。",
        en: "DDD fits systems with high business complexity and complex coupling/change relationships. It is not universal. Focus on the process from problem space to solution space."
      },
      answerFrame: {
        zh: "用“适用范围 -> 战略设计 -> 战术设计 -> 事件风暴/建模”作答。设计题要能划子域、限界上下文、上下文映射，并给出聚合/领域事件。",
        en: "Answer with: applicability -> strategic design -> tactical design -> event storming/modeling. For design questions, identify subdomains, bounded contexts, context maps, aggregates, and domain events."
      },
      bullets: [
        { zh: "战略模式：核心/通用/支撑子域、限界上下文、上下文映射、防腐层、共享内核。", en: "Strategic patterns: core/generic/supporting subdomain, bounded context, context mapping, anti-corruption layer, shared kernel." },
        { zh: "战术模式：统一语言、实体、值对象、聚合、领域服务、工厂、资源库。", en: "Tactical patterns: ubiquitous language, entity, value object, aggregate, domain service, factory, repository." },
        { zh: "事件风暴：领域事件是过去发生的业务事实，命名常用名词 + 过去式动词，例如 OrderCreated。", en: "Event storming: a domain event is a past business fact, often named as noun + past-tense verb, e.g. OrderCreated." }
      ],
      sources: ["Li Shanshan review notes", "Lecture 14 course review slide", "Lecture 8-9 extracted text"]
    },
    {
      id: "enterprise",
      priority: "P0",
      title: { zh: "企业架构", en: "Enterprise Architecture" },
      takeaway: {
        zh: "企业架构题难度高但老师要求偏理论理解：知道 4A/5A、TOGAF/ADM、CBM 以及落地建模思路即可。",
        en: "Enterprise architecture questions are hard but expected at a conceptual level: know 4A/5A, TOGAF/ADM, CBM, and implementation/modeling ideas."
      },
      answerFrame: {
        zh: "回答时围绕“找结构、找关系、定原则”。先分业务/数据/应用/技术架构，再用 TOGAF ADM 或 CBM 说明怎么落地。",
        en: "Frame the answer as finding structures, relationships, and principles. Split business/data/application/technology architecture, then use TOGAF ADM or CBM to explain implementation."
      },
      bullets: [
        { zh: "4A：业务架构、数据架构、应用架构、技术架构；有材料也提安全架构形成 5A。", en: "4A: business, data, application, and technology architecture; some materials add security architecture as 5A." },
        { zh: "TOGAF ADM：预备、愿景、业务架构、信息系统架构、技术架构、机会与解决方案、迁移规划、实施治理、变更管理。", en: "TOGAF ADM: preliminary, vision, business architecture, information systems architecture, technology architecture, opportunities and solutions, migration planning, implementation governance, change management." },
        { zh: "CBM：以业务能力为核心，组件高内聚、低耦合、可复用、可组装。", en: "CBM: business capability as the core; components are cohesive, loosely coupled, reusable, and composable." }
      ],
      sources: ["Li Shanshan review notes", "Lecture 14 course review slide", "Lecture 10-11 extracted text"]
    },
    {
      id: "patterns",
      priority: "P1",
      title: { zh: "架构模式、风格与演进", en: "Architectural Patterns, Styles, and Evolution" },
      takeaway: {
        zh: "吕骏复习强调：不要死背模式名，要理解每个模式回应了什么时代矛盾、改变了什么管理对象、牺牲了什么质量属性。",
        en: "Lu Jun emphasized: do not memorize pattern names mechanically. Understand what historical tension each pattern addresses, what object it manages, and what quality attributes it trades off."
      },
      answerFrame: {
        zh: "按“时代矛盾 -> 架构骨架 -> 解决的痛点 -> 新问题/取舍 -> 适用场景”作答。画图时先画最简单骨架。",
        en: "Answer by: historical tension -> structural skeleton -> pain point solved -> new problems/tradeoffs -> suitable context. When drawing, start with the simplest skeleton."
      },
      bullets: [
        { zh: "主线：算力稀缺 -> 多用户共享 -> 富交互 -> 系统分层 -> 企业协同 -> 团队自治发布 -> 平台化韧性。", en: "Main line: scarce computation -> multi-user sharing -> rich interaction -> system layering -> enterprise collaboration -> autonomous team releases -> platform resilience." },
        { zh: "CS 解决主机终端交互弱的问题，但胖客户端带来维护困难。", en: "C/S solves weak interaction in mainframe/terminal systems, but fat clients create maintenance difficulty." },
        { zh: "分层解决耦合问题，但分层不够细时缺乏独立部署和局部迭代能力。", en: "Layering reduces coupling, but coarse layers lack independent deployment and local iteration." },
        { zh: "事件驱动把同步调用链变异步，提升韧性，但引入时序与排障复杂性。", en: "Event-driven design turns synchronous call chains asynchronous, improving resilience while adding ordering and debugging complexity." }
      ],
      sources: ["Lu Jun review notes", "Lecture 3 extracted text"]
    },
    {
      id: "views",
      priority: "P1",
      title: { zh: "视图与架构文档化", en: "Views and Architecture Documentation" },
      takeaway: {
        zh: "视图是隐藏无关信息、突出某一关注点的系统表示。往年题非常高频，但复习课对今年是否重点有冲突信号，作为高频但降权复习。",
        en: "A view represents one concern by hiding irrelevant information. It is frequent in past papers, but review notes give mixed signals for this year, so review it as high-frequency but not the top focus."
      },
      answerFrame: {
        zh: "4+1：逻辑、过程、物理、开发 + 用例场景。Views and Beyond：先文档化视图，再补充跨视图信息、接口、映射、理由、质量属性。",
        en: "4+1: logical, process, physical, development + use-case scenarios. Views and Beyond: document views first, then beyond-view information, interfaces, mappings, rationale, and quality attributes."
      },
      bullets: [
        { zh: "Module viewtype：分解、使用、泛化、分层、数据模型等。", en: "Module viewtype: decomposition, uses, generalization, layered, data model, etc." },
        { zh: "Component-and-connector viewtype：运行时组件、连接器、交互。", en: "Component-and-connector viewtype: runtime components, connectors, interactions." },
        { zh: "Allocation viewtype：软件到环境、硬件、团队、文件系统等的映射。", en: "Allocation viewtype: mapping software to environment, hardware, teams, filesystems, etc." }
      ],
      sources: ["Past paper clusters", "Lecture 1 OCR", "Zhang He review notes"]
    }
  ],
  glossary: [
    { category: "foundation", zh: "软件架构", en: "Software Architecture", noteZh: "系统元素、关系、属性及演化原则的高层设计。", noteEn: "High-level design of system elements, relations, properties, and evolution principles." },
    { category: "foundation", zh: "架构师", en: "Software Architect", noteZh: "协调利益相关者、做技术/工程决策并管理架构风险的人。", noteEn: "A role coordinating stakeholders, making technical/engineering decisions, and managing architectural risks." },
    { category: "requirements", zh: "架构相关需求", en: "Architecturally Significant Requirement (ASR)", noteZh: "会显著影响架构设计决定的需求。", noteEn: "A requirement with significant impact on architectural decisions." },
    { category: "requirements", zh: "质量属性", en: "Quality Attribute", noteZh: "系统“做得好不好”的性质，如可用性、性能、可修改性。", noteEn: "A property describing how well a system behaves, such as availability, performance, or modifiability." },
    { category: "requirements", zh: "约束", en: "Constraint", noteZh: "设计前已经确定且必须满足的设计决定。", noteEn: "A pre-made design decision that must be satisfied." },
    { category: "scenario", zh: "刺激源", en: "Source of Stimulus", noteZh: "触发质量场景的人、系统或事件来源。", noteEn: "The person, system, or event source that triggers a quality scenario." },
    { category: "scenario", zh: "刺激", en: "Stimulus", noteZh: "触发系统响应的事件。", noteEn: "The event that triggers a system response." },
    { category: "scenario", zh: "环境", en: "Environment", noteZh: "场景发生时系统所处状态，如正常运行、高峰期、故障中。", noteEn: "The condition under which the scenario occurs, such as normal operation, peak load, or failure." },
    { category: "scenario", zh: "制品", en: "Artifact", noteZh: "被刺激影响的系统部分。", noteEn: "The part of the system affected by the stimulus." },
    { category: "scenario", zh: "响应", en: "Response", noteZh: "系统应如何反应。", noteEn: "How the system should react." },
    { category: "scenario", zh: "响应度量", en: "Response Measure", noteZh: "衡量响应是否达标的指标。", noteEn: "The metric used to judge whether the response is acceptable." },
    { category: "quality", zh: "可用性", en: "Availability", noteZh: "系统在需要时可提供服务的能力。", noteEn: "The ability of a system to provide service when needed." },
    { category: "quality", zh: "可修改性", en: "Modifiability", noteZh: "系统被低成本、安全修改的能力。", noteEn: "The ability to change a system safely and cheaply." },
    { category: "quality", zh: "互操作性", en: "Interoperability", noteZh: "系统与外部系统正确交换并理解数据的能力。", noteEn: "The ability to exchange and correctly interpret data with external systems." },
    { category: "quality", zh: "性能", en: "Performance", noteZh: "响应时间、吞吐量、资源使用等表现。", noteEn: "Behavior measured by latency, throughput, resource usage, etc." },
    { category: "decision", zh: "策略", en: "Strategy", noteZh: "解决质量问题的较高层方向。", noteEn: "A higher-level direction for solving a quality problem." },
    { category: "decision", zh: "战术", en: "Tactic", noteZh: "解决质量属性问题的原子设计决定。", noteEn: "An atomic design decision addressing a quality attribute." },
    { category: "decision", zh: "模式", en: "Pattern", noteZh: "对反复出现问题的可复用解决方案，常由多个战术组合。", noteEn: "A reusable solution to a recurring problem, often combining tactics." },
    { category: "decision", zh: "风格", en: "Style", noteZh: "一类架构组织方式及其约束。", noteEn: "A way of organizing architecture with characteristic constraints." },
    { category: "views", zh: "逻辑视图", en: "Logical View", noteZh: "描述重要元素及其关系。", noteEn: "Describes significant elements and their relationships." },
    { category: "views", zh: "过程视图", en: "Process View", noteZh: "描述并发、通信和运行时行为。", noteEn: "Describes concurrency, communication, and runtime behavior." },
    { category: "views", zh: "物理视图", en: "Physical View", noteZh: "描述进程/软件到硬件或部署环境的映射。", noteEn: "Describes mapping of processes/software to hardware or deployment environments." },
    { category: "views", zh: "开发视图", en: "Development View", noteZh: "描述软件内部组织及开发结构。", noteEn: "Describes internal software organization and development structure." },
    { category: "views", zh: "用例场景", en: "Use-Case Scenarios", noteZh: "4+1 中贯穿多个视图的核心场景。", noteEn: "The '+1' scenarios that connect multiple views in 4+1." },
    { category: "methods", zh: "属性驱动设计", en: "Attribute-Driven Design (ADD)", noteZh: "按驱动因素迭代推导架构设计的方法。", noteEn: "An iterative method deriving architecture from design drivers." },
    { category: "methods", zh: "架构权衡分析方法", en: "Architecture Tradeoff Analysis Method (ATAM)", noteZh: "围绕质量属性、风险、敏感点、权衡点评估架构的方法。", noteEn: "A method evaluating architecture through quality attributes, risks, sensitivity points, and tradeoff points." },
    { category: "methods", zh: "效用树", en: "Utility Tree", noteZh: "把质量目标分解成场景与度量，并排序优先级。", noteEn: "A tree decomposing quality goals into scenarios and measures for prioritization." },
    { category: "ddd", zh: "限界上下文", en: "Bounded Context", noteZh: "模型和语言保持一致的业务/知识边界。", noteEn: "A boundary within which a model and language stay consistent." },
    { category: "ddd", zh: "上下文映射", en: "Context Mapping", noteZh: "描述多个限界上下文之间的关系。", noteEn: "Describes relationships among bounded contexts." },
    { category: "ddd", zh: "防腐层", en: "Anti-Corruption Layer", noteZh: "隔离外部模型污染本领域模型的适配层。", noteEn: "An adapter layer that prevents external models from polluting the domain model." },
    { category: "ddd", zh: "聚合", en: "Aggregate", noteZh: "由聚合根控制一致性边界的一组领域对象。", noteEn: "A consistency boundary of domain objects controlled by an aggregate root." },
    { category: "ddd", zh: "领域事件", en: "Domain Event", noteZh: "过去发生且对业务有意义的事实。", noteEn: "A meaningful business fact that has already happened." },
    { category: "microservices", zh: "断路器", en: "Circuit Breaker", noteZh: "阻止局部故障在服务调用链中扩散的模式。", noteEn: "A pattern preventing local failures from cascading across service calls." },
    { category: "microservices", zh: "服务发现", en: "Service Discovery", noteZh: "让客户端或平台找到服务实例地址的机制。", noteEn: "A mechanism for finding service instance locations." },
    { category: "microservices", zh: "API 网关", en: "API Gateway", noteZh: "外部客户端访问后端服务的统一入口。", noteEn: "A unified entry point for external clients to access backend services." },
    { category: "microservices", zh: "可观测性", en: "Observability", noteZh: "通过日志、指标、链路等理解系统行为和定位问题的能力。", noteEn: "The ability to understand behavior and diagnose issues through logs, metrics, and traces." },
    { category: "enterprise", zh: "业务架构", en: "Business Architecture", noteZh: "描述业务能力、流程、组织和价值链。", noteEn: "Describes capabilities, processes, organization, and value chains." },
    { category: "enterprise", zh: "数据架构", en: "Data Architecture", noteZh: "描述数据资产、标准、责任与模型。", noteEn: "Describes data assets, standards, responsibilities, and models." },
    { category: "enterprise", zh: "应用架构", en: "Application Architecture", noteZh: "描述应用蓝图、组件与服务共享关系。", noteEn: "Describes application blueprint, components, and shared services." },
    { category: "enterprise", zh: "技术架构", en: "Technology Architecture", noteZh: "描述技术组件、基础设施和标准。", noteEn: "Describes technology components, infrastructure, and standards." },
    { category: "enterprise", zh: "TOGAF ADM", en: "TOGAF ADM", noteZh: "企业架构开发方法的迭代周期。", noteEn: "The iterative development cycle in TOGAF." },
    { category: "enterprise", zh: "业务组件模型", en: "Component Business Model (CBM)", noteZh: "按业务能力划分可复用、可组装组件的方法。", noteEn: "A method organizing reusable and composable components by business capability." }
  ],
  assets: [
    {
      title: { zh: "张贺复习课画板", en: "Zhang He review whiteboard" },
      src: "assets/feishu-whiteboards/zhang-he.jpg",
      note: { zh: "对应课程总复习大纲，含基础内容与题型信息。", en: "Course-review outline with fundamentals and exam type information." }
    },
    {
      title: { zh: "李杉杉复习课画板", en: "Li Shanshan review whiteboard" },
      src: "assets/feishu-whiteboards/li-shanshan.jpg",
      note: { zh: "对应 ADD、微服务、DDD、企业架构等复习重点。", en: "Review focus for ADD, microservices, DDD, and enterprise architecture." }
    },
    {
      title: { zh: "吕骏架构模式画板", en: "Lu Jun architecture-patterns whiteboard" },
      src: "assets/feishu-whiteboards/lu-jun.jpg",
      note: { zh: "对应架构演进与时代矛盾主线。", en: "Architecture evolution and historical-tension storyline." }
    }
  ]
};
