// Maintenance note: keep public study copy clean. Do not expose internal audit/change-log wording in user-facing fields.
// Study-copy style: Chinese and English entries should have the same point order and comparable detail; answers should be concrete, point-by-point, and memorisable.
window.reviewContent = {
  "meta": {
    "title": {
      "zh": "《软件体系结构》复习资料 2026 南大软院研究生",
      "en": "Software Architecture Review 2026 NJU Software Institute Graduate"
    },
    "exam": [
      {
        "zh": "期末 60%，平时 40%",
        "en": "Final exam 60%, coursework 40%"
      },
      {
        "zh": "英文出题，可中文或英文作答，但不要中英混用",
        "en": "Questions are in English; answer in Chinese or English, but do not mix languages"
      },
      {
        "zh": "题型：简答题、论述/问答题、设计分析题",
        "en": "Question types: short answers, essay/Q&A, design analysis"
      },
      {
        "zh": "个别题目可能需要画图，带铅笔等画图工具",
        "en": "Some questions may require diagrams; bring drawing tools"
      }
    ]
  },
  "priorities": [
    {
      "level": "P0",
      "weight": "必会 / Must know",
      "title": {
        "zh": "核心复习内容",
        "en": "Core Review Topics"
      },
      "summary": {
        "zh": "优先啃这些：基础概念、4+1、质量属性/ASR、战术/模式/风格、架构演进、七类设计决定、ADD 3.0、微服务和 DDD。它们来自课程材料与课程讲义，是答题语言和设计题骨架。",
        "en": "Start here: foundations, 4+1, quality/ASR, tactics/patterns/styles, architecture evolution, seven design decisions, ADD 3.0, microservices, and DDD. These come from the review material and review slides."
      },
      "items": [
        {
          "topicId": "foundation",
          "zh": "软件架构基本概念、架构师职责、架构来源",
          "en": "Architecture foundations, architect roles, sources of architecture"
        },
        {
          "topicId": "views",
          "zh": "4+1 视图 与架构文档化",
          "en": "4+1 views and architecture documentation"
        },
        {
          "topicId": "quality",
          "zh": "质量属性场景：六要素表必须会写",
          "en": "Quality attribute scenarios: six-part template"
        },
        {
          "topicId": "asr",
          "zh": "ASR、效用树 与优先级排序",
          "en": "ASRs, utility tree, and prioritization"
        },
        {
          "topicId": "patterns",
          "zh": "架构演进、风格/模式/战术的差异与取舍",
          "en": "Architecture evolution and style/pattern/tactic tradeoffs"
        },
        {
          "topicId": "design-decisions",
          "zh": "七类设计决定与 设计理由",
          "en": "Seven design-decision categories and rationale"
        },
        {
          "topicId": "add",
          "zh": "ADD 3.0 七步、驱动因素、迭代、文档化",
          "en": "ADD 3.0 steps, drivers, iteration, documentation"
        },
        {
          "topicId": "microservices",
          "zh": "微服务特性、对比、拆分/通信/部署/可观测性",
          "en": "Microservice characteristics, comparison, decomposition, communication, deployment, observability"
        },
        {
          "topicId": "ddd",
          "zh": "DDD 适用范围、战略/战术设计、事件风暴",
          "en": "DDD scope, strategic/tactical design, event storming"
        }
      ]
    },
    {
      "level": "P1",
      "weight": "应会 / Should know",
      "title": {
        "zh": "可用于展开作答的材料",
        "en": "Useful Expansion Topics"
      },
      "summary": {
        "zh": "用于把 P0 写成完整论述或设计题：企业架构 4A/TOGAF/CBM、HPS ADD 案例、微服务+DDD 设计题模板。",
        "en": "Use these to expand P0 answers: EA 4A/TOGAF/CBM, the HPS ADD case, and microservice + DDD design templates."
      },
      "items": [
        {
          "topicId": "enterprise",
          "zh": "企业架构：4A、TOGAF ADM、CBM，案例只作理解材料",
          "en": "Enterprise architecture: 4A, TOGAF ADM, CBM; cases are understanding aids"
        },
        {
          "topicId": "add",
          "zh": "HPS ADD 案例：用作流程支撑，不当唯一答案",
          "en": "HPS ADD case: support the process, not the only answer"
        },
        {
          "topicId": "microservices",
          "zh": "微服务设计题：从操作/业务能力/子域推服务边界",
          "en": "Microservice design: derive service boundaries from operations/capabilities/subdomains"
        },
        {
          "topicId": "ddd",
          "zh": "DDD 设计题：子域、限界上下文、聚合、领域事件",
          "en": "DDD design: subdomains, bounded contexts, aggregates, domain events"
        }
      ]
    },
    {
      "level": "P2",
      "weight": "保底 / Backup",
      "title": {
        "zh": "保底掌握内容",
        "en": "Backup Topics"
      },
      "summary": {
        "zh": "ATAM、SPL/MDA/复用、代理模式、缓存、三层等内容掌握到能识别、能简答；第一轮复习仍应先完成核心内容。",
        "en": "ATAM, SPL/MDA/reuse, Broker, cache, and three-tier topics should be recognizable and answerable at a basic level; finish core topics first."
      },
      "items": [
        {
          "topicId": "evaluation-atam",
          "zh": "ATAM：输出、角色、风险/敏感点/权衡 掌握骨架",
          "en": "ATAM: outputs, roles, risk/sensitivity/tradeoff core skeleton"
        },
        {
          "topicId": "reuse-variability",
          "zh": "SPL/MDA/复用与可变性：概念与三要素",
          "en": "SPL/MDA/reuse and variability: concepts and key elements"
        }
      ]
    },
    {
      "level": "P3",
      "weight": "只读 / Background",
      "title": {
        "zh": "背景了解",
        "en": "Background"
      },
      "summary": {
        "zh": "AI 增强、AI 原生、GoF 设计模式和代码实现类题目只作背景了解；复习时不占用核心内容时间。",
        "en": "AI-enabled/native architecture, GoF design-pattern questions, and coding-style questions are background only; do not spend core review time on them."
      },
      "items": [
        {
          "topicId": "ai",
          "zh": "AI 增强 / AI 原生：了解概念即可",
          "en": "AI-enabled/native architecture: concept-level understanding only"
        }
      ]
    }
  ],
  "topics": [
    {
      "id": "foundation",
      "priority": "P0",
      "title": {
        "zh": "软件架构基础",
        "en": "Software Architecture Foundations"
      },
      "takeaway": {
        "zh": "架构是高抽象层次的设计，关注元素、关系、属性及其演化；不仅是静态结构，也包含运行时依赖、通信和动态关系。",
        "en": "Architecture is high-level design about elements, relations, properties, and evolution; it is not only static structure, but also runtime dependencies, communication, and dynamics."
      },
      "answerFrame": {
        "zh": "答题先说定义，再区分设计/结构，最后落到“解决用户与开发者的矛盾”：用户要更多功能和快速变化，开发者要易开发、低成本、易维护。",
        "en": "Answer by defining architecture, distinguishing it from design/structure, then connecting it to the core tension: users want more features and fast change; developers need ease of development, lower cost, and maintainability."
      },
      "bullets": [
        {
          "zh": "架构来自会塑造结构与关键设计决定的架构驱动因素，核心是 NFR/质量需求、ASR、利益相关者关注点、组织因素、技术/运行环境；业务目标用于排序和取舍。",
          "en": "Architecture comes from architectural drivers that shape structures and key decisions: NFRs/quality requirements, ASRs, stakeholder concerns, organisations, and technical environments; business goals prioritize tradeoffs."
        },
        {
          "zh": "架构师四类工作：协调利益相关者、软件工程经验/最佳实践、技术知识、风险管理。",
          "en": "Architect work: stakeholder liaison, software engineering practices, technical knowledge, risk management."
        },
        {
          "zh": "架构活动按过程图背四步：规约 ASR、架构设计、文档化、架构评估；演化维护是生命周期补充，不作为该图第五步。",
          "en": "Use the process figure's four activities: specify ASRs, design the architecture, document it, and evaluate it; evolution/maintenance is lifecycle context, not a fifth step in this figure."
        },
        {
          "zh": "“架构不是只画框线”：只画框线不够，还要说明元素的行为、外部可见属性、关系约束和设计理由。",
          "en": "“Architecture is not only box-and-line”: boxes and lines are insufficient; explain behavior, externally visible properties, relationship constraints, and rationale."
        },
        {
          "zh": "架构本质是先处理用户与开发者之间的矛盾：价值/变化速度 vs 开发成本/可维护性/风险。",
          "en": "Architecture first handles the tension between users and developers: value/change speed vs development cost/maintainability/risk."
        }
      ],
      "sources": [
        "Complete review recording transcript",
        "Complete review minutes",
        "Review slides OCR"
      ],
      "group": "core",
      "examWeight": {
        "zh": "稳拿基础分",
        "en": "Reliable foundation points"
      },
      "deepDive": [
        {
          "title": {
            "zh": "定义边界",
            "en": "Definition boundary"
          },
          "summary": {
            "zh": "先把架构/设计/结构三者说清。",
            "en": "Clarify architecture, design, and structure first."
          },
          "must": {
            "zh": "架构是高层设计和重要设计决定；结构是元素、关系和外部可见属性；所有架构都是设计，但不是所有设计都是架构。",
            "en": "Architecture is high-level design and significant decisions; structure is elements, relations, and visible properties; all architecture is design, but not all design is architecture."
          },
          "answer": {
            "zh": "先定义架构，再比较设计/结构，最后落到架构为什么重要：它约束后续设计、影响质量属性、协调利益相关者。",
            "en": "Define architecture, compare with design/structure, then explain why it matters: constrains later design, shapes quality attributes, coordinates stakeholders."
          },
          "trap": {
            "zh": "不要只写 “框线图”。如果只画框线，没有职责、关系、约束和设计理由，不能算完整架构答案。",
            "en": "Do not stop at box-and-line; responsibilities, relations, constraints, and rationale are required."
          }
        },
        {
          "title": {
            "zh": "架构来源",
            "en": "Architecture sources"
          },
          "summary": {
            "zh": "先说明“架构来自架构驱动因素”，再分点说明各类驱动因素和排序依据。",
            "en": "Start with “architecture comes from architectural drivers”, then explain each driver and the prioritization basis."
          },
          "must": {
            "zh": "NFR/质量需求是最主要来源；ASR 是其中会显著影响架构的少数需求；利益相关者关注点补全质量场景；组织因素和技术/运行环境给出约束；业务目标用于排序和取舍。",
            "en": "NFRs/quality requirements are the main source; ASRs are the subset that significantly affects architecture; stakeholder concerns complete scenarios; organisations and technical environments constrain choices; business goals prioritize tradeoffs."
          },
          "answer": {
            "zh": "先总述“架构来自架构驱动因素”，再分点写：质量需求/NFR 描述系统做得多好；ASR 是早期必须优先处理的关键需求；利益相关者通过工作坊/访谈提出关注点；组织因素包括团队能力、进度、成本和治理；技术/运行环境包括遗留系统、基础设施、平台、中间件和部署环境；最后写业务目标用于解决冲突并确定优先级。",
            "en": "Start with “architecture comes from architectural drivers”. Then explain: quality requirements/NFRs describe how well the system must behave; ASRs are key requirements to handle early; stakeholders provide concerns through workshops/interviews; organisations add team, schedule, cost, and governance constraints; technical environments include legacy systems, infrastructure, platforms, middleware, and deployment; business goals resolve conflicts and set priorities."
          },
          "trap": {
            "zh": "不要把所有需求都写成 ASR；只有会显著影响结构、部署、技术选择或关键取舍的需求才是 ASR。",
            "en": "Do not call every requirement an ASR; only requirements that significantly affect structure, deployment, technology choices, or major tradeoffs are ASRs."
          }
        }
      ],
      "diagramIds": [
        "architecture-design-process"
      ],
      "memorize": {
        "zh": "一句话定义：软件架构是高层设计，是软件系统的一组结构；结构由元素、关系和外部可见属性组成。\n必背区分：架构属于设计，但不是所有设计都是架构；会影响质量属性和全局结构的设计才是架构层设计。\n答题要点：架构来自架构驱动因素，优先写 NFR/质量需求、ASR、利益相关者关注点、组织因素、技术/运行环境，并说明业务目标用于排序。",
        "en": "Definition: software architecture is high-level design and a set of structures; a structure consists of elements, relations, and externally visible properties.\nDistinction: architecture is design, but not every design decision is architectural; architectural decisions shape qualities and global structure.\nAnswer point: architecture comes from architectural drivers: NFRs/quality requirements, ASRs, stakeholder concerns, organisations, and technical environments; business goals prioritize them."
      },
      "examTemplate": {
        "zh": "遇到定义题，按“定义 -> 构成 -> 作用 -> 例子”答。例：架构不是代码细节，而是模块、运行时组件、部署节点及其关系；它决定可用性、性能、可修改性等质量属性。",
        "en": "For definition questions, answer “definition -> composition -> role -> example”. Example: architecture is not code detail; it is modules, runtime components, deployment nodes, and relations that shape availability, performance, modifiability, and other qualities."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "架构、设计、结构到底差在哪",
            "en": "Architecture, design, and structure"
          },
          "summary": {
            "zh": "这组概念是张贺基础题，不能只背一句定义。",
            "en": "This is a review basic question, not a one-sentence definition."
          },
          "explain": {
            "zh": "软件架构可以理解为“会长期约束系统演化的高层设计”。\n它关心模块、运行时组件、部署节点、数据、接口、连接器，以及这些元素之间的关系。\n设计的范围更大，还包含界面细节、类设计、算法和代码实现。\n只有会影响全局结构、质量属性和关键约束的设计，才上升为架构。\n结构是架构的可观察骨架，回答有哪些元素、元素如何连接、外部能看到哪些属性。",
            "en": "Software architecture is high-level design that constrains long-term system evolution.\nIt concerns modules, runtime components, deployment nodes, data, interfaces, connectors, and relations among these elements.\nDesign is broader and also includes UI details, classes, algorithms, and code implementation.\nOnly design decisions that affect global structure, quality attributes, and key constraints rise to architecture.\nStructure is the observable skeleton of architecture: elements, connections among elements, and externally visible properties."
          },
          "memorize": {
            "zh": "架构=高层设计+一组结构；结构=元素+关系+外部可见属性；设计包含架构，但不全是架构。",
            "en": "Architecture = high-level design + a set of structures; structure = elements + relations + externally visible properties; design includes architecture, but not all design is architecture."
          },
          "answer": {
            "zh": "考试可按三段写：先定义架构，再区分设计，最后区分结构。例：选择微服务边界是架构决定，因为它影响可修改性、部署和团队协作；按钮颜色不是架构决定。",
            "en": "Use three paragraphs: define architecture, distinguish design, then distinguish structure. Example: choosing microservice boundaries is architectural because it affects modifiability, deployment, and team collaboration; button color is not."
          },
          "boundary": {
            "zh": "依据第 1 讲/课程讲义；不要把“原则/理由”写成架构定义本体，但可以作为 设计理由 补充。",
            "en": "Grounded in the review material and Lecture 1/review slides; do not turn principles/rationale into the definition itself, but they can be added as rationale."
          }
        },
        {
          "title": {
            "zh": "架构从哪里来：架构驱动因素",
            "en": "Where Architecture Comes From: Architectural Drivers"
          },
          "summary": {
            "zh": "按课程材料和 课程 幻灯片 的驱动因素表述背。",
            "en": "Memorize the driver wording from the course material and review slides."
          },
          "explain": {
            "zh": "架构不是灵感产物，而是被一组驱动因素推出来的。NFR/质量需求说明系统必须“做得多好”，其中少数会显著影响架构的需求就是 ASR。利益相关者关注点通过工作坊或访谈补齐需求文档中没有写清的质量场景。组织因素规定团队能力、预算、进度、治理流程和责任边界。技术/运行环境规定遗留系统、基础设施、平台、中间件、云环境和部署限制。业务目标用于在这些因素冲突时排序和取舍。",
            "en": "Architecture is not inspiration; it is driven by forces. NFRs/quality requirements describe how well the system must behave, and the subset that significantly affects architecture becomes ASRs. Stakeholder concerns, collected through workshops or interviews, complete missing quality scenarios. Organisations impose team, budget, schedule, governance, and responsibility constraints. Technical environments impose legacy, infrastructure, platform, middleware, cloud, and deployment constraints. Business goals prioritize tradeoffs when these forces conflict."
          },
          "memorize": {
            "zh": "NFR/质量需求 -> ASR -> 利益相关者关注点 -> 组织因素 -> 技术/运行环境 -> 用业务目标排序。",
            "en": "NFRs/quality requirements -> ASRs -> stakeholder concerns -> organisations -> technical environments -> prioritized by business goals."
          },
          "answer": {
            "zh": "考场可写六句：\n1. 架构来自架构驱动因素。\n2. NFR/质量需求是最主要来源。\n3. ASR 是其中必须优先处理的少数需求。\n4. 利益相关者关注点补充并细化质量场景。\n5. 组织因素和技术/运行环境给出约束。\n6. 业务目标用于排序、冲突解决和取舍。",
            "en": "In the exam, write six sentences:\n1. Architecture comes from architectural drivers.\n2. NFRs/quality requirements are the main source.\n3. ASRs are the subset to handle early.\n4. Stakeholder concerns refine quality scenarios.\n5. Organisations and technical environments constrain choices.\n6. Business goals prioritize and resolve conflicts."
          },
          "boundary": {
            "zh": "依据完整课程录音、张贺 第一份课程讲义 和 ASR/效用树 幻灯片；按“架构驱动因素”表述组织答案。",
            "en": "Grounded in the complete review recording, Zhang He review-1 slides, and ASR/utility-tree slides; organize the answer around “architectural drivers”."
          }
        }
      ]
    },
    {
      "id": "quality",
      "priority": "P0",
      "title": {
        "zh": "质量属性与场景建模",
        "en": "Quality Attributes and Scenario Modeling"
      },
      "takeaway": {
        "zh": "质量属性是架构设计的主要依据。只有被场景化描述的质量需求，才适合作为架构设计输入。",
        "en": "Quality attributes are primary drivers of architecture. Only scenario-based quality requirements are suitable architectural inputs."
      },
      "answerFrame": {
        "zh": "固定六要素按六要素参考表格顺序背：刺激源、刺激、工件、环境、响应、响应度量。可用性原表响应是“通知操作者继续操作”，响应度量是“没有停机时间”。",
        "en": "Memorize the six-part ground-truth table order: source of stimulus, stimulus, artifact, environment, response, response measure. In the original Availability row, the response is notifying the operator to continue operation and the measure is no downtime."
      },
      "bullets": [
        {
          "zh": "外部质量属性：可用性、性能、易用性等，用户能感知。",
          "en": "External attributes: availability, performance, usability, etc.; visible to users."
        },
        {
          "zh": "内部质量属性：可修改性、可维护性、可测试性、可移植性等，开发者更关注。",
          "en": "Internal attributes: modifiability, maintainability, testability, portability, etc.; mostly developer concerns."
        },
        {
          "zh": "战术 是解决质量属性问题的原子设计决定，多个 战术 可组合成 模式。",
          "en": "A tactic is an atomic design decision for a quality concern; multiple tactics can combine into a pattern."
        },
        {
          "zh": "常考属性要至少能各举一例：可用性、互操作性、可修改性、性能、安全性、可测试性、易用性。",
          "en": "For common attributes, be able to give at least one example each: availability, interoperability, modifiability, performance, security, testability, usability."
        },
        {
          "zh": "如果题目给一个模糊 NFR，要先重写成可测量场景，再谈 战术/模式。",
          "en": "If the question gives a vague NFR, rewrite it as a measurable scenario before discussing tactics/patterns."
        }
      ],
      "sources": [
        "Complete review recording transcript",
        "Complete review minutes",
        "Review slides OCR"
      ],
      "group": "core",
      "examWeight": {
        "zh": "质量场景必背",
        "en": "Must-memorize quality scenarios"
      },
      "deepDive": [
        {
          "title": {
            "zh": "六要素场景",
            "en": "Six-part scenario"
          },
          "summary": {
            "zh": "这是质量属性题最稳的模板。",
            "en": "This is the safest template for quality questions."
          },
          "must": {
            "zh": "刺激源、刺激、工件、环境、响应、响应度量。中文可背：刺激源、刺激、工件、环境、响应、响应度量。",
            "en": "Source of stimulus, stimulus, artifact, environment, response, response measure."
          },
          "answer": {
            "zh": "先把题目中的模糊词改写成场景，再用六要素逐项填表。最后补一两条 战术，例如冗余、缓存、认证、隔离、监控。",
            "en": "Rewrite vague quality into a scenario, fill six elements, then add tactics such as redundancy, caching, authentication, isolation, monitoring."
          },
          "trap": {
            "zh": "最容易漏 环境 和 响应度量；“系统要快”不是答案，“95% 请求 2s 内完成”才是度量。",
            "en": "Environment and response measure are often omitted; “fast” is not enough, “95% under 2s” is measurable."
          }
        },
        {
          "title": {
            "zh": "属性到战术",
            "en": "Attribute to tactics"
          },
          "summary": {
            "zh": "质量属性不是孤立概念，要能落到设计。",
            "en": "A quality attribute must map to design actions."
          },
          "must": {
            "zh": "性能常见缓存、负载均衡、控制资源需求；可用性常见心跳检测、冗余、故障转移；安全性常见认证、授权、审计日志。",
            "en": "Performance: caching/load balancing/control resource demand; availability: heartbeat/redundancy/failover; security: authentication/authorization/audit logging."
          },
          "answer": {
            "zh": "按“质量属性 -> 场景 -> 战术 -> 权衡”写。例如缓存提高性能，但增加一致性复杂度。",
            "en": "Use “attribute -> scenario -> tactic -> tradeoff”. For example, caching improves performance but complicates consistency."
          },
          "trap": {
            "zh": "不要把 战术 写成万能药。每个 战术 都会牺牲其他质量属性或增加复杂度。",
            "en": "No tactic is free; each may hurt another quality or add complexity."
          }
        }
      ],
      "diagramIds": [
        "quality-scenario-table"
      ],
      "memorize": {
        "zh": "三类需求：功能需求说明系统做什么；质量需求说明系统做得多好；约束说明设计必须受什么限制。\n质量场景六要素按课程表顺序背：刺激源、刺激、工件、环境、响应、响应度量。\n答题时必须写到可观察的响应和可度量指标。\nASR 是影响架构的需求，通常来自困难且重要的质量需求、强约束、关键功能和业务目标。",
        "en": "Three requirement types: functional requirements say what the system does; quality requirements say how well; constraints restrict the design space.\nMemorize the six quality-scenario parts in the course-table order: source, stimulus, artifact, environment, response, response measure.\nIn answers, include an observable response and measurable criteria.\nASRs are requirements that shape architecture, often from difficult and important qualities, strong constraints, key functions, and business goals."
      },
      "examTemplate": {
        "zh": "写质量属性题时不要写“系统要高性能”这种空话。直接套六要素，例如：用户在正常负载下提交订单，订单服务在 2 秒内返回确认，95% 请求满足该指标。",
        "en": "Avoid vague statements such as “the system should be fast”. Use the six-part scenario, e.g. a user submits an order under normal load, the order service confirms it within 2 seconds, and 95% of requests meet the measure."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "功能需求、质量需求、约束怎么区分",
            "en": "Functional requirements, quality requirements, constraints"
          },
          "summary": {
            "zh": "这三类是后面 ASR、ADD、设计题的共同输入。",
            "en": "These three types feed ASR, ADD, and design questions."
          },
          "explain": {
            "zh": "功能需求回答系统要做什么，例如下单、支付、查询订单。质量需求回答系统做得多好，例如 95% 请求 2 秒内响应、故障后 30 秒内恢复、三小时内完成 UI 修改。约束回答设计空间被什么限制，例如必须使用已有数据库、必须部署在指定云、必须遵守法规或兼容遗留系统。",
            "en": "Functional requirements state what the system does, such as ordering, paying, or querying orders. Quality requirements state how well it does so, such as 95% of requests within 2 seconds, recovery within 30 seconds, or UI changes within 3 hours. Constraints restrict the design space, such as mandated database/cloud, regulations, or legacy compatibility."
          },
          "memorize": {
            "zh": "功能=做什么；质量=做得多好；约束=必须/不能怎么做。",
            "en": "Function = what; quality = how well; constraint = must/must not."
          },
          "answer": {
            "zh": "答题先分类，再举例。不要把“系统要快/稳定/好维护”当完整答案，必须给出场景和度量。",
            "en": "Classify first, then give examples. Do not write vague “fast/stable/maintainable”; add scenario and measure."
          },
          "boundary": {
            "zh": "课程材料和课程讲义 明确三类需求；质量需求要场景化。",
            "en": "The review material and review slides explicitly name the three requirement types; quality requirements must be scenario-based."
          }
        },
        {
          "title": {
            "zh": "质量属性场景六要素怎么真正写出来",
            "en": "How to write the six-part quality scenario"
          },
          "summary": {
            "zh": "六要素是可直接拿分的模板。",
            "en": "The six parts are a direct scoring template."
          },
          "explain": {
            "zh": "质量场景把抽象质量属性变成可评估句子。\n刺激源是谁发起事件。\n刺激是发生了什么。\n工件是被影响的系统部分。\n环境是正常、峰值、故障、维护等条件。\n响应是系统做什么。\n响应度量是用数字或可判定标准说明做得多好。\n可用性例子：心跳监视器发现服务器无响应，影响正常操作环境下的处理器，系统通知操作者并继续操作，响应度量是没有停机时间。",
            "en": "A quality scenario turns an abstract quality into an evaluable sentence.\nSource is who triggers the event.\nStimulus is what happens.\nArtifact is the affected part of the system.\nEnvironment is the condition, such as normal, peak, failure, or maintenance.\nResponse is what the system does.\nResponse measure quantifies or judges how well the response works.\nAvailability example: a heartbeat monitor detects a server not responding, the processor is affected under normal operation, the system notifies the operator and continues operation, and the response measure is no downtime."
          },
          "memorize": {
            "zh": "刺激源、刺激、工件、环境、响应、响应度量。\n最后一项必须可测。",
            "en": "Source, stimulus, artifact, environment, response, response measure.\nThe last part must be measurable."
          },
          "answer": {
            "zh": "考场可以画表，也可以写一句长句。推荐写表，列头就是六要素，行里填具体例子。",
            "en": "Use a table or one long sentence. A table is safer: columns are the six parts and the row is a concrete example."
          },
          "boundary": {
            "zh": "以重绘质量场景表和课程讲解为准；不同质量属性示例可以换，但六要素不能少。",
            "en": "Grounded in the redrawn quality-scenario table and review material; examples may vary, but the six parts must remain."
          }
        }
      ]
    },
    {
      "id": "asr",
      "priority": "P0",
      "title": {
        "zh": "ASR 与效用树",
        "en": "ASRs and Utility Tree"
      },
      "takeaway": {
        "zh": "ASR 是会显著影响架构设计决定的需求，不等于所有需求。需要从需求文档、访谈/工作坊和业务目标中补齐。",
        "en": "An ASR is a requirement that significantly affects architectural decisions. It is not every requirement. Course materials emphasize documents, interviews/workshops, and business goals."
      },
      "answerFrame": {
        "zh": "先定义 ASR，再说来源，最后说效用树：系统效用分解为质量属性、场景、度量；叶子节点从用户价值与开发难度/利益两维评估。",
        "en": "Define ASR, list sources, then explain the utility tree: system utility breaks down into quality attributes, scenarios, and measures; leaves are prioritized by user value and development impact/difficulty."
      },
      "bullets": [
        {
          "zh": "需求文档里的 NFR 常不够场景化，需要 利益相关者工作坊或访谈。",
          "en": "NFRs in requirement documents are often not scenario-based enough; use stakeholder workshops or interviews."
        },
        {
          "zh": "高用户价值且高开发影响的叶节点应优先进入架构设计。",
          "en": "Leaves with high user value and high development impact should be handled first."
        },
        {
          "zh": "约束是预先给定的设计决定，也会影响架构空间。",
          "en": "Constraints are pre-made design decisions that shape the architecture space."
        },
        {
          "zh": "质量属性工作坊（QAW）/访谈的价值在于把“希望系统快/稳定/安全”这类口头需求转成可度量 ASR。",
          "en": "QAW/interviews turn verbal needs such as “fast/stable/secure” into measurable ASRs."
        },
        {
          "zh": "效用树叶节点常用二维优先级：对用户/业务重要程度，以及对开发者/架构影响程度。",
          "en": "Utility tree leaves are often prioritized by two dimensions: user/business importance and developer/architectural impact."
        }
      ],
      "sources": [
        "Complete review recording transcript",
        "Complete review minutes",
        "Review slides OCR"
      ],
      "group": "core",
      "examWeight": {
        "zh": "高频简答",
        "en": "High-frequency short answer"
      },
      "deepDive": [
        {
          "title": {
            "zh": "ASR 定义",
            "en": "ASR definition"
          },
          "summary": {
            "zh": "ASR 是会影响架构决策的需求，不是全部需求。",
            "en": "ASRs are requirements that shape architecture, not all requirements."
          },
          "must": {
            "zh": "功能、质量属性和约束都可能成为 ASR；重要且困难的质量需求最常见。",
            "en": "Functions, quality attributes, and constraints can become ASRs; important and hard quality needs are common."
          },
          "answer": {
            "zh": "先定义，再说来源/方法：需求文档、利益相关者工作坊/访谈或质量属性工作坊（QAW）、业务目标、约束，以及质量属性场景化表达。",
            "en": "Define ASR, then list sources/methods: requirement documents, stakeholder workshops/interviews or QAW, business goals, constraints, and scenario-based quality expression."
          },
          "trap": {
            "zh": "不要把 ASR 等同 NFR。某些关键功能和强约束也会成为 ASR。",
            "en": "Do not equate ASR with NFR; key functions and constraints can also be ASRs."
          }
        },
        {
          "title": {
            "zh": "效用树排序",
            "en": "Utility tree priority"
          },
          "summary": {
            "zh": "效用树把质量属性落到可分析的叶子场景。",
            "en": "A utility tree turns qualities into analyzable leaf scenarios."
          },
          "must": {
            "zh": "树根是系统效用，中间是质量属性，叶子是具体场景和度量；叶子常按业务价值与架构影响/难度排序。",
            "en": "Root is utility, branches are qualities, leaves are scenarios and measures, prioritized by business value and architectural impact/difficulty."
          },
          "answer": {
            "zh": "画树后圈出 H/H 或高/高叶子，说这些最先进入架构设计和评估。",
            "en": "Draw the tree, mark H/H leaves, and state that they drive design and evaluation first."
          },
          "trap": {
            "zh": "不要只列属性名。没有场景和度量，架构师没法判断设计是否满足需求。",
            "en": "Attribute names alone are insufficient; scenarios and measures are needed."
          }
        }
      ],
      "diagramIds": [
        "architecture-design-process",
        "utility-tree",
        "quality-scenario-table"
      ],
      "memorize": {
        "zh": "ASR 的判断标准：它是否改变架构结构、技术选型、部署方式、通信方式或关键设计决策。\n获取 ASR 的常见方式：需求文档、利益相关者访谈/工作坊、业务目标、质量属性场景、效用树。\n优先级判断：重要性高、实现风险高、冲突多、影响范围大的 ASR 要先处理。",
        "en": "ASR test: does it change structures, technology choices, deployment, communication, or key design decisions?\nCommon sources: requirement documents, stakeholder interviews/workshops, business goals, quality-attribute scenarios, and utility trees.\nPrioritize ASRs with high business importance, high technical risk, many conflicts, or broad impact."
      },
      "examTemplate": {
        "zh": "答“如何识别 ASR”时按三步：收集候选需求 -> 场景化/量化 -> 用重要性和风险排序。最后补一句：ASR 不是所有需求，而是会塑造架构的需求。",
        "en": "For “how to identify ASRs”, use three steps: collect candidate requirements -> express and quantify them as scenarios -> rank by importance and risk. Add that ASRs are not all requirements; they are the architecture-shaping subset."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "ASR 为什么不是所有需求",
            "en": "Why ASRs are not all requirements"
          },
          "summary": {
            "zh": "ASR 的核心是“会塑造架构”。",
            "en": "The core test is whether it shapes architecture."
          },
          "explain": {
            "zh": "一个需求是不是 ASR，要看它是否会改变结构、技术选型、部署拓扑、通信方式、数据边界、接口或关键设计决策。普通功能需求可能只影响局部实现，而高并发、低延迟、高可用、强合规、必须兼容遗留系统等，会迫使架构选择缓存、冗余、异步消息、分库、网关、监控或特定部署方式，因此是 ASR。",
            "en": "A requirement is an ASR if it changes structures, technology choices, deployment topology, communication, data boundaries, interfaces, or key design decisions. Ordinary functional requirements may be local implementation, while high concurrency, low latency, high availability, compliance, or legacy compatibility force choices such as cache, redundancy, messaging, database partitioning, gateway, monitoring, or deployment."
          },
          "memorize": {
            "zh": "判断句：这个需求是否影响架构结构或关键决策？影响就是 ASR，不影响就是普通需求。",
            "en": "Test sentence: does this requirement affect architecture structures or key decisions? If yes, it is an ASR."
          },
          "answer": {
            "zh": "答题先定义，再给 2-3 个例子，最后说 ASR 要优先进入 ADD 和架构评估。",
            "en": "Define first, give 2-3 examples, then state that ASRs feed ADD and architecture evaluation first."
          },
          "boundary": {
            "zh": "ASR 是架构输入，通常来自重要且困难的质量需求和强约束。",
            "en": "The review material states ASRs are architecture inputs, often from important/difficult quality requirements and strong constraints."
          }
        },
        {
          "title": {
            "zh": "效用树 到底怎么用",
            "en": "How to use a Utility Tree"
          },
          "summary": {
            "zh": "效用树不是画装饰图，而是给质量需求排优先级。",
            "en": "A utility tree is not decoration; it prioritizes quality requirements."
          },
          "explain": {
            "zh": "效用树从总目标“系统效用”往下分解到质量属性，再分解到具体场景。每个叶子场景要标重要性和风险/难度，帮助架构师先处理高重要、高风险的 ASR。它把“性能好、可用性高”这种模糊词，变成“峰值下 95% 请求 2 秒内返回”“服务器无响应时无停机”这种可讨论场景。",
            "en": "A utility tree decomposes overall utility into quality attributes and then concrete scenarios. Each leaf scenario is ranked by importance and risk/difficulty, helping architects address high-importance/high-risk ASRs first. It turns vague “fast/high availability” into scenarios such as “95% requests return within 2 seconds under peak load” or “no downtime when a server does not respond”."
          },
          "memorize": {
            "zh": "系统效用 -> 质量属性 -> 场景；叶子标重要性和风险/难度。",
            "en": "Utility -> Quality Attribute -> Scenario; leaves carry importance and risk/difficulty."
          },
          "answer": {
            "zh": "如果题目问识别 ASR，可以写：访谈/工作坊 收集 关注点，写成质量场景，放进效用树，用重要性和风险排序。",
            "en": "For ASR identification: collect concerns via interviews/workshops, express them as quality scenarios, place them in a utility tree, and rank by importance and risk."
          },
          "boundary": {
            "zh": "课程讲义与课程材料 支持 需求、工作坊/访谈、业务目标、效用树 这条线。",
            "en": "The review material and slides support the requirements, workshops/interviews, business goals, and utility tree line."
          }
        }
      ]
    },
    {
      "id": "add",
      "priority": "P0",
      "title": {
        "zh": "ADD 3.0 属性驱动设计",
        "en": "ADD 3.0 Attribute-Driven Design"
      },
      "takeaway": {
        "zh": "ADD 是结构化、迭代式架构设计方法。复习重点不是背定义，而是会用驱动因素组织设计轮次。",
        "en": "ADD is a structured, iterative architecture design method. The key is not the definition, but using drivers to organize design iterations."
      },
      "answerFrame": {
        "zh": "按 第 12 讲 的七步答：1. 审查输入；2. 通过选择驱动因素建立迭代目标；3. 选择要细化的系统元素；4. 选择设计概念；5. 实例化架构元素、分配职责并定义接口；6. 绘制视图草图并记录设计决定；7. 分析当前设计，并检查迭代目标和设计目的是否达成；必要时继续迭代。",
        "en": "Use the Lecture 12 seven-step process: 1 Review inputs; 2 Establish the iteration goal by selecting drivers; 3 Choose elements to refine; 4 Choose design concepts; 5 Instantiate architectural elements, allocate responsibilities, and define interfaces; 6 Sketch views and record design decisions; 7 Perform analysis of the current design and review the iteration goal and achievement of the design purpose, then iterate if necessary."
      },
      "bullets": [
        {
          "zh": "图中红色驱动因素是设计目的、主要功能、质量属性、架构关注点和约束；上一轮设计或棕地既有系统通过制品流进入第 1 步。",
          "en": "The red drivers in the slide are Design Purpose, Primary Functionality, Quality Attributes, Architectural Concerns, and Constraints; previous-iteration or brownfield designs enter Step 1 through the artifact-flow path."
        },
        {
          "zh": "第 1 步是审查输入，不是建立目标；第 2 步才是在驱动因素中选择本轮迭代目标。",
          "en": "Step 1 is Review inputs, not goal establishment; Step 2 selects the iteration goal from the drivers."
        },
        {
          "zh": "课程案例里的 迭代目标 可参考：整体结构、核心功能、质量属性、开发/部署/运营需求；但这不是 ADD 3.0 固定步骤，固定步骤仍以上面的 第 1-7 步 为准。",
          "en": "Review-class cases may choose iteration goals such as overall structure, core functionality, quality attributes, and development/deployment/operations concerns; these are not fixed ADD 3.0 steps, whose fixed process remains Step 1-7 above."
        },
        {
          "zh": "终止条件：所有 架构驱动需求 已有设计决策、重要技术风险已缓解，或架构设计时间耗尽；不要把 ADD 画成一次性瀑布。",
          "en": "Termination criteria: design decisions have covered the driving architectural requirements, key technical risks have been mitigated, or the architecture-design timebox is consumed; do not draw ADD as one-shot waterfall."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Li Shanshan review slides",
        "Lecture 12 ADD 3.0 slide OCR"
      ],
      "group": "process",
      "examWeight": {
        "zh": "设计题核心",
        "en": "Core design topic"
      },
      "deepDive": [
        {
          "title": {
            "zh": "ADD 3.0 课程原图表述",
            "en": "ADD 3.0 slide-faithful process"
          },
          "summary": {
            "zh": "ADD 3.0 是重点内容；图解以第 12 讲的 ADD 3.0 方法图为准。",
            "en": "The review material made ADD a major focus; the diagram should follow the Lecture 12 ADD 3.0 method figure."
          },
          "must": {
            "zh": "五类驱动因素：设计目的、主要功能、质量属性、架构关注点、约束。\n七步必须带产物背：1. 审查输入 -> 得到整理后的输入包和本轮可用驱动因素；2. 建立迭代目标 -> 得到本轮目标、优先驱动因素和判断目标达成的依据；3. 选择要细化的元素 -> 得到本轮要设计的系统/子系统/组件边界；4. 选择设计概念 -> 得到可采用的参考架构、风格、模式、战术、外部组件或技术机制；5. 实例化架构元素 -> 得到具体元素、职责分配和接口；6. 绘制视图并记录决定 -> 得到视图草图、设计决策和设计理由；7. 分析当前设计 -> 得到目标达成判断、风险/取舍和下一轮迭代动作。",
            "en": "Five driver classes: Design Purpose, Primary Functionality, Quality Attributes, Architectural Concerns, and Constraints.\nMemorize each step with its output: 1. Review inputs -> organized input package and usable drivers; 2. Establish iteration goal -> iteration goal, selected drivers, and achievement criteria; 3. Choose elements to refine -> system/subsystem/component boundary for this round; 4. Choose design concepts -> reference architectures, styles, patterns, tactics, external components, or technical mechanisms; 5. Instantiate elements -> concrete elements, responsibilities, and interfaces; 6. Sketch views and record decisions -> view sketches, design decisions, and rationale; 7. Analyze design -> goal-achievement judgment, risks/tradeoffs, and next iteration action."
          },
          "answer": {
            "zh": "手画时先画上方五个红色驱动因素，再画第 1-7 步的纵向流程；第 7 步后写“必要时迭代”，并输出“精化后的软件架构设计”。",
            "en": "When drawing by hand, put the five red drivers on top, then draw the vertical Step 1-7 flow; after Step 7 write Iterate if necessary and output (Refined) Software Architecture Design."
          },
          "trap": {
            "zh": "不要用自创简化图替代课程图；不要漏“架构关注点”，也不要把第 1 步写成建立目标。",
            "en": "Do not replace the course figure with an unsupported simplification; do not omit Architectural Concerns or turn Step 1 into goal establishment."
          }
        },
        {
          "title": {
            "zh": "ADD 设计概念",
            "en": "ADD design concepts"
          },
          "summary": {
            "zh": "ADD 中间步骤要写出可选的设计概念。",
            "en": "ADD needs concrete design concepts in the middle."
          },
          "must": {
            "zh": "设计概念包括 参考架构、模式、风格、战术、外部开发组件。",
            "en": "Design concepts include reference architectures, patterns, styles, tactics, and externally developed components."
          },
          "answer": {
            "zh": "举例：性能 驱动因素 可选缓存和负载均衡；可修改性 驱动因素 可选分层和信息隐藏；领域复杂可选 DDD 和 限界上下文。",
            "en": "Examples: performance uses caching/load balancing; modifiability uses layering/information hiding; domain complexity uses DDD/bounded contexts."
          },
          "trap": {
            "zh": "只写“根据需求设计架构”太空，必须写出可选择的 模式/战术。",
            "en": "“Design according to requirements” is too empty; name patterns/tactics."
          }
        }
      ],
      "diagramIds": [
        "add-roadmap"
      ],
      "memorize": {
        "zh": "ADD 3.0 输入五类驱动因素：设计目的、主要功能、质量属性、架构关注点、约束；棕地开发还要把既有系统或上一轮设计作为制品输入。\n七步和产物：1. 审查输入，产出整理后的输入包、关键场景/约束清单和可用驱动因素；2. 选择驱动因素建立迭代目标，产出本轮目标、优先驱动因素和验收/分析依据；3. 选择要细化的系统元素，产出本轮设计边界，例如整个系统、子系统、服务或已有组件；4. 选择设计概念，产出候选参考架构、风格、模式、战术、外部组件或技术机制；5. 实例化架构元素，产出具体元素、职责分配、接口和交互关系；6. 绘制视图并记录设计决定，产出模块/组件连接件/部署等视图草图、设计决策和设计理由；7. 分析当前设计，产出目标达成判断、风险、敏感点/取舍点和下一轮迭代动作。\n迭代关系：第 7 步若未达成目标或发现新风险，就回到第 2 步重新选择驱动因素；每一轮的输出会成为下一轮输入。",
        "en": "ADD 3.0 inputs: design purpose, primary functionality, quality attributes, architectural concerns, and constraints; brownfield development also feeds existing systems or previous-iteration designs into the artifact flow.\nSteps and outputs: 1. Review inputs -> organized input package, key scenarios/constraints, and usable drivers; 2. Select drivers and establish iteration goal -> iteration goal, prioritized drivers, and analysis/acceptance criteria; 3. Choose elements to refine -> design boundary for this round, such as the whole system, a subsystem, a service, or an existing component; 4. Choose design concepts -> candidate reference architectures, styles, patterns, tactics, external components, or mechanisms; 5. Instantiate architectural elements -> concrete elements, responsibilities, interfaces, and interactions; 6. Sketch views and record decisions -> module/C&C/deployment sketches, decisions, and rationale; 7. Analyze current design -> goal-achievement judgment, risks, sensitivity/tradeoff points, and next iteration action.\nIteration: if Step 7 does not achieve the goal or exposes new risk, return to Step 2; each iteration output becomes input to the next round."
      },
      "examTemplate": {
        "zh": "画 ADD 图时先画顶部五个红色驱动因素，再画中间七个步骤，最后画底部“精化后的软件架构设计”；把第 7 步到第 2 步的迭代箭头和左侧棕地输入虚线补全。",
        "en": "When drawing ADD, place the five red drivers at the top, the seven process steps in the middle, and the refined architecture at the bottom. Include the Step 7 -> Step 2 iteration arrow and the left brownfield artifact-flow arrow."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "ADD 3.0 每一步产出什么",
            "en": "What each ADD 3.0 step produces"
          },
          "summary": {
            "zh": "ADD 不能只背七步标题，要把每步“交出什么东西”背出来。老师若问流程，标题够一半；若问设计题，必须把产物落到边界、元素、职责、接口、视图和风险。",
            "en": "Do not memorize only the seven titles; memorize what each step produces. For a process question, titles are only half the answer; for a design question, outputs must become boundaries, elements, responsibilities, interfaces, views, and risks."
          },
          "explain": {
            "zh": "第 1 步审查输入，产物是整理后的输入包：设计目的、主要功能、质量属性场景、架构关注点、约束，以及棕地系统的既有架构。第 2 步选择驱动因素建立迭代目标，产物是本轮目标和优先驱动因素，例如先确定整体结构、先处理可用性、先解决部署约束。第 3 步选择要细化的系统元素，产物是本轮设计边界，例如整个系统、订单子系统、缓存组件或已有服务。第 4 步选择设计概念，产物是候选方案库，例如分层、微服务、发布订阅、缓存、熔断、负载均衡、外部组件。第 5 步实例化元素，产物是具体元素列表、职责分配、接口和连接关系。第 6 步绘制视图并记录设计决定，产物是可沟通的视图草图、决策项和理由。第 7 步分析当前设计，产物是是否达成本轮目标的结论、风险/取舍和下一轮要继续处理的驱动因素。",
            "en": "Step 1 reviews inputs and produces an organized input package: design purpose, primary functionality, quality-attribute scenarios, architectural concerns, constraints, and existing brownfield architecture. Step 2 selects drivers and establishes the iteration goal; its output is the iteration goal plus prioritized drivers, such as defining the overall structure first, handling availability first, or solving a deployment constraint first. Step 3 chooses elements to refine and produces this round's design boundary, such as the whole system, an order subsystem, a cache component, or an existing service. Step 4 chooses design concepts and produces candidate approaches such as layering, microservices, publish-subscribe, caching, circuit breaker, load balancing, or external components. Step 5 instantiates elements and produces concrete elements, responsibilities, interfaces, and connectors. Step 6 sketches views and records design decisions, producing communicable sketches, decisions, and rationale. Step 7 analyzes the current design and produces the goal-achievement judgment, risks/tradeoffs, and the drivers to address in the next iteration."
          },
          "memorize": {
            "zh": "背诵压缩版：输入包 -> 迭代目标 -> 细化边界 -> 设计概念 -> 元素/职责/接口 -> 视图/决策/理由 -> 分析结论/风险/下一轮。",
            "en": "Compact version: input package -> iteration goal -> refinement boundary -> design concepts -> elements/responsibilities/interfaces -> views/decisions/rationale -> analysis result/risks/next round."
          },
          "answer": {
            "zh": "简答题可以直接写：ADD 每轮先把输入整理成驱动因素清单，再选驱动因素形成迭代目标，确定要细化的元素，选择设计概念，实例化元素并分配职责/接口，画视图记录决策，最后分析风险和目标达成情况；若未达成，分析结果和精化设计进入下一轮。",
            "en": "For a short answer: in each ADD iteration, organize inputs into drivers, select drivers to form the iteration goal, decide which element to refine, choose design concepts, instantiate elements and assign responsibilities/interfaces, sketch views and record decisions, then analyze risks and goal achievement; if the goal is not achieved, the analysis result and refined design feed the next iteration."
          },
          "boundary": {
            "zh": "以用户提供的原图依据和重绘 ADD 图为最高基准。",
            "en": "The user-provided reference and redrawn ADD diagram are the highest reference."
          }
        },
        {
          "title": {
            "zh": "ADD 和文档化/视图的关系",
            "en": "ADD, documentation, and views"
          },
          "summary": {
            "zh": "ADD 不是只做脑内设计，第 6 步 要把设计落成可沟通文档。",
            "en": "ADD is not only mental design; Step 6 records communicable documents."
          },
          "explain": {
            "zh": "第 6 步“绘制视图草图并记录设计决定”对应架构文档化。视图用来给不同利益相关者看：开发看模块分解，运维看部署，性能/并发看运行时组件和连接器。设计决定要记录设计理由，否则别人只能看到图，看不到为什么这么选。",
            "en": "Step 6 maps to architecture documentation. Views communicate with stakeholders: developers use module decomposition, operators use deployment, performance/concurrency uses runtime components and connectors. Design decisions need rationale; otherwise people see the diagram but not why choices were made."
          },
          "memorize": {
            "zh": "画视图 + 记设计决策 + 记 设计理由。",
            "en": "Sketch views + record design decisions + record rationale."
          },
          "answer": {
            "zh": "如果题目问 ADD 产物，写：一组候选/选定视图、元素职责、接口、设计决策、设计理由和待分析风险。",
            "en": "If asked about ADD outputs, write: selected/candidate views, element responsibilities, interfaces, design decisions, rationale, and risks to analyze."
          },
          "boundary": {
            "zh": "课程把 ADD 流程和文档化列为高优先级，但大规模 ADD 案例 不是设计大题主依据。",
            "en": "The review material keeps ADD process and documentation high priority, but a large ADD case is not expected as the main design question."
          }
        }
      ]
    },
    {
      "id": "microservices",
      "priority": "P0",
      "title": {
        "zh": "微服务架构",
        "en": "Microservices Architecture"
      },
      "takeaway": {
        "zh": "考试不重定义，重特性、对比、模式和设计取舍。要能解释它解决分层/SOA 的哪些痛点，又带来哪些部署、通信和运维复杂性。",
        "en": "The exam is less about definition and more about characteristics, comparisons, patterns, and tradeoffs. Explain what pain points microservices solve and what communication, deployment, and operations complexity they add."
      },
      "answerFrame": {
        "zh": "先说演进动因，再分四组模式：拆分、通信、部署、可观测性。最后点出权衡：自治/独立部署 vs 分布式复杂性。",
        "en": "Start with evolution motivation, then organize patterns into decomposition, communication, deployment, and observability. Finish with the tradeoff: autonomy/independent deployment vs distributed complexity."
      },
      "bullets": [
        {
          "zh": "拆分：按业务能力、按子域；目标是高内聚、低耦合、SRP、CCP、团队自治。",
          "en": "Decomposition: by business capability or subdomain; goals are high cohesion, loose coupling, SRP, CCP, team autonomy."
        },
        {
          "zh": "通信：断路器、服务发现、API 网关，处理局部故障和外部访问。",
          "en": "Communication: Circuit Breaker, service discovery, API Gateway; handle partial failure and external access."
        },
        {
          "zh": "部署：容器、服务部署平台、无服务器，解决隔离、扩展、成本与异构技术。",
          "en": "Deployment: containers, service deployment platform, serverless; handle isolation, scaling, cost, and technology heterogeneity."
        },
        {
          "zh": "可观测性：日志聚合、日志记录、指标、分布式追踪、异常跟踪、健康检查 API。",
          "en": "Observability: log aggregation, logging, metrics, distributed tracing, exception tracking, health check API."
        },
        {
          "zh": "和 SOA 对比时抓住四点：服务粒度、治理方式、通信/中间件、数据所有权。",
          "en": "When comparing with SOA, focus on service granularity, governance, communication/middleware, and data ownership."
        },
        {
          "zh": "迁移设计题可按“拆分边界 -> 数据迁移/一致性 -> 通信改造 -> 部署自动化 -> 可观测性 -> 分阶段迁移与验证”组织。",
          "en": "For migration design, use: decomposition boundary -> data migration/consistency -> communication changes -> deployment automation -> observability -> staged migration and verification."
        },
        {
          "zh": "博客补充微服务六大特性：服务粒度小、围绕业务能力组织、服务自治、独立部署、去中心化治理/数据、基础设施自动化。",
          "en": "Blog addition: six traits of microservices: small service granularity, organized around business capability, service autonomy, independent deployment, decentralized governance/data, infrastructure automation."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Li Shanshan review slides",
        "Lecture 6-7 Microservices slide OCR"
      ],
      "group": "modern",
      "examWeight": {
        "zh": "高阶重点",
        "en": "Advanced focus"
      },
      "deepDive": [
        {
          "title": {
            "zh": "微服务特性",
            "en": "Microservice characteristics"
          },
          "summary": {
            "zh": "微服务题要从“组织和交付方式”写起。",
            "en": "Microservices should be explained as organization and delivery style."
          },
          "must": {
            "zh": "围绕业务能力拆分、小服务、独立部署、服务自治、自有数据、轻量通信、自动化基础设施。",
            "en": "Business-capability decomposition, small services, independent deployment, autonomy, service-owned data, lightweight communication, automated infrastructure."
          },
          "answer": {
            "zh": "对比 SOA 时写共同点和差异：都服务化，微服务粒度更小、治理更去中心化、数据归属更清晰。",
            "en": "When comparing with SOA, state similarities and differences: both service-oriented; microservices are smaller, decentralized, and own data."
          },
          "trap": {
            "zh": "不要写“越小越好”。边界应按业务能力/限界上下文，不按表或类机械切。",
            "en": "Do not say smaller is always better; boundaries should follow capabilities or bounded contexts."
          }
        },
        {
          "title": {
            "zh": "分布式代价",
            "en": "Distributed cost"
          },
          "summary": {
            "zh": "微服务高分答案必须写代价。",
            "en": "High-scoring microservice answers must include costs."
          },
          "must": {
            "zh": "服务发现、网络失败、分布式事务、一致性、链路追踪、监控、分阶段发布/回滚、配置治理。",
            "en": "Service discovery, network failures, distributed transactions, consistency, tracing, monitoring, staged release/rollback, configuration governance."
          },
          "answer": {
            "zh": "结构图画完后补一句 权衡：局部自治提高可修改性和交付速度，但系统级调试和一致性更难。",
            "en": "After the diagram, add the tradeoff: local autonomy improves modifiability/delivery, but debugging and consistency are harder."
          },
          "trap": {
            "zh": "只写优点会显得像宣传稿。考试更看重你能说清设计取舍。",
            "en": "Only listing benefits sounds like marketing; exams reward tradeoff reasoning."
          }
        }
      ],
      "diagramIds": [
        "microservice-pattern-groups",
        "microservice-style-comparison",
        "review-microservice-decomposition"
      ],
      "memorize": {
        "zh": "微服务核心：围绕业务能力或子域拆分，小服务、独立部署、独立团队、轻量通信、服务自有数据、自动化基础设施。\n与 SOA 对比：SOA 更偏企业集成和集中治理，服务粒度常更大，可能依赖 ESB；微服务更偏自治团队、持续交付和去中心化治理。\n设计题要写服务边界、数据归属、接口、事件协作、容错、可观测性和部署治理。",
        "en": "Microservice core: decompose around business capabilities or subdomains, use small services, independent deployment, independent teams, lightweight communication, service-owned data, and automated infrastructure.\nCompared with SOA: SOA is often enterprise-integration and centralized-governance oriented, with larger services and possibly ESB; microservices emphasize autonomous teams, continuous delivery, and decentralized governance.\nFor design questions, cover service boundaries, data ownership, APIs, event collaboration, fault tolerance, observability, and deployment governance."
      },
      "examTemplate": {
        "zh": "遇到外卖/电商设计题，按“业务能力拆服务 -> 每个服务管自己的数据 -> 同步接口 + 异步事件 -> Saga/补偿处理跨服务一致性 -> API 网关、熔断、监控、日志追踪”组织答案。",
        "en": "For food-delivery/e-commerce design questions, organize the answer as “split services by business capability -> each service owns its data -> synchronous APIs plus asynchronous events -> Saga/compensation for cross-service consistency -> API Gateway, circuit breaker, monitoring, logging, tracing”."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "微服务特性要背到什么粒度",
            "en": "How detailed microservice traits should be"
          },
          "summary": {
            "zh": "微服务题通常考特性、对比和模式，而不是单纯定义。",
            "en": "Microservice questions usually focus on traits, comparisons, and patterns rather than definition alone."
          },
          "explain": {
            "zh": "微服务不是“很多小服务”这么简单。\n它通常围绕业务能力或子域拆分。\n每个服务有清晰职责和数据归属，可以独立开发、测试、部署和扩缩容。\n团队按服务或业务能力自治。\n通信多用轻量 API 或消息。\n基础设施依赖自动化部署、监控、日志、追踪、服务发现、配置管理、熔断和限流。\n它换来局部演进和持续交付，也带来分布式一致性、网络故障、观测和运维复杂度。",
            "en": "Microservices are not merely “many small services”.\nThey are usually decomposed around business capabilities or subdomains.\nEach service has clear responsibility and data ownership and can be developed, tested, deployed, and scaled independently.\nTeams are autonomous around services or capabilities.\nCommunication usually uses lightweight APIs or messaging.\nInfrastructure relies on automated deployment, monitoring, logging, tracing, service discovery, configuration management, circuit breakers, and rate limiting.\nThey bring local evolution and continuous delivery, but also distributed consistency, network failure, observability, and operational complexity."
          },
          "memorize": {
            "zh": "业务能力拆分、独立部署、团队自治、服务自有数据、轻量通信、自动化基础设施。",
            "en": "Business-capability decomposition, independent deployment, team autonomy, service-owned data, lightweight communication, automated infrastructure."
          },
          "answer": {
            "zh": "答题按“为什么拆 -> 怎么拆 -> 怎么协作 -> 怎么治理 -> 代价”写。",
            "en": "Answer “why split -> how split -> how collaborate -> how govern -> tradeoffs”."
          },
          "boundary": {
            "zh": "第 6-7 讲 幻灯片 和课程材料均支持微服务特性/对比为高优先级。",
            "en": "Lecture 6-7 slides and review material support microservice traits/comparison as high priority."
          }
        },
        {
          "title": {
            "zh": "微服务设计题怎么展开",
            "en": "How to answer microservice design questions"
          },
          "summary": {
            "zh": "外卖/电商类题要写服务、数据、接口和质量取舍。",
            "en": "Food-delivery/e-commerce questions need services, data, APIs, and quality tradeoffs."
          },
          "explain": {
            "zh": "先从业务能力或 DDD 子域找服务，例如用户、商家/菜单、订单、支付、配送、通知、结算。\n每个服务拥有自己的数据，避免共享数据库。\n用户请求通过 API 网关进入。\n服务间用同步 API 处理查询或短事务，用异步事件处理状态传播。\n跨服务一致性不能写成单体事务，可以写 Saga、补偿、最终一致性。\n最后补可用性和可观测性：熔断、重试、超时、日志、指标、链路追踪。",
            "en": "Start from business capabilities or DDD subdomains, such as user, restaurant/menu, order, payment, delivery, notification, and settlement.\nEach service owns its data; avoid shared databases.\nUser requests enter through an API Gateway.\nServices use synchronous APIs for queries or short transactions and asynchronous events for state propagation.\nCross-service consistency is not a monolithic transaction; use Saga, compensation, and eventual consistency.\nFinally add availability and observability: circuit breaker, retry, timeout, logs, metrics, and tracing."
          },
          "memorize": {
            "zh": "服务边界、数据归属、API/事件、一致性、网关、容错、监控追踪。",
            "en": "Service boundary, data ownership, APIs/events, consistency, gateway, fault tolerance, monitoring/tracing."
          },
          "answer": {
            "zh": "如果要求画图：画客户端/API 网关，后面列服务框，每个服务下面画独立数据库，用事件总线连接订单、支付、配送。",
            "en": "If drawing: draw client/API Gateway, service boxes behind it, one database per service, and an event bus connecting order/payment/delivery."
          },
          "boundary": {
            "zh": "Saga/事件协作是合理示例，不是题干唯一标准答案；要说明取舍。",
            "en": "Saga/event collaboration is an illustrative solution, not the only standard answer; state tradeoffs."
          }
        },
        {
          "title": {
            "zh": "图解怎么背：四组模式",
            "en": "How to memorize the diagram: four pattern groups"
          },
          "summary": {
            "zh": "课程把微服务拆成拆分、通信、部署、可观测性四类问题。",
            "en": "Microservice patterns can be organized into decomposition, communication, deployment, and observability."
          },
          "explain": {
            "zh": "拆分模式回答“怎么切服务”：按业务能力或子域，目标是高内聚、低耦合、SRP、CCP 和团队自治。通信模式回答“服务之间怎么可靠通信”：断路器防止故障蔓延，服务发现找到实例，API 网关管理外部入口。部署模式回答“服务实例怎么运行”：虚拟机、容器、部署平台或无服务器支持隔离、扩缩容、资源限制和成本控制。可观测性模式回答“怎么知道系统正在发生什么”：日志聚合、日志记录、指标、分布式追踪、异常跟踪和健康检查 API。",
            "en": "Decomposition answers how to split services: by business capability or subdomain, aiming at cohesion, loose coupling, SRP, CCP, and team autonomy. Communication answers how services interact reliably: circuit breakers prevent cascading failure, service discovery locates instances, and API Gateway governs external access. Deployment answers how instances run: VMs, containers, deployment platforms, or serverless support isolation, scaling, resource limits, and cost control. Observability answers how to know what is happening: log aggregation, logging, metrics, distributed tracing, exception tracking, and health check APIs."
          },
          "memorize": {
            "zh": "拆分=业务能力/子域；通信=断路器/服务发现/API 网关；部署=容器/平台/无服务器；可观测性=日志/指标/追踪/健康检查。",
            "en": "Decomposition = capability/subdomain; communication = circuit breaker/discovery/API Gateway; deployment = containers/platform/serverless; observability = logs/metrics/tracing/health checks."
          },
          "answer": {
            "zh": "设计题先用拆分图说明服务边界，再补通信、部署和可观测性，不要只写“微服务很多小服务”。",
            "en": "In design answers, use decomposition for service boundaries, then add communication, deployment, and observability; do not stop at “many small services”."
          },
          "boundary": {
            "zh": "以李杉杉课程微服务 页 5-8 为准。",
            "en": "Grounded in Li Shanshan review pages 5-8."
          }
        }
      ]
    },
    {
      "id": "ddd",
      "priority": "P0",
      "title": {
        "zh": "领域驱动设计 DDD",
        "en": "Domain-Driven Design"
      },
      "takeaway": {
        "zh": "DDD 适合业务复杂、耦合变化关系复杂的系统，不是万能方法。复习要抓从问题空间到解空间的流程。",
        "en": "DDD fits systems with high business complexity and complex coupling/change relationships. It is not universal. Focus on the process from problem space to solution space."
      },
      "answerFrame": {
        "zh": "用“适用范围 -> 战略设计 -> 战术设计 -> 事件风暴/建模”作答。设计题要能划子域、限界上下文、上下文映射，并给出聚合/领域事件。",
        "en": "Answer with: applicability -> strategic design -> tactical design -> event storming/modeling. For design questions, identify subdomains, bounded contexts, context maps, aggregates, and domain events."
      },
      "bullets": [
        {
          "zh": "战略模式：核心/通用/支撑子域、限界上下文、上下文映射、防腐层、共享内核。",
          "en": "Strategic patterns: core/generic/supporting subdomain, bounded context, context mapping, anti-corruption layer, shared kernel."
        },
        {
          "zh": "战术模式：统一语言、实体、值对象、聚合、领域服务、工厂、资源库。",
          "en": "Tactical patterns: ubiquitous language, entity, value object, aggregate, domain service, factory, repository."
        },
        {
          "zh": "事件风暴：领域事件是过去发生的业务事实，命名常用名词 + 过去式动词，例如 OrderCreated。",
          "en": "Event storming: a domain event is a past business fact, often named as noun + past-tense verb, e.g. OrderCreated."
        },
        {
          "zh": "从博客补充：DDD 的价值是用子领域/限界上下文降低业务复杂度，用领域模型/统一语言沉淀可复用业务资产。",
          "en": "Blog addition: DDD reduces business complexity through subdomains/bounded contexts and captures reusable business assets through domain models/ubiquitous language."
        },
        {
          "zh": "领域建模不要等同于数据建模：数据模型偏存储结构，领域模型偏业务概念、行为和规则。",
          "en": "Domain modeling is not data modeling: data models emphasize storage structures; domain models emphasize business concepts, behavior, and rules."
        },
        {
          "zh": "DDD 四层架构常写：用户接口层、应用层、领域层、基础设施层；领域层应承载核心业务规则。",
          "en": "DDD four-layer architecture: user interface, application, domain, infrastructure; core business rules belong in the domain layer."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Li Shanshan review slides",
        "Lecture 8-9 DDD slide OCR"
      ],
      "group": "modern",
      "examWeight": {
        "zh": "设计分析题高概率",
        "en": "Likely design-analysis topic"
      },
      "deepDive": [
        {
          "title": {
            "zh": "战略设计",
            "en": "Strategic design"
          },
          "summary": {
            "zh": "DDD 先解决问题空间，不是先画类图。",
            "en": "DDD starts with the problem space, not class diagrams."
          },
          "must": {
            "zh": "子域、核心域、通用语言、限界上下文、上下文映射、防腐层。",
            "en": "Subdomain, core domain, ubiquitous language, bounded context, context map, anti-corruption layer."
          },
          "answer": {
            "zh": "以订单系统举例：订单、支付、库存是不同 限界上下文，通过事件和契约协同。",
            "en": "Example: ordering, payment, and inventory are bounded contexts cooperating through events/contracts."
          },
          "trap": {
            "zh": "不要把 限界上下文 等同微服务或数据库表。它首先是模型边界。",
            "en": "Do not equate bounded context with a microservice or database table; it is primarily a model boundary."
          }
        },
        {
          "title": {
            "zh": "战术设计",
            "en": "Tactical design"
          },
          "summary": {
            "zh": "战略边界确定后，再落到模型内部。",
            "en": "After strategic boundaries, design the internal model."
          },
          "must": {
            "zh": "实体、值对象、聚合、领域服务、仓储、领域事件。",
            "en": "Entity, Value Object, Aggregate, Domain Service, Repository, Domain Event."
          },
          "answer": {
            "zh": "写聚合时说清不变量和事务边界，例如 Order 聚合维护订单项、金额和状态流转。",
            "en": "For aggregates, state invariants and transaction boundaries, e.g. Order maintains items, total, and state transitions."
          },
          "trap": {
            "zh": "不要把所有对象都放进一个大聚合；聚合过大破坏性能和并发。",
            "en": "Do not put all objects into one giant aggregate; it hurts performance and concurrency."
          }
        }
      ],
      "diagramIds": [
        "ddd-event-storming-flow",
        "ddd-core-model",
        "review-microservice-decomposition"
      ],
      "memorize": {
        "zh": "DDD 先做战略设计：统一语言、限界上下文、上下文映射；再做战术设计：实体、值对象、聚合、领域服务、仓储、领域事件。\n限界上下文决定模型边界，聚合决定一致性边界；微服务边界通常可以参考限界上下文，但不是机械一一对应。\n设计题要说明业务不变量、事务边界和上下文之间的协作方式。",
        "en": "DDD starts with strategic design: ubiquitous language, bounded contexts, and context mapping; then tactical design: entities, value objects, aggregates, domain services, repositories, and domain events.\nBounded contexts define model boundaries; aggregates define consistency boundaries. Microservice boundaries often follow bounded contexts, but not mechanically one-to-one.\nFor design questions, state business invariants, transaction boundaries, and collaboration between contexts."
      },
      "examTemplate": {
        "zh": "答 DDD + 微服务题时，先画/列限界上下文，再选核心聚合和领域事件，最后说明服务边界、数据库归属和跨服务一致性。",
        "en": "For DDD + microservice questions, list bounded contexts first, choose core aggregates and domain events, then explain service boundaries, database ownership, and cross-service consistency."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "战略设计：先划边界再谈对象",
            "en": "Strategic design: boundaries before objects"
          },
          "summary": {
            "zh": "DDD 的高分点在限界上下文和统一语言。",
            "en": "The high-scoring DDD points are bounded context and ubiquitous language."
          },
          "explain": {
            "zh": "DDD 先处理业务语言和模型边界。统一语言要求业务人员和开发人员用同一套词，避免“订单、交易、配送单”在不同团队含义混乱。限界上下文规定一个模型在哪个边界内成立，例如订单上下文、支付上下文、配送上下文。同一个词在不同上下文可以有不同含义，但边界内要一致。上下文映射说明上下文之间如何协作，例如客户方/供应方、防腐层、共享内核、开放主机服务。",
            "en": "DDD first handles business language and model boundaries. Ubiquitous language makes business and development use the same terms so words like order/transaction/delivery note do not drift. A bounded context defines where a model is valid, such as order, payment, or delivery contexts. The same word may mean different things across contexts, but it must be consistent inside one context. Context mapping explains collaboration, such as customer/supplier, anti-corruption layer, shared kernel, or open host service."
          },
          "memorize": {
            "zh": "统一语言、限界上下文、上下文映射；先战略，后战术。",
            "en": "Ubiquitous language, bounded context, context mapping; strategic before tactical."
          },
          "answer": {
            "zh": "答题不要一上来列 实体/值对象；先说明模型边界，再落到聚合和事件。",
            "en": "Do not start by listing Entity/Value Object; first explain model boundaries, then aggregates and events."
          },
          "boundary": {
            "zh": "第 8-9 讲 和课程重点强调 DDD 与微服务设计结合。",
            "en": "Lecture 8-9 and the review material emphasize DDD with microservice design."
          }
        },
        {
          "title": {
            "zh": "战术设计：聚合不是对象集合",
            "en": "Tactical design: aggregates are not object piles"
          },
          "summary": {
            "zh": "战术概念要和事务边界、不变量联系起来。",
            "en": "Tactical concepts must connect to transaction boundaries and invariants."
          },
          "explain": {
            "zh": "实体有身份。\n值对象靠属性相等。\n领域服务表达不属于单个对象的领域行为。\n仓储封装聚合持久化。\n领域事件表达领域中已经发生的重要事实。\n聚合是保证一致性的边界，不是把所有对象塞一起；一个 Order 聚合可以维护订单项、总价、状态流转等不变量。\n跨订单、支付、配送的一致性通常用领域事件和最终一致性，而不是一个巨大聚合。",
            "en": "Entities have identity.\nValue objects are equal by attributes.\nDomain services express domain behavior that belongs to no single object.\nRepositories encapsulate aggregate persistence.\nDomain events express important facts that have happened in the domain.\nAn aggregate is a consistency boundary, not a pile of objects; an Order aggregate may maintain items, total, and state transitions.\nConsistency across order, payment, and delivery usually uses domain events and eventual consistency, not one giant aggregate."
          },
          "memorize": {
            "zh": "实体、值对象、聚合、领域服务、仓储、领域事件；聚合=一致性边界。",
            "en": "Entity, Value Object, Aggregate, Domain Service, Repository, Domain Event; aggregate = consistency boundary."
          },
          "answer": {
            "zh": "设计题可写：限界上下文大致对应服务边界，聚合对应服务内部事务边界，领域事件对应服务间协作。",
            "en": "For design questions: bounded contexts roughly guide service boundaries, aggregates guide internal transaction boundaries, and domain events guide collaboration."
          },
          "boundary": {
            "zh": "微服务边界可参考限界上下文，但不要机械一一对应。",
            "en": "Microservice boundaries may follow bounded contexts, but not mechanically one-to-one."
          }
        },
        {
          "title": {
            "zh": "图解怎么背：事件风暴推导边界",
            "en": "How to memorize the diagram: event storming derives boundaries"
          },
          "summary": {
            "zh": "事件风暴不是普通流程图，它用业务事实推导聚合和限界上下文。",
            "en": "Event storming is not a generic flowchart; it derives aggregates and bounded contexts from business facts."
          },
          "explain": {
            "zh": "先识别领域事件，它是过去发生的业务事实，例如 OrderCreated。\n再沿时间轴梳理全量事件。\n然后识别参与者，包括角色、策略、外部系统和前置事件。\n接着根据事件和规则划分聚合，聚合给出一致性和事务边界。\n最后划分限界上下文，并区分读模型和写模型。\n设计题中，限界上下文可指导服务边界。\n聚合指导服务内部事务边界，领域事件指导服务间协作。",
            "en": "First identify domain events, which are past business facts such as OrderCreated.\nThen arrange all events on the timeline.\nNext identify participants, including roles, policies, external systems, and prior events.\nThen group events and rules into aggregates, which define consistency and transaction boundaries.\nFinally divide bounded contexts and distinguish read/write models.\nIn design questions, bounded contexts guide service boundaries.\nAggregates guide internal transaction boundaries, and domain events guide service collaboration."
          },
          "memorize": {
            "zh": "事件 -> 时间轴 -> 参与者 -> 聚合 -> 限界上下文 -> 读/写模型。",
            "en": "Events -> timeline -> participants -> aggregates -> bounded contexts -> read/write models."
          },
          "answer": {
            "zh": "DDD + 微服务题可按“事件找流程，聚合定一致性，限界上下文定服务边界”作答。",
            "en": "For DDD + microservice questions: events find process, aggregates set consistency, bounded contexts set service boundaries."
          },
          "boundary": {
            "zh": "以李杉杉课程 DDD 页 10 为准。",
            "en": "Grounded in Li Shanshan review page 10."
          }
        }
      ]
    },
    {
      "id": "enterprise",
      "priority": "P1",
      "title": {
        "zh": "企业架构",
        "en": "Enterprise Architecture"
      },
      "takeaway": {
        "zh": "企业架构按 P1 复习，但不能只背名词：要能用“是什么、核心、4A、TOGAF/ADM、CBM、建模方法、价值与场景”完整回答。",
        "en": "Review enterprise architecture as P1, but do not only memorize names: be able to answer definition, core idea, 4A, TOGAF/ADM, CBM, modeling methods, value, and scenarios."
      },
      "answerFrame": {
        "zh": "简答题直接套六段：1. 企业架构是什么；2. 核心是找结构、找关系、定原则；3. 4A 分别管什么；4. TOGAF ADM 和 CBM 分别解决什么；5. 五级流程、5W1H、A/B/C/D、流程+数据聚类怎么建模；6. 它解决孤岛、协作、标准化、业务再造、战略落地问题，适合复杂企业级系统。",
        "en": "Use a six-part answer: 1. what enterprise architecture is; 2. its core is identifying structures, relationships, and principles; 3. what each 4A layer governs; 4. what TOGAF ADM and CBM solve; 5. how five-level process, 5W1H, A/B/C/D layers, and process + data clustering support modeling; 6. it solves silos, collaboration, standardization, business reengineering, and strategy execution for complex enterprise systems."
      },
      "bullets": [
        {
          "zh": "定义：企业架构描述具有共同目标的组织集合体的基本组成部分，以及这些组成部分的内外部关系、设计原则和治理原则。",
          "en": "Definition: EA describes the basic components of an organization with a common goal, plus their internal/external relationships, design principles, and governance principles."
        },
        {
          "zh": "核心：找结构、找关系、定原则。结构回答企业有哪些能力/流程/数据/应用/技术；关系回答它们如何依赖和协作；原则回答如何治理变化。",
          "en": "Core: identify structures, relationships, and principles. Structures list capabilities/processes/data/applications/technologies; relationships explain dependency and collaboration; principles govern change."
        },
        {
          "zh": "4A：业务架构管客户、产品、渠道策略、业务流程、业务组件；数据架构管逻辑/物理数据资产、数据标准、数据责任；应用架构管应用蓝图、组件化设计、服务共享；技术架构管技术组件、基础设施、标准化。",
          "en": "4A: Business Architecture covers customers, products, channel strategy, processes, and business components; Data Architecture covers logical/physical data assets, standards, and responsibilities; Application Architecture covers application blueprint, componentized design, and shared services; Technology Architecture covers technical components, infrastructure, and standardization."
        },
        {
          "zh": "TOGAF/ADM：给出从预备、愿景、业务架构、信息系统架构、技术架构，到机会方案、迁移规划、实施治理、变更管理的迭代方法。",
          "en": "TOGAF/ADM gives an iterative method from preliminary and vision through business, information-system, and technology architecture to opportunities/solutions, migration planning, implementation governance, and change management."
        },
        {
          "zh": "CBM：以业务能力为核心，业务组件是能力载体；组件应高内聚、低耦合、可复用、可组装，用来发现共用能力、重复建设和治理边界。",
          "en": "CBM centers on business capability; business components are capability carriers. Components should be cohesive, loosely coupled, reusable, and composable, helping find shared capabilities, duplicated construction, and governance boundaries."
        },
        {
          "zh": "建模方法：五级流程和标准动词库统一业务行为；5W1H 识别业务对象；A/B/C/D 分层数据设计；流程任务与数据实体聚类推导业务组件。",
          "en": "Modeling methods: five-level processes and a standard verb library normalize business behavior; 5W1H identifies business objects; A/B/C/D layers structure data design; clustering process tasks and data entities derives business components."
        },
        {
          "zh": "价值与场景：根本价值是解决系统孤岛和协作问题，其次是标准化、业务再造和战略落地；适合业务复杂、系统规模大、跨部门协作、多遗留系统整合的场景。",
          "en": "Value and scenarios: the fundamental value is solving silos and collaboration problems, then standardization, business reengineering, and strategy execution; it fits complex business, large system scale, cross-department collaboration, and legacy-system integration."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Li Shanshan review slides",
        "Lecture 10-11 Enterprise 架构 slide OCR"
      ],
      "group": "modern",
      "examWeight": {
        "zh": "概念理解题",
        "en": "Concept understanding"
      },
      "deepDive": [
        {
          "title": {
            "zh": "是什么与怎么考",
            "en": "Definition and exam form"
          },
          "summary": {
            "zh": "没有往年资料真题也可能以概念简答出现，重点不是案例细节，而是能把体系说完整。",
            "en": "Even without past-paper frequency, it can appear as a concept short-answer question; the focus is the framework, not case details."
          },
          "must": {
            "zh": "PPT 的定义句要背，但不能只背公式。基本组成部分可展开为 4A：业务架构中的客户、产品、渠道策略、业务流程、业务组件；数据架构中的逻辑/物理数据资产、数据标准、数据责任；应用架构中的应用蓝图、应用组件、服务共享；技术架构中的技术组件、基础设施、标准化与自监控/自恢复。\n内外部关系可以这样写：企业愿景和战略分解为战略能力、价值链和业务领域；业务流程和数据模型推导业务组件；业务组件再被应用、服务、平台和基础设施实现；外部还要连接客户、员工、渠道、监管、遗留系统和运行环境。\n设计/治理原则写成：标准化、组件化、共享复用、高内聚低耦合、架构委员会/架构存储库/变更治理、持续演进。",
            "en": "Memorize the definition, but do not stop at the formula. Basic components can be expanded through 4A: in Business Architecture, customers, products, channel strategy, processes, and business components; in Data Architecture, logical/physical data assets, data standards, and data responsibilities; in Application Architecture, application blueprints, application components, and shared services; in Technology Architecture, technical components, infrastructure, standardization, and self-monitoring/self-recovery.\nInternal/external relationships can be stated as: enterprise vision and strategy are decomposed into strategic capabilities, value chains, and business domains; business processes and data models derive business components; business components are implemented by applications, services, platforms, and infrastructure; externally they connect to customers, employees, channels, regulators, legacy systems, and runtime environments.\nDesign/governance principles include standardization, componentization, sharing/reuse, high cohesion and low coupling, architecture board/repository/change governance, and continuous evolution."
          },
          "answer": {
            "zh": "考场写法：先抄定义句；第二句解释“基本组成部分就是业务、数据、应用、技术这些层次及其中的能力/流程/数据/应用/平台”；第三句解释“关系就是战略到能力、能力到流程和数据、流程数据到业务组件、业务组件到应用和技术实现的链路”；第四句解释“原则就是用标准化、组件化、共享复用和治理机制控制变化”。这样就不是空话。",
            "en": "Exam wording: first write the definition; second, explain that basic components mean the business, data, application, and technology layers and their capabilities/processes/data/applications/platforms; third, explain that relationships are the chain from strategy to capabilities, from capabilities to processes/data, from process/data to business components, and from business components to application/technology implementation; fourth, explain that principles use standardization, componentization, sharing/reuse, and governance mechanisms to control change."
          },
          "trap": {
            "zh": "不要只写“企业的信息化蓝图”这种空话；要落到组成、关系、原则和治理。",
            "en": "Anchor the answer in components, relationships, principles, and governance rather than vague phrases such as “enterprise IT blueprint”."
          }
        },
        {
          "title": {
            "zh": "4A 怎么背",
            "en": "How to memorize 4A"
          },
          "summary": {
            "zh": "4A 是最稳定的展开骨架，答题时每个 A 写职责和例子。",
            "en": "4A is the most stable expansion skeleton; for each A, state responsibility and examples."
          },
          "must": {
            "zh": "业务架构：客户/产品/渠道策略/流程/业务组件；数据架构：数据资产/标准/责任；应用架构：应用蓝图/组件化/共享服务；技术架构：技术组件/基础设施/标准化。",
            "en": "Business: customer/product/channel strategy/process/component; Data: assets/standards/responsibility; Application: blueprint/componentization/shared service; Technology: technical components/infrastructure/standardization."
          },
          "answer": {
            "zh": "可以写成表格式四点。\n业务架构定义业务能力和流程。\n数据架构定义数据对象与标准。\n应用架构定义系统和服务蓝图。\n技术架构定义平台和基础设施。",
            "en": "Write it as four table-like points.\nBusiness Architecture defines capabilities and processes.\nData Architecture defines data objects and standards.\nApplication Architecture defines system and service blueprints.\nTechnology Architecture defines platforms and infrastructure."
          },
          "trap": {
            "zh": "不要把 4A 写成 4 个孤立名词；要说明每层管什么。",
            "en": "Explain what each 4A layer governs instead of listing the names alone."
          }
        },
        {
          "title": {
            "zh": "TOGAF/ADM 与 CBM 怎么答",
            "en": "How to answer TOGAF/ADM and CBM"
          },
          "summary": {
            "zh": "TOGAF 偏过程方法。\nCBM 偏能力分解。\n两者可以一起服务企业架构落地。",
            "en": "TOGAF is process-oriented.\nCBM is capability-decomposition-oriented.\nTogether they support enterprise-architecture implementation."
          },
          "must": {
            "zh": "ADM：预备、愿景、业务架构、信息系统架构、技术架构、机会与解决方案、迁移规划、实施治理、变更管理。CBM：业务能力为核心，组件高内聚、低耦合、可复用、可组装。",
            "en": "ADM: preliminary, vision, business architecture, information-system architecture, technology architecture, opportunities/solutions, migration planning, implementation governance, change management. CBM: business capability as core; cohesive, loosely coupled, reusable, composable components."
          },
          "answer": {
            "zh": "答题时说：TOGAF 解决“按什么流程做架构”，CBM 解决“按什么颗粒度拆业务能力”。落地时从现状到目标，找差距、排路线图、做治理。",
            "en": "Say: TOGAF answers “what process develops architecture”; CBM answers “what granularity decomposes business capability”. Implementation moves from baseline to target, identifies gaps, plans a roadmap, and governs it."
          },
          "trap": {
            "zh": "CBM 不是微服务图，也不是数据库表图；它是业务能力地图。",
            "en": "CBM is not a microservice diagram or database table diagram; it is a business capability map."
          }
        },
        {
          "title": {
            "zh": "建模与应用场景",
            "en": "Modeling and scenarios"
          },
          "summary": {
            "zh": "这是让答案变实的部分，用来说明企业架构不是口号。",
            "en": "This makes the answer concrete and shows EA is not just a slogan."
          },
          "must": {
            "zh": "五级流程、标准动词库、5W1H、A/B/C/D 分层数据设计、流程+数据聚类。价值：解决孤岛、协作、标准化、业务再造、战略落地。",
            "en": "Five-level process, standard verb library, 5W1H, A/B/C/D layered data design, process + data clustering. Value: solve silos, collaboration, standardization, business reengineering, and strategy execution."
          },
          "answer": {
            "zh": "应用场景写三类：跨部门协作复杂、遗留系统多且重复建设严重、企业战略需要落到流程/数据/应用/技术改造。",
            "en": "State three scenarios: complex cross-department collaboration, many legacy systems with duplicated construction, and strategy needing transformation of processes/data/applications/technology."
          },
          "trap": {
            "zh": "案例华为/建行了解即可，不要把案例细节当作背诵核心。",
            "en": "Huawei/CCB case details are background; the main line is definition, 4A, TOGAF/ADM, CBM, value, and scenarios."
          }
        }
      ],
      "diagramIds": [
        "enterprise-methods-togaf-cbm",
        "enterprise-4a"
      ],
      "memorize": {
        "zh": "定义：企业架构是具有共同目标的组织集合体的基本组成部分，以及这些组成部分的内外部关系、设计原则和治理原则。\n基本组成部分：按 4A 展开。业务架构含客户、产品、渠道策略、业务流程、业务组件；数据架构含逻辑/物理数据资产、数据标准、数据责任；应用架构含应用蓝图、组件化设计、服务共享；技术架构含技术组件、基础设施、标准化、自监控和自恢复。\n内外部关系：企业战略/愿景 -> 战略能力/价值链/业务领域 -> 业务流程和数据模型 -> 业务组件 -> 应用组件/共享服务/平台 -> 技术基础设施；还要面向客户、员工、渠道、监管、遗留系统和运行环境。\n治理原则：标准化、组件化、共享复用、高内聚低耦合、架构委员会/架构存储库/变更治理、持续演进。\n方法必背：TOGAF 的核心是 ADM 架构开发周期；CBM 以业务能力为核心，业务组件是能力载体。\n建模必背：五级流程、标准动词库、5W1H 识别业务对象、A/B/C/D 分层数据设计、流程 + 数据聚类推导业务组件。\n价值与场景：解决系统孤岛和协作问题，推动标准化、业务再造和战略落地；适合业务复杂、系统规模大、跨部门协同和遗留系统治理场景。",
        "en": "Definition: enterprise architecture describes the basic components of an organization with a common goal, plus their internal/external relationships, design principles, and governance principles.\nBasic components: expand through 4A. Business Architecture includes customers, products, channel strategy, business processes, and business components; Data Architecture includes logical/physical data assets, standards, and responsibilities; Application Architecture includes application blueprints, componentized design, and shared services; Technology Architecture includes technical components, infrastructure, standardization, self-monitoring, and self-recovery.\nInternal/external relationships: enterprise strategy/vision -> strategic capabilities/value chains/business domains -> business processes and data models -> business components -> application components/shared services/platforms -> technical infrastructure; also connect to customers, employees, channels, regulators, legacy systems, and runtime environments.\nGovernance principles: standardization, componentization, sharing/reuse, high cohesion and low coupling, architecture board/repository/change governance, and continuous evolution.\nMemorize methods: TOGAF centers on the ADM cycle; CBM centers on business capabilities, with components as capability carriers.\nMemorize modeling: five-level process, standard verb library, 5W1H for business objects, A/B/C/D layered data design, and process + data clustering to derive business components.\nValue and scenarios: solve system silos and collaboration problems, support standardization, business reengineering, and strategy execution; suitable for high business complexity, large system scale, cross-department collaboration, and legacy-system governance."
      },
      "examTemplate": {
        "zh": "企业架构若出简答题，直接按六段答：1. 是什么；2. 核心三词；3. 4A；4. TOGAF/CBM；5. 建模方法；6. 价值和适用场景。每段 1-2 句即可。",
        "en": "For an enterprise-architecture short answer, use six paragraphs: 1. definition; 2. three core words; 3. 4A; 4. TOGAF/CBM; 5. modeling methods; 6. value and scenarios. One or two sentences per paragraph is enough."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "定义句背完之后怎么展开",
            "en": "How to expand the definition"
          },
          "summary": {
            "zh": "PPT 的定义句本身抽象，展开要靠 4A 和全景图。",
            "en": "The slide definition is abstract; expand it through 4A and the panorama."
          },
          "explain": {
            "zh": "“基本组成部分”不是让你自由发挥，而是落到业务、数据、应用、技术四层。业务层有客户、产品、渠道策略、业务流程和业务组件；数据层有逻辑/物理数据资产、数据标准和数据责任；应用层有应用蓝图、应用组件和共享服务；技术层有技术组件、基础设施、标准化、自监控和自恢复。“内外部关系”可以写成从企业愿景/战略到战略能力、价值链和业务领域，再到流程/数据模型、业务组件、应用/服务/平台和基础设施的实现链路，外部连接客户、员工、渠道、监管、遗留系统和运行环境。",
            "en": "“Basic components” should be expanded into business, data, application, and technology layers. Business has customers, products, channel strategy, processes, and business components; data has logical/physical data assets, standards, and responsibilities; application has blueprints, components, and shared services; technology has technical components, infrastructure, standardization, self-monitoring, and self-recovery. “Relationships” can be written as the chain from enterprise vision/strategy to strategic capabilities, value chains, business domains, then to processes/data models, business components, applications/services/platforms, and infrastructure, while externally connecting to customers, employees, channels, regulators, legacy systems, and runtime environments."
          },
          "memorize": {
            "zh": "定义句 + 4A 展开 + 战略到技术的实现链路 + 外部对象。",
            "en": "Definition + 4A expansion + strategy-to-technology implementation chain + external actors."
          },
          "answer": {
            "zh": "答题第一段写定义。\n第二段解释基本组成部分。\n第三段解释关系。\n第四段解释治理原则。",
            "en": "First paragraph: definition.\nSecond paragraph: basic components.\nThird paragraph: relationships.\nFourth paragraph: governance principles."
          },
          "boundary": {
            "zh": "依据 第 10-11 讲 企业架构概念页、4A 页、全景图页和李杉杉复习 幻灯片。",
            "en": "Grounded in Lecture 10-11 concept/4A/panorama slides and Li Shanshan review slides."
          }
        },
        {
          "title": {
            "zh": "TOGAF/ADM、CBM、建模方法怎么串起来",
            "en": "How TOGAF/ADM, CBM, and modeling methods connect"
          },
          "summary": {
            "zh": "这三块分别回答过程、颗粒度和落地建模。",
            "en": "These answer process, granularity, and modeling."
          },
          "explain": {
            "zh": "TOGAF 的 ADM 回答“按什么过程做企业架构”：从预备和愿景开始，依次做业务架构、信息系统架构、技术架构，再做机会方案、迁移规划、实施治理和变更管理。CBM 回答“业务能力按什么颗粒度拆”：以业务能力为核心，把业务组件作为能力载体，追求高内聚、低耦合、可复用、可组装。建模方法回答“怎么把业务能力具体识别出来”：用五级流程和标准动词库统一任务，用 5W1H 识别业务对象，用 A/B/C/D 分层设计数据，再用流程任务和数据实体聚类推导业务组件。",
            "en": "TOGAF ADM answers “what process develops enterprise architecture”: preliminary and vision, business architecture, information-system architecture, technology architecture, opportunities/solutions, migration planning, implementation governance, and change management. CBM answers “what granularity decomposes business capability”: business capability is the core and business components carry capabilities, pursuing high cohesion, low coupling, reuse, and composability. Modeling methods answer “how to identify capabilities concretely”: five-level processes and a standard verb library normalize tasks, 5W1H identifies business objects, A/B/C/D layers structure data, and process-task/data-entity clustering derives business components."
          },
          "memorize": {
            "zh": "TOGAF=过程；CBM=能力颗粒度；五级流程/5W1H/A/B/C/D/聚类=建模落地。",
            "en": "TOGAF = process; CBM = capability granularity; five-level process/5W1H/A-B-C-D/clustering = modeling implementation."
          },
          "answer": {
            "zh": "如果题问企业架构方法论，按 TOGAF 和 CBM 对比写：共性是解决颗粒度问题，实践中可混合，以完成目标为首要原则。",
            "en": "If asked about methodology, compare TOGAF and CBM: both address granularity, and practice may mix methods with goal achievement first."
          },
          "boundary": {
            "zh": "案例细节降权；方法骨架和建模术语要会。",
            "en": "Case details are low priority; method skeleton and modeling terms should be known."
          }
        },
        {
          "title": {
            "zh": "图解怎么背：TOGAF 回答过程，CBM 回答颗粒度",
            "en": "How to memorize the diagram: TOGAF is process, CBM is granularity"
          },
          "summary": {
            "zh": "企业架构 P1 不要求背案例细节，但要能说清方法论。",
            "en": "EA is P1; case details are not the memorization line, but methodology must be clear."
          },
          "explain": {
            "zh": "TOGAF 的 ADM 架构开发周期从预备和愿景开始，依次推进业务架构、信息系统架构、技术架构、机会与解决方案、迁移规划、实施治理和变更管理，需求管理贯穿全程。治理可写架构委员会、架构存储库和企业连续统一体。CBM 的核心是业务能力，业务组件是能力载体，组件要求高内聚、低耦合、可复用、可组装。落地识别能力时，可用五级流程和标准动词库做流程聚类，用 5W1H 和 A/B/C/D 数据分层做数据聚类。",
            "en": "TOGAF ADM starts with preliminary and vision, then business architecture, information-system architecture, technology architecture, opportunities and solutions, migration planning, implementation governance, and change management, with requirements management throughout. Governance keywords include architecture board, architecture repository, and enterprise continuum. CBM centers on business capability; business components carry capabilities and should be cohesive, loosely coupled, reusable, and composable. Capability identification can use five-level process and a verb library for process clustering, plus 5W1H and A/B/C/D data layers for data clustering."
          },
          "memorize": {
            "zh": "TOGAF=ADM 过程；CBM=业务能力和组件；建模=流程聚类 + 数据聚类。",
            "en": "TOGAF = ADM process; CBM = business capability and components; modeling = process clustering + data clustering."
          },
          "answer": {
            "zh": "企业架构题若问方法论，按 TOGAF/ADM、CBM、建模方法三段写。",
            "en": "For EA methodology questions, write three parts: TOGAF/ADM, CBM, and modeling methods."
          },
          "boundary": {
            "zh": "以李杉杉课程企业架构 页 13/15 为准。",
            "en": "Grounded in Li Shanshan enterprise-architecture review pages 13 and 15."
          }
        }
      ]
    },
    {
      "id": "patterns",
      "priority": "P0",
      "title": {
        "zh": "架构模式、风格与演进",
        "en": "Architectural Patterns, Styles, and Evolution"
      },
      "takeaway": {
        "zh": "吕骏课程强调：可能考每一代架构的结构骨架与演进理由。不要死背模式名，要理解已有矛盾如何推出现代架构。",
        "en": "Lu Jun emphasized that each architecture generation may be tested by skeleton and evolution rationale: explain how old tensions lead to newer architectures."
      },
      "answerFrame": {
        "zh": "按“时代矛盾 -> 架构骨架 -> 解决的痛点 -> 新问题/取舍 -> 适用场景”作答。画图时先画最简单骨架。",
        "en": "Answer by: historical tension -> structural skeleton -> pain point solved -> new problems/tradeoffs -> suitable context. When drawing, start with the simplest skeleton."
      },
      "bullets": [
        {
          "zh": "核心：算力稀缺 -> 多用户共享 -> 富交互 -> 系统分层 -> 企业协同 -> 团队自治发布 -> 平台化韧性。",
          "en": "Main line: scarce computation -> multi-user sharing -> rich interaction -> system layering -> enterprise collaboration -> autonomous team releases -> platform resilience."
        },
        {
          "zh": "CS 解决主机终端交互弱的问题，但胖客户端带来维护困难。",
          "en": "C/S solves weak interaction in mainframe/terminal systems, but fat clients create maintenance difficulty."
        },
        {
          "zh": "分层解决耦合问题，但分层不够细时缺乏独立部署和局部迭代能力。",
          "en": "Layering reduces coupling, but coarse layers lack independent deployment and local iteration."
        },
        {
          "zh": "事件驱动把同步调用链变异步，提升韧性，但引入时序与排障复杂性。",
          "en": "Event-driven design turns synchronous call chains asynchronous, improving resilience while adding ordering and debugging complexity."
        },
        {
          "zh": "博客补充分类型记忆：模块模式（分层）、组件-连接器模式（代理模式/MVC/管道-过滤器/客户端-服务器/P2P/SOA/发布-订阅/共享数据）、分配模式（MapReduce/多层部署）。",
          "en": "Blog classification: Module patterns (Layered), C&C patterns (Broker/MVC/Pipe-filter/Client-server/P2P/SOA/Pub-sub/Shared-data), Allocation patterns (Map-reduce/Multi-tier)."
        },
        {
          "zh": "模式题不要写成设计模式题：这里问的是系统级组织方式、连接件、部署/分配和质量属性取舍。",
          "en": "Do not answer architecture-pattern questions as GoF design-pattern questions: focus on system-level organization, connectors, allocation/deployment, and quality tradeoffs."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Lu Jun review slides",
        "Lecture 3 OCR"
      ],
      "group": "patterns",
      "examWeight": {
        "zh": "理解题",
        "en": "Concept understanding"
      },
      "deepDive": [
        {
          "title": {
            "zh": "风格/模式/战术粒度",
            "en": "Style/pattern/tactic granularity"
          },
          "summary": {
            "zh": "先分清粒度，再举例。",
            "en": "Clarify granularity before examples."
          },
          "must": {
            "zh": "风格 是结构家族，模式 是命名复用方案，战术 是针对质量属性的小设计动作。",
            "en": "Style is a family of structures, pattern is a named reusable solution, tactic is a small quality-driven design move."
          },
          "answer": {
            "zh": "答 模式 按“上下文 -> 结构 -> 优点 -> 局限”写；答 战术 按“质量属性 -> 机制 -> 取舍”写。",
            "en": "For patterns use context, structure, benefits, limits; for tactics use quality, mechanism, tradeoff."
          },
          "trap": {
            "zh": "不要答成 GoF 设计模式大集合。这里重点是架构级模式/风格/战术。",
            "en": "Keep the answer at architecture level: architectural patterns, styles, tactics, and their quality tradeoffs."
          }
        },
        {
          "title": {
            "zh": "演进矛盾",
            "en": "Evolution tension"
          },
          "summary": {
            "zh": "吕骏课程强调按时代矛盾理解架构模式。",
            "en": "Lu Jun emphasized historical tensions behind patterns."
          },
          "must": {
            "zh": "主机终端解决机器昂贵，C/S 改善交互，分层/SOA 解耦和分工，微服务/云原生追求自治和弹性。",
            "en": "Mainframe shared expensive machines, C/S improved interaction, layered/SOA decoupled work, microservices/cloud-native pursue autonomy and resilience."
          },
          "answer": {
            "zh": "说明一种模式时说它解决了什么矛盾、又带来什么新问题。",
            "en": "When explaining a pattern, state the tension it solves and the new problem it creates."
          },
          "trap": {
            "zh": "不要把架构演进写成线性优劣排序；每种模式都是时代约束下的取舍。",
            "en": "Do not rank evolution linearly; each pattern is a tradeoff under constraints."
          }
        }
      ],
      "diagramIds": [
        "review-architecture-evolution",
        "review-architecture-units",
        "microservice-style-comparison"
      ],
      "memorize": {
        "zh": "模式、风格、策略/战术的关系：质量目标驱动策略/战术，战术组合形成模式，模式在视图里体现为结构。\n答题重点是架构演进与架构级模式理解；GoF 设计模式不作为架构模式核心。\n回答模式题要写上下文、解决的问题、结构、收益、代价，不能只背名字。",
        "en": "Relationship: quality goals drive tactics; tactics combine into patterns; patterns appear as structures in views.\nThe answer focus is architecture evolution and architectural-pattern understanding; GoF design patterns are not the architecture-pattern core.\nFor pattern questions, answer context, problem, structure, benefits, and tradeoffs, not just the name."
      },
      "examTemplate": {
        "zh": "模式题统一按“适用上下文 -> 结构元素和连接器 -> 解决什么质量/演化问题 -> 好处 -> 代价/局限”答。",
        "en": "Use “context -> structural elements and connectors -> quality/evolution problem solved -> benefits -> costs/limits” for pattern questions."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "风格、模式、战术 不要混",
            "en": "Do not mix style, pattern, and tactic"
          },
          "summary": {
            "zh": "课程重点强调它们的层级关系。",
            "en": "The review material emphasizes their hierarchy."
          },
          "explain": {
            "zh": "质量属性目标会驱动战术，例如提高可用性可以检测故障、恢复、冗余；提高性能可以缓存、并发、资源管理。多个战术和结构经验组合成架构模式。架构风格是更抽象的结构约束和组织方式，例如分层、管道-过滤器、客户端-服务器、微服务。答题时不要把 GoF 设计模式当作本课程架构模式核心。",
            "en": "Quality goals drive tactics: availability may use fault detection, recovery, redundancy; performance may use caching, concurrency, resource management. Multiple tactics and structural experience combine into architectural patterns. Architectural style is a more abstract structural constraint and organisation, such as layered, pipe-and-filter, client-server, microservices. Keep GoF design patterns outside the main architecture-pattern answer line."
          },
          "memorize": {
            "zh": "战术=质量属性手段；模式=结构化解法；风格=更抽象的组织约束。",
            "en": "Tactic = quality technique; pattern = structured solution; style = abstract organisation constraint."
          },
          "answer": {
            "zh": "模式题按上下文、问题、结构、收益、代价写；不要只列名字。",
            "en": "For pattern questions, answer context, problem, structure, benefits, costs; do not only list names."
          },
          "boundary": {
            "zh": "第 3 讲 更偏架构演进/模式理解，设计模式部分不作为核心。",
            "en": "Lecture 3 leans toward architecture evolution and architectural-pattern understanding; GoF design patterns are not the architecture-pattern core."
          }
        },
        {
          "title": {
            "zh": "架构演进要背冲突而不是背时间线",
            "en": "Memorize tensions, not just timeline"
          },
          "summary": {
            "zh": "演进题容易问为什么从一种架构走到另一种。",
            "en": "Evolution questions often ask why one architecture led to another."
          },
          "explain": {
            "zh": "可以按核心理解：早期集中式计算解决资源稀缺；多用户和交互推动 客户端-服务器；复杂业务推动分层和模块化；企业集成推动 SOA；快速交付和自治团队推动微服务；云原生继续把弹性、自动化、可观测性和平台能力放进架构。每次演进都不是新架构无条件更好，而是在质量属性和组织约束下做取舍。",
            "en": "Understand the mainline: centralized computing addressed scarce resources; multi-user interaction pushed client-server; business complexity pushed layering and modularity; enterprise integration pushed SOA; rapid delivery and autonomous teams pushed microservices; cloud-native emphasizes elasticity, automation, observability, and platform capability. Each evolution is not unconditional improvement but a tradeoff under quality and organizational constraints."
          },
          "memorize": {
            "zh": "资源共享 -> 交互 -> 分层模块化 -> 企业集成 -> 自治交付 -> 云原生韧性。",
            "en": "Resource sharing -> interaction -> layering/modularity -> enterprise integration -> autonomous delivery -> cloud-native resilience."
          },
          "answer": {
            "zh": "答演进题时写“已有架构解决什么、暴露什么问题、新架构用什么结构缓解、代价是什么”。",
            "en": "For evolution, write “what the old architecture solved, what problem it exposed, what structure the new architecture uses, and what cost it introduces”."
          },
          "boundary": {
            "zh": "以吕骏课程 第 3 讲 的演进核心为准；具体历史细节只作理解背景。",
            "en": "Grounded in Lu Jun's Lecture 3 review line; detailed history should not consume P0 time."
          }
        }
      ]
    },
    {
      "id": "views",
      "priority": "P0",
      "title": {
        "zh": "视图与架构文档化",
        "en": "Views and Architecture Documentation"
      },
      "takeaway": {
        "zh": "4+1 视图 要和 视图及视图外信息 一起背；答题重点是视图类型、关注点和视图外信息，而不只是列 UML 图名。",
        "en": "Memorize 4+1 together with Views and Beyond. Focus on view types, stakeholder concerns, and beyond-view information, not just UML diagram names."
      },
      "answerFrame": {
        "zh": "4+1：逻辑、进程、物理、开发 + 用例场景。视图及视图外信息：先文档化视图，再补充跨视图信息、接口、映射、理由、质量属性。",
        "en": "4+1: logical, process, physical, development + use-case scenarios. Views and Beyond: document views first, then beyond-view information, interfaces, mappings, rationale, and quality attributes."
      },
      "bullets": [
        {
          "zh": "模块视图类型：分解、使用、泛化、分层、数据模型等。",
          "en": "Module viewtype: decomposition, uses, generalization, layered, data model, etc."
        },
        {
          "zh": "组件-连接器视图类型：运行时组件、连接器、交互。",
          "en": "Component-and-connector viewtype: runtime components, connectors, interactions."
        },
        {
          "zh": "分配视图类型：软件到环境、硬件、团队、文件系统等的映射。",
          "en": "Allocation viewtype: mapping software to environment, hardware, teams, filesystems, etc."
        }
      ],
      "sources": [
        "Complete review recording transcript",
        "Complete review minutes",
        "Review slides OCR"
      ],
      "group": "process",
      "examWeight": {
        "zh": "补充掌握",
        "en": "Supplemental topic"
      },
      "deepDive": [
        {
          "title": {
            "zh": "多视图动机",
            "en": "Why multiple views"
          },
          "summary": {
            "zh": "不同 利益相关者 需要不同视角。",
            "en": "Different stakeholders need different perspectives."
          },
          "must": {
            "zh": "模块 看实现单元，C&C 看运行时交互，分配 看软件到硬件/团队/文件的映射。",
            "en": "Module concerns implementation units, C&C runtime interaction, Allocation software-to-environment mapping."
          },
          "answer": {
            "zh": "先说为什么不能只用一个图，再列 3 类 视图类型 或 4+1 并说明目的。",
            "en": "Explain why one diagram is insufficient, then list three viewtypes or 4+1 and their purposes."
          },
          "trap": {
            "zh": "不要把“视图”写成随机 UML 图名。视图要对应 利益相关者 关注点。",
            "en": "Do not list random UML diagrams; views must match stakeholder concerns."
          }
        },
        {
          "title": {
            "zh": "文档包",
            "en": "Documentation package"
          },
          "summary": {
            "zh": "视图及视图外信息 要写 视图 内和 视图 外。",
            "en": "Views and Beyond includes view and beyond-view information."
          },
          "must": {
            "zh": "每个 视图 要有主表示、元素目录、关系、接口、行为、上下文、理由；视图外 有路线图、概览、术语、约束、映射。",
            "en": "Each view needs primary presentation, element catalog, relations, interfaces, behavior, context, rationale; beyond-view includes roadmap, overview, glossary, constraints, mappings."
          },
          "answer": {
            "zh": "架构文档题按“概览 -> 视图 -> 视图外信息 -> 映射/设计理由”答。",
            "en": "Answer architecture documentation as overview, views, beyond-view, mappings/rationale."
          },
          "trap": {
            "zh": "只写“画类图、部署图、时序图”不够。要说每个视图服务谁、解决什么 关注点。",
            "en": "Class/deployment/sequence diagrams alone are insufficient; state audience and concern."
          }
        },
        {
          "title": {
            "zh": "4+1 每个视图怎么画 UML",
            "en": "How to draw UML for each 4+1 view"
          },
          "summary": {
            "zh": "每个视图都要先说关注点，再选能表达该关注点的 UML 图。",
            "en": "For each view, state the concern first, then choose the UML notation that exposes it."
          },
          "must": {
            "zh": "+1 场景画用例图：画系统边界、外部参与者和关键用例。\n逻辑视图画类图：画核心领域类/对象、职责、属性/操作、关联、聚合或继承。\n开发视图画组件图或包图：画代码包、组件、服务/库、制品和依赖关系。\n进程视图画时序图：画运行时生命线、消息顺序、同步/异步调用、并发或通信点。\n物理视图画部署图：画节点、容器/服务器、网络、部署制品、数据库和中间件。",
            "en": "+1 scenarios use a use-case diagram: draw system boundary, external actors, and key use cases.\nLogical view uses a class diagram: draw core domain classes/objects, responsibilities, attributes/operations, associations, aggregation, or inheritance.\nDevelopment view uses a component or package diagram: draw packages, components, services/libraries, artifacts, and dependencies.\nProcess view uses a sequence diagram: draw runtime lifelines, message order, sync/async calls, concurrency, or communication points.\nPhysical view uses a deployment diagram: draw nodes, containers/servers, networks, deployed artifacts, databases, and middleware."
          },
          "answer": {
            "zh": "画图题按“视图目的 -> UML 图种 -> 图中元素”回答；4+1 依赖箭头按 逻辑视图 -> 开发视图、逻辑视图 -> 进程视图、开发视图 -> 物理视图、进程视图 -> 物理视图 画。",
            "en": "For sketch questions, answer as view purpose -> UML notation -> diagram elements. Draw 4+1 dependency arrows as Logical -> Development, Logical -> Process, Development -> Physical, and Process -> Physical."
          },
          "trap": {
            "zh": "不要把 UML 图名当成答案本身。图名只是表达视图的工具，分数点在视图关注点、元素和关系。",
            "en": "Do not treat UML names as the whole answer; the marks come from view concerns, elements, and relations."
          }
        }
      ],
      "diagramIds": [
        "architecture-view-selection",
        "review-4-plus-1-views",
        "review-4-plus-1-uml-cheatsheet",
        "architecture-design-process"
      ],
      "memorize": {
        "zh": "视图及视图外信息 三类视图：模块、组件-连接器、分配。\n4+1 视图：逻辑视图、进程视图、物理视图、开发视图，加 用例/场景。\n4+1 画图：用例图、类图、组件/包图、时序图、部署图。\n视图不是越多越好；根据 利益相关者关注点 选择并记录视图、元素、关系、约束和 设计理由。",
        "en": "Views and Beyond has three view types: Module, Component-and-Connector, and Allocation.\n4+1 views: Logical, Process, Physical, Development, plus Use Cases/Scenarios.\n4+1 sketching: use-case diagram, class diagram, component/package diagram, sequence diagram, deployment diagram.\nMore views are not always better; select views by stakeholder concerns and record elements, relations, constraints, and rationale."
      },
      "examTemplate": {
        "zh": "视图题先说“同一架构面向不同关切要用不同视图”，再列三类视图或 4+1，最后给例子：开发人员看模块，运维人员看部署，性能/并发看进程视图或 C&C。",
        "en": "For view questions, first state that different stakeholder concerns need different views, then list the three view types or 4+1, and give examples: developers use module views, operators use deployment views, performance/concurrency uses process or C&C views."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "为什么需要多个视图",
            "en": "Why multiple views are needed"
          },
          "summary": {
            "zh": "视图是面向 利益相关者 关注点 的沟通工具。",
            "en": "Views communicate with stakeholder concerns."
          },
          "explain": {
            "zh": "同一个系统的架构不能靠一张图表达完。\n开发人员关心模块分解和依赖。\n运维人员关心部署节点和网络。\n性能分析关心运行时组件和连接器。\n项目管理关心工作分配和责任边界。\n因此架构文档要根据利益相关者关注点选择视图，而不是图越多越好。",
            "en": "One diagram cannot express the whole architecture.\nDevelopers care about module decomposition and dependencies.\nOperators care about deployment nodes and networks.\nPerformance analysis cares about runtime components and connectors.\nProject management cares about work assignment and responsibility boundaries.\nTherefore, architecture documentation selects views by stakeholder concerns, not by drawing more diagrams."
          },
          "memorize": {
            "zh": "视图=从某类关切看架构；同一架构有多种视图。",
            "en": "View = architecture seen through one concern; one architecture has multiple views."
          },
          "answer": {
            "zh": "答题先说 利益相关者关注点，再列视图类型，最后给每类视图适合谁看。",
            "en": "Start with stakeholder concerns, list view types, then state who each view serves."
          },
          "boundary": {
            "zh": "课程讲义与课程材料 点名 架构 视图/4+1。",
            "en": "The review material and slides name architecture views/4+1."
          }
        },
        {
          "title": {
            "zh": "视图及视图外信息 与 4+1 怎么背",
            "en": "How to memorize Views and Beyond and 4+1"
          },
          "summary": {
            "zh": "这是文档化题的稳定骨架。",
            "en": "This is the stable skeleton for documentation questions."
          },
          "explain": {
            "zh": "视图及视图外信息 常用三类：模块视图 看静态代码/模块分解和依赖；组件-连接器 视图 看运行时组件、连接器、数据流和交互；分配 视图 看软件元素到环境的映射，例如部署到节点、分配给团队、映射到文件/目录。4+1 视图是 逻辑视图、进程视图、物理视图、开发视图 加 用例/场景，用场景把其他视图串起来。",
            "en": "Views and Beyond has three common types: Module view shows static code/module decomposition and dependencies; Component-and-Connector view shows runtime components, connectors, data flow, and interactions; Allocation view maps software elements to environments, such as deployment to nodes, assignment to teams, or files/directories. 4+1 views are Logical, Process, Physical, Development plus Use Cases/Scenarios, where scenarios tie the other views together."
          },
          "memorize": {
            "zh": "模块、C&C、分配；逻辑视图、进程视图、物理视图、开发视图 + 用例。",
            "en": "Module, C&C, Allocation; Logical, Process, Physical, Development + Use Cases."
          },
          "answer": {
            "zh": "如果题问文档包，写视图、元素、关系、接口、行为、约束、设计决策和 设计理由。",
            "en": "If asked about a documentation package, include views, elements, relations, interfaces, behavior, constraints, design decisions, and rationale."
          },
          "boundary": {
            "zh": "视图例子按课程常见分类保守回答，不要自创过多分类。",
            "en": "Use conservative course categories; do not invent too many classifications."
          }
        },
        {
          "title": {
            "zh": "图解怎么背：视图不是越多越好",
            "en": "How to memorize the diagram: views are not more-is-better"
          },
          "summary": {
            "zh": "第 12 讲 的重点是按 利益相关者 信息需求选择视图。",
            "en": "Lecture 12 emphasizes selecting views by stakeholder information needs."
          },
          "explain": {
            "zh": "最小文档通常至少有一个模块视图和一个组件-连接器视图，大系统还要一个分配视图。\n选择视图时先建利益相关者/视图表：行写利益相关者，列写候选视图，每个格子填无、概览、中等细节或高细节。\n第二步合并边缘视图，特别是只服务少数人或只需要概览的视图。\n第三步排序并分阶段发布；分解视图常适合较早发布，因为项目经理可据此安排团队、培训、预算和外包。\n视图外信息补充文档路线图、系统概览、跨视图映射、设计理由、术语表等。",
            "en": "A minimal document usually has at least one Module view and one Component-and-Connector view; larger systems also need one Allocation view.\nWhen selecting views, first build a stakeholder/view table: rows are stakeholders, columns are candidate views, and cells record none, overview, moderate detail, or high detail.\nSecond, combine marginal views, especially those serving few stakeholders or needing only overview.\nThird, prioritize and publish in stages; decomposition views often come early because project managers can use them for teams, training, budget, and outsourcing.\nBeyond-view information adds document roadmap, system overview, cross-view mappings, rationale, glossary, and similar material."
          },
          "memorize": {
            "zh": "最少 模块 + C&C；大系统加 分配；选视图=建表、合并、排序；视图外=路线图/概览/映射/设计理由。",
            "en": "Minimum Module + C&C; larger systems add Allocation; choose views by table, combine, prioritize; beyond-view = roadmap/overview/mapping/rationale."
          },
          "answer": {
            "zh": "文档化题先说 利益相关者关注点，再说最小视图集合、选择方法和 视图外 信息。",
            "en": "For documentation questions, start from stakeholder concerns, then minimum views, selection method, and beyond-view information."
          },
          "boundary": {
            "zh": "以 第 12 讲 页 96-109 为准。",
            "en": "Grounded in Lecture 12 pages 96-109."
          }
        }
      ]
    },
    {
      "id": "quality-tactics",
      "group": "core",
      "priority": "P0",
      "examWeight": {
        "zh": "质量属性扩展题",
        "en": "Quality-attribute extension"
      },
      "title": {
        "zh": "质量属性战术",
        "en": "Quality Attribute Tactics"
      },
      "takeaway": {
        "zh": "战术 是把质量属性落到架构设计决定的最小工具，答题要从“属性 -> 场景 -> 战术 -> 权衡”走。",
        "en": "A tactic is the smallest tool that turns a quality attribute into architectural decisions; answer through “attribute -> scenario -> tactic -> tradeoff”."
      },
      "answerFrame": {
        "zh": "先写六要素场景。\n再选择战术：可用性用故障检测、故障恢复和故障预防。\n性能用资源需求控制和资源管理。\n安全用认证、授权、检测和恢复；可测试性用控制和观察。",
        "en": "Start with the six-part scenario.\nThen choose tactics: availability uses fault detection, fault recovery, and fault prevention.\nPerformance uses resource-demand control and resource management.\nSecurity uses authentication, authorization, detection, and recovery; testability uses control and observation."
      },
      "bullets": [
        {
          "zh": "可用性：ping/echo 检测、心跳检测、异常检测、回滚、主动/被动冗余。",
          "en": "Availability: ping/echo, heartbeat, exception detection, rollback, active/passive redundancy."
        },
        {
          "zh": "性能：限制事件响应、事件优先级、资源池、并发、缓存、负载均衡。",
          "en": "Performance: limit event response, prioritize events, resource pooling, concurrency, caching, load balancing."
        },
        {
          "zh": "可修改性：封装、使用中介、限制依赖、延迟绑定时间。",
          "en": "Modifiability: encapsulate, use an intermediary, restrict dependencies, defer binding time."
        },
        {
          "zh": "安全性：认证用户、授权用户、限制访问、检测攻击、恢复。",
          "en": "Security: authenticate users, authorize users, limit access, detect attacks, recover."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Lecture 2-4 质量属性 OCR"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "战术速记",
            "en": "Tactic memory"
          },
          "summary": {
            "zh": "战术 是质量属性到设计的桥。",
            "en": "A tactic bridges quality attributes and design."
          },
          "must": {
            "zh": "可用性：检测、恢复、预防。\n性能：控制资源需求、管理资源、资源仲裁。\n安全性：抵抗、检测、恢复。\n可测试性：控制和观察。",
            "en": "Availability: detect/recover/prevent.\nPerformance: resource demand/management/arbitration.\nSecurity: resist/detect/recover.\nTestability: control and observe."
          },
          "answer": {
            "zh": "看到属性题，先写场景，再选 战术，并说明它改变了哪一段响应。",
            "en": "For an attribute question, write scenario, choose tactic, and say which response it changes."
          },
          "trap": {
            "zh": "不要把战术当完整模式。多个战术组合后才可能形成代理模式、微服务、分层等模式。",
            "en": "Do not treat tactic as a complete pattern; patterns combine multiple tactics."
          }
        },
        {
          "title": {
            "zh": "取舍表达",
            "en": "Tradeoff wording"
          },
          "summary": {
            "zh": "战术题要用 权衡 把答案收住。",
            "en": "Tactic answers need tradeoff closure."
          },
          "must": {
            "zh": "缓存提升性能但带来一致性；冗余提升可用性但增加成本；认证提升安全但影响易用性。",
            "en": "Caching improves performance but complicates consistency; redundancy improves availability but costs more; authentication improves security but may hurt usability."
          },
          "answer": {
            "zh": "最后一句写“因此该 战术 适用于……但需要……配套”。",
            "en": "End with “therefore this tactic suits ..., but needs ... support”."
          },
          "trap": {
            "zh": "只列 战术 名字不得分高，要解释用途和代价。",
            "en": "Listing tactic names alone is weak; explain purpose and cost."
          }
        }
      ],
      "diagramIds": [
        "quality-scenario-table",
        "utility-tree"
      ],
      "memorize": {
        "zh": "战术是实现质量属性的设计手段；模式通常是多种战术组合后的结构方案。\n可用性常见战术：检测故障、恢复、冗余、心跳、重试；性能常见战术：控制资源需求、管理资源、并发、缓存。\n答题不要堆术语，要把战术连接到质量场景的响应和响应度量。",
        "en": "A tactic is a design technique for achieving a quality attribute; a pattern is often a structural combination of tactics.\nAvailability tactics include fault detection, recovery, redundancy, heartbeat, and retry; performance tactics include controlling resource demand, managing resources, concurrency, and caching.\nConnect each tactic to the response and response measure in a quality scenario."
      },
      "examTemplate": {
        "zh": "若问“如何提高可用性/性能”，先写质量目标，再选 2-3 个战术，最后说明这些战术如何改变响应或响应度量。",
        "en": "If asked how to improve availability/performance, state the quality goal, choose 2-3 tactics, and explain how they change the response or response measure."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "战术必须接回质量场景",
            "en": "Tactics must connect back to scenarios"
          },
          "summary": {
            "zh": "背战术名不够，要说明改变了哪个响应或度量。",
            "en": "Names are insufficient; explain which response/measure changes."
          },
          "explain": {
            "zh": "战术是实现质量属性的设计手段，不是孤立词表。\n战术必须服务质量场景。\n可用性场景里服务器无响应时，战术可以是心跳检测、冗余副本、故障转移和恢复；响应从“服务中断”变成“通知操作者并继续操作”，响应度量从不可测变成“无停机时间/30 秒内恢复”。\n性能场景里高负载导致慢响应时，战术可以是缓存、并发、资源池、负载均衡，度量是 95% 请求 2 秒内返回。",
            "en": "A tactic is a design technique for achieving a quality attribute, not an isolated word list.\nA tactic must serve a quality scenario.\nFor availability, when a server does not respond, tactics can include heartbeat detection, redundant replicas, failover, and recovery; the response changes from service interruption to notifying the operator and continuing operation, and the measure changes to no downtime or recovery within 30 seconds.\nFor performance, when high load causes slow response, tactics can include caching, concurrency, resource pools, and load balancing, with a measure such as 95% of requests returning within 2 seconds."
          },
          "memorize": {
            "zh": "质量目标 -> 场景 -> 战术 -> 响应/度量变化。",
            "en": "Quality goal -> scenario -> tactic -> response/measure change."
          },
          "answer": {
            "zh": "答题不要写“使用缓存提高性能”就停，补一句缓存降低重复计算/远程访问，从而降低平均延迟。",
            "en": "Do not stop at “use cache to improve performance”; add that caching reduces repeated computation/remote access and lowers average latency."
          },
          "boundary": {
            "zh": "以质量属性场景和 战术/模式 关系为准；具体战术例子保守即可。",
            "en": "Grounded in quality scenarios and the tactics/patterns relationship; keep tactic examples conservative."
          }
        },
        {
          "title": {
            "zh": "常见质量属性怎么举例",
            "en": "Examples for common quality attributes"
          },
          "summary": {
            "zh": "可用性、性能、可修改性、安全是最容易迁移到设计题的。",
            "en": "Availability, performance, modifiability, and security are most reusable in design answers."
          },
          "explain": {
            "zh": "可用性关注故障下继续服务，可写检测、恢复、冗余。性能关注响应时间、吞吐和资源，可写缓存、并发、负载均衡、资源管理。可修改性关注变化成本，可写模块化、信息隐藏、接口稳定、低耦合。安全关注防止未授权访问和追踪，可写认证、授权、加密、记录、最小权限。所有例子都要回到具体场景和度量。",
            "en": "Availability concerns continued service under failure: detection, recovery, redundancy. Performance concerns latency, throughput, and resources: cache, concurrency, load balancing, resource management. Modifiability concerns change cost: modularity, information hiding, stable interfaces, low coupling. Security concerns unauthorized access and traceability: authentication, authorization, encryption, audit, least privilege. Each example must return to scenario and measure."
          },
          "memorize": {
            "zh": "可用性=故障继续；性能=时间/吞吐/资源；可修改性=低成本变化；安全=授权/保护/追踪。",
            "en": "Availability = continue under failure; performance = time/throughput/resource; modifiability = low-cost change; security = authorization/protection/tracing."
          },
          "answer": {
            "zh": "设计题可以在组件图旁边标注质量战术，例如网关处限流和认证，服务间熔断，数据库旁缓存或读写分离。",
            "en": "In design questions, annotate tactics next to components, e.g. rate limiting/authentication at Gateway, circuit breaker between services, cache/read-write split near database."
          },
          "boundary": {
            "zh": "数值指标若题干未给，写成示例性表达，不要冒充标准答案。",
            "en": "If numbers are not given, phrase them as illustrative, not official standard answers."
          }
        }
      ]
    },
    {
      "id": "design-decisions",
      "group": "process",
      "priority": "P0",
      "examWeight": {
        "zh": "重点覆盖概念",
        "en": "Core concept coverage"
      },
      "title": {
        "zh": "设计决定七分类",
        "en": "Seven Categories of Design Decisions"
      },
      "takeaway": {
        "zh": "架构设计不是只选 模式，而是系统性做一组设计决定；七类设计决定要能分点说明。",
        "en": "Architecture design is not merely choosing a pattern; it is a systematic set of design decisions. The seven decision categories should be explained point by point."
      },
      "answerFrame": {
        "zh": "按七类展开：责任分配、协调/配置模型、数据模型、资源管理、架构元素映射、绑定时间、技术选择。\n每类给一个例子即可。",
        "en": "Use seven categories: responsibility allocation, coordination/configuration model, data model, resource management, mapping among architectural elements, binding time, technology choice.\nGive one example each."
      },
      "bullets": [
        {
          "zh": "责任分配：把功能、质量属性责任分配给元素，例如认证服务负责身份校验。",
          "en": "Responsibility allocation: assign function/quality responsibilities to elements, e.g. an auth service handles identity checks."
        },
        {
          "zh": "协调/配置：定义元素如何交互，选择同步调用、异步事件、代理模式 或 发布-订阅。",
          "en": "Coordination/configuration: define element interaction, such as synchronous calls, events, broker, or pub-sub."
        },
        {
          "zh": "数据：定义数据生命周期、所有权、一致性边界和持久化策略。",
          "en": "Data: define data lifecycle, ownership, consistency boundary, and persistence strategy."
        },
        {
          "zh": "绑定时间：决定变化在编译、部署、启动还是运行时绑定，直接影响可修改性与可测试性。",
          "en": "Binding time: decide whether variation binds at compile, deployment, startup, or runtime; this affects modifiability and testability."
        }
      ],
      "sources": [
        "Complete review recording transcript",
        "Complete review minutes",
        "Review slides OCR"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "七类决定",
            "en": "Seven decision categories"
          },
          "summary": {
            "zh": "设计决定是架构的实质。",
            "en": "Design decisions are the substance of architecture."
          },
          "must": {
            "zh": "责任分配、协调模型、数据模型、资源管理、元素映射、绑定时间、技术选择。",
            "en": "Responsibility assignment, coordination model, data model, resource management, element mapping, binding time, technology choice."
          },
          "answer": {
            "zh": "每类给一个例子：如把支付职责放入支付服务，通信选事件，数据归服务所有，运行时绑定策略。",
            "en": "Give examples: payment responsibility in Payment Service, events for coordination, service-owned data, runtime binding."
          },
          "trap": {
            "zh": "不要把“技术选型”当作唯一设计决定。架构主要是职责、交互、约束和变化点。",
            "en": "Technology choice is not the only design decision; architecture is responsibilities, interactions, constraints, variation points."
          }
        },
        {
          "title": {
            "zh": "绑定时间",
            "en": "Binding time"
          },
          "summary": {
            "zh": "绑定时间 常与可修改性/可测试性一起考。",
            "en": "Binding time often appears with modifiability/testability."
          },
          "must": {
            "zh": "越晚绑定越灵活但测试组合和运行时不确定性更高；越早绑定更稳定但变化成本高。",
            "en": "Later binding is more flexible but increases test combinations and runtime uncertainty; earlier binding is stable but harder to change."
          },
          "answer": {
            "zh": "用插件、配置、编译期选择、运行时策略切换举例。",
            "en": "Use plug-ins, configuration, compile-time choice, runtime strategy selection as examples."
          },
          "trap": {
            "zh": "不要单向吹 晚绑定。考试更喜欢双向 权衡。",
            "en": "Do not praise late binding one-sidedly; exams prefer two-way tradeoffs."
          }
        }
      ],
      "diagramIds": [
        "design-decision-categories",
        "architecture-design-process",
        "add-roadmap"
      ],
      "memorize": {
        "zh": "架构不仅是图，还包括设计决策和 设计理由。\n七类设计决定：元素职责、协调模型、数据模型、资源管理、元素映射、绑定时间、技术选择。\n好答案要说明“为什么这么选”，并写出取舍。",
        "en": "Architecture is not only diagrams; it also includes design decisions and rationale.\nSeven decision categories: responsibilities, coordination model, data model, resource management, mapping among elements, binding time, and technology choices.\nA strong answer explains why the choice is made and states tradeoffs."
      },
      "examTemplate": {
        "zh": "答设计决定题按“决策项 -> 备选方案 -> 选择理由 -> 影响的质量属性 -> 代价”写。",
        "en": "For decision questions, use “decision item -> alternatives -> rationale -> affected quality attributes -> tradeoffs”."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "七类设计决定是什么",
            "en": "The seven design-decision categories"
          },
          "summary": {
            "zh": "架构不只是图，设计决定才说明为什么这样画。",
            "en": "Architecture is not only diagrams; decisions explain why the diagram is this way."
          },
          "explain": {
            "zh": "七类可按问题来记：元素职责回答每个组件做什么；协调模型回答组件怎么通信和同步；数据模型回答数据是什么、归谁管；资源管理回答 CPU、连接、线程、存储等资源如何分配；元素映射回答模块、运行时元素和部署节点如何对应；绑定时间回答变化在编译期、部署期还是运行期绑定；技术选择回答框架、中间件、数据库、云平台等怎么选。",
            "en": "Memorize the seven categories as questions: responsibilities answer what each component does; coordination model answers how components communicate and synchronize; data model answers what data exists and who owns it; resource management answers how CPU, connections, threads, storage, etc. are allocated; mapping among elements answers how modules, runtime elements, and deployment nodes correspond; binding time answers whether variation is bound at compile/deploy/runtime; technology choices answer frameworks, middleware, databases, and cloud platforms."
          },
          "memorize": {
            "zh": "职责、协调、数据、资源、映射、绑定时间、技术选择。",
            "en": "Responsibilities, coordination, data, resources, mapping, binding time, technology choices."
          },
          "answer": {
            "zh": "答题按“决策项 -> 备选方案 -> 选择理由 -> 影响质量属性 -> 代价”写。",
            "en": "Answer with “decision item -> alternatives -> rationale -> affected qualities -> tradeoffs”."
          },
          "boundary": {
            "zh": "七类设计决定；这是 P0 表述。",
            "en": "The review material explicitly lists seven decision categories; this is P0."
          }
        },
        {
          "title": {
            "zh": "设计理由 为什么要写",
            "en": "Why rationale matters"
          },
          "summary": {
            "zh": "没有 设计理由，架构文档只有结果没有推理。",
            "en": "Without rationale, documentation has results but no reasoning."
          },
          "explain": {
            "zh": "架构常常是取舍。选择微服务提高独立部署和团队自治，但引入分布式一致性和运维复杂度；选择共享数据库降低短期开发成本，但削弱服务自治；选择缓存提高性能，但引入一致性和失效问题。设计理由 要记录 驱动因素、备选方案、为什么选、放弃了什么、风险是什么。",
            "en": "Architecture is tradeoff. Microservices improve independent deployment and team autonomy but introduce distributed consistency and operational complexity; shared database lowers short-term development cost but weakens service autonomy; cache improves performance but adds consistency/invalidation problems. Rationale records drivers, alternatives, why this choice, what was sacrificed, and risks."
          },
          "memorize": {
            "zh": "设计理由=驱动因素 + 备选方案 + 选择理由 + 代价风险。",
            "en": "Rationale = drivers + alternatives + reason + tradeoffs/risks."
          },
          "answer": {
            "zh": "设计题最后补“取舍”通常能提分：独立演进 vs 一致性复杂度，性能 vs 新鲜度，灵活性 vs 治理成本。",
            "en": "Adding tradeoffs often improves design answers: independent evolution vs consistency complexity, performance vs freshness, flexibility vs governance cost."
          },
          "boundary": {
            "zh": "和 ADD 第 6 步、架构文档化、设计决定七类一致。",
            "en": "Consistent with ADD Step 6, documentation, and the seven decision categories."
          }
        },
        {
          "title": {
            "zh": "图解怎么背：七类设计决定落到例子",
            "en": "How to memorize the diagram: make seven decisions concrete"
          },
          "summary": {
            "zh": "七类名称要会背，但得配系统例子才像答案。",
            "en": "Memorize the names, but examples make the answer real."
          },
          "explain": {
            "zh": "职责分配：说明每个架构元素做什么。\n协调模型：说明同步调用、异步事件、代理模式或发布-订阅如何协作。\n数据模型：说明数据对象、数据归属和一致性边界。\n资源管理：说明 CPU、线程、连接、缓存、带宽等资源如何分配。\n元素映射：说明模块、运行时组件和部署节点如何对应。\n绑定时间：说明变化点是在编译、部署、启动还是运行时决定。\n技术选择：说明框架、中间件、数据库和云平台如何选择。\n答题时每类给一句例子，再说明它影响的质量属性。",
            "en": "Responsibility allocation states what each architectural element does.\nCoordination model states how synchronous calls, asynchronous events, Broker, or publish-subscribe collaborate.\nData model states data objects, data ownership, and consistency boundaries.\nResource management covers allocation of CPU, threads, connections, cache, bandwidth, and other resources.\nMapping among elements explains how modules, runtime components, and deployment nodes correspond.\nBinding time states whether a variation point is decided at compile, deployment, startup, or runtime.\nTechnology choice states how frameworks, middleware, databases, and cloud platforms are selected.\nIn an answer, give one example for each category and explain the affected quality attribute."
          },
          "memorize": {
            "zh": "职责、协调、数据、资源、映射、绑定时间、技术选择。",
            "en": "Responsibilities, coordination, data, resources, mapping, binding time, technology choices."
          },
          "answer": {
            "zh": "架构图旁要能补设计决定和 设计理由；否则图只说明“是什么”，没有说明“为什么”。",
            "en": "A diagram should be accompanied by decisions and rationale; otherwise it says what, but not why."
          },
          "boundary": {
            "zh": "以张贺第一份课程讲义第 7 页为准。",
            "en": "Grounded in Zhang He review-1 page 7."
          }
        }
      ]
    },
    {
      "id": "evaluation-atam",
      "group": "historical",
      "priority": "P2",
      "examWeight": {
        "zh": "补充掌握",
        "en": "Supplemental topic"
      },
      "title": {
        "zh": "ATAM 架构评估",
        "en": "ATAM Architecture Evaluation"
      },
      "takeaway": {
        "zh": "ATAM 是补充评估主题。掌握输出、参与者，以及风险/敏感点/权衡点即可。",
        "en": "ATAM is a supplemental evaluation topic. Memorize outputs, roles, risks, sensitivity points, and tradeoff points."
      },
      "answerFrame": {
        "zh": "按阶段背输出，再用三概念收尾：风险 是潜在问题，敏感点 影响单一质量属性，权衡点 同时影响多个质量属性。",
        "en": "Memorize outputs by phase, then close with three concepts: risk is a potential problem, sensitivity point affects one quality attribute, tradeoff point affects multiple attributes."
      },
      "bullets": [
        {
          "zh": "第 1 阶段 核心输出：业务驱动、架构方法、效用树、场景、风险/非风险、敏感点/权衡点。",
          "en": "Phase 1 outputs: business drivers, architectural approaches, utility tree, scenarios, risks/non-risks, sensitivity/tradeoff points."
        },
        {
          "zh": "第 2 阶段 加入更广泛 利益相关者 生成和排序场景，并归纳风险主题。",
          "en": "Phase 2 involves broader stakeholders to generate/prioritize scenarios and summarize risk themes."
        },
        {
          "zh": "第 3 阶段输出最终报告，包含风险主题、敏感点、权衡点和推荐行动。",
          "en": "Phase 3 produces the final report with risk themes, sensitivity points, tradeoff points, and recommended actions."
        }
      ],
      "sources": [
        "Historical past papers",
        "Lecture 2-4 质量属性 OCR"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "阶段输出",
            "en": "Phase outputs"
          },
          "summary": {
            "zh": "ATAM 按阶段输出表背。",
            "en": "Memorize ATAM through the phase-output table."
          },
          "must": {
            "zh": "第 0 阶段：评估计划。\n第 1 阶段：业务目标、架构说明、效用树、风险/非风险、敏感点/权衡点。\n第 2 阶段：利益相关者场景和风险主题。\n第 3 阶段：最终报告。",
            "en": "Phase 0: evaluation plan.\nPhase 1: business drivers, architecture presentation, utility tree, risks/non-risks, sensitivity/tradeoff points.\nPhase 2: stakeholder scenarios and risk themes.\nPhase 3: final report."
          },
          "answer": {
            "zh": "用“阶段 -> 参与者 -> 输出物”三列表回答最稳。",
            "en": "A phase-participant-output table is safest."
          },
          "trap": {
            "zh": "不要把 ATAM 写成测试。它评估架构决策对质量属性的影响。",
            "en": "ATAM is not testing; it evaluates architecture decisions against qualities."
          }
        },
        {
          "title": {
            "zh": "三个概念",
            "en": "Three concepts"
          },
          "summary": {
            "zh": "风险 / 敏感点 / 权衡 要有例子。",
            "en": "Risk, sensitivity, and tradeoff need examples."
          },
          "must": {
            "zh": "风险 是潜在负面结果；敏感点 是某参数影响一个质量；权衡点 是一个决定影响多个质量且方向可能冲突。",
            "en": "Risk is a potential negative outcome; sensitivity point affects one quality; tradeoff point affects multiple qualities in potentially conflicting directions."
          },
          "answer": {
            "zh": "例子：单 DB 是可用性风险；缓存大小是性能敏感点；分层是可修改性和性能的权衡点。",
            "en": "Examples: single DB is availability risk; cache size is performance sensitivity; layering trades modifiability and performance."
          },
          "trap": {
            "zh": "概念定义没有例子很容易显空。",
            "en": "Definitions without examples feel empty."
          }
        }
      ],
      "diagramIds": [
        "utility-tree",
        "atam-phase-outputs"
      ],
      "memorize": {
        "zh": "ATAM 关注架构是否满足质量属性目标，核心产物包括质量属性场景、效用树、风险、敏感点、权衡点。\n效用树从质量属性展开到具体场景，并用重要性和难度/风险排序。\n评价不是证明架构完美，而是暴露风险和取舍。",
        "en": "ATAM evaluates whether an architecture satisfies quality goals; key outputs include quality scenarios, utility tree, risks, sensitivity points, and tradeoff points.\nA utility tree refines quality attributes into concrete scenarios and ranks them by importance and difficulty/risk.\nEvaluation does not prove the architecture perfect; it exposes risks and tradeoffs."
      },
      "examTemplate": {
        "zh": "ATAM/评价题按“收集场景 -> 构建效用树 -> 分析架构方案 -> 找风险/敏感点/权衡点 -> 形成评价结论”答。",
        "en": "For ATAM/evaluation, answer “collect scenarios -> build utility tree -> analyze architectural approaches -> identify risks/sensitivity points/tradeoff points -> conclude”."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "ATAM 评价什么",
            "en": "What ATAM evaluates"
          },
          "summary": {
            "zh": "掌握到能辨认、能简答即可。",
            "en": "Know enough to recognize the terms and write a short answer."
          },
          "explain": {
            "zh": "ATAM 用来评价一个架构是否能满足重要质量属性目标。\n它不是写新架构，而是围绕业务目标、质量属性场景和架构方案找风险。\n核心产物包括效用树、质量属性场景、风险、非风险、敏感点和权衡点。\n敏感点是某个设计参数变化会显著影响质量属性；权衡点是一个设计决定同时影响多个质量属性，且可能一好一坏。",
            "en": "ATAM evaluates whether an architecture can satisfy important quality-attribute goals.\nIt does not design a new architecture; it identifies risks around business goals, quality scenarios, and architectural approaches.\nKey outputs include utility tree, quality scenarios, risks, non-risks, sensitivity points, and tradeoff points.\nA sensitivity point is a design parameter whose change significantly affects a quality attribute; a tradeoff point is a decision affecting multiple quality attributes, possibly improving one while hurting another."
          },
          "memorize": {
            "zh": "效用树、场景、风险、敏感点、权衡点。",
            "en": "Utility tree, scenarios, risks, sensitivity points, tradeoff points."
          },
          "answer": {
            "zh": "答题流程：收集 业务目标 -> 生成质量场景/效用树 -> 描述架构方案 -> 分析风险/敏感点/权衡点 -> 给评价结论。",
            "en": "Process: collect business goals -> generate scenarios/utility tree -> describe architectural approaches -> analyze risks/sensitivity/tradeoffs -> conclude."
          },
          "boundary": {
            "zh": "主要来自 ATAM/补充资料，未列入 P0。",
            "en": "Mainly ATAM/historical-paper grounded; review material does not raise it to P0."
          }
        },
        {
          "title": {
            "zh": "风险、敏感点、权衡点怎么举例",
            "en": "Examples for risk, sensitivity point, tradeoff point"
          },
          "summary": {
            "zh": "把术语变成例子才好背。",
            "en": "Examples make the terms memorable."
          },
          "explain": {
            "zh": "例如系统选择单数据库，风险是数据库成为单点和性能瓶颈；敏感点可以是连接池大小或缓存失效时间，因为它们变化会显著影响性能；权衡点可以是引入缓存，提高性能但降低数据新鲜度和一致性。再如微服务拆分，提高可修改性和独立部署，但降低事务一致性并增加运维复杂度。",
            "en": "Example: choosing a single database creates risk of single point and bottleneck; sensitivity points may be connection pool size or cache TTL because changes significantly affect performance; a tradeoff point may be adding cache, improving performance but reducing freshness/consistency. Microservice decomposition improves modifiability and independent deployment but reduces transaction consistency and increases operations complexity."
          },
          "memorize": {
            "zh": "风险=可能失败；敏感点=参数变动影响大；权衡点=一项决策牵动多个质量属性。",
            "en": "Risk = possible failure; sensitivity point = parameter with strong impact; tradeoff point = one decision affecting multiple qualities."
          },
          "answer": {
            "zh": "如果没有具体系统，举缓存或微服务拆分例子最稳。",
            "en": "If no system is given, cache or microservice decomposition examples are safe."
          },
          "boundary": {
            "zh": "示例是讲解用，考试以题干架构为准。",
            "en": "Examples are explanatory; use the question architecture in the exam."
          }
        }
      ]
    },
    {
      "id": "reuse-variability",
      "group": "historical",
      "priority": "P2",
      "examWeight": {
        "zh": "补充复用题",
        "en": "Supplemental reuse topic"
      },
      "title": {
        "zh": "复用、SPL、MDA 与可变性",
        "en": "Reuse, SPL, MDA, and Variability"
      },
      "takeaway": {
        "zh": "这是补充复用主题。掌握 SPL/MDA/SOA 的复用概念，以及可变点、可变机制、绑定时间三件事。",
        "en": "Supplemental reuse topic: know SPL/MDA/SOA reuse concepts and the three variability terms: variation point, variation mechanism, and binding time."
      },
      "answerFrame": {
        "zh": "SPL 复用核心资产和产品线架构。\nMDA 复用平台无关模型和转换。\nSOA 复用服务契约与组合。\n共同点是用抽象和变化机制管理多个产品、平台或场景。",
        "en": "SPL reuses core assets and product-line architecture.\nMDA reuses platform-independent models and transformations.\nSOA reuses service contracts and service compositions.\nAll three use abstraction and variation mechanisms across products, platforms, or scenarios."
      },
      "bullets": [
        {
          "zh": "SPL 的关键是 共性/可变性，不是一个产品的版本发布。",
          "en": "SPL centers on commonality/variability, not releases of one product."
        },
        {
          "zh": "变化点 是允许变化的位置，绑定时间 决定变化何时被绑定。",
          "en": "A variation point is where variation is allowed; binding time decides when the variation is bound."
        },
        {
          "zh": "MDA 中 PIM 到 PSM 的转换体现模型复用和平台迁移。",
          "en": "In MDA, PIM-to-PSM transformations express model reuse and platform migration."
        }
      ],
      "sources": [
        "Historical past papers",
        "Raw predecessor notes"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "SPL 核心",
            "en": "SPL core"
          },
          "summary": {
            "zh": "产品线不是复制产品。",
            "en": "A product line is not copy-paste products."
          },
          "must": {
            "zh": "核心资产、产品线 架构、共性、可变性、变化点、特征模型。",
            "en": "Core assets, product line architecture, commonality, variability, variation points, feature model."
          },
          "answer": {
            "zh": "按“多个相关产品 -> 共性/可变性 -> 核心资产 -> 变体生成”答。",
            "en": "Answer as related products, commonality/variability, core assets, variant derivation."
          },
          "trap": {
            "zh": "不要把 SPL 当单产品版本发布或配置文件。",
            "en": "Do not treat SPL as versioning or a config file only."
          }
        },
        {
          "title": {
            "zh": "复用三件套",
            "en": "Reuse trio"
          },
          "summary": {
            "zh": "常见问法包括变化点、变化机制、绑定时间。",
            "en": "Common questions include variation points, variation mechanisms, and binding time."
          },
          "must": {
            "zh": "SPL 复用核心资产。\nMDA 复用模型和转换。\nSOA 复用服务契约和组合。",
            "en": "SPL reuses core assets.\nMDA reuses models and transformations.\nSOA reuses service contracts and compositions."
          },
          "answer": {
            "zh": "比较题按复用对象、复用机制、适用语境三列写。",
            "en": "For comparison, use reuse object, mechanism, suitable context."
          },
          "trap": {
            "zh": "共同点是抽象和变化管理，差异是复用粒度。",
            "en": "Commonality is abstraction and variation management; difference is reuse granularity."
          }
        }
      ],
      "diagramIds": [],
      "memorize": {
        "zh": "复用题常见问法：SPL 通过共性/可变性和核心资产复用一族产品。\n可变性三件事：可变点、可变机制、绑定时间。\n不要把所有复用都写成复制代码；架构级复用关注资产、平台、生成、配置和产品线。",
        "en": "Common reuse questions ask how SPL reuses core assets across a product family through commonality and variability.\nThree variability terms: variation point, variation mechanism, and binding time.\nDo not reduce reuse to copy-paste code; architecture-level reuse focuses on assets, platforms, generation, configuration, and product lines."
      },
      "examTemplate": {
        "zh": "SPL 题按“领域工程建核心资产 -> 应用工程派生产品 -> 管理共性和可变性 -> 说明收益和成本”答。",
        "en": "For SPL, answer “domain engineering builds core assets -> application engineering derives products -> manage commonality and variability -> state benefits and costs”."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "SPL 复用到底复用什么",
            "en": "What SPL reuses"
          },
          "summary": {
            "zh": "这部分掌握概念即可，常见问法是定义和三要素。",
            "en": "Know the concept and the three elements: variation point, mechanism, and binding time."
          },
          "explain": {
            "zh": "软件产品线不是复制粘贴代码，而是围绕一族相似产品识别共性和可变性。\n领域工程构建核心资产，包括架构、组件、需求、测试、配置、生成脚本和文档。\n应用工程根据具体产品需求选择和绑定可变点，派生产品。\n收益是规模化复用和一致性，成本是前期投入、治理和可变性管理复杂。",
            "en": "A software product line is not copy-paste reuse; it identifies commonality and variability across a family of similar products.\nDomain engineering builds core assets, including architecture, components, requirements, tests, configuration, generators, and documents.\nApplication engineering selects and binds variation points according to a concrete product’s requirements to derive that product.\nBenefits are reuse at scale and consistency; costs are upfront investment, governance, and variability-management complexity."
          },
          "memorize": {
            "zh": "领域工程建立核心资产。\n应用工程派生具体产品。\n全过程管理共性和可变性。",
            "en": "Domain engineering builds core assets.\nApplication engineering derives concrete products.\nThe whole process manages commonality and variability."
          },
          "answer": {
            "zh": "答 SPL 时按“产品族 -> 共性/可变性 -> 核心资产 -> 派生产品 -> 收益/成本”写。",
            "en": "For SPL, write “product family -> commonality/variability -> core assets -> product derivation -> benefits/costs”."
          },
          "boundary": {
            "zh": "掌握概念边界，避免与微服务、DDD 和 ADD 混答。",
            "en": "Keep the concept boundary clear and avoid mixing it with microservices, DDD, or ADD."
          }
        },
        {
          "title": {
            "zh": "可变性三件事",
            "en": "The three variability questions"
          },
          "summary": {
            "zh": "常见问法包括 变化点 / 机制 / 绑定时间。",
            "en": "Common questions include variation point, variation mechanism, and binding time."
          },
          "explain": {
            "zh": "可变点回答“哪里可以变”，例如支付方式、推荐算法或部署区域。\n可变机制回答“怎么实现变化”，例如配置、插件、策略、继承或生成。\n绑定时间回答“什么时候确定变化”，例如编译期、部署期、启动期或运行期。\n绑定越晚越灵活，但运行复杂度、测试难度和治理成本通常越高。",
            "en": "A variation point answers where variation can occur, such as payment method, recommendation algorithm, or deployment region.\nA variation mechanism answers how variation is implemented, such as configuration, plugin, strategy, inheritance, or generation.\nBinding time answers when the variation is fixed: compile time, deployment time, startup time, or runtime.\nLater binding is more flexible, but it usually increases runtime complexity, testing difficulty, and governance cost."
          },
          "memorize": {
            "zh": "变哪里、怎么变、何时绑定。",
            "en": "Where it varies, how it varies, when it binds."
          },
          "answer": {
            "zh": "答题给一个例子：支付方式是可变点，插件/配置是机制，部署时或运行时绑定。",
            "en": "Give an example: payment method is a variation point, plugin/configuration is the mechanism, and binding occurs at deployment or runtime."
          },
          "boundary": {
            "zh": "和设计决定七类里的 绑定时间 有交叉；掌握概念边界即可。",
            "en": "This overlaps with binding time in the seven design-decision categories; keep the concept boundary clear."
          }
        }
      ]
    },
    {
      "id": "design-playbook",
      "group": "exam",
      "priority": "P0",
      "examWeight": {
        "zh": "设计分析题模板",
        "en": "Design-analysis template"
      },
      "title": {
        "zh": "设计分析题答题模板",
        "en": "Design-Analysis Answer Playbooks"
      },
      "takeaway": {
        "zh": "设计题要让老师看到你在用架构方法。核心模板围绕 ASR/ADD、微服务、DDD；三层/缓存可按补充设计练习处理。",
        "en": "Design answers should show architectural method. Core templates center ASR/ADD, microservices, and DDD; three-tier/cache can be handled as supplemental design exercises."
      },
      "answerFrame": {
        "zh": "通用结构：识别利益相关者、ASR 和约束 -> 用 ADD 或 DDD/微服务推导边界 -> 画核心结构 -> 分配职责/API/数据归属 -> 补质量属性取舍与验证。",
        "en": "General structure: identify stakeholders/ASRs/constraints -> use ADD or DDD/microservices to derive boundaries -> draw the core structure -> assign responsibilities/APIs/data ownership -> add quality tradeoffs and validation."
      },
      "bullets": [
        {
          "zh": "ADD/ASR 题：从 利益相关者关注点、质量属性场景和约束选择 驱动因素，再按 ADD 七步组织迭代和文档化。",
          "en": "ADD/ASR questions: select drivers from stakeholder concerns, quality scenarios, and constraints, then organize iterations and documentation with ADD seven steps."
        },
        {
          "zh": "微服务设计题：从系统操作、业务能力或 DDD 子域推服务边界，说明 API、数据归属、部署和可观测性。",
          "en": "Microservice design: derive boundaries from operations, business capabilities, or DDD subdomains; explain APIs, data ownership, deployment, and observability."
        },
        {
          "zh": "DDD 设计题：先划子域/限界上下文，再补聚合、领域事件、上下文映射和与服务边界的关系。",
          "en": "DDD design: identify subdomains/bounded contexts, then add aggregates, domain events, context mapping, and service-boundary mapping."
        },
        {
          "zh": "三层/缓存设计题按设计练习处理：会画职责与协作图，会写视图外信息。",
          "en": "Treat three-tier/cache design questions as design practice: draw responsibilities and collaboration, then write beyond-view information."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Li Shanshan review slides",
        "Recent past-paper clusters"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "设计题总链条",
            "en": "Design answer chain"
          },
          "summary": {
            "zh": "设计题必须有结构、有职责、有取舍。",
            "en": "Design questions need structure, responsibilities, and tradeoffs."
          },
          "must": {
            "zh": "识别 ASR -> 选模式/战术 -> 画核心结构 -> 分配职责/接口 -> 说明质量属性取舍 -> 文档化/验证。",
            "en": "Identify ASRs, choose patterns/tactics, draw core structure, assign responsibilities/interfaces, discuss quality tradeoffs, document/verify."
          },
          "answer": {
            "zh": "哪怕题目只说“设计”，也要把图转成文字说明，避免阅卷看不懂。",
            "en": "Even if the question only says “design”, translate the diagram into written responsibilities."
          },
          "trap": {
            "zh": "不要只堆术语。图里出现的每个组件都要有存在理由。",
            "en": "Do not dump terms; each component in the diagram needs a reason."
          }
        },
        {
          "title": {
            "zh": "核心设计模板",
            "en": "Current design template"
          },
          "summary": {
            "zh": "围绕微服务 + DDD + ADD 文档化，三层/缓存题重点写职责、协作和文档项。",
            "en": "Center microservices + DDD + ADD documentation; for three-tier/cache questions, focus on responsibilities, collaboration, and documentation items."
          },
          "must": {
            "zh": "服务边界、数据边界、API/事件协作、部署与可观测性、质量属性 权衡。",
            "en": "Service boundaries, data boundaries, API/event collaboration, deployment/observability, and quality tradeoffs."
          },
          "answer": {
            "zh": "图上画业务能力/限界上下文到服务的映射，文字说明每个服务职责、数据归属和跨服务协作。",
            "en": "Draw the mapping from business capabilities/bounded contexts to services, then describe responsibilities, data ownership, and cross-service collaboration."
          },
          "trap": {
            "zh": "不要把 Saga、API 网关、某个服务名写成唯一标准答案；它们是可用的示例设计手段。",
            "en": "Do not treat Saga, API Gateway, or a specific service name as the only standard answer; they are illustrative design choices."
          }
        }
      ],
      "diagramIds": [
        "architecture-design-process",
        "add-roadmap",
        "ddd-core-model",
        "review-microservice-decomposition"
      ],
      "memorize": {
        "zh": "设计题不是背唯一答案，而是把 驱动因素、边界、数据、接口、质量取舍讲清楚。\n万能骨架：需求/ASR -> 分解原则 -> 元素和职责 -> 连接器和数据流 -> 视图/部署 -> 质量战术 -> 风险与取舍。\n画图题先画边界和主要元素，再画连接关系，最后补图例、关键数据/事件和质量战术标注。",
        "en": "Design questions do not have a single memorized answer; explain drivers, boundaries, data, interfaces, and quality tradeoffs.\nGeneral skeleton: requirements/ASRs -> decomposition principle -> elements and responsibilities -> connectors and data flow -> views/deployment -> quality tactics -> risks and tradeoffs.\nFor drawing questions, draw the boundary and main elements first, then connectors, then legends, key data/events, and quality-tactic annotations."
      },
      "examTemplate": {
        "zh": "考场上先列 3-5 个 ASR，再画粗粒度结构图；文字答案逐一解释每个组件职责、连接器选择和质量属性取舍。",
        "en": "In the exam, list 3-5 ASRs first, then draw a coarse structure diagram; in text, explain each component responsibility, connector choice, and quality-attribute tradeoff."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "设计题统一怎么下手",
            "en": "How to start any design question"
          },
          "summary": {
            "zh": "先写 驱动因素，再画结构，最后讲取舍。",
            "en": "Start with drivers, draw structure, then discuss tradeoffs."
          },
          "explain": {
            "zh": "设计题不要直接堆组件名。第一步列 3-5 个 ASR，例如高并发、可用性、可修改性、数据一致性、可观测性。第二步说明分解原则，例如按业务能力/限界上下文拆服务，按质量属性选择战术。第三步画结构：客户端、网关、核心服务、数据库、消息/事件、外部系统、监控。第四步解释组件职责和连接器。第五步写取舍和风险。",
            "en": "Do not start by dumping component names. Step 1: list 3-5 ASRs such as high concurrency, availability, modifiability, data consistency, observability. Step 2: state decomposition principles, such as business capability/bounded context and tactics by quality attribute. Step 3: draw structure: client, gateway, core services, databases, messages/events, external systems, monitoring. Step 4: explain responsibilities and connectors. Step 5: state tradeoffs and risks."
          },
          "memorize": {
            "zh": "ASR -> 分解原则 -> 结构图 -> 职责/连接器 -> 质量战术 -> 取舍。",
            "en": "ASR -> decomposition principle -> structure diagram -> responsibilities/connectors -> tactics -> tradeoffs."
          },
          "answer": {
            "zh": "无论题目是外卖、缓存、三层、SOA，都先把业务和质量 驱动因素 写出来。",
            "en": "Whether the question is food delivery, cache, three-tier, or SOA, first write business and quality drivers."
          },
          "boundary": {
            "zh": "设计题先识别业务边界和质量需求，再用微服务、DDD、ADD 文档化或三层/缓存等合适模板组织答案。",
            "en": "For design questions, identify business boundaries and quality requirements first; then organize the answer with a suitable template such as microservices, DDD, ADD documentation, three-tier, cache design, or other design templates."
          }
        },
        {
          "title": {
            "zh": "画图题怎么画得像答案",
            "en": "How to draw exam diagrams as answers"
          },
          "summary": {
            "zh": "图要表达边界、职责、连接和质量点。",
            "en": "A diagram should express boundaries, responsibilities, connectors, and qualities."
          },
          "explain": {
            "zh": "先画系统边界和外部角色。\n再画主要组件或服务，名称用业务能力而不是技术炫词。\n每个数据归属画在拥有该数据的服务旁边。\n连接器用箭头标同步接口、异步事件或数据访问。\n最后加少量质量战术标注，例如网关认证限流、服务间熔断、消息队列削峰、监控追踪。\n图下方用文字补充为什么这样拆，以及牺牲了什么。",
            "en": "Draw the system boundary and external actors first.\nThen draw the main components or services, using business-capability names rather than flashy technology terms.\nPlace each data store beside the service that owns that data.\nLabel connectors with arrows as synchronous interfaces, asynchronous events, or data access.\nFinally add a few quality-tactic annotations, such as gateway authentication/rate limiting, circuit breakers, message-queue smoothing, monitoring, and tracing.\nUnder the diagram, explain why this decomposition was chosen and what it sacrifices."
          },
          "memorize": {
            "zh": "边界、角色、组件/服务、数据归属、连接器、质量战术、取舍说明。",
            "en": "Boundary, actors, components/services, data ownership, connectors, tactics, tradeoff note."
          },
          "answer": {
            "zh": "图不用很美，但必须可读：箭头少而清楚，服务名和数据名能对上。",
            "en": "The diagram need not be beautiful, but it must be readable: few clear arrows, service and data names match."
          },
          "boundary": {
            "zh": "参考当前站内重绘图；题干未给的技术细节要用“例如/可选”表达。",
            "en": "Use current redrawn diagrams as references; technology details not in the question should be phrased as examples/options."
          }
        }
      ]
    },
    {
      "id": "ai",
      "group": "modern",
      "priority": "P3",
      "examWeight": {
        "zh": "背景了解，不当核心",
        "en": "Background, not core"
      },
      "title": {
        "zh": "AI 增强 / AI 原生架构",
        "en": "AI-Enabled / AI-Native Architecture"
      },
      "takeaway": {
        "zh": "AI 增强和 AI 原生架构只作背景了解。",
        "en": "Keep AI-enabled and AI-native architecture as background concepts."
      },
      "answerFrame": {
        "zh": "不用背。若阅读资料库时看到相关内容，只理解它是架构演进趋势，不写进常规真题答案模板。",
        "en": "Concept-level only. If encountered in sources, treat it as an architecture-evolution trend outside normal answer templates."
      },
      "bullets": [
        {
          "zh": "AI for DDD：辅助领域模型、代码骨架和测试用例生成。",
          "en": "AI for DDD: assist domain models, code skeletons, and test cases."
        },
        {
          "zh": "DDD for AI：明确逻辑输入和业务边界，降低模型/智能体系统复杂度。",
          "en": "DDD for AI: clarify logical inputs and business boundaries to reduce model/agent-system complexity."
        },
        {
          "zh": "与 ADD、DDD、微服务、企业架构相比，只需了解基本含义和应用场景。",
          "en": "Compared with ADD, DDD, microservices, and enterprise architecture, only understand the basic meaning and use scenarios."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Lu Jun recording segment",
        "EagleBear 2025Spring review blog"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "考试定位",
            "en": "Exam position"
          },
          "summary": {
            "zh": "AI 部分作为架构趋势背景理解。",
            "en": "AI is a background architecture trend."
          },
          "must": {
            "zh": "了解 AI 增强架构、AI 原生架构、AI for DDD、DDD for AI 即可。",
            "en": "Know AI-enabled architecture, AI-native architecture, AI for DDD, and DDD for AI as background."
          },
          "answer": {
            "zh": "论述题可用一句话补充：AI 引入模型、数据、反馈闭环和治理，架构仍要处理质量属性和边界。",
            "en": "In essays, add one line: AI introduces models, data, feedback loops, and governance, while architecture still handles qualities and boundaries."
          },
          "trap": {
            "zh": "不要把时间花在 AI 细节背诵上，优先 ADD、微服务、DDD、企业架构。",
            "en": "Do not spend core memorization time on AI details; prioritize ADD, microservices, DDD, and Enterprise Architecture."
          }
        }
      ],
      "diagramIds": [],
      "memorize": {
        "zh": "AI/LLM 属于架构趋势和辅助能力。\n能写的点：需求分析、业务建模、数据建模、应用设计、代码生成、测试验证的辅助。\n回答时保持保守：AI 帮助产出和检查，但架构决策仍要由人基于业务目标、质量需求和约束负责。",
        "en": "AI/LLM is an architecture trend and assistant capability.\nPoints to mention: support requirement analysis, business modeling, data modeling, application design, code generation, and test verification.\nBe conservative: AI helps produce and check artifacts, but humans remain responsible for architecture decisions based on business goals, quality requirements, and constraints."
      },
      "examTemplate": {
        "zh": "若问 AI 与架构，按“能辅助什么 -> 产出什么 -> 风险是什么 -> 人如何治理”答。",
        "en": "If asked about AI and architecture, answer “what it assists -> what it produces -> risks -> how humans govern it”."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "AI 增强为什么只作背景",
            "en": "Why AI-enabled architecture is background"
          },
          "summary": {
            "zh": "理解趋势即可。",
            "en": "Understand the trend only."
          },
          "explain": {
            "zh": "AI/LLM 可以作为架构设计趋势和工具能力理解：它能辅助需求分析、业务建模、数据建模、应用设计、代码生成、测试验证和文档生成，但不能替代架构师对业务目标、质量需求、约束、风险和治理的判断。",
            "en": "AI/LLM can be understood as an architecture trend and tool capability. It can assist requirement analysis, business modeling, data modeling, application design, code generation, test verification, and documentation, but it does not replace architects' judgment over business goals, quality requirements, constraints, risks, and governance."
          },
          "memorize": {
            "zh": "能辅助全流程，但不替代架构决策；只作背景理解。",
            "en": "It can assist the whole process, but it does not replace architectural decisions; treat it as background."
          },
          "answer": {
            "zh": "如果真问，按“能做什么、产出什么、风险是什么、人如何治理”答。",
            "en": "If asked, answer “what it can do, what it produces, what risks it has, and how humans govern it”."
          },
          "boundary": {
            "zh": "AI 增强/AI 原生不作为高优先级考试内容。",
            "en": "AI-enabled/native architecture is not a high-priority exam topic."
          }
        }
      ]
    }
  ],
  "glossary": [
    {
      "category": "foundation",
      "zh": "软件架构",
      "en": "Software Architecture",
      "noteZh": "系统元素、关系、属性及演化原则的高层设计。",
      "noteEn": "High-level design of system elements, relations, properties, and evolution principles.",
      "id": "software-architecture",
      "context": "张贺：基础定义",
      "related": [
        "设计决定",
        "架构驱动因素",
        "质量属性"
      ],
      "aliases": {
        "zh": [
          "体系结构"
        ],
        "en": [
          "Software Architectures"
        ]
      }
    },
    {
      "category": "foundation",
      "zh": "架构师",
      "en": "Software Architect",
      "noteZh": "协调利益相关者、做技术/工程决策并管理架构风险的人。",
      "noteEn": "A role coordinating stakeholders, making technical/engineering decisions, and managing architectural risks.",
      "id": "software-architect",
      "context": "张贺：角色职责",
      "related": [
        "利益相关者",
        "风险",
        "设计决定"
      ],
      "aliases": {
        "zh": [],
        "en": [
          "Architect"
        ]
      }
    },
    {
      "category": "requirements",
      "zh": "架构相关需求",
      "en": "Architecturally Significant Requirement (ASR)",
      "noteZh": "会显著影响架构设计决定的需求；它不等于所有 NFR，关键功能和强约束也可能成为 ASR。",
      "noteEn": "A requirement with significant impact on architectural decisions. It is not every NFR; key functionality and strong constraints can also become ASRs.",
      "aliases": {
        "en": [
          "ASR",
          "ASRs",
          "Architecturally Significant Requirements"
        ],
        "zh": [
          "架构显著需求",
          "架构驱动需求"
        ]
      },
      "context": "张贺：NFR/质量需求核心；李杉杉：ADD 输入",
      "related": [
        "非功能需求",
        "质量需求",
        "质量属性场景",
        "效用树",
        "属性驱动设计"
      ],
      "id": "asr"
    },
    {
      "category": "requirements",
      "zh": "质量属性",
      "en": "Quality Attribute",
      "noteZh": "系统“做得好不好”的性质，如可用性、性能、可修改性、安全性；作为架构设计的重要依据时要场景化。",
      "noteEn": "A property describing how well a system behaves, such as availability, performance, modifiability, or security; when used as architectural input, express it as scenarios.",
      "aliases": {
        "en": [
          "Quality Attributes"
        ],
        "zh": [
          "质量特性"
        ]
      },
      "context": "张贺：质量场景；李杉杉：ADD 质量属性场景",
      "related": [
        "质量需求",
        "质量属性场景",
        "非功能需求"
      ]
    },
    {
      "category": "requirements",
      "zh": "约束",
      "en": "Constraint",
      "noteZh": "设计前已经确定且必须满足的设计决定。",
      "noteEn": "A pre-made design decision that must be satisfied.",
      "id": "constraint",
      "context": "张贺：需求分类；李杉杉：ADD 输入",
      "related": [
        "架构约束",
        "技术/运行环境"
      ],
      "aliases": {
        "zh": [
          "限制"
        ],
        "en": [
          "Constraints"
        ]
      }
    },
    {
      "category": "scenario",
      "zh": "刺激源",
      "en": "Source of Stimulus",
      "noteZh": "触发质量场景的人、系统或事件来源。",
      "noteEn": "The person, system, or event source that triggers a quality scenario."
    },
    {
      "category": "scenario",
      "zh": "刺激",
      "en": "Stimulus",
      "noteZh": "触发系统响应的事件。",
      "noteEn": "The event that triggers a system response."
    },
    {
      "category": "scenario",
      "zh": "环境",
      "en": "Environment",
      "noteZh": "场景发生时系统所处状态，如正常运行、高峰期、故障中。",
      "noteEn": "The condition under which the scenario occurs, such as normal operation, peak load, or failure."
    },
    {
      "category": "scenario",
      "zh": "工件",
      "en": "Artifact",
      "noteZh": "被刺激影响的系统部分。",
      "noteEn": "The part of the system affected by the stimulus.",
      "aliases": {
        "zh": [
          "制品"
        ],
        "en": []
      }
    },
    {
      "category": "scenario",
      "zh": "响应",
      "en": "Response",
      "noteZh": "系统应如何反应。",
      "noteEn": "How the system should react."
    },
    {
      "category": "scenario",
      "zh": "响应度量",
      "en": "Response Measure",
      "noteZh": "衡量响应是否达标的指标。",
      "noteEn": "The metric used to judge whether the response is acceptable."
    },
    {
      "category": "quality",
      "zh": "可用性",
      "en": "Availability",
      "noteZh": "系统在需要时可提供服务的能力。",
      "noteEn": "The ability of a system to provide service when needed."
    },
    {
      "category": "quality",
      "zh": "可修改性",
      "en": "Modifiability",
      "noteZh": "系统被低成本、安全修改的能力。",
      "noteEn": "The ability to change a system safely and cheaply."
    },
    {
      "category": "quality",
      "zh": "互操作性",
      "en": "Interoperability",
      "noteZh": "系统与外部系统正确交换并理解数据的能力。",
      "noteEn": "The ability to exchange and correctly interpret data with external systems."
    },
    {
      "category": "quality",
      "zh": "性能",
      "en": "Performance",
      "noteZh": "响应时间、吞吐量、资源使用等表现。",
      "noteEn": "Behavior measured by latency, throughput, resource usage, etc."
    },
    {
      "category": "decision",
      "zh": "策略",
      "en": "Strategy",
      "noteZh": "解决质量问题的较高层方向。",
      "noteEn": "A higher-level direction for solving a quality problem."
    },
    {
      "category": "decision",
      "zh": "战术",
      "en": "Tactic",
      "noteZh": "解决质量属性问题的原子设计决定。",
      "noteEn": "An atomic design decision addressing a quality attribute.",
      "id": "tactic",
      "context": "吕骏/张贺：质量属性到设计决定",
      "related": [
        "质量属性",
        "模式",
        "风格"
      ],
      "aliases": {
        "zh": [],
        "en": [
          "Tactics"
        ]
      }
    },
    {
      "category": "decision",
      "zh": "模式",
      "en": "Pattern",
      "noteZh": "对反复出现问题的可复用解决方案，常由多个战术组合。",
      "noteEn": "A reusable solution to a recurring problem, often combining tactics.",
      "id": "pattern",
      "context": "吕骏：反复出现问题的架构级解法",
      "related": [
        "战术",
        "风格"
      ],
      "aliases": {
        "zh": [
          "架构模式"
        ],
        "en": [
          "Patterns",
          "Architectural Pattern",
          "Architectural Patterns"
        ]
      }
    },
    {
      "category": "decision",
      "zh": "风格",
      "en": "Style",
      "noteZh": "一类架构组织方式及其约束。",
      "noteEn": "A way of organizing architecture with characteristic constraints.",
      "id": "style",
      "context": "吕骏：架构组织方式与约束",
      "related": [
        "模式",
        "组件-连接器视图"
      ],
      "aliases": {
        "zh": [
          "架构风格"
        ],
        "en": [
          "Styles",
          "Architectural Style",
          "Architectural Styles"
        ]
      }
    },
    {
      "category": "views",
      "zh": "逻辑视图",
      "en": "Logical View",
      "noteZh": "描述重要元素及其关系。",
      "noteEn": "Describes significant elements and their relationships.",
      "id": "logical-view",
      "context": "张贺：4+1 视图",
      "related": [
        "视图",
        "用例场景"
      ],
      "aliases": {
        "zh": [],
        "en": [
          "Logical Views"
        ]
      }
    },
    {
      "category": "views",
      "zh": "进程视图",
      "en": "Process View",
      "noteZh": "描述并发、通信和运行时行为。",
      "noteEn": "Describes concurrency, communication, and runtime behavior.",
      "id": "process-view",
      "context": "张贺：4+1 视图",
      "related": [
        "视图",
        "用例场景"
      ],
      "aliases": {
        "zh": [],
        "en": [
          "Process Views"
        ]
      }
    },
    {
      "category": "views",
      "zh": "物理视图",
      "en": "Physical View",
      "noteZh": "描述进程/软件到硬件或部署环境的映射。",
      "noteEn": "Describes mapping of processes/software to hardware or deployment environments.",
      "id": "physical-view",
      "context": "张贺：4+1 视图",
      "related": [
        "视图",
        "部署视图"
      ],
      "aliases": {
        "zh": [],
        "en": [
          "Physical Views"
        ]
      }
    },
    {
      "category": "views",
      "zh": "开发视图",
      "en": "Development View",
      "noteZh": "描述软件内部组织及开发结构。",
      "noteEn": "Describes internal software organization and development structure.",
      "id": "development-view",
      "context": "张贺：4+1 视图",
      "related": [
        "视图",
        "模块视图"
      ],
      "aliases": {
        "zh": [],
        "en": [
          "Development Views"
        ]
      }
    },
    {
      "category": "views",
      "zh": "用例场景",
      "en": "Use-Case Scenarios",
      "noteZh": "4+1 中贯穿多个视图的核心场景。",
      "noteEn": "The '+1' scenarios that connect multiple views in 4+1."
    },
    {
      "category": "methods",
      "zh": "属性驱动设计",
      "en": "Attribute-Driven Design (ADD)",
      "noteZh": "按驱动因素迭代推导架构设计的方法。ADD 3.0 输入包括设计目的、主要功能、质量属性场景、架构关注点、约束和既有架构。",
      "noteEn": "An iterative method deriving architecture from design drivers. ADD 3.0 inputs include design purpose, primary functionality, quality-attribute scenarios, architectural concerns, constraints, and existing architecture.",
      "aliases": {
        "en": [
          "ADD",
          "ADD 3.0",
          "ADD3.0"
        ],
        "zh": [
          "属性驱动设计 3.0"
        ]
      },
      "context": "李杉杉：架构设计方法",
      "related": [
        "架构驱动因素",
        "设计目的",
        "主要功能",
        "架构约束",
        "既有架构"
      ]
    },
    {
      "category": "methods",
      "zh": "架构权衡分析方法",
      "en": "Architecture Tradeoff Analysis Method (ATAM)",
      "noteZh": "围绕质量属性、风险、敏感点、权衡点评估架构的方法。",
      "noteEn": "A method evaluating architecture through quality attributes, risks, sensitivity points, and tradeoff points."
    },
    {
      "category": "methods",
      "zh": "效用树",
      "en": "Utility Tree",
      "noteZh": "把总效用分解为质量属性和具体场景，并按重要性和实现难度/风险排序，用来识别优先处理的 ASR。",
      "noteEn": "Decomposes utility into quality attributes and concrete scenarios, then ranks them by importance and difficulty/risk to identify priority ASRs.",
      "aliases": {
        "en": [
          "Utility Trees"
        ],
        "zh": [
          "质量效用树"
        ]
      },
      "context": "张贺：ASR 排序；ATAM：场景优先级",
      "related": [
        "业务目标",
        "质量属性场景",
        "架构相关需求"
      ],
      "id": "utility-tree"
    },
    {
      "category": "ddd",
      "zh": "限界上下文",
      "en": "Bounded Context",
      "noteZh": "模型和统一语言成立的边界。同一个词在不同上下文可以含义不同；服务边界可参考限界上下文，但不机械等同。",
      "noteEn": "The boundary within which a model and ubiquitous language stay consistent. A term may mean different things in different contexts; service boundaries can follow bounded contexts but are not mechanically identical.",
      "aliases": {
        "en": [
          "Bounded Contexts"
        ],
        "zh": [
          "模型边界"
        ]
      },
      "context": "李杉杉：DDD 语境",
      "boundaryType": {
        "zh": "模型语言边界",
        "en": "Modeling-language boundary"
      },
      "related": [
        "统一语言",
        "上下文映射",
        "服务边界",
        "聚合"
      ],
      "id": "bounded-context"
    },
    {
      "category": "ddd",
      "zh": "上下文映射",
      "en": "Context Mapping",
      "noteZh": "描述多个限界上下文之间的关系。",
      "noteEn": "Describes relationships among bounded contexts."
    },
    {
      "category": "ddd",
      "zh": "防腐层",
      "en": "Anti-Corruption Layer",
      "noteZh": "隔离外部模型污染本领域模型的适配层。",
      "noteEn": "An adapter layer that prevents external models from polluting the domain model."
    },
    {
      "category": "ddd",
      "zh": "聚合",
      "en": "Aggregate",
      "noteZh": "围绕业务不变量组织的一组对象，是事务和一致性边界；通常由聚合根对外暴露访问入口。",
      "noteEn": "A cluster of objects organised around business invariants; it is a transaction/consistency boundary and is usually accessed through an aggregate root.",
      "aliases": {
        "en": [
          "Aggregates"
        ],
        "zh": [
          "聚合边界"
        ]
      },
      "context": "李杉杉：DDD 战术设计",
      "boundaryType": {
        "zh": "一致性边界",
        "en": "Consistency boundary"
      },
      "related": [
        "聚合根",
        "领域事件",
        "数据边界"
      ],
      "id": "aggregate"
    },
    {
      "category": "ddd",
      "zh": "领域事件",
      "en": "Domain Event",
      "noteZh": "过去发生且对业务有意义的事实。",
      "noteEn": "A meaningful business fact that has already happened.",
      "id": "domain-event",
      "context": "李杉杉：DDD/事件风暴",
      "related": [
        "事件风暴",
        "聚合",
        "服务边界"
      ],
      "aliases": {
        "zh": [],
        "en": [
          "Domain Events"
        ]
      }
    },
    {
      "category": "microservices",
      "zh": "断路器",
      "en": "Circuit Breaker",
      "noteZh": "阻止局部故障在服务调用链中扩散的模式。",
      "noteEn": "A pattern preventing local failures from cascading across service calls."
    },
    {
      "category": "microservices",
      "zh": "服务发现",
      "en": "Service Discovery",
      "noteZh": "让客户端或平台找到服务实例地址的机制。",
      "noteEn": "A mechanism for finding service instance locations."
    },
    {
      "category": "microservices",
      "zh": "API 网关",
      "en": "API Gateway",
      "noteZh": "外部客户端访问后端服务的统一入口。",
      "noteEn": "A unified entry point for external clients to access backend services."
    },
    {
      "category": "microservices",
      "zh": "可观测性",
      "en": "Observability",
      "noteZh": "通过日志、指标、链路等理解系统行为和定位问题的能力。",
      "noteEn": "The ability to understand behavior and diagnose issues through logs, metrics, and traces."
    },
    {
      "category": "enterprise",
      "zh": "业务架构",
      "en": "Business Architecture",
      "noteZh": "描述业务能力、流程、组织和价值链。",
      "noteEn": "Describes capabilities, processes, organization, and value chains.",
      "id": "business-architecture",
      "context": "李杉杉：企业架构 4A",
      "related": [
        "企业架构",
        "业务能力"
      ],
      "aliases": {
        "zh": [],
        "en": [
          "Business Architectures"
        ]
      }
    },
    {
      "category": "enterprise",
      "zh": "数据架构",
      "en": "Data Architecture",
      "noteZh": "描述数据资产、标准、责任与模型。",
      "noteEn": "Describes data assets, standards, responsibilities, and models.",
      "id": "data-architecture",
      "context": "李杉杉：企业架构 4A",
      "related": [
        "企业架构",
        "数据边界"
      ],
      "aliases": {
        "zh": [],
        "en": [
          "Data Architectures"
        ]
      }
    },
    {
      "category": "enterprise",
      "zh": "应用架构",
      "en": "Application Architecture",
      "noteZh": "描述应用蓝图、组件与服务共享关系。",
      "noteEn": "Describes application blueprint, components, and shared services.",
      "id": "application-architecture",
      "context": "李杉杉：企业架构 4A",
      "related": [
        "企业架构",
        "服务边界"
      ],
      "aliases": {
        "zh": [],
        "en": [
          "Application Architectures"
        ]
      }
    },
    {
      "category": "enterprise",
      "zh": "技术架构",
      "en": "Technology Architecture",
      "noteZh": "描述技术组件、基础设施和标准。",
      "noteEn": "Describes technology components, infrastructure, and standards.",
      "id": "technology-architecture",
      "context": "李杉杉：企业架构 4A",
      "related": [
        "企业架构",
        "技术/运行环境"
      ],
      "aliases": {
        "zh": [],
        "en": [
          "Technology Architectures"
        ]
      }
    },
    {
      "category": "enterprise",
      "zh": "TOGAF ADM",
      "en": "TOGAF ADM",
      "noteZh": "企业架构开发方法的迭代周期。",
      "noteEn": "The iterative development cycle in TOGAF."
    },
    {
      "category": "enterprise",
      "zh": "业务组件模型",
      "en": "Component Business Model (CBM)",
      "noteZh": "按业务能力划分可复用、可组装组件的方法。",
      "noteEn": "A method organizing reusable and composable components by business capability."
    },
    {
      "category": "quality",
      "zh": "安全性",
      "en": "Security",
      "noteZh": "抵抗攻击、保护数据和服务的能力。",
      "noteEn": "Ability to resist attacks and protect data/services."
    },
    {
      "category": "quality",
      "zh": "可测试性",
      "en": "Testability",
      "noteZh": "系统能被控制、观察和自动验证的能力。",
      "noteEn": "Ability to control, observe, and verify the system."
    },
    {
      "category": "quality",
      "zh": "易用性",
      "en": "Usability",
      "noteZh": "用户有效、满意地完成任务的能力。",
      "noteEn": "Ability for users to complete tasks effectively and satisfactorily."
    },
    {
      "category": "requirements",
      "zh": "质量属性工作坊",
      "en": "Quality Attribute Workshop (QAW)",
      "noteZh": "通过 利益相关者 讨论把质量目标场景化的方法。",
      "noteEn": "A workshop method that turns quality goals into scenarios."
    },
    {
      "category": "decision",
      "zh": "设计决定",
      "en": "Design Decision",
      "noteZh": "影响结构、行为、质量或演化的架构选择。",
      "noteEn": "An architectural choice affecting structure, behavior, qualities, or evolution."
    },
    {
      "category": "decision",
      "zh": "绑定时间",
      "en": "Binding Time",
      "noteZh": "变化点在编译、部署、启动或运行时被确定的时刻。",
      "noteEn": "The time when a variation is bound: compile, deployment, startup, or runtime."
    },
    {
      "category": "methods",
      "zh": "风险",
      "en": "Risk",
      "noteZh": "某个架构决定可能导致质量目标失败的潜在问题。",
      "noteEn": "A potential problem where an architectural decision may fail a quality goal."
    },
    {
      "category": "methods",
      "zh": "敏感点",
      "en": "Sensitivity Point",
      "noteZh": "某个决定或参数会显著影响一个质量属性的点。",
      "noteEn": "A decision or parameter that strongly affects a quality attribute."
    },
    {
      "category": "methods",
      "zh": "权衡点",
      "en": "Tradeoff Point",
      "noteZh": "同时影响多个质量属性且可能方向相反的决定点。",
      "noteEn": "A decision point affecting multiple quality attributes, often in opposite directions."
    },
    {
      "category": "patterns",
      "zh": "分层架构",
      "en": "Layered Architecture",
      "noteZh": "按抽象级别组织模块并限制层间依赖的风格。",
      "noteEn": "A style organizing modules by abstraction level with restricted dependencies."
    },
    {
      "category": "patterns",
      "zh": "代理模式",
      "en": "Broker Pattern",
      "noteZh": "用 代理模式 中介客户端与服务端通信的 C&C 模式。",
      "noteEn": "A C&C pattern where a broker mediates client-server communication."
    },
    {
      "category": "patterns",
      "zh": "管道-过滤器",
      "en": "Pipe-and-Filter",
      "noteZh": "由过滤器处理数据流、管道传递数据的 C&C 模式。",
      "noteEn": "A C&C pattern where filters process data streams and pipes transfer data."
    },
    {
      "category": "patterns",
      "zh": "发布-订阅",
      "en": "Publish-Subscribe",
      "noteZh": "生产者发布事件、订阅者异步接收的模式。",
      "noteEn": "A pattern where producers publish events and subscribers receive them asynchronously."
    },
    {
      "category": "patterns",
      "zh": "多层部署",
      "en": "Multi-tier",
      "noteZh": "把系统逻辑分配到不同部署层或机器上的 分配 模式。",
      "noteEn": "An allocation pattern distributing system logic across deployment tiers or machines."
    },
    {
      "category": "microservices",
      "zh": "服务注册表",
      "en": "Service Registry",
      "noteZh": "保存服务实例地址并支持服务发现的组件。",
      "noteEn": "A component storing service instance locations for discovery."
    },
    {
      "category": "microservices",
      "zh": "分布式追踪",
      "en": "Distributed Tracing",
      "noteZh": "跨服务记录请求路径以定位延迟和错误的可观测性机制。",
      "noteEn": "An observability mechanism recording request paths across services."
    },
    {
      "category": "microservices",
      "zh": "服务自有数据",
      "en": "Database per Service",
      "noteZh": "每个微服务拥有自己的数据模型和数据库边界。",
      "noteEn": "Each microservice owns its own data model and database boundary."
    },
    {
      "category": "ddd",
      "zh": "子域",
      "en": "Subdomain",
      "noteZh": "业务领域中可独立分析的部分，可分核心/支撑/通用。",
      "noteEn": "A part of the business domain, often core/supporting/generic."
    },
    {
      "category": "ddd",
      "zh": "统一语言",
      "en": "Ubiquitous Language",
      "noteZh": "团队和代码共享的一套领域词汇。",
      "noteEn": "A shared domain language used by team and code."
    },
    {
      "category": "ddd",
      "zh": "实体",
      "en": "Entity",
      "noteZh": "由身份标识而非属性值区分的领域对象。",
      "noteEn": "A domain object identified by identity rather than value."
    },
    {
      "category": "ddd",
      "zh": "值对象",
      "en": "Value Object",
      "noteZh": "由属性值定义、通常不可变的领域对象。",
      "noteEn": "A domain object defined by values, usually immutable."
    },
    {
      "category": "ddd",
      "zh": "资源库",
      "en": "Repository",
      "noteZh": "封装聚合持久化和检索的对象。",
      "noteEn": "An object encapsulating persistence and retrieval of aggregates."
    },
    {
      "category": "ddd",
      "zh": "事件风暴",
      "en": "Event Storming",
      "noteZh": "围绕领域事件协作建模业务流程的方法。",
      "noteEn": "A collaborative modeling method centered on domain events."
    },
    {
      "category": "enterprise",
      "zh": "安全架构",
      "en": "Security Architecture",
      "noteZh": "有些材料在 4A 外加入的第五类架构关注点。",
      "noteEn": "A fifth architecture concern added to 4A in some materials."
    },
    {
      "category": "enterprise",
      "zh": "架构开发方法",
      "en": "Architecture Development Method (ADM)",
      "noteZh": "TOGAF 中用于开发和治理企业架构的迭代方法。",
      "noteEn": "TOGAF iterative method for developing and governing enterprise architecture."
    },
    {
      "category": "reuse",
      "zh": "软件产品线",
      "en": "Software Product Line (SPL)",
      "noteZh": "通过核心资产和可变性机制复用一族相关产品。",
      "noteEn": "Reuse of a family of related products through core assets and variability mechanisms."
    },
    {
      "category": "reuse",
      "zh": "产品线架构",
      "en": "Product Line Architecture (PLA)",
      "noteZh": "支撑产品族共同性和可变性的架构基础。",
      "noteEn": "Architecture basis supporting product-family commonality and variability."
    },
    {
      "category": "reuse",
      "zh": "变化点",
      "en": "Variation Point",
      "noteZh": "产品线中允许变化并由机制绑定的位置。",
      "noteEn": "A place in a product line where variation is allowed and bound by mechanisms."
    },
    {
      "category": "reuse",
      "zh": "模型驱动架构",
      "en": "Model-Driven Architecture (MDA)",
      "noteZh": "通过平台无关模型和模型转换实现复用与迁移。",
      "noteEn": "Reuse and migration through platform-independent models and transformations."
    },
    {
      "category": "quality",
      "zh": "平均无故障时间",
      "en": "Mean Time Between Failures (MTBF)",
      "noteZh": "两次故障之间的平均时间，可用于可用性/可靠性度量。",
      "noteEn": "Average time between failures; used for availability/reliability measurement."
    },
    {
      "category": "quality",
      "zh": "平均修复时间",
      "en": "Mean Time To Repair (MTTR)",
      "noteZh": "故障发生后恢复服务的平均时间。",
      "noteEn": "Average time to restore service after a failure."
    },
    {
      "category": "quality",
      "zh": "服务等级协议",
      "en": "Service Level Agreement (SLA)",
      "noteZh": "用可测指标承诺服务质量的协议，例如可用性百分比或响应时间。",
      "noteEn": "Agreement committing measurable service quality, such as availability percentage or latency."
    },
    {
      "category": "quality",
      "zh": "服务中断",
      "en": "Outage",
      "noteZh": "系统无法提供预期服务的一段时间。",
      "noteEn": "A period when the system cannot provide expected service."
    },
    {
      "category": "quality",
      "zh": "故障",
      "en": "Failure",
      "noteZh": "系统对外表现偏离规格或无法完成服务。",
      "noteEn": "Externally visible deviation from specification or inability to provide service."
    },
    {
      "category": "quality",
      "zh": "错误",
      "en": "Error",
      "noteZh": "系统内部状态不正确，可能导致故障。",
      "noteEn": "An incorrect internal state that may lead to a failure."
    },
    {
      "category": "quality",
      "zh": "缺陷/故障源",
      "en": "Fault",
      "noteZh": "导致错误的潜在缺陷、bug 或硬件问题。",
      "noteEn": "A latent defect, bug, or hardware problem that can cause an error."
    },
    {
      "category": "microservices",
      "zh": "微服务六特性",
      "en": "Six Microservice Traits",
      "noteZh": "粒度小、围绕业务能力、自治、独立部署、去中心化治理/数据、基础设施自动化。",
      "noteEn": "Small services, business capability orientation, autonomy, independent deployment, decentralized governance/data, infrastructure automation."
    },
    {
      "id": "functional-requirement",
      "category": "requirements",
      "zh": "功能需求",
      "en": "Functional Requirement",
      "aliases": {
        "en": [
          "Functional Requirements"
        ],
        "zh": [
          "功能性需求"
        ]
      },
      "context": "张贺/李杉杉：需求分类与 ADD 输入",
      "related": [
        "质量需求",
        "非功能需求",
        "架构相关需求"
      ],
      "noteZh": "描述系统必须提供什么功能。关键功能也可能成为 ASR，但功能需求本身不等于架构。",
      "noteEn": "Describes what functions the system must provide. Key functions can become ASRs, but functionality itself is not the architecture."
    },
    {
      "id": "non-functional-requirement",
      "category": "requirements",
      "zh": "非功能需求",
      "en": "Non-Functional Requirement (NFR)",
      "aliases": {
        "en": [
          "NFR",
          "NFRs",
          "Nonfunctional Requirement",
          "Non-functional Requirements",
          "Nonfunctional Requirements"
        ],
        "zh": [
          "非功能性需求"
        ]
      },
      "context": "张贺：架构来源核心",
      "related": [
        "质量需求",
        "架构相关需求",
        "质量属性场景"
      ],
      "noteZh": "区别于功能需求，描述系统做得多好或受到什么限制。课程中质量需求是 NFR 里最重要的架构依据。",
      "noteEn": "Different from functional requirements; describes how well the system behaves or what constraints apply. In the review material, quality requirements are the most important architectural source within NFRs."
    },
    {
      "id": "quality-requirement",
      "category": "requirements",
      "zh": "质量需求",
      "en": "Quality Requirement",
      "aliases": {
        "en": [
          "Quality Requirements",
          "Quality Attribute Requirement",
          "Quality Attribute Requirements"
        ],
        "zh": [
          "质量属性需求"
        ]
      },
      "context": "张贺：NFR -> ASR 核心",
      "related": [
        "非功能需求",
        "质量属性",
        "质量属性场景",
        "架构相关需求"
      ],
      "noteZh": "描述质量属性目标，如可用性、性能、可修改性。它通常要写成可度量的质量属性场景，其中一部分会成为 ASR。",
      "noteEn": "A requirement describing a quality goal such as availability, performance, or modifiability. It should usually be expressed as a measurable quality scenario; some become ASRs."
    },
    {
      "id": "quality-scenario",
      "category": "scenario",
      "zh": "质量属性场景",
      "en": "Quality Attribute Scenario",
      "aliases": {
        "en": [
          "Quality Scenario",
          "Quality Attribute Scenarios",
          "Quality Scenarios"
        ],
        "zh": [
          "质量场景"
        ]
      },
      "context": "张贺：六要素与 ASR 表达",
      "related": [
        "刺激源",
        "刺激",
        "环境",
        "制品",
        "响应",
        "响应度量"
      ],
      "noteZh": "把模糊质量需求改写成六要素：刺激源、刺激、环境、制品、响应、响应度量。考试答案要可观察、可测量。",
      "noteEn": "Turns a vague quality requirement into six parts: source, stimulus, environment, artifact, response, and response measure. Exam answers should be observable and measurable."
    },
    {
      "id": "architectural-driver",
      "category": "requirements",
      "zh": "架构驱动因素",
      "en": "Architectural Driver",
      "aliases": {
        "en": [
          "Architectural Drivers",
          "Driver",
          "Drivers"
        ],
        "zh": [
          "驱动因素"
        ]
      },
      "context": "张贺/李杉杉：架构来源与 ADD 输入",
      "related": [
        "非功能需求",
        "质量需求",
        "架构相关需求",
        "业务目标",
        "技术/运行环境"
      ],
      "noteZh": "会迫使架构做出结构选择或关键设计决定的因素。张贺部分强调 NFR/质量需求、ASR、利益相关者、组织和技术环境；李杉杉 ADD 部分还包括设计目的、主要功能、关注点和既有架构。",
      "noteEn": "A force that causes structural choices or key design decisions. Zhang He emphasizes NFRs/quality requirements, ASRs, stakeholders, organisations, and technical environments; Li Shanshan’s ADD input also includes design purpose, primary functionality, concerns, and existing architecture."
    },
    {
      "id": "stakeholder",
      "category": "requirements",
      "zh": "利益相关者",
      "en": "Stakeholder",
      "aliases": {
        "en": [
          "Stakeholders"
        ],
        "zh": [
          "系统利益相关者"
        ]
      },
      "context": "张贺：需求获取、场景和视图",
      "related": [
        "利益相关者关注点",
        "质量属性工作坊",
        "访谈"
      ],
      "noteZh": "会影响系统或被系统影响的人/组织角色，如用户、运维、测试、管理者、监管者。不同利益相关者会提出不同关注点。",
      "noteEn": "A role or organisation that affects or is affected by the system, such as users, operators, testers, managers, or regulators. Different stakeholders bring different concerns."
    },
    {
      "id": "stakeholder-concern",
      "category": "requirements",
      "zh": "利益相关者关注点",
      "en": "Stakeholder Concern",
      "aliases": {
        "en": [
          "Stakeholder Concerns",
          "Concern",
          "Concerns"
        ],
        "zh": [
          "关注点"
        ]
      },
      "context": "张贺：ASR 获取；李杉杉：ADD 输入",
      "related": [
        "利益相关者",
        "质量属性场景",
        "架构驱动因素"
      ],
      "noteZh": "利益相关者关心的问题或目标，如性能、可用性、安全、成本、进度、合规。需要进一步转成质量属性场景或设计约束。",
      "noteEn": "Something a stakeholder cares about, such as performance, availability, security, cost, schedule, or compliance. It should be refined into scenarios or design constraints."
    },
    {
      "id": "organisation",
      "category": "requirements",
      "zh": "组织因素",
      "en": "Organisation",
      "aliases": {
        "en": [
          "Organisations",
          "Organization",
          "Organizations",
          "Development Organization"
        ],
        "zh": [
          "开发组织",
          "组织约束"
        ]
      },
      "context": "张贺：架构来源；李杉杉：企业架构治理",
      "related": [
        "业务目标",
        "组织边界",
        "企业架构"
      ],
      "noteZh": "团队结构、技能、预算、进度、治理流程和责任边界等，会限制架构选择并影响服务/模块拆分。",
      "noteEn": "Team structure, skills, budget, schedule, governance, and responsibility boundaries constrain architectural choices and influence service/module decomposition."
    },
    {
      "id": "technical-environment",
      "category": "requirements",
      "zh": "技术/运行环境",
      "en": "Technical Environment",
      "aliases": {
        "en": [
          "Technical Environments",
          "Operational Environment",
          "Runtime Environment"
        ],
        "zh": [
          "技术环境",
          "运行环境"
        ]
      },
      "context": "张贺：架构来源；ADD：输入约束",
      "related": [
        "约束",
        "架构约束",
        "既有架构"
      ],
      "noteZh": "遗留系统、基础设施、平台、中间件、数据库、云环境和部署环境等外部技术条件，决定方案可行边界。",
      "noteEn": "External technical conditions such as legacy systems, infrastructure, platforms, middleware, databases, cloud, and deployment environments that constrain feasible choices."
    },
    {
      "id": "business-goal",
      "category": "requirements",
      "zh": "业务目标",
      "en": "Business Goal",
      "aliases": {
        "en": [
          "Business Goals",
          "Business Objective",
          "Business Objectives"
        ],
        "zh": [
          "业务目的"
        ]
      },
      "context": "张贺：ASR 排序与取舍；企业架构：战略对齐",
      "related": [
        "架构驱动因素",
        "效用树",
        "组织因素"
      ],
      "noteZh": "业务上最想达成的目标，用来给质量需求和 ASR 排优先级，也用来在不同利益相关者关注点冲突时取舍。",
      "noteEn": "The business outcome to achieve. It prioritizes quality requirements/ASRs and resolves conflicts among stakeholder concerns."
    },
    {
      "id": "requirement-document",
      "category": "requirements",
      "zh": "需求文档",
      "en": "Requirement Document",
      "aliases": {
        "en": [
          "Requirement Documents",
          "Requirements Document",
          "Requirements Documents"
        ],
        "zh": [
          "需求规格说明"
        ]
      },
      "context": "张贺：ASR 获取依据",
      "related": [
        "非功能需求",
        "质量需求",
        "利益相关者工作坊"
      ],
      "noteZh": "ASR 识别的第一手材料，但往往偏功能需求，NFR/质量需求可能不够场景化。",
      "noteEn": "The first source for ASR identification, but it often focuses on functionality and leaves NFRs/quality requirements insufficiently scenario-based."
    },
    {
      "id": "stakeholder-workshop",
      "category": "requirements",
      "zh": "利益相关者工作坊",
      "en": "Stakeholder Workshop",
      "aliases": {
        "en": [
          "Stakeholder Workshops",
          "Workshop",
          "Workshops"
        ],
        "zh": [
          "工作坊",
          "研讨会"
        ]
      },
      "context": "张贺：ASR 获取方法",
      "related": [
        "利益相关者",
        "质量属性工作坊",
        "访谈"
      ],
      "noteZh": "把不同利益相关者拉到一起，收集关注点、补充质量场景并讨论优先级。",
      "noteEn": "Brings stakeholders together to collect concerns, complete quality scenarios, and discuss priorities."
    },
    {
      "id": "interview",
      "category": "requirements",
      "zh": "访谈",
      "en": "Interview",
      "aliases": {
        "en": [
          "Interviews"
        ],
        "zh": [
          "面谈"
        ]
      },
      "context": "张贺：ASR 获取方法",
      "related": [
        "利益相关者",
        "利益相关者工作坊",
        "需求文档"
      ],
      "noteZh": "通过一对一或小范围交流补充需求文档中没有写清的质量目标、风险和约束。",
      "noteEn": "One-on-one or small-group elicitation used to complete quality goals, risks, and constraints missing from documents."
    },
    {
      "id": "design-purpose",
      "category": "methods",
      "zh": "设计目的",
      "en": "Design Purpose",
      "aliases": {
        "en": [
          "Design Purposes"
        ],
        "zh": [
          "设计目标"
        ]
      },
      "context": "李杉杉：ADD 输入",
      "related": [
        "属性驱动设计",
        "架构驱动因素",
        "主要功能"
      ],
      "noteZh": "ADD 3.0 输入之一，说明本轮架构设计要服务什么目的，如新建系统、演化系统或评估方案。",
      "noteEn": "An ADD 3.0 input stating what this design iteration is for, such as new design, evolution, or evaluation."
    },
    {
      "id": "primary-functionality",
      "category": "methods",
      "zh": "主要功能",
      "en": "Primary Functionality",
      "aliases": {
        "en": [
          "Primary Functionalities"
        ],
        "zh": [
          "核心功能"
        ]
      },
      "context": "李杉杉：ADD 输入",
      "related": [
        "功能需求",
        "属性驱动设计"
      ],
      "noteZh": "ADD 输入之一，指系统最核心、最能代表业务价值的功能。关键功能也可能成为架构驱动因素。",
      "noteEn": "An ADD input describing the system’s core business functionality. Key functionality can become an architectural driver."
    },
    {
      "id": "architectural-constraint",
      "category": "methods",
      "zh": "架构约束",
      "en": "Architectural Constraint",
      "aliases": {
        "en": [
          "Architectural Constraints"
        ],
        "zh": [
          "架构限制"
        ]
      },
      "context": "李杉杉：ADD 输入；张贺：需求分类",
      "related": [
        "约束",
        "技术/运行环境",
        "属性驱动设计"
      ],
      "noteZh": "架构设计前已经确定、必须满足的限制，如指定平台、合规要求、遗留系统或部署条件。",
      "noteEn": "A constraint fixed before architecture design and must be satisfied, such as platform, compliance, legacy, or deployment conditions."
    },
    {
      "id": "existing-architecture",
      "category": "methods",
      "zh": "既有架构",
      "en": "Existing Architecture",
      "aliases": {
        "en": [
          "Existing Architecture Design",
          "Brownfield Architecture",
          "Brownfield Iteration"
        ],
        "zh": [
          "棕地系统",
          "已有架构",
          "棕地迭代"
        ]
      },
      "context": "李杉杉：ADD 棕地迭代输入",
      "related": [
        "属性驱动设计",
        "技术/运行环境"
      ],
      "noteZh": "棕地开发中已有的系统架构，会作为下一轮 ADD 迭代的输入和限制。",
      "noteEn": "The current architecture in brownfield development; it becomes an input and constraint for the next ADD iteration."
    },
    {
      "id": "module-boundary",
      "category": "views",
      "zh": "模块边界",
      "en": "Module Boundary",
      "aliases": {
        "en": [
          "Module Boundaries"
        ],
        "zh": [
          "代码模块边界"
        ]
      },
      "context": "张贺：模块视图/开发结构语境",
      "boundaryType": {
        "zh": "代码组织边界",
        "en": "Code-organization boundary"
      },
      "related": [
        "模块视图",
        "设计决定",
        "责任分配"
      ],
      "noteZh": "在模块视图中划分代码职责和依赖的边界，关注可修改性、职责分配和编译/开发依赖。不要和 DDD 的限界上下文或组织边界混用。",
      "noteEn": "A code-organisation boundary in the module view, focused on modifiability, responsibility allocation, and development dependencies. Do not confuse it with bounded context or organisational boundary."
    },
    {
      "id": "system-boundary",
      "category": "views",
      "zh": "系统边界",
      "en": "System Boundary",
      "aliases": {
        "en": [
          "System Boundaries"
        ],
        "zh": [
          "系统范围边界"
        ]
      },
      "context": "设计题/画图题语境",
      "boundaryType": {
        "zh": "内外部范围边界",
        "en": "Internal/external scope boundary"
      },
      "related": [
        "外部系统",
        "接口",
        "服务边界"
      ],
      "noteZh": "画图时先框出系统内部与外部角色/外部系统的分界，帮助判断哪些组件属于本系统，哪些只通过接口交互。",
      "noteEn": "A drawing boundary that separates the system internals from external actors/systems, clarifying what belongs inside and what interacts through interfaces."
    },
    {
      "id": "organisation-boundary",
      "category": "enterprise",
      "zh": "组织边界",
      "en": "Organizational Boundary",
      "aliases": {
        "en": [
          "Organisation Boundary",
          "Organizational Boundaries",
          "Organisation Boundaries"
        ],
        "zh": [
          "组织责任边界"
        ]
      },
      "context": "张贺：架构来源；李杉杉：企业架构/治理语境",
      "boundaryType": {
        "zh": "团队与治理边界",
        "en": "Team and governance boundary"
      },
      "related": [
        "组织因素",
        "企业架构",
        "康威定律"
      ],
      "noteZh": "由团队、部门、职责、治理和预算形成的边界，会影响服务边界、系统归属和演化方式。",
      "noteEn": "A boundary formed by teams, departments, responsibilities, governance, and budgets; it affects service boundaries, ownership, and evolution."
    },
    {
      "id": "service-boundary",
      "category": "microservices",
      "zh": "服务边界",
      "en": "Service Boundary",
      "aliases": {
        "en": [
          "Service Boundaries"
        ],
        "zh": [
          "微服务边界"
        ]
      },
      "context": "李杉杉：微服务/DDD 语境",
      "boundaryType": {
        "zh": "部署与业务能力边界",
        "en": "Deployment and business-capability boundary"
      },
      "related": [
        "限界上下文",
        "数据边界",
        "业务能力"
      ],
      "noteZh": "微服务拆分时每个服务负责的业务能力、接口、数据归属和部署单元边界。通常参考限界上下文，但不机械等同。",
      "noteEn": "The boundary of a microservice’s business capability, interface, data ownership, and deployable unit. It often follows bounded contexts but is not mechanically identical."
    },
    {
      "id": "data-boundary",
      "category": "microservices",
      "zh": "数据边界",
      "en": "Data Boundary",
      "aliases": {
        "en": [
          "Data Boundaries"
        ],
        "zh": [
          "数据归属边界"
        ]
      },
      "context": "李杉杉：微服务数据归属",
      "boundaryType": {
        "zh": "数据所有权边界",
        "en": "Data-ownership boundary"
      },
      "related": [
        "服务自有数据",
        "服务边界",
        "聚合"
      ],
      "noteZh": "说明数据由哪个服务/聚合拥有和修改，是处理跨服务一致性与可修改性的关键。",
      "noteEn": "Defines which service/aggregate owns and changes data; important for consistency and modifiability across services."
    },
    {
      "id": "business-capability",
      "category": "enterprise",
      "zh": "业务能力",
      "en": "Business Capability",
      "aliases": {
        "en": [
          "Business Capabilities"
        ],
        "zh": [
          "业务功能能力"
        ]
      },
      "context": "李杉杉：企业架构/微服务拆分",
      "related": [
        "业务架构",
        "服务边界",
        "业务组件模型"
      ],
      "noteZh": "组织为了实现业务目标必须具备的能力，可用于企业架构梳理和微服务按业务能力拆分。",
      "noteEn": "A capability the organisation needs to achieve business goals; useful for enterprise architecture and business-capability service decomposition."
    },
    {
      "id": "view",
      "category": "views",
      "zh": "视图",
      "en": "View",
      "aliases": {
        "zh": [
          "架构视图"
        ],
        "en": [
          "Views",
          "Architecture View",
          "Architecture Views"
        ]
      },
      "context": "张贺：面向利益相关者关注点的架构表达",
      "related": [
        "利益相关者关注点",
        "模块视图",
        "组件-连接器视图",
        "分配视图",
        "4+1 视图"
      ],
      "noteZh": "从某一类关注点观察同一架构的表达。视图不是随机 UML 图，而是为特定利益相关者和关注点服务。",
      "noteEn": "A representation of architecture from one class of concerns. A view is not a random UML diagram; it serves specific stakeholders and concerns."
    },
    {
      "id": "module-view",
      "category": "views",
      "zh": "模块视图",
      "en": "Module View",
      "aliases": {
        "zh": [
          "模块视图类型"
        ],
        "en": [
          "Module Views",
          "Module Viewtype",
          "Module Viewtypes"
        ]
      },
      "context": "张贺：视图及视图外信息；开发结构语境",
      "boundaryType": {
        "zh": "代码组织边界",
        "en": "Code-organization boundary"
      },
      "related": [
        "模块边界",
        "分解视图",
        "使用视图",
        "分层架构"
      ],
      "noteZh": "描述静态代码/实现单元的分解、依赖、使用、泛化或分层关系，常服务开发人员、项目经理和维护人员。",
      "noteEn": "Shows static code or implementation units: decomposition, dependency, uses, generalization, or layered relations. Useful for developers, managers, and maintainers."
    },
    {
      "id": "component-connector-view",
      "category": "views",
      "zh": "组件-连接器视图",
      "en": "Component-and-Connector View (C&C View)",
      "aliases": {
        "zh": [
          "C&C 视图",
          "组件连接器视图"
        ],
        "en": [
          "C&C View",
          "C&C Views",
          "Component Connector View",
          "Component-and-Connector Views"
        ]
      },
      "context": "张贺：运行时结构语境；吕骏：风格表达",
      "related": [
        "连接器",
        "接口",
        "运行时组件",
        "管道-过滤器",
        "发布-订阅"
      ],
      "noteZh": "描述运行时组件、连接器、数据流和交互，常用于性能、并发、通信、可用性分析。",
      "noteEn": "Shows runtime components, connectors, data flow, and interactions; useful for performance, concurrency, communication, and availability analysis."
    },
    {
      "id": "allocation-view",
      "category": "views",
      "zh": "分配视图",
      "en": "Allocation View",
      "aliases": {
        "zh": [
          "部署/分配视图"
        ],
        "en": [
          "Allocation Views"
        ]
      },
      "context": "张贺：软件到环境映射语境",
      "boundaryType": {
        "zh": "部署/团队/文件映射边界",
        "en": "Deployment/team/file mapping boundary"
      },
      "related": [
        "物理视图",
        "技术/运行环境",
        "组织边界"
      ],
      "noteZh": "描述软件元素如何映射到硬件节点、运行环境、团队、文件系统或部署单元。",
      "noteEn": "Shows how software elements map to hardware nodes, runtime environments, teams, filesystems, or deployment units."
    },
    {
      "id": "connector",
      "category": "views",
      "zh": "连接器",
      "en": "Connector",
      "aliases": {
        "zh": [
          "架构连接器"
        ],
        "en": [
          "Connectors"
        ]
      },
      "context": "张贺：组件-连接器视图",
      "related": [
        "组件-连接器视图",
        "接口",
        "管道-过滤器"
      ],
      "noteZh": "运行时组件之间交互的机制，如调用、消息、管道、事件总线或协议适配。",
      "noteEn": "The interaction mechanism between runtime components, such as calls, messages, pipes, event buses, or protocol adapters."
    },
    {
      "id": "interface",
      "category": "decision",
      "zh": "接口",
      "en": "Interface",
      "aliases": {
        "zh": [
          "服务接口"
        ],
        "en": [
          "Interfaces"
        ]
      },
      "context": "ADD 第 5 步；微服务协作；文档化",
      "related": [
        "属性驱动设计",
        "服务边界",
        "连接器"
      ],
      "noteZh": "元素对外暴露的服务契约。ADD 第 5 步要求定义接口，文档化时要说明接口行为和约束。",
      "noteEn": "The externally visible contract of an element. ADD Step 5 defines interfaces; documentation records interface behavior and constraints."
    },
    {
      "id": "architectural-concern",
      "category": "methods",
      "zh": "架构关注点",
      "en": "Architectural Concern",
      "aliases": {
        "zh": [
          "架构关切"
        ],
        "en": [
          "Architectural Concerns"
        ]
      },
      "context": "李杉杉：ADD 输入；张贺：利益相关者关注点",
      "related": [
        "利益相关者关注点",
        "架构驱动因素",
        "属性驱动设计"
      ],
      "noteZh": "会影响架构设计的关注点或问题，ADD 3.0 把它列为五类红色驱动因素之一。",
      "noteEn": "A concern that affects architecture design; ADD 3.0 lists it as one of the five red driver classes."
    },
    {
      "id": "iteration-goal",
      "category": "methods",
      "zh": "迭代目标",
      "en": "Iteration Goal",
      "aliases": {
        "zh": [
          "本轮迭代目标"
        ],
        "en": [
          "Iteration Goals"
        ]
      },
      "context": "李杉杉：ADD 第 2 步",
      "related": [
        "属性驱动设计",
        "架构驱动因素",
        "设计目的"
      ],
      "noteZh": "ADD 每一轮通过选择驱动因素建立的本轮设计目标，用来决定要细化的元素和设计概念。",
      "noteEn": "The goal established in each ADD iteration by selecting drivers; it guides the element to refine and design concepts to use."
    },
    {
      "id": "rationale",
      "category": "documentation",
      "zh": "设计理由",
      "en": "Rationale",
      "aliases": {
        "zh": [
          "架构理由",
          "决策理由"
        ],
        "en": [
          "Design Rationale",
          "Architectural Rationale"
        ]
      },
      "context": "张贺：文档化；ADD 第 6 步",
      "related": [
        "设计决定",
        "视图",
        "属性驱动设计"
      ],
      "noteZh": "记录为什么选择某个架构方案、它满足哪些驱动因素以及接受哪些取舍。没有设计理由，图只能说明“是什么”，不能说明“为什么”。",
      "noteEn": "Explains why a design choice was made, which drivers it addresses, and what tradeoffs it accepts. Without rationale, a diagram says what, not why."
    },
    {
      "id": "responsibility-allocation",
      "category": "decision",
      "zh": "责任分配",
      "en": "Allocation of Responsibilities",
      "aliases": {
        "zh": [
          "职责分配"
        ],
        "en": [
          "Responsibility Allocation"
        ]
      },
      "context": "张贺：七类设计决定；ADD 第 5 步",
      "related": [
        "设计决定",
        "模块边界",
        "服务边界"
      ],
      "noteZh": "决定哪些元素承担哪些职责，是模块拆分、服务拆分和 ADD 第 5 步的基础。",
      "noteEn": "Decides which elements own which responsibilities; foundational for module/service decomposition and ADD Step 5."
    },
    {
      "id": "coordination-model",
      "category": "decision",
      "zh": "协调模型",
      "en": "Coordination Model",
      "aliases": {
        "zh": [
          "协作模型"
        ],
        "en": [
          "Coordination Models"
        ]
      },
      "context": "张贺：七类设计决定",
      "related": [
        "组件-连接器视图",
        "连接器",
        "发布-订阅"
      ],
      "noteZh": "决定元素之间如何通信、同步、并发和协作，例如同步调用、异步消息、事件或共享数据。",
      "noteEn": "Decides how elements communicate, synchronize, run concurrently, and collaborate, e.g. calls, messages, events, or shared data."
    },
    {
      "id": "data-model",
      "category": "decision",
      "zh": "数据模型",
      "en": "Data Model",
      "aliases": {
        "zh": [
          "数据设计"
        ],
        "en": [
          "Data Models"
        ]
      },
      "context": "张贺：七类设计决定；李杉杉：DDD/企业架构",
      "related": [
        "数据边界",
        "聚合",
        "数据架构"
      ],
      "noteZh": "决定系统核心数据、数据关系、数据归属和一致性规则。不要把领域模型简单等同数据库表。",
      "noteEn": "Decides core data, relationships, ownership, and consistency rules. Do not reduce domain models to database tables."
    },
    {
      "id": "resource-management",
      "category": "decision",
      "zh": "资源管理",
      "en": "Management of Resources",
      "aliases": {
        "zh": [
          "资源治理"
        ],
        "en": [
          "Resource Management"
        ]
      },
      "context": "张贺：七类设计决定；性能/可用性战术",
      "related": [
        "性能",
        "可用性",
        "战术"
      ],
      "noteZh": "决定线程、连接、缓存、带宽、计算资源等如何分配、复用、限制和监控。",
      "noteEn": "Decides how threads, connections, caches, bandwidth, compute, and other resources are allocated, reused, limited, and monitored."
    },
    {
      "id": "mapping-among-elements",
      "category": "decision",
      "zh": "架构元素映射",
      "en": "Mapping Among Architecture Elements",
      "aliases": {
        "zh": [
          "元素映射",
          "映射关系"
        ],
        "en": [
          "Mappings Among Architecture Elements"
        ]
      },
      "context": "张贺：七类设计决定；文档化",
      "related": [
        "视图",
        "分配视图",
        "设计理由"
      ],
      "noteZh": "说明不同视图或不同层次的元素如何对应，例如模块到运行时组件、组件到部署节点。",
      "noteEn": "Explains how elements across views or levels correspond, e.g. modules to runtime components or components to deployment nodes."
    },
    {
      "id": "technology-choice",
      "category": "decision",
      "zh": "技术选择",
      "en": "Choice of Technology",
      "aliases": {
        "zh": [
          "技术选型"
        ],
        "en": [
          "Technology Choice",
          "Technology Choices"
        ]
      },
      "context": "张贺：七类设计决定；ADD 设计概念",
      "related": [
        "技术/运行环境",
        "架构约束",
        "设计决定"
      ],
      "noteZh": "决定采用哪些平台、框架、中间件、数据库、协议或云服务。技术选择应服务架构驱动因素，而不是先入为主。",
      "noteEn": "Decides platforms, frameworks, middleware, databases, protocols, or cloud services. Technology choices should serve drivers, not dominate them."
    },
    {
      "id": "core-subdomain",
      "category": "ddd",
      "zh": "核心域",
      "en": "Core Subdomain",
      "aliases": {
        "zh": [
          "核心子域"
        ],
        "en": [
          "Core Domain",
          "Core Subdomains"
        ]
      },
      "context": "李杉杉：DDD 战略设计",
      "related": [
        "子域",
        "限界上下文",
        "业务能力"
      ],
      "noteZh": "最能体现业务差异化和竞争优势的子域，通常应投入最多建模精力。",
      "noteEn": "The subdomain that provides business differentiation and competitive advantage; it usually deserves the most modeling effort."
    },
    {
      "id": "supporting-subdomain",
      "category": "ddd",
      "zh": "支撑子域",
      "en": "Supporting Subdomain",
      "aliases": {
        "zh": [
          "支撑域"
        ],
        "en": [
          "Supporting Subdomains"
        ]
      },
      "context": "李杉杉：DDD 战略设计",
      "related": [
        "子域",
        "核心域"
      ],
      "noteZh": "支撑核心业务但不直接形成差异化优势的子域，可以自研但优先级低于核心域。",
      "noteEn": "Supports the core business but is not the main differentiator; may be built in-house with lower priority than the core domain."
    },
    {
      "id": "generic-subdomain",
      "category": "ddd",
      "zh": "通用子域",
      "en": "Generic Subdomain",
      "aliases": {
        "zh": [
          "通用域"
        ],
        "en": [
          "Generic Subdomains"
        ]
      },
      "context": "李杉杉：DDD 战略设计",
      "related": [
        "子域",
        "核心域"
      ],
      "noteZh": "许多企业都有的通用能力，通常可购买或复用现成方案。",
      "noteEn": "A common capability shared by many organizations; often purchased or reused."
    },
    {
      "id": "aggregate-root",
      "category": "ddd",
      "zh": "聚合根",
      "en": "Aggregate Root",
      "aliases": {
        "zh": [
          "聚合根实体"
        ],
        "en": [
          "Aggregate Roots"
        ]
      },
      "context": "李杉杉：DDD 一致性边界",
      "related": [
        "聚合",
        "实体",
        "数据边界"
      ],
      "noteZh": "聚合对外访问和修改的入口，负责维护聚合内部不变量。",
      "noteEn": "The entry point for accessing and modifying an aggregate; responsible for maintaining invariants inside the aggregate."
    },
    {
      "id": "domain-service",
      "category": "ddd",
      "zh": "领域服务",
      "en": "Domain Service",
      "aliases": {
        "zh": [
          "领域层服务"
        ],
        "en": [
          "Domain Services"
        ]
      },
      "context": "李杉杉：DDD 战术设计",
      "related": [
        "实体",
        "值对象",
        "聚合"
      ],
      "noteZh": "表达不自然属于某个实体或值对象的领域行为，仍应属于领域层，而不是应用编排。",
      "noteEn": "Expresses domain behavior that does not naturally belong to an entity or value object; it belongs in the domain layer rather than application orchestration."
    },
    {
      "id": "shared-kernel",
      "category": "ddd",
      "zh": "共享内核",
      "en": "Shared Kernel",
      "aliases": {
        "zh": [
          "共享核心"
        ],
        "en": [
          "Shared Kernels"
        ]
      },
      "context": "李杉杉：上下文映射",
      "related": [
        "上下文映射",
        "限界上下文"
      ],
      "noteZh": "多个限界上下文共同维护的一小部分模型或代码，共享范围必须小且治理清楚。",
      "noteEn": "A small shared part of model/code maintained by multiple bounded contexts; it must stay small and governed."
    },
    {
      "id": "open-host-service",
      "category": "ddd",
      "zh": "开放主机服务",
      "en": "Open Host Service",
      "aliases": {
        "zh": [
          "开放宿主服务"
        ],
        "en": [
          "Open Host Services"
        ]
      },
      "context": "李杉杉：上下文映射",
      "related": [
        "上下文映射",
        "接口"
      ],
      "noteZh": "一个上下文通过公开协议或服务接口为多个外部上下文提供稳定访问方式。",
      "noteEn": "A context offers stable access to multiple external contexts through a published protocol or service interface."
    },
    {
      "id": "customer-supplier",
      "category": "ddd",
      "zh": "客户方/供应方",
      "en": "Customer/Supplier",
      "aliases": {
        "zh": [
          "客户-供应商关系"
        ],
        "en": [
          "Customer Supplier"
        ]
      },
      "context": "李杉杉：上下文映射",
      "related": [
        "上下文映射",
        "限界上下文"
      ],
      "noteZh": "上下文映射关系：下游客户方依赖上游供应方，上下游需要协商接口、节奏和变化影响。",
      "noteEn": "A context-map relationship: downstream customer depends on upstream supplier and they coordinate interfaces, cadence, and changes."
    },
    {
      "id": "design-concept",
      "category": "methods",
      "zh": "设计概念",
      "en": "Design Concept",
      "aliases": {
        "zh": [
          "候选设计概念"
        ],
        "en": [
          "Design Concepts"
        ]
      },
      "context": "李杉杉：ADD 第 4 步",
      "related": [
        "属性驱动设计",
        "战术",
        "模式"
      ],
      "noteZh": "ADD 第 4 步选择的候选设计手段，可包括参考架构、模式、风格、战术、外部组件或技术机制。",
      "noteEn": "Candidate design means selected in ADD Step 4, such as reference architectures, patterns, styles, tactics, external components, or technical mechanisms."
    },
    {
      "id": "enterprise-architecture",
      "category": "enterprise",
      "zh": "企业架构",
      "en": "Enterprise Architecture",
      "aliases": {
        "zh": [
          "EA"
        ],
        "en": [
          "EA"
        ]
      },
      "context": "李杉杉：企业架构",
      "related": [
        "业务架构",
        "数据架构",
        "应用架构",
        "技术架构"
      ],
      "noteZh": "面向组织集合体的架构，描述基本组成部分、内外部关系、设计原则和治理原则。",
      "noteEn": "Architecture for an organizational whole, describing basic components, internal/external relationships, design principles, and governance principles."
    }
  ],
  "assets": [
    {
      "title": {
        "zh": "张贺课程画板",
        "en": "Zhang He review whiteboard"
      },
      "src": "assets/feishu-whiteboards/zhang-he.jpg",
      "note": {
        "zh": "对应课程总复习大纲，含基础内容与题型信息。",
        "en": "Course-review outline with fundamentals and exam type information."
      }
    },
    {
      "title": {
        "zh": "李杉杉课程画板",
        "en": "Li Shanshan review whiteboard"
      },
      "src": "assets/feishu-whiteboards/li-shanshan.jpg",
      "note": {
        "zh": "对应 ADD、微服务、DDD、企业架构等复习重点。",
        "en": "Review focus for ADD, microservices, DDD, and enterprise architecture."
      }
    },
    {
      "title": {
        "zh": "吕骏架构模式画板",
        "en": "Lu Jun architecture-patterns whiteboard"
      },
      "src": "assets/feishu-whiteboards/lu-jun.jpg",
      "note": {
        "zh": "对应架构演进与时代矛盾核心。",
        "en": "Architecture evolution and historical-tension storyline."
      }
    }
  ],
  "topicGroups": [
    {
      "id": "core",
      "title": {
        "zh": "基础核心",
        "en": "Core Foundations"
      },
      "note": {
        "zh": "概念、质量属性、ASR 是简答题辅助。",
        "en": "Definitions, quality attributes, and ASRs stabilize short-answer points."
      }
    },
    {
      "id": "process",
      "title": {
        "zh": "过程方法",
        "en": "Process and Methods"
      },
      "note": {
        "zh": "ADD/文档化/评估/设计决定。",
        "en": "ADD, documentation, evaluation, and design decisions."
      }
    },
    {
      "id": "patterns",
      "title": {
        "zh": "模式与演进",
        "en": "Patterns and Evolution"
      },
      "note": {
        "zh": "按时代矛盾理解架构模式。",
        "en": "Understand patterns through historical tensions."
      }
    },
    {
      "id": "modern",
      "title": {
        "zh": "现代架构",
        "en": "Modern Architecture"
      },
      "note": {
        "zh": "微服务、DDD、企业架构是高阶重点。",
        "en": "Microservices, DDD, and EA are advanced focus topics."
      }
    },
    {
      "id": "historical",
      "title": {
        "zh": "补充资料",
        "en": "Supplemental Topics"
      },
      "note": {
        "zh": "不作为核心，掌握到能识别和简答即可。",
        "en": "Not core; know enough to recognize and write short answers."
      }
    },
    {
      "id": "exam",
      "title": {
        "zh": "答题模板",
        "en": "Answer Playbooks"
      },
      "note": {
        "zh": "把知识点转成考试可写答案。",
        "en": "Turn concepts into exam-ready answers."
      }
    }
  ],
  "studyPlan": [
    {
      "id": "baseline-points",
      "day": {
        "zh": "第 1 轮",
        "en": "Round 1"
      },
      "title": {
        "zh": "先拿辅助分",
        "en": "Secure baseline points"
      },
      "items": [
        {
          "zh": "架构定义、架构/设计/结构、架构师职责",
          "en": "Architecture definitions, architecture/design/structure, architect roles"
        },
        {
          "zh": "质量属性六要素场景、ASR、效用树",
          "en": "Six-part quality scenarios, ASRs, utility tree"
        },
        {
          "zh": "4+1 和 视图及视图外信息 只背骨架",
          "en": "Memorize only the skeleton of 4+1 and Views and Beyond"
        }
      ]
    },
    {
      "id": "advanced-focus",
      "day": {
        "zh": "第 2 轮",
        "en": "Round 2"
      },
      "title": {
        "zh": "冲高阶重点",
        "en": "Attack current advanced focus"
      },
      "items": [
        {
          "zh": "ADD 3.0 七步流程 + 驱动因素/迭代 表述",
          "en": "ADD 3.0 seven-step process + driver/iteration wording"
        },
        {
          "zh": "微服务拆分/通信/部署/可观测性模式",
          "en": "Microservice decomposition/communication/deployment/observability patterns"
        },
        {
          "zh": "DDD 战略/战术设计、事件风暴、四层架构",
          "en": "DDD strategic/tactical design, event storming, four-layer architecture"
        },
        {
          "zh": "企业架构 4A、TOGAF ADM、CBM（P1，案例只作理解材料）",
          "en": "EA 4A, TOGAF ADM, CBM (P1; know the skeleton, not case details)"
        }
      ]
    },
    {
      "id": "past-paper-practice",
      "day": {
        "zh": "第 3 轮",
        "en": "Round 3"
      },
      "title": {
        "zh": "把真题写成答案",
        "en": "Convert past papers into answers"
      },
      "items": [
        {
          "zh": "按全部真题簇逐条看中文答案，再对照英文题干；2025/2022/2021 相邻课程真题只看架构筛选部分，GoF/OOP 题跳过",
          "en": "Read Chinese answer frames for all question clusters, then compare English questions; use only the architecture-filtered parts of 2025/2022/2021 adjacent-course papers and skip GoF/OOP-only questions"
        },
        {
          "zh": "主练微服务 + DDD + ADD/ASR 文档化；三层、缓存只作为 P2 补充资料过一遍",
          "en": "Main practice: microservices + DDD + ADD/ASR documentation; skim three-tier/cache as backup questions only"
        },
        {
          "zh": "ATAM/SPL/MDA/SOA 只保留往年高频简答骨架",
          "en": "Keep only short-answer skeletons for historical ATAM/SPL/MDA/SOA topics"
        }
      ]
    }
  ],
  "whiteboards": [
    {
      "id": "zhang-he",
      "title": {
        "zh": "张贺课程画板",
        "en": "Archived Zhang He Review Board"
      },
      "src": "assets/feishu-whiteboards/zhang-he.jpg",
      "note": {
        "zh": "课程总复习：考试形式、基础概念、质量属性、ASR、设计决定。",
        "en": "Course review: exam format, foundations, quality attributes, ASRs, design decisions."
      },
      "points": [
        {
          "zh": "成绩：平时 40%，期末 60%；英文题目，可中文或英文作答但不要混用。",
          "en": "Grading: coursework 40%, final 60%; English questions, answer in Chinese or English but do not mix."
        },
        {
          "zh": "题型：简答题、论述/问答题、设计分析题；个别题需画图。",
          "en": "Types: short answer, essay/Q&A, design analysis; some require diagrams."
        },
        {
          "zh": "基础核心：架构定义、架构/设计/结构关系、架构师职责、用户与开发者矛盾。",
          "en": "Foundation line: architecture definition, architecture/design/structure, architect role, user-developer tension."
        },
        {
          "zh": "质量核心：质量属性六要素场景、ASR 来源、效用树、设计决定/策略/战术/模式。",
          "en": "Quality line: six-part scenarios, ASR sources, utility tree, design decisions/strategy/tactic/pattern."
        }
      ]
    },
    {
      "id": "li-shanshan",
      "title": {
        "zh": "李杉杉课程画板",
        "en": "Archived Li Shanshan Review Board"
      },
      "src": "assets/feishu-whiteboards/li-shanshan.jpg",
      "note": {
        "zh": "ADD、微服务、DDD、企业架构是复习高阶重点。",
        "en": "ADD, microservices, DDD, and EA are advanced focus topics."
      },
      "points": [
        {
          "zh": "ADD 3.0：审查输入；按 驱动因素 建立本轮 迭代目标；选择要细化的元素；选择 设计概念；实例化元素、分配职责、定义接口；画视图并记录决策；分析当前设计并评审本轮目标与 设计目的，必要时继续迭代。",
          "en": "ADD 3.0: review inputs; establish the iteration goal by selecting drivers; choose elements to refine; choose design concepts; instantiate elements, allocate responsibilities, and define interfaces; sketch views and record decisions; analyze the current design and review the iteration goal/design purpose, then iterate if necessary."
        },
        {
          "zh": "微服务：不重定义，重特性、与 SOA/分层对比、拆分/通信/部署/可观测性模式。",
          "en": "Microservices: less definition, more characteristics, comparison with SOA/layers, decomposition/communication/deployment/observability patterns."
        },
        {
          "zh": "DDD：复杂耦合系统适用；从问题空间到解空间，战略设计 + 战术设计 + 事件风暴。",
          "en": "DDD: suitable for complex coupled domains; problem space to solution space, strategic + tactical design + event storming."
        },
        {
          "zh": "企业架构：4A、TOGAF/ADM、CBM、战略业务建模和能力沉淀。",
          "en": "EA: 4A, TOGAF/ADM, CBM, strategic business modeling, capability accumulation."
        }
      ]
    },
    {
      "id": "lu-jun",
      "title": {
        "zh": "吕骏架构模式画板",
        "en": "Archived Lu Jun Architecture-Patterns Board"
      },
      "src": "assets/feishu-whiteboards/lu-jun.jpg",
      "note": {
        "zh": "用“时代矛盾”和“管理对象变化”理解架构演进。",
        "en": "Understand architectural evolution through historical tensions and managed-object changes."
      },
      "points": [
        {
          "zh": "主机终端：机器昂贵，优先共享、一致性、安全性、可靠性；弱终端牺牲交互体验。",
          "en": "Mainframe-terminal: expensive machines, prioritize sharing/consistency/security/reliability; weak terminals sacrifice interaction."
        },
        {
          "zh": "C/S：提升交互体验，但胖客户端版本维护困难。",
          "en": "C/S: improves interaction, but fat-client versions are hard to maintain."
        },
        {
          "zh": "分层/SOA：解决耦合和分工问题，但牺牲性能和局部快速发布。",
          "en": "Layered/SOA: solves coupling/division of labor, but sacrifices performance and local fast release."
        },
        {
          "zh": "微服务到云原生/事件驱动：追求自治、长期稳定和韧性，但引入异步时序与排障复杂性。",
          "en": "Microservices to cloud-native/event-driven: autonomy, long-running stability, resilience; adds async ordering and debugging complexity."
        }
      ]
    },
    {
      "id": "ai-wiki-mainline",
      "title": {
        "zh": "AI Wiki 期末画板归档",
        "en": "Archived AI Wiki Exam Board"
      },
      "src": "assets/feishu-whiteboards/ai-wiki-mainline.png",
      "note": {
        "zh": "归档展示 AI 整理资料的画板结构；只作历史参考，不作为主背材料。",
        "en": "Archives the board structure from the peer AI notes; use it as historical reference, not as main memorization material."
      },
      "points": [
        {
          "zh": "起点：业务目标与 利益相关者，先说明系统要解决什么，以及最关心哪些风险与价值。",
          "en": "Start with business goals and stakeholders: what problem the system solves, and which risks/value matter most."
        },
        {
          "zh": "识别驱动：质量属性场景、ASR 与约束，把需求转成可设计、可评估的驱动因素。",
          "en": "Identify drivers: quality-attribute scenarios, ASRs, and constraints turn requirements into designable and evaluable drivers."
        },
        {
          "zh": "做出选择：用 ADD 3.0、战术、模式 或微服务权衡，说明选择改善了哪些质量属性。",
          "en": "Make choices: use ADD 3.0, tactics, patterns, or microservice tradeoffs to explain which qualities are improved."
        },
        {
          "zh": "落到边界：用 DDD 聚合/限界上下文和企业架构 4A/治理，把高层选择映射到组织、数据、应用和技术边界。",
          "en": "Land boundaries: use DDD aggregates/bounded contexts and EA 4A/governance to map choices to organization, data, application, and technology boundaries."
        },
        {
          "zh": "考场句式：问题与驱动因素 → 结构/决策 → 改善的质量属性 → 代价与验证。",
          "en": "Exam sentence: problem and drivers -> structure/decision -> improved quality attributes -> cost and validation."
        }
      ]
    }
  ],
  "diagrams": [
    {
      "id": "quality-scenario-table",
      "src": "assets/diagrams/quality-scenario-table.svg",
      "srcZh": "assets/diagrams/quality-scenario-table.zh.svg",
      "srcEn": "assets/diagrams/quality-scenario-table.svg",
      "title": {
        "zh": "质量属性场景 六要素参考表",
        "en": "Quality Attribute Scenario Ground-Truth Table"
      },
      "note": {
        "zh": "按原始课程表格重绘：七列对应质量属性、刺激源、刺激、工件、环境、响应、响应度量。",
        "en": "Redrawn from the original course table: quality attribute, source, stimulus, artifact, environment, response, response measure."
      },
      "use": {
        "zh": "质量场景题直接按此表背；可用性 行不要改成自拟切备用实例。",
        "en": "Use this table directly for quality-scenario questions; do not replace the Availability row with a self-made failover example."
      }
    },
    {
      "id": "architecture-design-process",
      "src": "assets/diagrams/architecture-design-process.svg",
      "srcZh": "assets/diagrams/architecture-design-process.zh.svg",
      "srcEn": "assets/diagrams/architecture-design-process.svg",
      "title": {
        "zh": "架构设计、文档化与评估过程图",
        "en": "Architecture Design, Documentation, and Evaluation Process"
      },
      "note": {
        "zh": "可信重绘图：ASR、需求/约束、模式/策略、文档化和评估反馈的过程。",
        "en": "Trusted existing redraw: process from ASRs, requirements/constraints, patterns/tactics to documentation and evaluation feedback."
      },
      "use": {
        "zh": "回答架构过程题时按四活动作答。",
        "en": "Use four activities for architecture-process answers."
      }
    },
    {
      "id": "add-roadmap",
      "src": "assets/diagrams/add-roadmap.svg",
      "srcZh": "assets/diagrams/add-roadmap.zh.svg",
      "srcEn": "assets/diagrams/add-roadmap.svg",
      "title": {
        "zh": "ADD 3.0 方法流程图",
        "en": "ADD 3.0 Roadmap"
      },
      "note": {
        "zh": "可信重绘图：五类 驱动因素 输入 第 1 步，第 1-7 步 串行推进，必要时迭代。",
        "en": "Trusted existing redraw: five driver categories feed Step 1; Steps 1-7 proceed and iterate if necessary."
      },
      "use": {
        "zh": "ADD 真题按七步背。",
        "en": "Memorize seven steps for ADD questions."
      }
    },
    {
      "id": "utility-tree",
      "src": "assets/diagrams/utility-tree.svg",
      "srcZh": "assets/diagrams/utility-tree.zh.svg",
      "srcEn": "assets/diagrams/utility-tree.svg",
      "title": {
        "zh": "ASR 效用树",
        "en": "ASR Utility Tree"
      },
      "note": {
        "zh": "把质量属性具体化为场景，再按用户/业务重要性和架构影响排序。",
        "en": "Turn quality attributes into scenarios, then rank by user/business importance and architectural impact."
      },
      "use": {
        "zh": "ASR 来源、识别、优先级题使用。",
        "en": "Use for ASR source, identification, and prioritization questions."
      }
    },
    {
      "id": "review-4-plus-1-views",
      "src": "assets/diagrams/review-4-plus-1-views.svg",
      "srcZh": "assets/diagrams/review-4-plus-1-views.zh.svg",
      "srcEn": "assets/diagrams/review-4-plus-1-views.svg",
      "title": {
        "zh": "4+1 视图模型",
        "en": "4+1 Views"
      },
      "note": {
        "zh": "来自课程材料纪要配套重绘：逻辑视图、进程视图、物理视图、开发视图与用例场景；实线箭头表示视图依赖方向。",
        "en": "Redrawn with the complete review minutes: logical, process, physical, development, and use-case scenarios."
      },
      "use": {
        "zh": "4+1 题和文档化题使用。",
        "en": "Use for 4+1 and documentation questions."
      }
    },
    {
      "id": "review-4-plus-1-uml-cheatsheet",
      "src": "assets/diagrams/review-4-plus-1-uml-cheatsheet.svg",
      "srcZh": "assets/diagrams/review-4-plus-1-uml-cheatsheet.zh.svg",
      "srcEn": "assets/diagrams/review-4-plus-1-uml-cheatsheet.svg",
      "title": {
        "zh": "4+1 视图 UML 画法",
        "en": "4+1 UML Sketch Guide"
      },
      "note": {
        "zh": "把 4+1 每个视图落到可手画的 UML：用例图、类图、组件/包图、时序图、部署图。",
        "en": "Maps each 4+1 view to an exam-sketchable UML notation: use-case, class, component/package, sequence, and deployment."
      },
      "use": {
        "zh": "4+1 画图题、视图选择题和文档化题使用。",
        "en": "Use for 4+1 drawing, view selection, and documentation questions."
      }
    },
    {
      "id": "review-architecture-evolution",
      "src": "assets/diagrams/review-architecture-evolution.svg",
      "srcZh": "assets/diagrams/review-architecture-evolution.svg",
      "srcEn": "assets/diagrams/review-architecture-evolution.en.svg",
      "title": {
        "zh": "软件架构演进核心",
        "en": "Software Architecture Evolution"
      },
      "note": {
        "zh": "吕骏课程段重绘：从主机/终端、C/S、三层、SOA 到微服务、事件驱动/云原生。",
        "en": "Redrawn from Lu Jun review: from mainframe/terminal, C/S, three-tier, SOA to microservices and event-driven/cloud-native."
      },
      "use": {
        "zh": "解释“为什么演进”时按矛盾、结构、质量取舍作答。",
        "en": "Explain evolution through tension, structure, and quality tradeoffs."
      }
    },
    {
      "id": "review-architecture-units",
      "src": "assets/diagrams/review-architecture-units.svg",
      "srcZh": "assets/diagrams/review-architecture-units.svg",
      "srcEn": "assets/diagrams/review-architecture-units.en.svg",
      "title": {
        "zh": "架构演进中的基本单元变化",
        "en": "Changing Units in Architecture Evolution"
      },
      "note": {
        "zh": "展示不同阶段管理对象从程序/数据到服务、事件和云原生平台的变化。",
        "en": "Shows the managed unit shifting from programs/data to services, events, and cloud-native platforms."
      },
      "use": {
        "zh": "模式/风格演进题辅助。",
        "en": "Support for pattern/style evolution answers."
      }
    },
    {
      "id": "microservice-style-comparison",
      "src": "assets/diagrams/microservice-style-comparison.svg",
      "srcZh": "assets/diagrams/microservice-style-comparison.zh.svg",
      "srcEn": "assets/diagrams/microservice-style-comparison.svg",
      "title": {
        "zh": "单体/分层/SOA/微服务对比",
        "en": "Monolith, Layered, SOA, and Microservice Comparison"
      },
      "note": {
        "zh": "按 第 6-7 讲 表格表述重绘，突出微服务与 SOA 的通信、数据、粒度差异。",
        "en": "Redrawn from Lecture 6-7 comparison tables, highlighting communication, data, and granularity differences."
      },
      "use": {
        "zh": "微服务特性与对比题使用。",
        "en": "Use for microservice characteristics and comparison questions."
      }
    },
    {
      "id": "review-microservice-decomposition",
      "src": "assets/diagrams/review-microservice-decomposition.svg",
      "srcZh": "assets/diagrams/review-microservice-decomposition.zh.svg",
      "srcEn": "assets/diagrams/review-microservice-decomposition.svg",
      "title": {
        "zh": "微服务拆分与 DDD 边界",
        "en": "Microservice Decomposition and DDD Boundaries"
      },
      "note": {
        "zh": "来自课程材料纪要配套重绘：业务能力、子域、限界上下文与服务边界的关系。",
        "en": "Redrawn with complete review minutes: business capabilities, subdomains, bounded contexts, and service boundaries."
      },
      "use": {
        "zh": "微服务/DDD 设计题使用。",
        "en": "Use for microservice/DDD design questions."
      }
    },
    {
      "id": "ddd-core-model",
      "src": "assets/diagrams/ddd-core-model.svg",
      "srcZh": "assets/diagrams/ddd-core-model.zh.svg",
      "srcEn": "assets/diagrams/ddd-core-model.svg",
      "title": {
        "zh": "DDD 战略/战术设计图",
        "en": "DDD Strategic and Tactical Design Map"
      },
      "note": {
        "zh": "按 第 8-9 讲 OCR 重绘：子域、限界上下文、上下文映射、聚合和事件风暴。",
        "en": "Redrawn from Lecture 8-9 OCR: subdomains, bounded contexts, context mapping, aggregates, and event storming."
      },
      "use": {
        "zh": "DDD 设计题按此组织答案。",
        "en": "Use this to structure DDD design answers."
      }
    },
    {
      "id": "enterprise-4a",
      "src": "assets/diagrams/enterprise-4a.svg",
      "srcZh": "assets/diagrams/enterprise-4a.zh.svg",
      "srcEn": "assets/diagrams/enterprise-4a.svg",
      "title": {
        "zh": "企业架构 4A / TOGAF / CBM",
        "en": "Enterprise Architecture 4A / TOGAF / CBM"
      },
      "note": {
        "zh": "按 第 10-11 讲 与课程表述重绘，强调 4A 而不是把 5A 放大成核心。",
        "en": "Redrawn from Lecture 10-11 and standard wording; emphasizes 4A rather than over-promoting 5A."
      },
      "use": {
        "zh": "企业架构 P1 题使用。",
        "en": "Use for P1 enterprise-architecture questions."
      }
    },
    {
      "id": "three-tier-reference",
      "src": "assets/diagrams/three-tier-reference.svg",
      "srcZh": "assets/diagrams/three-tier-reference.zh.svg",
      "srcEn": "assets/diagrams/three-tier-reference.svg",
      "title": {
        "zh": "三层架构参考答案图",
        "en": "Three-Tier Reference Diagram"
      },
      "note": {
        "zh": "说明性答题图：订票/ATM 三层职责 + 视图及视图外信息文档项。",
        "en": "Illustrative answer diagram: booking/ATM three-tier responsibilities plus Views and Beyond documentation; not a core focus slide."
      },
      "use": {
        "zh": "三层设计题需要画层次职责时使用。",
        "en": "Use when a three-tier design question asks for layer responsibilities."
      }
    },
    {
      "id": "cache-invalidation-reference",
      "src": "assets/diagrams/cache-invalidation-reference.svg",
      "srcZh": "assets/diagrams/cache-invalidation-reference.zh.svg",
      "srcEn": "assets/diagrams/cache-invalidation-reference.svg",
      "title": {
        "zh": "分布式缓存失效参考图",
        "en": "Distributed Cache Invalidation Reference"
      },
      "note": {
        "zh": "说明性答题图：先提交 DB，再由协调器/代理模式 广播失效事件到缓存适配器。",
        "en": "Illustrative answer diagram: commit DB first, then coordinator/broker broadcasts invalidation events to cache adapters."
      },
      "use": {
        "zh": "缓存一致性设计题使用。",
        "en": "Use for cache-consistency design questions."
      }
    },
    {
      "id": "mvc-cnc-reference",
      "src": "assets/diagrams/mvc-cnc-reference.svg",
      "srcZh": "assets/diagrams/mvc-cnc-reference.zh.svg",
      "srcEn": "assets/diagrams/mvc-cnc-reference.svg",
      "title": {
        "zh": "MVC 作为 C&C 样式参考图",
        "en": "MVC as C&C Style Reference"
      },
      "note": {
        "zh": "用 MVC 说明 组件-连接器：运行时组件、连接件和交互约束。",
        "en": "Uses MVC to explain Component-and-Connector: runtime components, connectors, and interaction constraints."
      },
      "use": {
        "zh": "C&C/MVC 例题使用。",
        "en": "Use for C&C/MVC example questions."
      }
    },
    {
      "id": "soa-cnc-reference",
      "src": "assets/diagrams/soa-cnc-reference.svg",
      "srcZh": "assets/diagrams/soa-cnc-reference.zh.svg",
      "srcEn": "assets/diagrams/soa-cnc-reference.svg",
      "title": {
        "zh": "SOA 作为 C&C 样式参考图",
        "en": "SOA as C&C Style Reference"
      },
      "note": {
        "zh": "说明性答题图：服务是组件，契约/协议/ESB/消息总线是连接件。",
        "en": "Illustrative answer diagram: services are components; contracts, protocols, ESB, and messaging are connectors."
      },
      "use": {
        "zh": "SOA/C&C、Web 服务/ESB 题使用。",
        "en": "Use for SOA/C&C and Web Service/ESB supplemental questions."
      }
    },
    {
      "id": "pipe-filter-text-pipeline",
      "src": "assets/diagrams/pipe-filter-text-pipeline.svg",
      "srcZh": "assets/diagrams/pipe-filter-text-pipeline.zh.svg",
      "srcEn": "assets/diagrams/pipe-filter-text-pipeline.svg",
      "title": {
        "zh": "管道-过滤器 文本处理参考图",
        "en": "Pipe-and-Filter Text Pipeline Reference"
      },
      "note": {
        "zh": "说明性答题图：每个 过滤器 做单步转换，每条 管道 标明数据格式。",
        "en": "Illustrative answer diagram: each filter performs one transformation and each pipe labels the data format."
      },
      "use": {
        "zh": "管道-过滤器设计题使用。",
        "en": "Use for Pipe-and-Filter design questions."
      }
    },
    {
      "id": "broker-pattern-topology",
      "src": "assets/diagrams/broker-pattern-topology.svg",
      "srcZh": "assets/diagrams/broker-pattern-topology.zh.svg",
      "srcEn": "assets/diagrams/broker-pattern-topology.svg",
      "title": {
        "zh": "代理模式 架构模式拓扑参考图",
        "en": "Broker Pattern Topology Reference"
      },
      "note": {
        "zh": "说明性答题图：客户端代理、代理模式、服务端代理、服务端 与可选注册目录。",
        "en": "Illustrative answer diagram: client proxy, broker, server proxy, server, and optional registry."
      },
      "use": {
        "zh": "代理模式拓扑题使用。",
        "en": "Use for Broker topology questions."
      }
    },
    {
      "id": "atam-phase-outputs",
      "src": "assets/diagrams/atam-phase-outputs.svg",
      "srcZh": "assets/diagrams/atam-phase-outputs.zh.svg",
      "srcEn": "assets/diagrams/atam-phase-outputs.svg",
      "title": {
        "zh": "ATAM 阶段输出参考表",
        "en": "ATAM Phase Outputs Reference"
      },
      "note": {
        "zh": "说明性表格：按第 0 阶段到第 3 阶段梳理 ATAM 输出。",
        "en": "Historical reference table: keep only the Phase 0-3 output skeleton and do not promote ATAM to the main focus."
      },
      "use": {
        "zh": "ATAM 阶段输出快速回忆用。",
        "en": "Use as a quick recall aid for ATAM phase outputs."
      }
    },
    {
      "id": "microservice-pattern-groups",
      "src": "assets/diagrams/microservice-pattern-groups.svg",
      "srcZh": "assets/diagrams/microservice-pattern-groups.zh.svg",
      "srcEn": "assets/diagrams/microservice-pattern-groups.svg",
      "title": {
        "zh": "微服务核心模式分组",
        "en": "Microservice Pattern Groups"
      },
      "note": {
        "zh": "按课程页s 5-8 重绘：拆分、通信、部署、可观测性四类模式。",
        "en": "Redrawn from review pages 5-8: decomposition, communication, deployment, and observability pattern groups."
      },
      "use": {
        "zh": "微服务特性、对比、设计题都按这四组组织。",
        "en": "Use these four groups for microservice traits, comparisons, and design answers."
      }
    },
    {
      "id": "architecture-view-selection",
      "src": "assets/diagrams/architecture-view-selection.svg",
      "srcZh": "assets/diagrams/architecture-view-selection.zh.svg",
      "srcEn": "assets/diagrams/architecture-view-selection.svg",
      "title": {
        "zh": "视图选择与最小文档包",
        "en": "View Selection and Minimum Documentation Set"
      },
      "note": {
        "zh": "按第 12 讲第 96-109 页重绘：最少模块/组件-连接器/分配、视图选择方法、视图外信息。",
        "en": "Redrawn from Lecture 12 pages 96-109: minimum Module/C&C/Allocation views, selection method, and beyond-view information."
      },
      "use": {
        "zh": "架构文档化和 视图及视图外信息 题使用。",
        "en": "Use for architecture documentation and Views and Beyond questions."
      }
    },
    {
      "id": "design-decision-categories",
      "src": "assets/diagrams/design-decision-categories.svg",
      "srcZh": "assets/diagrams/design-decision-categories.zh.svg",
      "srcEn": "assets/diagrams/design-decision-categories.svg",
      "title": {
        "zh": "设计决定七分类",
        "en": "Seven Categories of Design Decisions"
      },
      "note": {
        "zh": "按张贺第一份课程讲义第 7 页重绘：职责、协调、数据、资源、映射、绑定时间、技术选择。",
        "en": "Redrawn from Zhang He review-1 page 7: responsibilities, coordination, data, resources, mapping, binding time, and technology choices."
      },
      "use": {
        "zh": "设计决定题按七类 + 例子 + 取舍作答。",
        "en": "Answer design-decision questions with seven categories, examples, and tradeoffs."
      }
    },
    {
      "id": "ddd-event-storming-flow",
      "src": "assets/diagrams/ddd-event-storming-flow.svg",
      "srcZh": "assets/diagrams/ddd-event-storming-flow.zh.svg",
      "srcEn": "assets/diagrams/ddd-event-storming-flow.svg",
      "title": {
        "zh": "DDD 事件风暴流程",
        "en": "DDD Event-Storming Flow"
      },
      "note": {
        "zh": "按课程页 10 重绘：领域事件、参与者、热点标记，以及从事件到聚合/限界上下文的流程。",
        "en": "Redrawn from review page 10: domain events, participants, hotspots, and the flow from events to aggregates/bounded contexts."
      },
      "use": {
        "zh": "DDD 设计题用来从业务事实推导聚合、读写模型和服务边界。",
        "en": "Use for deriving aggregates, read/write models, and service boundaries in DDD design answers."
      }
    },
    {
      "id": "enterprise-methods-togaf-cbm",
      "src": "assets/diagrams/enterprise-methods-togaf-cbm.svg",
      "srcZh": "assets/diagrams/enterprise-methods-togaf-cbm.zh.svg",
      "srcEn": "assets/diagrams/enterprise-methods-togaf-cbm.svg",
      "title": {
        "zh": "TOGAF ADM 与 CBM 方法图",
        "en": "TOGAF ADM and CBM Method Map"
      },
      "note": {
        "zh": "按企业架构复习页重绘：TOGAF 回答过程，CBM 回答业务能力颗粒度。",
        "en": "Redrawn from the enterprise-architecture review slides: TOGAF answers process; CBM answers business capability granularity."
      },
      "use": {
        "zh": "企业架构 P1 题补充 4A 图使用。",
        "en": "Use with the 4A diagram for P1 enterprise architecture answers."
      }
    }
  ],
  "examMindmap": {
    "title": {
      "zh": "课程材料思维导图",
      "en": "Course Materials Mind Map"
    },
    "note": {
      "zh": "节点点击会统计，勾选会进入本地清单。",
      "en": "Node clicks are counted, and checked nodes are added to the local checklist."
    },
    "groups": [
      {
        "id": "shape",
        "priority": "",
        "title": {
          "zh": "考试形态",
          "en": "Exam Shape"
        },
        "nodes": [
          {
            "id": "exam-short-answer",
            "title": {
              "zh": "简答题 / 论述问答 / 设计分析",
              "en": "Short answers / essays / design analysis"
            },
            "note": {
              "zh": "英文题面；中文或英文作答，但同一题不要混用。",
              "en": "English questions; answer in Chinese or English, but do not mix languages in one answer."
            }
          },
          {
            "id": "exam-diagram",
            "title": {
              "zh": "个别题可能画图",
              "en": "Some questions may require diagrams"
            },
            "note": {
              "zh": "ADD、4+1、质量场景、微服务/DDD 设计题要能手画骨架。",
              "en": "Be ready to sketch ADD, 4+1, quality scenarios, and microservice/DDD design skeletons."
            }
          }
        ]
      },
      {
        "id": "p0",
        "priority": "P0",
        "title": {
          "zh": "P0 必须会",
          "en": "P0 Must Know"
        },
        "nodes": [
          {
            "id": "mind-foundation",
            "topicId": "foundation",
            "title": {
              "zh": "软件架构基本概念",
              "en": "Architecture foundations"
            },
            "note": {
              "zh": "结构 / 元素 / 关系 / 设计决定。",
              "en": "Structure / Elements / Relationships / Design decisions."
            }
          },
          {
            "id": "mind-views",
            "topicId": "views",
            "title": {
              "zh": "4+1 视图",
              "en": "4+1 Views"
            },
            "note": {
              "zh": "逻辑视图、进程视图、物理视图、开发视图 + 用例场景。",
              "en": "Logical, Process, Physical, Development + Use case scenarios."
            }
          },
          {
            "id": "mind-quality",
            "topicId": "quality",
            "title": {
              "zh": "质量属性六要素",
              "en": "Six-part quality scenarios"
            },
            "note": {
              "zh": "刺激源、刺激、工件、环境、响应、响应度量。",
              "en": "Source, stimulus, artifact, environment, response, response measure."
            }
          },
          {
            "id": "mind-asr",
            "topicId": "asr",
            "title": {
              "zh": "ASR 与 效用树",
              "en": "ASRs and Utility Tree"
            },
            "note": {
              "zh": "需求文档、访谈/工作坊、业务目标，按重要性和架构影响排序。",
              "en": "Documents, interviews/workshops, business goals; rank by value and architectural impact."
            }
          },
          {
            "id": "mind-evolution",
            "topicId": "patterns",
            "title": {
              "zh": "架构演进与模式/风格/战术",
              "en": "Architecture evolution and patterns/styles/tactics"
            },
            "note": {
              "zh": "按时代矛盾、结构抓手、质量属性取舍来答。",
              "en": "Answer by historical tension, structural mechanism, and quality tradeoffs."
            }
          },
          {
            "id": "mind-add",
            "topicId": "add",
            "title": {
              "zh": "ADD 3.0 七步",
              "en": "ADD 3.0 seven steps"
            },
            "note": {
              "zh": "驱动因素 输入、迭代目标、选择要细化的元素、设计概念、实例化、绘制视图/记录文档、分析。",
              "en": "Drivers, iteration goal, refine element, design concept, instantiate, sketch/document, analyze."
            }
          },
          {
            "id": "mind-ms",
            "topicId": "microservices",
            "title": {
              "zh": "微服务：特性/对比/模式",
              "en": "Microservices: characteristics/comparison/patterns"
            },
            "note": {
              "zh": "不背定义，重点拆分、通信、部署、可观测性。",
              "en": "Focus on decomposition, communication, deployment, and observability as the examinable core."
            }
          },
          {
            "id": "mind-ddd",
            "topicId": "ddd",
            "title": {
              "zh": "DDD：战略/战术/事件风暴",
              "en": "DDD: strategic/tactical/event storming"
            },
            "note": {
              "zh": "子域、限界上下文、上下文映射、聚合、领域事件。",
              "en": "Subdomains, bounded contexts, context maps, aggregates, domain events."
            }
          }
        ]
      },
      {
        "id": "p1",
        "priority": "P1",
        "title": {
          "zh": "P1 应会展开",
          "en": "P1 Expansion"
        },
        "nodes": [
          {
            "id": "mind-ea",
            "topicId": "enterprise",
            "title": {
              "zh": "企业架构 4A/TOGAF/CBM",
              "en": "EA 4A/TOGAF/CBM"
            },
            "note": {
              "zh": "P1：掌握基础分析和检查视角，案例只作理解材料。",
              "en": "P1: know analysis/checking lenses, not case details."
            }
          },
          {
            "id": "mind-hps",
            "topicId": "add",
            "title": {
              "zh": "HPS ADD 案例",
              "en": "HPS ADD case"
            },
            "note": {
              "zh": "理解 CQRS、Kafka、命令侧/查询侧/导出侧 如何支持 ADD 流程。",
              "en": "Understand CQRS, Kafka, command/query/export side as ADD process support."
            }
          }
        ]
      },
      {
        "id": "p2",
        "priority": "P2",
        "title": {
          "zh": "P2 补充辅助",
          "en": "P2 Backup"
        },
        "nodes": [
          {
            "id": "mind-atam",
            "topicId": "evaluation-atam",
            "title": {
              "zh": "ATAM 骨架",
              "en": "ATAM skeleton"
            },
            "note": {
              "zh": "输出、参与者、风险/敏感点/权衡。",
              "en": "Outputs, participants, risk/sensitivity/tradeoff."
            }
          },
          {
            "id": "mind-reuse",
            "topicId": "reuse-variability",
            "title": {
              "zh": "SPL/MDA/复用可变性",
              "en": "SPL/MDA/reuse and variability"
            },
            "note": {
              "zh": "掌握到能识别、能简答即可。",
              "en": "Know enough to recognize and write a short answer."
            }
          }
        ]
      },
      {
        "id": "p3",
        "priority": "P3",
        "title": {
          "zh": "P3 背景了解",
          "en": "P3 Background"
        },
        "nodes": [
          {
            "id": "mind-ai",
            "topicId": "ai",
            "title": {
              "zh": "AI 增强 / AI 原生",
              "en": "AI-enabled / AI-native"
            },
            "note": {
              "zh": "吕骏课程范围原始材料明确不考。",
              "en": "The Lu Jun source material marks this as out of exam scope."
            }
          },
          {
            "id": "mind-gof",
            "title": {
              "zh": "GoF 设计模式与代码实现题",
              "en": "GoF design patterns and coding questions"
            },
            "note": {
              "zh": "相邻课程材料中剔除，不纳入本课程核心。",
              "en": "Filtered from adjacent-course material and excluded from this course mainline."
            }
          }
        ]
      }
    ]
  },
  "glossaryGraph": [
    {
      "id": "zhang-quality-asr",
      "title": {
        "zh": "张贺：质量需求 -> ASR 核心",
        "en": "Zhang He: Quality Requirements -> ASRs"
      },
      "note": {
        "zh": "用于回答“架构从哪里来”、ASR 来源、效用树和质量场景题。",
        "en": "Use for architecture-source, ASR-source, utility-tree, and quality-scenario questions."
      },
      "terms": [
        "非功能需求",
        "质量需求",
        "质量属性",
        "质量属性场景",
        "效用树",
        "架构相关需求",
        "业务目标"
      ],
      "edges": [
        [
          "非功能需求",
          "重点包含",
          "质量需求"
        ],
        [
          "质量需求",
          "场景化为",
          "质量属性场景"
        ],
        [
          "质量属性场景",
          "进入",
          "效用树"
        ],
        [
          "效用树",
          "筛出",
          "架构相关需求"
        ],
        [
          "业务目标",
          "排序/取舍",
          "架构相关需求"
        ]
      ]
    },
    {
      "id": "zhang-views-docs",
      "title": {
        "zh": "张贺：利益相关者、视图与文档化语境",
        "en": "Zhang He: Stakeholders, Views, Documentation"
      },
      "note": {
        "zh": "用于回答 4+1、视图选择、文档包和架构过程题。这里的“边界”主要是系统/模块/视图边界。",
        "en": "Use for 4+1, view selection, documentation packages, and architecture-process questions. Here, boundary mainly means system, module, or view boundary."
      },
      "terms": [
        "利益相关者",
        "利益相关者关注点",
        "视图",
        "模块视图",
        "组件-连接器视图",
        "分配视图",
        "模块边界",
        "系统边界",
        "设计理由"
      ],
      "edges": [
        [
          "利益相关者",
          "提出",
          "利益相关者关注点"
        ],
        [
          "利益相关者关注点",
          "选择",
          "视图"
        ],
        [
          "视图",
          "分成",
          "模块视图"
        ],
        [
          "视图",
          "分成",
          "组件-连接器视图"
        ],
        [
          "视图",
          "分成",
          "分配视图"
        ],
        [
          "设计理由",
          "解释",
          "设计决定"
        ]
      ]
    },
    {
      "id": "li-add",
      "title": {
        "zh": "李杉杉：ADD 驱动因素语境",
        "en": "Li Shanshan: ADD Driver Context"
      },
      "note": {
        "zh": "用于回答 ADD 3.0 输入、七步流程和迭代目标。这里的“驱动因素”按 ADD 图中的五类红框理解。",
        "en": "Use for ADD 3.0 inputs, seven steps, and iteration goals. Here, drivers are the five red boxes in the ADD figure."
      },
      "terms": [
        "属性驱动设计",
        "架构驱动因素",
        "设计目的",
        "主要功能",
        "质量属性场景",
        "架构关注点",
        "架构约束",
        "既有架构",
        "迭代目标"
      ],
      "edges": [
        [
          "架构驱动因素",
          "作为输入",
          "属性驱动设计"
        ],
        [
          "设计目的",
          "影响",
          "迭代目标"
        ],
        [
          "既有架构",
          "进入",
          "棕地迭代"
        ],
        [
          "迭代目标",
          "指导",
          "设计概念"
        ]
      ]
    },
    {
      "id": "li-ddd-microservice",
      "title": {
        "zh": "李杉杉：DDD、微服务与边界语境",
        "en": "Li Shanshan: DDD, Microservices, Boundaries"
      },
      "note": {
        "zh": "用于区分限界上下文、服务边界、数据边界和组织边界：它们名称相近，但分别属于模型、部署/业务能力、数据所有权和团队治理语境。",
        "en": "Use to distinguish bounded context, service boundary, data boundary, and organisational boundary: their names are close, but they belong to modeling, deployment/business capability, data ownership, and team-governance contexts respectively."
      },
      "terms": [
        "统一语言",
        "限界上下文",
        "上下文映射",
        "聚合",
        "聚合根",
        "领域事件",
        "服务边界",
        "数据边界",
        "组织边界",
        "业务能力"
      ],
      "edges": [
        [
          "统一语言",
          "成立于",
          "限界上下文"
        ],
        [
          "限界上下文",
          "指导",
          "服务边界"
        ],
        [
          "聚合",
          "确定",
          "数据边界"
        ],
        [
          "领域事件",
          "连接",
          "服务边界"
        ],
        [
          "组织边界",
          "影响",
          "服务边界"
        ],
        [
          "业务能力",
          "拆分",
          "服务边界"
        ]
      ]
    },
    {
      "id": "lu-patterns-evolution",
      "title": {
        "zh": "吕骏：模式、风格与演进语境",
        "en": "Lu Jun: Patterns, Styles, Evolution"
      },
      "note": {
        "zh": "用于理解模式/战术/风格和架构演进，不与 ASR 来源题混答。",
        "en": "Use for patterns/tactics/styles and architecture evolution; do not mix this into ASR-source answers."
      },
      "terms": [
        "质量属性",
        "战术",
        "模式",
        "风格",
        "分层架构",
        "代理模式",
        "管道-过滤器",
        "发布-订阅",
        "组件-连接器视图"
      ],
      "edges": [
        [
          "质量属性",
          "落到",
          "战术"
        ],
        [
          "战术",
          "组合成",
          "模式"
        ],
        [
          "模式",
          "体现为",
          "风格"
        ],
        [
          "风格",
          "可用视图表达",
          "组件-连接器视图"
        ]
      ]
    },
    {
      "id": "enterprise-context",
      "title": {
        "zh": "李杉杉：企业架构治理语境",
        "en": "Li Shanshan: Enterprise Architecture Governance"
      },
      "note": {
        "zh": "企业架构中的“架构”面向组织集合体，不等同于单个软件系统结构；核心是 4A、业务能力、TOGAF ADM 和 CBM。",
        "en": "Enterprise Architecture concerns an organization, not only one software system; focus on 4A, capabilities, TOGAF ADM, and CBM."
      },
      "terms": [
        "企业架构",
        "业务架构",
        "数据架构",
        "应用架构",
        "技术架构",
        "业务能力",
        "TOGAF ADM",
        "业务组件模型",
        "组织边界"
      ],
      "edges": [
        [
          "企业架构",
          "展开为",
          "业务架构"
        ],
        [
          "企业架构",
          "展开为",
          "数据架构"
        ],
        [
          "企业架构",
          "展开为",
          "应用架构"
        ],
        [
          "企业架构",
          "展开为",
          "技术架构"
        ],
        [
          "业务能力",
          "承载于",
          "业务组件模型"
        ],
        [
          "TOGAF ADM",
          "治理",
          "企业架构"
        ]
      ]
    }
  ]
};
