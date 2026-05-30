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
    ],
    "evidence": [
      {
        "label": {
          "zh": "最高纲领",
          "en": "Top Ground Truth"
        },
        "body": {
          "zh": "以复习课完整录音、术语清洗稿、完整纪要和三份复习课 slides 为最高依据；旧飞书智能纪要仅归档保留，不再作为答案佐证。",
          "en": "The complete review-class recording, cleaned transcript, complete minutes, and three review-class slide decks are the highest evidence. Old Feishu smart notes are archived only."
        }
      },
      {
        "label": {
          "zh": "适用边界",
          "en": "Scope Boundary"
        },
        "body": {
          "zh": "专门面向 2026 南京大学软件学院研究生《软件体系结构》期末复习；不保证适用于未来年份或本科《软件系统设计》。",
          "en": "Built specifically for the 2026 NJU Software Institute graduate Software Architecture final review; not guaranteed for future offerings or undergraduate Software System Design."
        }
      },
      {
        "label": {
          "zh": "材料优先级",
          "en": "Evidence Priority"
        },
        "body": {
          "zh": "排序为：完整录音+复习课 slides > 课程 slides > 近年本课/相邻课程真题 > 2025 前人资料与学长博客 > 其他旧资料。",
          "en": "Priority: complete recording + review slides > course slides > recent current/adjacent past papers > 2025 senior materials and blogs > older auxiliary notes."
        }
      },
      {
        "label": {
          "zh": "纳入规则",
          "en": "Inclusion Rule"
        },
        "body": {
          "zh": "相邻课程只吸收体系结构重合内容；GoF/OOP/代码实现题排除。复习课明确“不考”的 AI 增强/AI 原生降到 P3 背景。",
          "en": "Adjacent-course material contributes only overlapping architecture content; GoF/OOP/coding questions are excluded. Review-class non-exam AI-enabled/native content is P3 background."
        }
      }
    ]
  },
  "priorities": [
    {
      "level": "P0",
      "weight": "必会 / Must know",
      "title": {
        "zh": "完整录音明确点名的主线",
        "en": "Mainline From Complete Review Recording"
      },
      "summary": {
        "zh": "优先啃这些：基础概念、4+1、质量属性/ASR、tactics/patterns/styles、架构演进、七类设计决定、ADD 3.0、微服务和 DDD。它们来自完整录音与复习 slides，是答题语言和设计题骨架。",
        "en": "Start here: foundations, 4+1, quality/ASR, tactics/patterns/styles, architecture evolution, seven design decisions, ADD 3.0, microservices, and DDD. These come from the complete recording and review slides."
      },
      "items": [
        {
          "topicId": "foundation",
          "zh": "软件架构基本概念、架构师职责、架构来源",
          "en": "Architecture foundations, architect roles, sources of architecture"
        },
        {
          "topicId": "views",
          "zh": "4+1 views 与架构文档化",
          "en": "4+1 views and architecture documentation"
        },
        {
          "topicId": "quality",
          "zh": "质量属性场景：六要素表必须会写",
          "en": "Quality attribute scenarios: six-part template"
        },
        {
          "topicId": "asr",
          "zh": "ASR、Utility tree 与优先级排序",
          "en": "ASRs, utility tree, and prioritization"
        },
        {
          "topicId": "patterns",
          "zh": "架构演进、风格/模式/战术的差异与取舍",
          "en": "Architecture evolution and style/pattern/tactic tradeoffs"
        },
        {
          "topicId": "design-decisions",
          "zh": "七类设计决定与 rationale",
          "en": "Seven design-decision categories and rationale"
        },
        {
          "topicId": "add",
          "zh": "ADD 3.0 七步、driver、iteration、documentation",
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
        "zh": "今年会用到的展开材料",
        "en": "Useful Expansion Topics"
      },
      "summary": {
        "zh": "用于把 P0 写成完整论述或设计题：企业架构 4A/TOGAF/CBM、HPS ADD case、微服务+DDD 设计题模板。",
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
          "zh": "HPS ADD case：用作流程支撑，不当唯一答案",
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
        "zh": "历史高频但今年未抬高",
        "en": "Historical But Lower Priority"
      },
      "summary": {
        "zh": "ATAM、SPL/MDA/复用、Broker/缓存/三层等旧题保留为保底；遇到能写，但不抢 P0 时间。",
        "en": "ATAM, SPL/MDA/reuse, Broker/cache/three-tier old questions remain as backup; answer if asked, but do not steal P0 time."
      },
      "items": [
        {
          "topicId": "evaluation-atam",
          "zh": "ATAM：输出、角色、risk/sensitivity/tradeoff 只背骨架",
          "en": "ATAM: outputs, roles, risk/sensitivity/tradeoff skeleton"
        },
        {
          "topicId": "reuse-variability",
          "zh": "SPL/MDA/复用与可变性：旧题保底",
          "en": "SPL/MDA/reuse and variability: old-paper backup"
        }
      ]
    },
    {
      "level": "P3",
      "weight": "只读 / Background",
      "title": {
        "zh": "明确不考或极低优先级",
        "en": "Non-Exam Or Very Low Priority"
      },
      "summary": {
        "zh": "吕骏明确说 AI 增强、AI 原生不会考；GoF 设计模式和代码实现题不属于本课程主线。只保留为资料库背景。",
        "en": "Lu Jun explicitly said AI-enabled and AI-native architecture will not be tested; GoF design-pattern and coding questions are outside this course mainline."
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
        "zh": "答题先说定义，再区分 design/structure，最后落到“解决用户与开发者的矛盾”：用户要更多功能和快速变化，开发者要易开发、低成本、易维护。",
        "en": "Answer by defining architecture, distinguishing it from design/structure, then connecting it to the core tension: users want more features and fast change; developers need ease of development, lower cost, and maintainability."
      },
      "bullets": [
        {
          "zh": "复习 PPT 的稳定来源：NFRs / Quality Requirements、ASRs、Stakeholders、Organisations、Technical Environments；业务目标和既有系统可作为补充约束。旧卷“五类来源”只在对应旧题中使用。",
          "en": "Stable review-slide sources: NFRs / Quality Requirements, ASRs, Stakeholders, Organisations, and Technical Environments. Business goals and existing systems are supplementary constraints. The old-paper five-source wording is old-question-specific."
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
          "zh": "“Architecture is not only box-and-line”：只画框线不够，还要说明元素的行为、外部可见属性、关系约束和设计理由。",
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
        "Review-class slides OCR"
      ],
      "group": "core",
      "sourceConfidence": "完整录音 + 复习课整理稿 + 对应 review slides/OCR",
      "examWeight": "稳拿基础分",
      "deepDive": [
        {
          "title": {
            "zh": "定义边界",
            "en": "Definition boundary"
          },
          "summary": {
            "zh": "先把 architecture / design / structure 三者说清。",
            "en": "Clarify architecture, design, and structure first."
          },
          "must": {
            "zh": "架构是高层设计和重要设计决定；结构是元素、关系和外部可见属性；所有架构都是设计，但不是所有设计都是架构。",
            "en": "Architecture is high-level design and significant decisions; structure is elements, relations, and visible properties; all architecture is design, but not all design is architecture."
          },
          "answer": {
            "zh": "先定义 architecture，再比较 design/structure，最后落到架构为什么重要：它约束后续设计、影响质量属性、协调 stakeholder。",
            "en": "Define architecture, compare with design/structure, then explain why it matters: constrains later design, shapes quality attributes, coordinates stakeholders."
          },
          "trap": {
            "zh": "不要只写 “box-and-line”。如果只画框线，没有职责、关系、约束和设计理由，不能算完整架构答案。",
            "en": "Do not stop at box-and-line; responsibilities, relations, constraints, and rationale are required."
          }
        },
        {
          "title": {
            "zh": "架构来源",
            "en": "Architecture sources"
          },
          "summary": {
            "zh": "按复习 PPT 的稳定术语答；旧卷“五类来源”只在旧题语境中使用。",
            "en": "Use the stable review-slide wording; the old-paper five-source list is only for the old-question wording."
          },
          "must": {
            "zh": "NFRs / Quality Requirements、ASRs、Stakeholders、Organisations、Technical Environments。可补充业务目标、组织约束、既有系统，但不要扩成无据固定清单。",
            "en": "NFRs / Quality Requirements, ASRs, Stakeholders, Organisations, Technical Environments. Business goals, organizational constraints, and existing systems may be supplementary, not an unsupported fixed list."
          },
          "answer": {
            "zh": "先按 PPT 五组词说明来源，再解释它们如何变成架构 driver：质量需求和 ASR 决定结构，stakeholder/organisation/environment 决定约束与取舍。",
            "en": "List the five review-slide source groups, then explain how they become architectural drivers: quality requirements and ASRs shape structure; stakeholders, organisations, and environments shape constraints and tradeoffs."
          },
          "trap": {
            "zh": "不要把“业务目标”写成旧卷五源之一；也不要把旧卷五项当今年所有题的唯一标准。",
            "en": "Do not make business goals one of the old-paper five sources; do not treat the old five-source list as the universal 2026 answer."
          }
        }
      ],
      "diagramIds": [
        "architecture-design-process"
      ],
      "memorize": {
        "zh": "一句话定义：软件架构是高层设计，是软件系统的一组结构；结构由元素、关系和外部可见属性组成。\n必背区分：架构属于设计，但不是所有设计都是架构；会影响质量属性和全局结构的设计才是架构层设计。\n来源/driver：需求、利益相关者、组织、架构师经验、技术与运行环境；今年答题时优先用质量需求、ASR、Stakeholder concern、Organisation、Technical Environment 的口径。",
        "en": "Definition: software architecture is high-level design and a set of structures; a structure consists of elements, relations, and externally visible properties.\nDistinction: architecture is design, but not every design decision is architectural; architectural decisions shape qualities and global structure.\nDrivers: requirements, stakeholders, organizations, architects' experience, and technical/runtime environments; for 2026, phrase them as quality requirements, ASRs, stakeholder concerns, organisations, and technical environments."
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
            "zh": "这组概念是张贺复习课点名基础题，不能只背一句定义。",
            "en": "This is a review-class basic question, not a one-sentence definition."
          },
          "explain": {
            "zh": "软件架构可以理解为“会长期约束系统演化的高层设计”。它关心模块、运行时组件、部署节点、数据、接口、连接器和它们之间的关系。设计的范围更大，包含界面细节、类设计、算法、代码实现等；其中会影响全局结构、质量属性和关键约束的设计，才上升为架构。结构是架构的可观察骨架，回答有哪些元素、元素之间如何连接、外部能看到哪些属性。",
            "en": "Software architecture is high-level design that constrains long-term system evolution. It concerns modules, runtime components, deployment nodes, data, interfaces, connectors, and their relations. Design is broader and includes UI details, classes, algorithms, and code. The design decisions that affect global structure, qualities, and key constraints become architecture. A structure is the observable skeleton: elements, relations, and externally visible properties."
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
            "zh": "依据完整录音和 Lecture 1/复习课 slides；不要把“原则/理由”写成架构定义本体，但可以作为 rationale 补充。",
            "en": "Grounded in the complete recording and Lecture 1/review slides; do not turn principles/rationale into the definition itself, but they can be added as rationale."
          }
        },
        {
          "title": {
            "zh": "架构从哪里来：driver 而不是灵感",
            "en": "Where architecture comes from: drivers"
          },
          "summary": {
            "zh": "旧题问五个来源，今年更稳的口径是架构 driver。",
            "en": "Old papers ask five sources; the 2026-safe framing is architecture drivers."
          },
          "explain": {
            "zh": "架构来源可以统一理解为 architecture drivers：会迫使架构做出结构选择的因素。需求给出功能、质量和约束；利益相关者给出不同 concerns；组织给出团队、技能、进度和成本边界；架构师经验给出模式和技术判断；技术/运行环境给出遗留系统、平台、中间件、部署和运行约束。业务目标不一定作为旧题五源之一，但它决定这些 driver 谁更重要。",
            "en": "Architecture comes from drivers: factors that force structural choices. Requirements provide functionality, qualities, and constraints; stakeholders provide concerns; organisations provide team, skill, schedule, and cost boundaries; architects bring pattern and technology judgment; technical/runtime environments provide legacy, platform, middleware, deployment, and runtime constraints. Business goals may not be one of the old five sources, but they prioritize the drivers."
          },
          "memorize": {
            "zh": "需求、利益相关者、组织、架构师经验、技术/运行环境；今年写作时优先说 quality requirements、ASR、stakeholder concerns、organisations、technical environments。",
            "en": "Requirements, stakeholders, organisation, architect experience, and technical/runtime environment; for 2026 wording, prefer quality requirements, ASRs, stakeholder concerns, organisations, and technical environments."
          },
          "answer": {
            "zh": "如果题干写“five sources”，直接列五类并各解释一句；如果题干写 driver/ASR，先说质量需求和 ASR，再说 stakeholders、organisation、technical environment。",
            "en": "If the prompt says “five sources”, list and explain five categories. If it says drivers/ASRs, start with quality requirements and ASRs, then stakeholders, organisation, and technical environment."
          },
          "boundary": {
            "zh": "旧卷五源有历史依据；复习课主线以 slides 的 driver 口径更稳。",
            "en": "The old five-source answer is historically grounded; the review-class mainline is safer with the slide driver wording."
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
        "zh": "固定六要素按 ground-truth 表格顺序背：source of stimulus、stimulus、artifact、environment、response、response measure。可用性原表响应是“通知操作者继续操作”，响应度量是“没有停机时间”。",
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
          "zh": "tactic 是解决质量属性问题的原子设计决定，多个 tactic 可组合成 pattern。",
          "en": "A tactic is an atomic design decision for a quality concern; multiple tactics can combine into a pattern."
        },
        {
          "zh": "常考属性要至少能各举一例：availability、interoperability、modifiability、performance、security、testability、usability。",
          "en": "For common attributes, be able to give at least one example each: availability, interoperability, modifiability, performance, security, testability, usability."
        },
        {
          "zh": "如果题目给一个模糊 NFR，要先重写成可测量场景，再谈 tactic/pattern。",
          "en": "If the question gives a vague NFR, rewrite it as a measurable scenario before discussing tactics/patterns."
        }
      ],
      "sources": [
        "Complete review recording transcript",
        "Complete review minutes",
        "Review-class slides OCR"
      ],
      "group": "core",
      "sourceConfidence": "完整录音 + 复习课整理稿 + 对应 review slides/OCR",
      "examWeight": "质量场景必背",
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
            "zh": "source of stimulus、stimulus、artifact、environment、response、response measure。中文可背：刺激源、刺激、制品、环境、响应、响应度量。",
            "en": "Source of stimulus, stimulus, artifact, environment, response, response measure."
          },
          "answer": {
            "zh": "先把题目中的模糊词改写成场景，再用六要素逐项填表。最后补一两条 tactic，例如冗余、缓存、认证、隔离、监控。",
            "en": "Rewrite vague quality into a scenario, fill six elements, then add tactics such as redundancy, caching, authentication, isolation, monitoring."
          },
          "trap": {
            "zh": "最容易漏 environment 和 response measure；“系统要快”不是答案，“95% 请求 2s 内完成”才是度量。",
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
            "zh": "性能常见 caching/load balancing/control resource demand；可用性常见 heartbeat/redundancy/failover；安全常见 authentication/authorization/audit。",
            "en": "Performance: caching/load balancing/control resource demand; availability: heartbeat/redundancy/failover; security: authentication/authorization/audit."
          },
          "answer": {
            "zh": "按“质量属性 -> 场景 -> tactic -> tradeoff”写。例如缓存提高性能但增加一致性复杂度。",
            "en": "Use “attribute -> scenario -> tactic -> tradeoff”. For example, caching improves performance but complicates consistency."
          },
          "trap": {
            "zh": "不要把 tactic 写成万能药。每个 tactic 都会牺牲其他质量属性或增加复杂度。",
            "en": "No tactic is free; each may hurt another quality or add complexity."
          }
        }
      ],
      "diagramIds": [
        "quality-scenario-table"
      ],
      "memorize": {
        "zh": "三类需求：功能需求说明系统做什么；质量需求说明系统做得多好；约束说明设计必须受什么限制。\n质量场景六要素：刺激源、刺激、环境、制品、响应、响应度量。背题时必须写到可观察的响应和可度量指标。\nASR 是影响架构的需求，通常来自困难且重要的质量需求、强约束、关键功能和业务目标。",
        "en": "Three requirement types: functional requirements say what the system does; quality requirements say how well; constraints restrict the design space.\nSix quality-scenario parts: source, stimulus, environment, artifact, response, and response measure. Always include observable response and measurable criteria.\nASRs are requirements that shape architecture, often from difficult and important qualities, strong constraints, key functions, and business goals."
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
            "zh": "完整录音和复习课 slides 明确三类需求；质量需求要场景化。",
            "en": "The complete recording and review slides explicitly name the three requirement types; quality requirements must be scenario-based."
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
            "zh": "质量场景把抽象质量属性变成可评估句子。刺激源是谁发起事件；刺激是发生了什么；环境是正常、峰值、故障、维护等条件；制品是被影响的系统部分；响应是系统做什么；响应度量是用数字或可判定标准说明做得多好。比如可用性：Heartbeat 监视器发现服务器无响应，在正常操作环境下影响处理器，系统通知操作者并继续操作，响应度量是没有停机时间。",
            "en": "A quality scenario turns an abstract quality into an evaluable sentence. Source is who triggers the event; stimulus is what happens; environment is normal, peak, failure, maintenance, etc.; artifact is the affected part; response is what the system does; response measure quantifies or judges how well. Example for availability: a heartbeat monitor detects a server not responding; under normal operation, the processor is affected; the system notifies the operator and continues operation; the response measure is no downtime."
          },
          "memorize": {
            "zh": "刺激源、刺激、环境、制品、响应、响应度量；最后一项必须可测。",
            "en": "Source, stimulus, environment, artifact, response, response measure; the last part must be measurable."
          },
          "answer": {
            "zh": "考场可以画表，也可以写一句长句。推荐写表，列头就是六要素，行里填具体例子。",
            "en": "Use a table or one long sentence. A table is safer: columns are the six parts and the row is a concrete example."
          },
          "boundary": {
            "zh": "以重绘质量场景表和复习课讲解为准；不同质量属性示例可以换，但六要素不能少。",
            "en": "Grounded in the redrawn quality-scenario table and review class; examples may vary, but the six parts must remain."
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
        "zh": "ASR 是会显著影响架构设计决定的需求，不等于所有需求。复习课强调要从需求文档、访谈/workshop 和业务目标中补齐。",
        "en": "An ASR is a requirement that significantly affects architectural decisions. It is not every requirement. The complete review recording/minutes emphasize documents, interviews/workshops, and business goals."
      },
      "answerFrame": {
        "zh": "先定义 ASR，再说来源，最后说效用树：系统效用分解为质量属性、场景、度量；叶子节点从用户价值与开发难度/利益两维评估。",
        "en": "Define ASR, list sources, then explain the utility tree: system utility breaks down into quality attributes, scenarios, and measures; leaves are prioritized by user value and development impact/difficulty."
      },
      "bullets": [
        {
          "zh": "需求文档里的 NFR 常不够场景化，需要 stakeholder workshop 或 interview。",
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
          "zh": "QAW/访谈的价值在于把“希望系统快/稳定/安全”这类口头需求转成可度量 ASR。",
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
        "Review-class slides OCR"
      ],
      "group": "core",
      "sourceConfidence": "完整录音 + 复习课整理稿 + 对应 review slides/OCR",
      "examWeight": "高频简答",
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
            "zh": "先定义，再说来源/方法：需求文档、stakeholder workshop/interview 或 QAW、业务目标、约束，以及质量属性场景化表达。",
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
            "zh": "树根是 utility，中间是质量属性，叶子是具体场景和度量；叶子常按业务价值与架构影响/难度排序。",
            "en": "Root is utility, branches are qualities, leaves are scenarios and measures, prioritized by business value and architectural impact/difficulty."
          },
          "answer": {
            "zh": "画树后圈出 H/H 或 high/high 叶子，说这些最先进入架构设计和评估。",
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
        "zh": "ASR 的判断标准：它是否改变架构结构、技术选型、部署方式、通信方式或关键设计决策。\n获取 ASR 的常见方式：需求文档、利益相关者访谈/Workshop、业务目标、质量属性场景、Utility Tree。\n优先级判断：重要性高、实现风险高、冲突多、影响范围大的 ASR 要先处理。",
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
            "zh": "复习课明确 ASR 是架构输入，通常来自重要且困难的质量需求和强约束。",
            "en": "The review class states ASRs are architecture inputs, often from important/difficult quality requirements and strong constraints."
          }
        },
        {
          "title": {
            "zh": "Utility Tree 到底怎么用",
            "en": "How to use a Utility Tree"
          },
          "summary": {
            "zh": "效用树不是画装饰图，而是给质量需求排优先级。",
            "en": "A utility tree is not decoration; it prioritizes quality requirements."
          },
          "explain": {
            "zh": "Utility Tree 从总目标 utility 往下分解到质量属性，再分解到具体场景。每个叶子场景要标重要性和风险/难度，帮助架构师先处理高重要、高风险的 ASR。它把“性能好、可用性高”这种模糊词，变成“峰值下 95% 请求 2 秒内返回”“服务器无响应时无停机”这种可讨论场景。",
            "en": "A utility tree decomposes overall utility into quality attributes and then concrete scenarios. Each leaf scenario is ranked by importance and risk/difficulty, helping architects address high-importance/high-risk ASRs first. It turns vague “fast/high availability” into scenarios such as “95% requests return within 2 seconds under peak load” or “no downtime when a server does not respond”."
          },
          "memorize": {
            "zh": "Utility -> Quality Attribute -> Scenario；叶子标重要性和风险/难度。",
            "en": "Utility -> Quality Attribute -> Scenario; leaves carry importance and risk/difficulty."
          },
          "answer": {
            "zh": "如果题目问识别 ASR，可以写：访谈/Workshop 收集 concern，写成质量场景，放进效用树，用重要性和风险排序。",
            "en": "For ASR identification: collect concerns via interviews/workshops, express them as quality scenarios, place them in a utility tree, and rank by importance and risk."
          },
          "boundary": {
            "zh": "完整录音和 slides 支持 requirements、workshop/interviews、business goals、utility tree 这条线。",
            "en": "The complete recording and slides support the requirements, workshops/interviews, business goals, and utility tree line."
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
        "zh": "按 Lecture 12 的 7 步答：1 Review inputs；2 Establish iteration goal by selecting drivers；3 Choose elements to refine；4 Choose design concepts；5 Instantiate architectural elements / allocate responsibilities / define interfaces；6 Sketch views and record design decisions；7 Perform analysis of current design and review iteration goal and achievement of design purpose，然后必要时继续迭代。",
        "en": "Use the Lecture 12 seven-step process: 1 Review inputs; 2 Establish the iteration goal by selecting drivers; 3 Choose elements to refine; 4 Choose design concepts; 5 Instantiate architectural elements, allocate responsibilities, and define interfaces; 6 Sketch views and record design decisions; 7 Perform analysis of the current design and review the iteration goal and achievement of the design purpose, then iterate if necessary."
      },
      "bullets": [
        {
          "zh": "图中红色 driver 是 Design Purpose、Primary Functionality、Quality Attributes、Architectural Concerns、Constraints；上一轮设计或 brownfield 既有系统通过 artifact flow 进入 Step 1。",
          "en": "The red drivers in the slide are Design Purpose, Primary Functionality, Quality Attributes, Architectural Concerns, and Constraints; previous-iteration or brownfield designs enter Step 1 through the artifact-flow path."
        },
        {
          "zh": "Step 1 是 Review inputs，不是建立目标；Step 2 才是在驱动因素中选择本轮 iteration goal。",
          "en": "Step 1 is Review inputs, not goal establishment; Step 2 selects the iteration goal from the drivers."
        },
        {
          "zh": "复习课案例里的 iteration goal 可参考：整体结构、核心功能、质量属性、开发/部署/运营需求；但这不是 ADD 3.0 固定步骤，固定步骤仍以上面的 Step 1-7 为准。",
          "en": "Review-class cases may choose iteration goals such as overall structure, core functionality, quality attributes, and development/deployment/operations concerns; these are not fixed ADD 3.0 steps, whose fixed process remains Step 1-7 above."
        },
        {
          "zh": "终止条件：所有 driving architectural requirements 已有设计决策、重要技术风险已缓解，或架构设计时间耗尽；不要把 ADD 画成一次性瀑布。",
          "en": "Termination criteria: design decisions have covered the driving architectural requirements, key technical risks have been mitigated, or the architecture-design timebox is consumed; do not draw ADD as one-shot waterfall."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Li Shanshan review-class slides",
        "Lecture 12 ADD 3.0 slide OCR"
      ],
      "group": "process",
      "sourceConfidence": "完整录音李杉杉段 + Lecture 12 ADD 原图 + 复习课 slides",
      "examWeight": "设计题核心",
      "deepDive": [
        {
          "title": {
            "zh": "ADD 3.0 课程原图口径",
            "en": "ADD 3.0 slide-faithful process"
          },
          "summary": {
            "zh": "复习课明确说 ADD 是今年主线之一；图解必须以 Lecture 12 的 ADD 3.0 method 图为准。",
            "en": "The review class made ADD a major focus; the diagram should follow the Lecture 12 ADD 3.0 method figure."
          },
          "must": {
            "zh": "五类 driver + 七步：Review inputs；Establish iteration goal by selecting drivers；Choose elements to refine；Choose design concepts；Instantiate/allocate/define interfaces；Sketch views and record decisions；Perform analysis of current design and review goal/purpose。",
            "en": "Five driver classes plus seven steps: Review inputs; Establish iteration goal by selecting drivers; Choose elements to refine; Choose design concepts; Instantiate/allocate/define interfaces; Sketch views and record decisions; Perform analysis of current design and review goal/purpose."
          },
          "answer": {
            "zh": "手画时先画上方五个红色 driver，再画 Step 1-7 的纵向流程；Step 7 后写 Iterate if necessary，并输出 (Refined) Software Architecture Design。",
            "en": "When drawing by hand, put the five red drivers on top, then draw the vertical Step 1-7 flow; after Step 7 write Iterate if necessary and output (Refined) Software Architecture Design."
          },
          "trap": {
            "zh": "不要用自创简化图替代课程图；不要漏 Architectural Concerns，也不要把 Step 1 写成建立目标。",
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
            "zh": "设计概念包括 reference architecture、pattern、style、tactic、externally developed component。",
            "en": "Design concepts include reference architectures, patterns, styles, tactics, and externally developed components."
          },
          "answer": {
            "zh": "举例：性能 driver 可选缓存和负载均衡；可修改性 driver 可选分层和信息隐藏；领域复杂可选 DDD 和 bounded context。",
            "en": "Examples: performance uses caching/load balancing; modifiability uses layering/information hiding; domain complexity uses DDD/bounded contexts."
          },
          "trap": {
            "zh": "只写“根据需求设计架构”太空，必须写出可选择的 pattern/tactic。",
            "en": "“Design according to requirements” is too empty; name patterns/tactics."
          }
        }
      ],
      "diagramIds": [
        "add-roadmap"
      ],
      "memorize": {
        "zh": "ADD 3.0 输入五类 driver：设计目的、主要功能、质量属性、架构关注点、约束。\n七步流程：Review inputs -> Establish iteration goal by selecting drivers -> Choose elements to refine -> Choose design concepts -> Instantiate elements/allocate responsibilities/define interfaces -> Sketch views and record decisions -> Analyze current design and review goal achievement。\nStep 7 分析后若没有达成目标，回到 Step 2 重新选择 driver 迭代；旧系统可从既有系统或上一轮迭代进入。",
        "en": "ADD 3.0 inputs: design purpose, primary functionality, quality attributes, architectural concerns, and constraints.\nSeven steps: review inputs; establish iteration goal by selecting drivers; choose elements to refine; choose design concepts; instantiate elements, allocate responsibilities, and define interfaces; sketch views and record decisions; analyze the design and review goal achievement.\nIf Step 7 shows the goal is not achieved, iterate back to Step 2; brownfield work can start from an existing system or a previous iteration."
      },
      "examTemplate": {
        "zh": "画 ADD 图时先画顶部五个红色 driver，再画中间七个步骤，最后画底部 refined software architecture design；把 Step 7 到 Step 2 的迭代箭头和左侧 brownfield 输入虚线补全。",
        "en": "When drawing ADD, place the five red drivers at the top, the seven process steps in the middle, and the refined architecture at the bottom. Include the Step 7 -> Step 2 iteration arrow and the left brownfield artifact-flow arrow."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "ADD 3.0 每一步产出什么",
            "en": "What each ADD 3.0 step produces"
          },
          "summary": {
            "zh": "ADD 按七步标题和迭代推进逻辑一起背：输入驱动每一轮目标，目标决定 refinement element 与 design concept，最后记录决策并分析是否达到目标。",
            "en": "Do not only memorize the seven titles; know how the iteration advances design."
          },
          "explain": {
            "zh": "ADD 先 Review inputs，确认设计目的、主要功能、质量属性、架构关注点和约束。然后 Establish iteration goal，从 driver 中挑本轮目标。第三步选择要细化的系统元素，可能是整个系统、一个子系统或一个已有组件。第四步选择设计概念，例如风格、模式、战术或技术机制。第五步实例化架构元素、分配职责、定义接口。第六步画视图并记录设计决策。第七步分析当前设计是否达到目标；没有达到就回到 Step 2 继续迭代。",
            "en": "ADD first reviews inputs: design purpose, primary functionality, quality attributes, architectural concerns, and constraints. It then establishes an iteration goal by selecting drivers. Step 3 chooses the system element to refine: the whole system, a subsystem, or an existing component. Step 4 chooses design concepts, such as styles, patterns, tactics, or technologies. Step 5 instantiates elements, allocates responsibilities, and defines interfaces. Step 6 sketches views and records decisions. Step 7 analyzes whether the design meets the goal; if not, iterate back to Step 2."
          },
          "memorize": {
            "zh": "五类 driver + 七步 + Step 7 回 Step 2 迭代。",
            "en": "Five driver types + seven steps + Step 7 iterates back to Step 2."
          },
          "answer": {
            "zh": "简答题按“输入 -> 七步 -> 产物 -> 迭代”写；画图题按重绘 ADD 图画顶部 drivers、中间步骤、底部 refined architecture 和两条回路。",
            "en": "For short answers, use “inputs -> seven steps -> outputs -> iteration”; for drawing, reproduce top drivers, middle steps, bottom refined architecture, and the feedback/artifact loops."
          },
          "boundary": {
            "zh": "以用户提供 ground truth 和重绘 ADD 图为最高基准。",
            "en": "The user-provided ground truth and redrawn ADD diagram are the highest reference."
          }
        },
        {
          "title": {
            "zh": "ADD 和文档化/视图的关系",
            "en": "ADD, documentation, and views"
          },
          "summary": {
            "zh": "ADD 不是只做脑内设计，Step 6 要把设计落成可沟通文档。",
            "en": "ADD is not only mental design; Step 6 records communicable documents."
          },
          "explain": {
            "zh": "Step 6 的“sketch views and record design decisions”对应架构文档化。视图用来给不同 stakeholder 看：开发看模块分解，运维看部署，性能/并发看运行时组件和连接器。设计决定要记录 rationale，不然别人只能看到图，看不到为什么这么选。",
            "en": "Step 6 maps to architecture documentation. Views communicate with stakeholders: developers use module decomposition, operators use deployment, performance/concurrency uses runtime components and connectors. Design decisions need rationale; otherwise people see the diagram but not why choices were made."
          },
          "memorize": {
            "zh": "画视图 + 记设计决策 + 记 rationale。",
            "en": "Sketch views + record design decisions + record rationale."
          },
          "answer": {
            "zh": "如果题目问 ADD 产物，写：一组候选/选定视图、元素职责、接口、设计决策、设计理由和待分析风险。",
            "en": "If asked about ADD outputs, write: selected/candidate views, element responsibilities, interfaces, design decisions, rationale, and risks to analyze."
          },
          "boundary": {
            "zh": "复习课把 ADD 流程和文档化列为高优先级，但大规模 ADD case 不是设计大题主来源。",
            "en": "The review class keeps ADD process and documentation high priority, but a large ADD case is not expected as the main design question."
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
          "zh": "通信：Circuit Breaker、服务发现、API Gateway，处理局部故障和外部访问。",
          "en": "Communication: Circuit Breaker, service discovery, API Gateway; handle partial failure and external access."
        },
        {
          "zh": "部署：容器、服务部署平台、serverless，解决隔离、扩展、成本与异构技术。",
          "en": "Deployment: containers, service deployment platform, serverless; handle isolation, scaling, cost, and technology heterogeneity."
        },
        {
          "zh": "可观测性：日志聚合、审计日志、指标、分布式追踪、异常跟踪、健康检查 API。",
          "en": "Observability: log aggregation, audit logging, metrics, distributed tracing, exception tracking, health check API."
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
        "Li Shanshan review-class slides",
        "Lecture 6-7 Microservices slide OCR"
      ],
      "group": "modern",
      "sourceConfidence": "完整录音李杉杉段 + Lecture 6-7 OCR + 复习课 slides",
      "examWeight": "今年高阶重点",
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
            "zh": "结构图画完后补一句 tradeoff：局部自治提高可修改性和交付速度，但系统级调试和一致性更难。",
            "en": "After the diagram, add the tradeoff: local autonomy improves modifiability/delivery, but debugging and consistency are harder."
          },
          "trap": {
            "zh": "只写优点会显得像宣传稿。考试更看重你能说清设计取舍。",
            "en": "Only listing benefits sounds like marketing; exams reward tradeoff reasoning."
          }
        }
      ],
      "diagramIds": [
        "microservice-style-comparison",
        "review-microservice-decomposition"
      ],
      "memorize": {
        "zh": "微服务核心：围绕业务能力或子域拆分，小服务、独立部署、独立团队、轻量通信、服务自有数据、自动化基础设施。\n与 SOA 对比：SOA 更偏企业集成和集中治理，服务粒度常更大，可能依赖 ESB；微服务更偏自治团队、持续交付和去中心化治理。\n设计题要写服务边界、数据归属、接口、事件协作、容错、可观测性和部署治理。",
        "en": "Microservice core: decompose around business capabilities or subdomains, use small services, independent deployment, independent teams, lightweight communication, service-owned data, and automated infrastructure.\nCompared with SOA: SOA is often enterprise-integration and centralized-governance oriented, with larger services and possibly ESB; microservices emphasize autonomous teams, continuous delivery, and decentralized governance.\nFor design questions, cover service boundaries, data ownership, APIs, event collaboration, fault tolerance, observability, and deployment governance."
      },
      "examTemplate": {
        "zh": "遇到外卖/电商设计题，按“业务能力拆服务 -> 每个服务管自己的数据 -> 同步接口 + 异步事件 -> Saga/补偿处理跨服务一致性 -> API Gateway、熔断、监控、日志追踪”组织答案。",
        "en": "For food-delivery/e-commerce design prompts, organize the answer as “split services by business capability -> each service owns its data -> synchronous APIs plus asynchronous events -> Saga/compensation for cross-service consistency -> API Gateway, circuit breaker, monitoring, logging, tracing”."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "微服务特性要背到什么粒度",
            "en": "How detailed microservice traits should be"
          },
          "summary": {
            "zh": "复习课说不考定义，考特性、对比和模式。",
            "en": "The review class says definition is not the target; traits, comparison, and patterns are."
          },
          "explain": {
            "zh": "微服务不是“很多小服务”这么简单。它通常围绕业务能力或子域拆分，每个服务有清晰职责和数据归属，可以独立开发、测试、部署和扩缩容。团队按服务或业务能力自治，通信多用轻量 API 或消息，基础设施依赖自动化部署、监控、日志、追踪、服务发现、配置管理、熔断和限流。它换来局部演进和持续交付，也带来分布式一致性、网络故障、观测和运维复杂度。",
            "en": "Microservices are not merely “many small services”. They are usually decomposed around business capabilities or subdomains. Each service has clear responsibility and data ownership and can be developed, tested, deployed, and scaled independently. Teams are autonomous around services/capabilities. Communication uses lightweight APIs or messaging. Infrastructure relies on automated deployment, monitoring, logging, tracing, discovery, configuration, circuit breakers, and rate limiting. Benefits are local evolution and continuous delivery; costs are distributed consistency, network failure, observability, and operational complexity."
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
            "zh": "Lecture 6-7 slides 和完整录音均支持微服务特性/对比为高优先级。",
            "en": "Lecture 6-7 slides and complete recording support microservice traits/comparison as high priority."
          }
        },
        {
          "title": {
            "zh": "微服务设计题怎么展开",
            "en": "How to answer microservice design questions"
          },
          "summary": {
            "zh": "外卖/电商类题要写服务、数据、接口和质量取舍。",
            "en": "Food-delivery/e-commerce prompts need services, data, APIs, and quality tradeoffs."
          },
          "explain": {
            "zh": "先从业务能力或 DDD 子域找服务，例如用户、商家/菜单、订单、支付、配送、通知、结算。每个服务拥有自己的数据，避免共享数据库。用户请求通过 API Gateway 进入，服务间用同步 API 处理查询或短事务，用异步事件处理状态传播。跨服务一致性不能写成单体事务，可以写 Saga、补偿、最终一致性。最后补可用性和可观测性：熔断、重试、超时、日志、指标、链路追踪。",
            "en": "Start from business capabilities or DDD subdomains: user, restaurant/menu, order, payment, delivery, notification, settlement. Each service owns its data; avoid shared databases. User requests enter through an API Gateway. Services use synchronous APIs for queries/short transactions and asynchronous events for state propagation. Cross-service consistency is not a monolithic transaction; use Saga, compensation, and eventual consistency. Add availability and observability: circuit breaker, retry, timeout, logs, metrics, tracing."
          },
          "memorize": {
            "zh": "服务边界、数据归属、API/事件、一致性、网关、容错、监控追踪。",
            "en": "Service boundary, data ownership, APIs/events, consistency, gateway, fault tolerance, monitoring/tracing."
          },
          "answer": {
            "zh": "如果要求画图：画客户端/API Gateway，后面列服务框，每个服务下面画独立数据库，用事件总线连接订单、支付、配送。",
            "en": "If drawing: draw client/API Gateway, service boxes behind it, one database per service, and an event bus connecting order/payment/delivery."
          },
          "boundary": {
            "zh": "Saga/事件协作是合理示例，不是题干唯一标准答案；要说明取舍。",
            "en": "Saga/event collaboration is an illustrative solution, not the only standard answer; state tradeoffs."
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
        "Li Shanshan review-class slides",
        "Lecture 8-9 DDD slide OCR"
      ],
      "group": "modern",
      "sourceConfidence": "完整录音李杉杉段 + Lecture 8-9 OCR + 2025 DDD 学长博客辅助",
      "examWeight": "设计分析题高概率",
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
            "zh": "以订单系统举例：订单、支付、库存是不同 bounded contexts，通过事件和契约协同。",
            "en": "Example: ordering, payment, and inventory are bounded contexts cooperating through events/contracts."
          },
          "trap": {
            "zh": "不要把 bounded context 等同微服务或数据库表。它首先是模型边界。",
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
            "zh": "Entity、Value Object、Aggregate、Domain Service、Repository、Domain Event。",
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
            "zh": "答题不要一上来列 Entity/Value Object；先说明模型边界，再落到聚合和事件。",
            "en": "Do not start by listing Entity/Value Object; first explain model boundaries, then aggregates and events."
          },
          "boundary": {
            "zh": "Lecture 8-9 和复习课强调 DDD 与微服务设计结合。",
            "en": "Lecture 8-9 and the review class emphasize DDD with microservice design."
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
            "zh": "实体有身份，值对象靠属性相等，领域服务表达不属于单个对象的领域行为，仓储封装聚合持久化，领域事件表达领域中已经发生的重要事实。聚合是保证一致性的边界，不是把所有对象塞一起。一个 Order 聚合可以维护订单项、总价、状态流转等不变量；跨订单、支付、配送的一致性通常用领域事件和最终一致性，而不是一个巨大聚合。",
            "en": "Entities have identity; value objects are equal by attributes; domain services express domain behavior that belongs to no single object; repositories persist aggregates; domain events express important facts that have happened. An aggregate is a consistency boundary, not a pile of objects. An Order aggregate may maintain items, total, and state transitions. Consistency across order/payment/delivery usually uses domain events and eventual consistency, not one giant aggregate."
          },
          "memorize": {
            "zh": "Entity、Value Object、Aggregate、Domain Service、Repository、Domain Event；聚合=一致性边界。",
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
        "Li Shanshan review-class slides",
        "Lecture 10-11 Enterprise Architecture slide OCR"
      ],
      "group": "modern",
      "sourceConfidence": "完整录音李杉杉段 + Lecture 10-11 OCR",
      "examWeight": "概念理解题",
      "deepDive": [
        {
          "title": {
            "zh": "是什么与怎么考",
            "en": "Definition and exam form"
          },
          "summary": {
            "zh": "没有往年真题也可能以概念简答出现，重点不是案例细节，而是能把体系说完整。",
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
            "zh": "可以写成表格式四点，每点一句：业务架构定义业务能力和流程，数据架构定义数据对象与标准，应用架构定义系统和服务蓝图，技术架构定义平台和基础设施。",
            "en": "Write four table-like points: Business defines capabilities and processes; Data defines data objects and standards; Application defines systems and service blueprint; Technology defines platforms and infrastructure."
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
            "zh": "TOGAF 偏过程方法，CBM 偏能力分解；两者可以一起服务企业架构落地。",
            "en": "TOGAF is process-oriented; CBM is capability-decomposition-oriented; together they support EA implementation."
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
            "zh": "案例华为/建行了解即可，不要把案例细节当作背诵主线。",
            "en": "Huawei/CCB case details are background; the main line is definition, 4A, TOGAF/ADM, CBM, value, and scenarios."
          }
        }
      ],
      "diagramIds": [
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
            "zh": "答题第一段写定义，第二段解释基本组成部分，第三段解释关系，第四段解释治理原则。",
            "en": "First paragraph definition, second basic components, third relationships, fourth governance principles."
          },
          "boundary": {
            "zh": "依据 Lecture 10-11 企业架构概念页、4A 页、全景图页和李杉杉复习 slide。",
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
            "zh": "TOGAF=过程；CBM=能力颗粒度；五级流程/5W1H/A-B-C-D/聚类=建模落地。",
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
        "zh": "吕骏复习强调：可能考每一代架构的结构骨架与演进理由。不要死背模式名，要理解旧矛盾如何推出现代架构。",
        "en": "Lu Jun emphasized that each architecture generation may be tested by skeleton and evolution rationale: explain how old tensions lead to newer architectures."
      },
      "answerFrame": {
        "zh": "按“时代矛盾 -> 架构骨架 -> 解决的痛点 -> 新问题/取舍 -> 适用场景”作答。画图时先画最简单骨架。",
        "en": "Answer by: historical tension -> structural skeleton -> pain point solved -> new problems/tradeoffs -> suitable context. When drawing, start with the simplest skeleton."
      },
      "bullets": [
        {
          "zh": "主线：算力稀缺 -> 多用户共享 -> 富交互 -> 系统分层 -> 企业协同 -> 团队自治发布 -> 平台化韧性。",
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
          "zh": "博客补充分类型记忆：Module patterns（Layered）、C&C patterns（Broker/MVC/Pipe-filter/Client-server/P2P/SOA/Pub-sub/Shared-data）、Allocation patterns（Map-reduce/Multi-tier）。",
          "en": "Blog classification: Module patterns (Layered), C&C patterns (Broker/MVC/Pipe-filter/Client-server/P2P/SOA/Pub-sub/Shared-data), Allocation patterns (Map-reduce/Multi-tier)."
        },
        {
          "zh": "模式题不要写成设计模式题：这里问的是系统级组织方式、连接件、部署/分配和质量属性取舍。",
          "en": "Do not answer architecture-pattern questions as GoF design-pattern questions: focus on system-level organization, connectors, allocation/deployment, and quality tradeoffs."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Lu Jun review-class slides",
        "Lecture 3 OCR"
      ],
      "group": "patterns",
      "sourceConfidence": "完整录音吕骏段 + Lecture 3 OCR",
      "examWeight": "今年理解题",
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
            "zh": "Style 是结构家族，pattern 是命名复用方案，tactic 是针对质量属性的小设计动作。",
            "en": "Style is a family of structures, pattern is a named reusable solution, tactic is a small quality-driven design move."
          },
          "answer": {
            "zh": "答 pattern 按“上下文 -> 结构 -> 优点 -> 局限”写；答 tactic 按“质量属性 -> 机制 -> 取舍”写。",
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
            "zh": "吕骏复习强调按时代矛盾理解架构模式。",
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
        "zh": "模式、风格、策略/战术的关系：质量目标驱动策略/战术，战术组合形成模式，模式在视图里体现为结构。\n今年 Lecture 3 复习主线更偏架构演进与模式理解；GoF 设计模式不是本课程架构模式主线。\n回答模式题要写上下文、解决的问题、结构、收益、代价，不能只背名字。",
        "en": "Relationship: quality goals drive tactics; tactics combine into patterns; patterns appear as structures in views.\nThe 2026 Lecture 3 review line emphasizes architecture evolution and architectural-pattern understanding; GoF design patterns are not the main line.\nFor pattern questions, answer context, problem, structure, benefits, and tradeoffs, not just the name."
      },
      "examTemplate": {
        "zh": "模式题统一按“适用上下文 -> 结构元素和连接器 -> 解决什么质量/演化问题 -> 好处 -> 代价/局限”答。",
        "en": "Use “context -> structural elements and connectors -> quality/evolution problem solved -> benefits -> costs/limits” for pattern questions."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "style、pattern、tactic 不要混",
            "en": "Do not mix style, pattern, and tactic"
          },
          "summary": {
            "zh": "复习课强调它们的层级关系。",
            "en": "The review class emphasizes their hierarchy."
          },
          "explain": {
            "zh": "质量属性目标会驱动 tactics，例如提高可用性可以检测故障、恢复、冗余；提高性能可以缓存、并发、资源管理。多个 tactics 和结构经验组合成 architectural patterns。Architectural style 是更抽象的结构约束和组织方式，例如 layered、pipe-and-filter、client-server、microservices。答题时不要把 GoF 设计模式当作本课程架构模式主线。",
            "en": "Quality goals drive tactics: availability may use fault detection, recovery, redundancy; performance may use caching, concurrency, resource management. Multiple tactics and structural experience combine into architectural patterns. Architectural style is a more abstract structural constraint and organisation, such as layered, pipe-and-filter, client-server, microservices. Keep GoF design patterns outside the main architecture-pattern answer line."
          },
          "memorize": {
            "zh": "Tactic=质量属性手段；Pattern=结构化解法；Style=更抽象的组织约束。",
            "en": "Tactic = quality technique; pattern = structured solution; style = abstract organisation constraint."
          },
          "answer": {
            "zh": "模式题按上下文、问题、结构、收益、代价写；不要只列名字。",
            "en": "For pattern questions, answer context, problem, structure, benefits, costs; do not only list names."
          },
          "boundary": {
            "zh": "Lecture 3 今年更偏架构演进/模式理解，设计模式部分不作为主线。",
            "en": "Lecture 3 this year leans toward architecture evolution/pattern understanding; design patterns are not the main line."
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
            "zh": "可以按主线理解：早期集中式计算解决资源稀缺；多用户和交互推动 client-server；复杂业务推动分层和模块化；企业集成推动 SOA；快速交付和自治团队推动微服务；云原生继续把弹性、自动化、可观测性和平台能力放进架构。每次演进都不是新架构无条件更好，而是在质量属性和组织约束下做取舍。",
            "en": "Understand the mainline: centralized computing addressed scarce resources; multi-user interaction pushed client-server; business complexity pushed layering and modularity; enterprise integration pushed SOA; rapid delivery and autonomous teams pushed microservices; cloud-native emphasizes elasticity, automation, observability, and platform capability. Each evolution is not unconditional improvement but a tradeoff under quality and organizational constraints."
          },
          "memorize": {
            "zh": "资源共享 -> 交互 -> 分层模块化 -> 企业集成 -> 自治交付 -> 云原生韧性。",
            "en": "Resource sharing -> interaction -> layering/modularity -> enterprise integration -> autonomous delivery -> cloud-native resilience."
          },
          "answer": {
            "zh": "答演进题时写“旧架构解决什么、暴露什么问题、新架构用什么结构缓解、代价是什么”。",
            "en": "For evolution, write “what the old architecture solved, what problem it exposed, what structure the new architecture uses, and what cost it introduces”."
          },
          "boundary": {
            "zh": "以吕骏复习 Lecture 3 的演进主线为准；具体历史细节不抢 P0 时间。",
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
        "zh": "4+1 views 是张贺复习课明确主线；Views and Beyond 用于补充文档化，不要把一堆 UML 图名当答案。",
        "en": "4+1 views are explicit review-class mainline. Views and Beyond supports documentation; do not answer by listing random UML diagram names."
      },
      "answerFrame": {
        "zh": "4+1：逻辑、过程、物理、开发 + 用例场景。Views and Beyond：先文档化视图，再补充跨视图信息、接口、映射、理由、质量属性。",
        "en": "4+1: logical, process, physical, development + use-case scenarios. Views and Beyond: document views first, then beyond-view information, interfaces, mappings, rationale, and quality attributes."
      },
      "bullets": [
        {
          "zh": "Module viewtype：分解、使用、泛化、分层、数据模型等。",
          "en": "Module viewtype: decomposition, uses, generalization, layered, data model, etc."
        },
        {
          "zh": "Component-and-connector viewtype：运行时组件、连接器、交互。",
          "en": "Component-and-connector viewtype: runtime components, connectors, interactions."
        },
        {
          "zh": "Allocation viewtype：软件到环境、硬件、团队、文件系统等的映射。",
          "en": "Allocation viewtype: mapping software to environment, hardware, teams, filesystems, etc."
        }
      ],
      "sources": [
        "Complete review recording transcript",
        "Complete review minutes",
        "Review-class slides OCR"
      ],
      "group": "process",
      "sourceConfidence": "完整录音 + 复习课整理稿 + 对应 review slides/OCR",
      "examWeight": "历史高频，今年降权",
      "deepDive": [
        {
          "title": {
            "zh": "多视图动机",
            "en": "Why multiple views"
          },
          "summary": {
            "zh": "不同 stakeholder 需要不同视角。",
            "en": "Different stakeholders need different perspectives."
          },
          "must": {
            "zh": "Module 看实现单元，C&C 看运行时交互，Allocation 看软件到硬件/团队/文件的映射。",
            "en": "Module concerns implementation units, C&C runtime interaction, Allocation software-to-environment mapping."
          },
          "answer": {
            "zh": "先说为什么不能只用一个图，再列 3 类 viewtype 或 4+1 并说明目的。",
            "en": "Explain why one diagram is insufficient, then list three viewtypes or 4+1 and their purposes."
          },
          "trap": {
            "zh": "不要把“视图”写成随机 UML 图名。视图要对应 stakeholder concern。",
            "en": "Do not list random UML diagrams; views must match stakeholder concerns."
          }
        },
        {
          "title": {
            "zh": "文档包",
            "en": "Documentation package"
          },
          "summary": {
            "zh": "Views and Beyond 要写 view 内和 view 外。",
            "en": "Views and Beyond includes view and beyond-view information."
          },
          "must": {
            "zh": "每个 view 要有主表示、元素目录、关系、接口、行为、上下文、理由；beyond-view 有路线图、概览、术语、约束、映射。",
            "en": "Each view needs primary presentation, element catalog, relations, interfaces, behavior, context, rationale; beyond-view includes roadmap, overview, glossary, constraints, mappings."
          },
          "answer": {
            "zh": "架构文档题按“overview -> views -> beyond-view -> mappings/rationale”答。",
            "en": "Answer architecture documentation as overview, views, beyond-view, mappings/rationale."
          },
          "trap": {
            "zh": "只写“画类图、部署图、时序图”不够。要说每个视图服务谁、解决什么 concern。",
            "en": "Class/deployment/sequence diagrams alone are insufficient; state audience and concern."
          }
        }
      ],
      "diagramIds": [
        "review-4-plus-1-views",
        "architecture-design-process"
      ],
      "memorize": {
        "zh": "Views and Beyond 三类视图：Module、Component-and-Connector、Allocation。\n4+1 视图：Logical、Process、Physical、Development，加 Use Cases/Scenarios。\n视图不是越多越好；根据 stakeholder concerns 选择并记录视图、元素、关系、约束和 rationale。",
        "en": "Views and Beyond has three view types: Module, Component-and-Connector, and Allocation.\n4+1 views: Logical, Process, Physical, Development, plus Use Cases/Scenarios.\nMore views are not always better; select views by stakeholder concerns and record elements, relations, constraints, and rationale."
      },
      "examTemplate": {
        "zh": "视图题先说“同一架构面向不同关切要用不同视图”，再列三类视图或 4+1，最后给例子：开发人员看模块，运维人员看部署，性能/并发看进程或 C&C。",
        "en": "For view questions, first state that different stakeholder concerns need different views, then list the three view types or 4+1, and give examples: developers use module views, operators use deployment views, performance/concurrency uses process or C&C views."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "为什么需要多个视图",
            "en": "Why multiple views are needed"
          },
          "summary": {
            "zh": "视图是面向 stakeholder concern 的沟通工具。",
            "en": "Views communicate with stakeholder concerns."
          },
          "explain": {
            "zh": "同一个系统的架构不能靠一张图表达完。开发人员关心模块分解和依赖，运维人员关心部署节点和网络，性能分析关心运行时组件和连接器，项目管理关心工作分配和责任边界。因此架构文档要根据 stakeholder concerns 选择视图，而不是图越多越好。",
            "en": "One diagram cannot express the whole architecture. Developers care about module decomposition and dependencies; operators care about deployment nodes and networks; performance analysis cares about runtime components and connectors; project management cares about work assignment and responsibility. Documentation selects views by stakeholder concerns, not by drawing more diagrams."
          },
          "memorize": {
            "zh": "视图=从某类关切看架构；同一架构有多种视图。",
            "en": "View = architecture seen through one concern; one architecture has multiple views."
          },
          "answer": {
            "zh": "答题先说 stakeholder concerns，再列视图类型，最后给每类视图适合谁看。",
            "en": "Start with stakeholder concerns, list view types, then state who each view serves."
          },
          "boundary": {
            "zh": "完整录音与 slides 点名 architecture views/4+1。",
            "en": "The complete recording and slides name architecture views/4+1."
          }
        },
        {
          "title": {
            "zh": "Views and Beyond 与 4+1 怎么背",
            "en": "How to memorize Views and Beyond and 4+1"
          },
          "summary": {
            "zh": "这是文档化题的稳定骨架。",
            "en": "This is the stable skeleton for documentation questions."
          },
          "explain": {
            "zh": "Views and Beyond 常用三类：Module view 看静态代码/模块分解和依赖；Component-and-Connector view 看运行时组件、连接器、数据流和交互；Allocation view 看软件元素到环境的映射，例如部署到节点、分配给团队、映射到文件/目录。4+1 视图是 Logical、Process、Physical、Development 加 Use Cases/Scenarios，用场景把其他视图串起来。",
            "en": "Views and Beyond has three common types: Module view shows static code/module decomposition and dependencies; Component-and-Connector view shows runtime components, connectors, data flow, and interactions; Allocation view maps software elements to environments, such as deployment to nodes, assignment to teams, or files/directories. 4+1 views are Logical, Process, Physical, Development plus Use Cases/Scenarios, where scenarios tie the other views together."
          },
          "memorize": {
            "zh": "Module、C&C、Allocation；Logical、Process、Physical、Development + Use Cases。",
            "en": "Module, C&C, Allocation; Logical, Process, Physical, Development + Use Cases."
          },
          "answer": {
            "zh": "如果题问文档包，写视图、元素、关系、接口、行为、约束、设计决策和 rationale。",
            "en": "If asked about a documentation package, include views, elements, relations, interfaces, behavior, constraints, design decisions, and rationale."
          },
          "boundary": {
            "zh": "视图例子按课程常见分类保守回答，不要自创过多分类。",
            "en": "Use conservative course categories; do not invent too many classifications."
          }
        }
      ]
    },
    {
      "id": "quality-tactics",
      "group": "core",
      "priority": "P0",
      "examWeight": "质量属性扩展题",
      "sourceConfidence": "完整录音张贺段 + Lecture 2-4 OCR",
      "title": {
        "zh": "质量属性战术",
        "en": "Quality Attribute Tactics"
      },
      "takeaway": {
        "zh": "tactic 是把质量属性落到架构设计决定的最小工具，答题要从“属性 -> 场景 -> tactic -> tradeoff”走。",
        "en": "A tactic is the smallest tool that turns a quality attribute into architectural decisions; answer through “attribute -> scenario -> tactic -> tradeoff”."
      },
      "answerFrame": {
        "zh": "先写六要素场景，再选 tactic：可用性用故障检测/恢复/预防，性能用资源需求控制/资源管理，安全用认证授权/检测/恢复，可测试性用控制与观察。",
        "en": "Start with the six-part scenario, then choose tactics: availability uses fault detection/recovery/prevention; performance uses resource demand/control and resource management; security uses authenticate/authorize/detect/recover; testability uses control and observe."
      },
      "bullets": [
        {
          "zh": "Availability：ping/echo、heartbeat、exception detection、rollback、active/passive redundancy。",
          "en": "Availability: ping/echo, heartbeat, exception detection, rollback, active/passive redundancy."
        },
        {
          "zh": "Performance：limit event response、prioritize events、resource pooling、concurrency、caching、load balancing。",
          "en": "Performance: limit event response, prioritize events, resource pooling, concurrency, caching, load balancing."
        },
        {
          "zh": "Modifiability：encapsulate、use an intermediary、restrict dependencies、defer binding time。",
          "en": "Modifiability: encapsulate, use an intermediary, restrict dependencies, defer binding time."
        },
        {
          "zh": "Security：authenticate users、authorize users、limit access、detect attacks、recover。",
          "en": "Security: authenticate users, authorize users, limit access, detect attacks, recover."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Lecture 2-4 Quality Attributes OCR"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "战术速记",
            "en": "Tactic memory"
          },
          "summary": {
            "zh": "tactic 是质量属性到设计的桥。",
            "en": "A tactic bridges quality attributes and design."
          },
          "must": {
            "zh": "可用性：detect/recover/prevent；性能：resource demand/management/arbitration；安全：抵抗、检测、恢复；可测试：控制和观察。",
            "en": "Availability: detect/recover/prevent; performance: resource demand/management/arbitration; security: resist/detect/recover; testability: control and observe."
          },
          "answer": {
            "zh": "看到属性题，先写场景，再选 tactic，并说明它改变了哪一段响应。",
            "en": "For an attribute question, write scenario, choose tactic, and say which response it changes."
          },
          "trap": {
            "zh": "不要把 tactic 当完整 pattern。多个 tactic 组合后才可能形成 broker、microservices、layered 等模式。",
            "en": "Do not treat tactic as a complete pattern; patterns combine multiple tactics."
          }
        },
        {
          "title": {
            "zh": "取舍表达",
            "en": "Tradeoff wording"
          },
          "summary": {
            "zh": "战术题要用 tradeoff 把答案收住。",
            "en": "Tactic answers need tradeoff closure."
          },
          "must": {
            "zh": "缓存提升性能但带来一致性；冗余提升可用性但增加成本；认证提升安全但影响易用性。",
            "en": "Caching improves performance but complicates consistency; redundancy improves availability but costs more; authentication improves security but may hurt usability."
          },
          "answer": {
            "zh": "最后一句写“因此该 tactic 适用于……但需要……配套”。",
            "en": "End with “therefore this tactic suits ..., but needs ... support”."
          },
          "trap": {
            "zh": "只列 tactic 名字不得分高，要解释用途和代价。",
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
            "zh": "战术是实现质量属性的设计手段。它不是孤立词表，而要服务质量场景。例如可用性场景里服务器无响应，战术可以是 heartbeat 检测、冗余副本、故障转移和恢复；响应从“服务中断”变成“通知操作者并继续操作”，响应度量从不可测变成“无停机时间/30 秒内恢复”。性能场景里高负载导致慢响应，战术可以是缓存、并发、资源池、负载均衡，度量是 95% 请求 2 秒内返回。",
            "en": "A tactic is a design technique for a quality attribute. It is not an isolated word list; it serves a quality scenario. For availability, when a server does not respond, tactics include heartbeat detection, redundancy, failover, and recovery; the response becomes “notify operator and continue operation”, and the measure becomes “no downtime/recover within 30 seconds”. For performance, high load causing slow response can use caching, concurrency, resource pools, and load balancing, with a measure such as 95% requests within 2 seconds."
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
            "zh": "以质量属性场景和 tactics/patterns 关系为准；具体战术例子保守即可。",
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
            "zh": "可用性关注故障下继续服务，可写检测、恢复、冗余。性能关注响应时间、吞吐和资源，可写缓存、并发、负载均衡、资源管理。可修改性关注变化成本，可写模块化、信息隐藏、接口稳定、低耦合。安全关注防止未授权访问和追踪，可写认证、授权、加密、审计、最小权限。所有例子都要回到具体场景和度量。",
            "en": "Availability concerns continued service under failure: detection, recovery, redundancy. Performance concerns latency, throughput, and resources: cache, concurrency, load balancing, resource management. Modifiability concerns change cost: modularity, information hiding, stable interfaces, low coupling. Security concerns unauthorized access and traceability: authentication, authorization, encryption, audit, least privilege. Each example must return to scenario and measure."
          },
          "memorize": {
            "zh": "可用性=故障继续；性能=时间/吞吐/资源；可修改性=低成本变化；安全=授权/保护/追踪。",
            "en": "Availability = continue under failure; performance = time/throughput/resource; modifiability = low-cost change; security = authorization/protection/tracing."
          },
          "answer": {
            "zh": "设计题可以在组件图旁边标注质量战术，例如 Gateway 处限流和认证，服务间熔断，数据库旁缓存或读写分离。",
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
      "examWeight": "复习课点名概念",
      "sourceConfidence": "完整录音 + 复习课整理稿 + 对应 review slides/OCR",
      "title": {
        "zh": "设计决定七分类",
        "en": "Seven Categories of Design Decisions"
      },
      "takeaway": {
        "zh": "架构设计不是只选 pattern，而是系统性做一组设计决定；复习课明确点到七类决定。",
        "en": "Architecture design is not merely choosing a pattern; it is a systematic set of design decisions. The review class explicitly named seven categories."
      },
      "answerFrame": {
        "zh": "按七类展开：责任分配、协调/配置模型、数据模型、资源管理、架构元素映射、绑定时间、技术选择。每类给一个例子即可。",
        "en": "Use seven categories: responsibility allocation, coordination/configuration model, data model, resource management, mapping among architectural elements, binding time, technology choice. Give one example each."
      },
      "bullets": [
        {
          "zh": "责任分配：把功能、质量属性责任分配给元素，例如认证服务负责身份校验。",
          "en": "Responsibility allocation: assign function/quality responsibilities to elements, e.g. an auth service handles identity checks."
        },
        {
          "zh": "协调/配置：定义元素如何交互，选择同步调用、异步事件、broker 或 pub-sub。",
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
        "Review-class slides OCR"
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
            "zh": "每类给一个例子：如把支付职责放入 Payment Service，通信选事件，数据归服务所有，运行时绑定策略。",
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
            "zh": "binding time 常与可修改性/可测试性一起考。",
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
            "zh": "不要单向吹 late binding。考试更喜欢双向 tradeoff。",
            "en": "Do not praise late binding one-sidedly; exams prefer two-way tradeoffs."
          }
        }
      ],
      "diagramIds": [
        "architecture-design-process",
        "add-roadmap"
      ],
      "memorize": {
        "zh": "架构不仅是图，还包括设计决策和 rationale。\n七类设计决定：元素职责、协调模型、数据模型、资源管理、元素映射、绑定时间、技术选择。\n好答案要说明“为什么这么选”，并写出取舍。",
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
            "zh": "复习课明确七类设计决定；这是 P0 口径。",
            "en": "The review class explicitly lists seven decision categories; this is P0."
          }
        },
        {
          "title": {
            "zh": "rationale 为什么要写",
            "en": "Why rationale matters"
          },
          "summary": {
            "zh": "没有 rationale，架构文档只有结果没有推理。",
            "en": "Without rationale, documentation has results but no reasoning."
          },
          "explain": {
            "zh": "架构常常是取舍。选择微服务提高独立部署和团队自治，但引入分布式一致性和运维复杂度；选择共享数据库降低短期开发成本，但削弱服务自治；选择缓存提高性能，但引入一致性和失效问题。rationale 要记录 driver、备选方案、为什么选、放弃了什么、风险是什么。",
            "en": "Architecture is tradeoff. Microservices improve independent deployment and team autonomy but introduce distributed consistency and operational complexity; shared database lowers short-term development cost but weakens service autonomy; cache improves performance but adds consistency/invalidation problems. Rationale records drivers, alternatives, why this choice, what was sacrificed, and risks."
          },
          "memorize": {
            "zh": "rationale=驱动因素 + 备选方案 + 选择理由 + 代价风险。",
            "en": "Rationale = drivers + alternatives + reason + tradeoffs/risks."
          },
          "answer": {
            "zh": "设计题最后补“取舍”通常能提分：独立演进 vs 一致性复杂度，性能 vs 新鲜度，灵活性 vs 治理成本。",
            "en": "Adding tradeoffs often improves design answers: independent evolution vs consistency complexity, performance vs freshness, flexibility vs governance cost."
          },
          "boundary": {
            "zh": "和 ADD Step 6、架构文档化、设计决定七类一致。",
            "en": "Consistent with ADD Step 6, documentation, and the seven decision categories."
          }
        }
      ]
    },
    {
      "id": "evaluation-atam",
      "group": "historical",
      "priority": "P2",
      "examWeight": "往年高频，今年复习课降权",
      "sourceConfidence": "历史题 + 质量属性/Utility tree 课程资料；今年未抬到主线",
      "title": {
        "zh": "ATAM 架构评估",
        "en": "ATAM Architecture Evaluation"
      },
      "takeaway": {
        "zh": "ATAM 今年未被复习课强调，但往年反复考输出、参与者和风险/敏感点/权衡点，建议作为历史高频保留。",
        "en": "ATAM was not emphasized this year, but past papers repeatedly ask outputs, stakeholders, and risks/sensitivity/tradeoff points; keep it as historical high-frequency material."
      },
      "answerFrame": {
        "zh": "按阶段背输出，再用三概念收尾：risk 是潜在问题，sensitivity point 影响单一质量属性，tradeoff point 同时影响多个质量属性。",
        "en": "Memorize outputs by phase, then close with three concepts: risk is a potential problem, sensitivity point affects one quality attribute, tradeoff point affects multiple attributes."
      },
      "bullets": [
        {
          "zh": "Phase 1 核心输出：业务驱动、架构方法、效用树、场景、风险/非风险、敏感点/权衡点。",
          "en": "Phase 1 outputs: business drivers, architectural approaches, utility tree, scenarios, risks/non-risks, sensitivity/tradeoff points."
        },
        {
          "zh": "Phase 2 加入更广泛 stakeholder 生成和排序场景，并归纳风险主题。",
          "en": "Phase 2 involves broader stakeholders to generate/prioritize scenarios and summarize risk themes."
        },
        {
          "zh": "Phase 3 输出最终报告，包含风险主题、敏感点、权衡点和推荐行动。",
          "en": "Phase 3 produces the final report with risk themes, sensitivity points, tradeoff points, and recommended actions."
        }
      ],
      "sources": [
        "Historical past papers",
        "Lecture 2-4 Quality Attributes OCR"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "阶段输出",
            "en": "Phase outputs"
          },
          "summary": {
            "zh": "ATAM 历史高频，按阶段表背。",
            "en": "ATAM is historically frequent; memorize phase-output table."
          },
          "must": {
            "zh": "Phase 0 计划；Phase 1 业务目标、架构、效用树、风险/非风险、敏感点/权衡点；Phase 2 stakeholder 场景和风险主题；Phase 3 报告。",
            "en": "Phase 0 plan; Phase 1 business drivers, architecture, utility tree, risks/non-risks, sensitivity/tradeoff points; Phase 2 stakeholder scenarios/risk themes; Phase 3 report."
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
            "zh": "risk / sensitivity / tradeoff 要有例子。",
            "en": "Risk, sensitivity, and tradeoff need examples."
          },
          "must": {
            "zh": "risk 是潜在负面结果；sensitivity point 是某参数影响一个质量；tradeoff point 是一个决定影响多个质量且方向可能冲突。",
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
        "utility-tree"
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
            "zh": "今年不是最高优先级，但旧题出现时要能保底。",
            "en": "Not highest priority this year, but useful for old-paper backup."
          },
          "explain": {
            "zh": "ATAM 用来评价一个架构是否能满足重要质量属性目标。它不是写新架构，而是围绕业务目标、质量属性场景和架构方案找风险。核心产物包括效用树、质量属性场景、风险、非风险、敏感点、权衡点。敏感点是某个设计参数变化会显著影响质量属性；权衡点是一个设计决定同时影响多个质量属性，且可能一好一坏。",
            "en": "ATAM evaluates whether an architecture can satisfy important quality goals. It is not designing a new architecture; it identifies risks around business goals, quality scenarios, and architectural approaches. Key outputs include utility tree, quality scenarios, risks, non-risks, sensitivity points, and tradeoff points. A sensitivity point is a design parameter whose change significantly affects a quality; a tradeoff point is a decision affecting multiple qualities, possibly improving one while hurting another."
          },
          "memorize": {
            "zh": "效用树、场景、风险、敏感点、权衡点。",
            "en": "Utility tree, scenarios, risks, sensitivity points, tradeoff points."
          },
          "answer": {
            "zh": "答题流程：收集 business goals -> 生成质量场景/效用树 -> 描述架构方案 -> 分析风险/敏感点/权衡点 -> 给评价结论。",
            "en": "Process: collect business goals -> generate scenarios/utility tree -> describe architectural approaches -> analyze risks/sensitivity/tradeoffs -> conclude."
          },
          "boundary": {
            "zh": "主要来自 ATAM/历史题，完整录音未抬到 P0。",
            "en": "Mainly ATAM/historical-paper grounded; complete recording does not raise it to P0."
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
            "en": "Examples are explanatory; use the prompt architecture in the exam."
          }
        }
      ]
    },
    {
      "id": "reuse-variability",
      "group": "historical",
      "priority": "P2",
      "examWeight": "往年题补充",
      "sourceConfidence": "历史题保底；完整录音未作为今年重点",
      "title": {
        "zh": "复用、SPL、MDA 与可变性",
        "en": "Reuse, SPL, MDA, and Variability"
      },
      "takeaway": {
        "zh": "这部分不是今年复习课主线，但往年题出现过，适合作为“遇到就能写”的补充模块。",
        "en": "This is not the current review-class mainline, but it appears in past papers; keep it as a backup module."
      },
      "answerFrame": {
        "zh": "SPL 复用核心资产和产品线架构，MDA 复用平台无关模型和转换，SOA 复用服务契约与组合；共同点是用抽象和变化机制管理多个产品/平台/场景。",
        "en": "SPL reuses core assets and product-line architecture; MDA reuses platform-independent models and transformations; SOA reuses service contracts/compositions; all use abstraction and variation mechanisms across products/platforms/scenarios."
      },
      "bullets": [
        {
          "zh": "SPL 的关键是 commonality/variability，不是一个产品的版本发布。",
          "en": "SPL centers on commonality/variability, not releases of one product."
        },
        {
          "zh": "Variation point 是允许变化的位置，binding time 决定变化何时被绑定。",
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
            "zh": "core assets、product line architecture、commonality、variability、variation points、feature model。",
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
            "zh": "SPL/MDA/SOA 复用对象不同。",
            "en": "SPL, MDA, and SOA reuse different things."
          },
          "must": {
            "zh": "SPL 复用核心资产，MDA 复用模型和转换，SOA 复用服务契约和组合。",
            "en": "SPL reuses core assets; MDA reuses models/transformations; SOA reuses service contracts/compositions."
          },
          "answer": {
            "zh": "比较题按 reuse object / mechanism / suitable context 三列写。",
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
        "zh": "复用题今年优先级低于主线，但旧题会问：SPL 通过共性/可变性和核心资产复用一族产品。\n可变性三件事：变更点、变更机制、绑定时间。\n不要把所有复用都写成复制代码；架构级复用关注资产、平台、生成、配置和产品线。",
        "en": "Reuse is lower priority than the mainline this year, but old papers ask SPL: reuse core assets across a product family through commonality and variability.\nVariability has three parts: variation point, variation mechanism, and binding time.\nDo not reduce reuse to copying code; architectural reuse concerns assets, platforms, generation, configuration, and product lines."
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
            "zh": "这部分今年降权，但旧题能考概念。",
            "en": "Lower priority this year, but old papers may ask the concept."
          },
          "explain": {
            "zh": "软件产品线不是复制粘贴代码，而是围绕一族相似产品识别共性和可变性。领域工程构建核心资产，包括架构、组件、需求、测试、配置、生成脚本和文档；应用工程根据具体产品需求选择和绑定可变点，派生产品。收益是规模化复用和一致性，成本是前期投入、治理和可变性管理复杂。",
            "en": "A software product line is not copy-paste reuse; it identifies commonality and variability across a family of similar products. Domain engineering builds core assets: architecture, components, requirements, tests, configuration, generators, and documents. Application engineering selects and binds variation points to derive a product. Benefits are reuse at scale and consistency; costs are upfront investment, governance, and variability-management complexity."
          },
          "memorize": {
            "zh": "领域工程建核心资产；应用工程派生产品；管理共性/可变性。",
            "en": "Domain engineering builds core assets; application engineering derives products; manage commonality/variability."
          },
          "answer": {
            "zh": "答 SPL 时按“产品族 -> 共性/可变性 -> 核心资产 -> 派生产品 -> 收益/成本”写。",
            "en": "For SPL, write “product family -> commonality/variability -> core assets -> product derivation -> benefits/costs”."
          },
          "boundary": {
            "zh": "完整录音未列为今年主线；作为 P2 保底。",
            "en": "The complete recording does not make it a 2026 mainline; keep as P2 backup."
          }
        },
        {
          "title": {
            "zh": "可变性三件事",
            "en": "The three variability questions"
          },
          "summary": {
            "zh": "旧题常问 variation point / mechanism / binding time。",
            "en": "Old papers often ask variation point, mechanism, and binding time."
          },
          "explain": {
            "zh": "可变点是哪里可以变，例如支付方式、推荐算法、部署区域；可变机制是怎么实现变化，例如配置、插件、策略、继承、生成；绑定时间是什么时候确定变化，例如编译期、部署期、启动期、运行期。绑定越晚越灵活，但运行复杂度、测试难度和治理成本通常越高。",
            "en": "A variation point is where variation occurs, such as payment method, recommendation algorithm, or deployment region. A variation mechanism is how it varies, such as configuration, plugin, strategy, inheritance, or generation. Binding time is when the variation is fixed: compile, deploy, startup, or runtime. Later binding is more flexible but usually increases runtime complexity, testing difficulty, and governance cost."
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
            "zh": "和设计决定七类里的 binding time 有交叉，但今年主线较弱。",
            "en": "Overlaps with binding time in design decisions, but weaker in this year's mainline."
          }
        }
      ]
    },
    {
      "id": "design-playbook",
      "group": "exam",
      "priority": "P0",
      "examWeight": "设计分析题模板",
      "sourceConfidence": "完整录音 + 微服务/DDD 设计题主线 + 往年题练习",
      "title": {
        "zh": "设计分析题答题模板",
        "en": "Design-Analysis Answer Playbooks"
      },
      "takeaway": {
        "zh": "设计题要让老师看到你在用架构方法。2026 主模板应围绕 ASR/ADD、微服务、DDD，而不是旧三层/缓存题。",
        "en": "Design answers should show architectural method. The 2026 main template should center ASR/ADD, microservices, and DDD, not old three-tier/cache questions."
      },
      "answerFrame": {
        "zh": "通用结构：识别 stakeholders/ASRs/constraints -> 用 ADD 或 DDD/微服务推导边界 -> 画核心结构 -> 分配职责/API/数据归属 -> 补质量属性 tradeoff 与验证。",
        "en": "General structure: identify stakeholders/ASRs/constraints -> use ADD or DDD/microservices to derive boundaries -> draw the core structure -> assign responsibilities/APIs/data ownership -> add quality tradeoffs and validation."
      },
      "bullets": [
        {
          "zh": "ADD/ASR 题：从 stakeholder concerns、质量属性场景和约束选择 driver，再按 ADD 七步组织迭代和文档化。",
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
          "zh": "旧三层/缓存题只作为 P2 历史题练习，遇到再写，不放进 2026 主模板。",
          "en": "Old three-tier/cache prompts are P2 historical practice only; answer if asked, but keep them out of the 2026 main template."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Li Shanshan review-class slides",
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
            "zh": "哪怕题目只说“design”，也要把图转成文字说明，避免阅卷看不懂。",
            "en": "Even if the prompt only says “design”, translate the diagram into written responsibilities."
          },
          "trap": {
            "zh": "不要只堆术语。图里出现的每个组件都要有存在理由。",
            "en": "Do not dump terms; each component in the diagram needs a reason."
          }
        },
        {
          "title": {
            "zh": "今年主设计模板",
            "en": "Current design template"
          },
          "summary": {
            "zh": "围绕微服务 + DDD + ADD 文档化，不再让三层/缓存旧题抢主线。",
            "en": "Center microservices + DDD + ADD documentation; old three-tier/cache prompts should not dominate."
          },
          "must": {
            "zh": "服务边界、数据边界、API/事件协作、部署与可观测性、质量属性 tradeoff。",
            "en": "Service boundaries, data boundaries, API/event collaboration, deployment/observability, and quality tradeoffs."
          },
          "answer": {
            "zh": "图上画业务能力/限界上下文到服务的映射，文字说明每个服务职责、数据归属和跨服务协作。",
            "en": "Draw the mapping from business capabilities/bounded contexts to services, then describe responsibilities, data ownership, and cross-service collaboration."
          },
          "trap": {
            "zh": "不要把 Saga、API Gateway、某个服务名写成唯一标准答案；它们是可用的示例设计手段。",
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
        "zh": "设计题不是背唯一答案，而是把 driver、边界、数据、接口、质量取舍讲清楚。\n万能骨架：需求/ASR -> 分解原则 -> 元素和职责 -> 连接器和数据流 -> 视图/部署 -> 质量战术 -> 风险与取舍。\n画图题先画边界和主要元素，再画连接关系，最后补图例、关键数据/事件和质量战术标注。",
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
            "zh": "先写 driver，再画结构，最后讲取舍。",
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
            "zh": "无论题目是外卖、缓存、三层、SOA，都先把业务和质量 driver 写出来。",
            "en": "Whether the prompt is food delivery, cache, three-tier, or SOA, first write business and quality drivers."
          },
          "boundary": {
            "zh": "今年设计题优先微服务 + DDD + ADD 文档化；旧题设计模板仅保底。",
            "en": "This year's design priority is microservices + DDD + ADD documentation; old design templates are backup."
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
            "zh": "先画系统边界和外部角色；再画主要组件或服务，名称用业务能力而不是技术炫词；每个数据归属画在服务旁边；连接器用箭头标同步 API、异步事件或数据访问；最后加少量质量战术标注，例如 API Gateway 认证限流、服务间熔断、消息队列削峰、监控追踪。图下方用文字补充为什么这样拆，以及牺牲了什么。",
            "en": "Draw system boundary and external actors first. Then draw main components/services with business-capability names rather than flashy technology terms. Put each data store beside its owning service. Label connectors as synchronous API, asynchronous event, or data access. Finally add a few quality-tactic annotations: API Gateway authentication/rate limiting, circuit breakers, message queue smoothing, monitoring/tracing. Under the diagram, explain why this decomposition was chosen and what it sacrifices."
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
            "en": "Use current redrawn diagrams as references; technology details not in the prompt should be phrased as examples/options."
          }
        }
      ]
    },
    {
      "id": "ai",
      "group": "modern",
      "priority": "P3",
      "examWeight": "背景了解，不当主线",
      "sourceConfidence": "吕骏完整录音明确 AI 增强/AI 原生不考；仅作背景",
      "title": {
        "zh": "AI 增强 / AI 原生架构",
        "en": "AI-Enabled / AI-Native Architecture"
      },
      "takeaway": {
        "zh": "完整录音中吕骏明确说 AI 增强、AI 原生不会考；这里只保留背景概念，P3 只读。",
        "en": "In the complete recording, Lu Jun explicitly says AI-enabled and AI-native architecture will not be tested. Keep this as P3 background only."
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
          "zh": "考试优先级低于 ADD、DDD、微服务、企业架构。",
          "en": "Exam priority is lower than ADD, DDD, microservices, and enterprise architecture."
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
            "zh": "复习课说 AI 不是主考试重点。",
            "en": "Review notes say AI is not the main exam focus."
          },
          "must": {
            "zh": "了解 AI-enabled architecture、AI-native architecture、AI for DDD、DDD for AI 即可。",
            "en": "Know AI-enabled architecture, AI-native architecture, AI for DDD, and DDD for AI as background."
          },
          "answer": {
            "zh": "论述题可用一句话补充：AI 引入模型、数据、反馈闭环和治理，架构仍要处理质量属性和边界。",
            "en": "In essays, add one line: AI introduces models, data, feedback loops, and governance, while architecture still handles qualities and boundaries."
          },
          "trap": {
            "zh": "不要把时间花在 AI 细节背诵上，优先 ADD/微服务/DDD/EA。",
            "en": "Do not spend core memorization time on AI details; prioritize ADD/microservices/DDD/EA."
          }
        }
      ],
      "diagramIds": [],
      "memorize": {
        "zh": "AI/LLM 在复习课中属于趋势和辅助，不是核心高分主线。\n能写的点：需求分析、业务建模、数据建模、应用设计、代码生成、测试验证的辅助。\n回答时保持保守：AI 帮助产出和检查，但架构决策仍要由人基于业务目标、质量需求和约束负责。",
        "en": "AI/LLM is a trend and assistant in the review class, not the highest-scoring core line.\nPoints to mention: support requirement analysis, business modeling, data modeling, application design, code generation, and test verification.\nBe conservative: AI helps produce and check artifacts, but humans remain responsible for architecture decisions based on business goals, quality requirements, and constraints."
      },
      "examTemplate": {
        "zh": "若问 AI 与架构，按“能辅助什么 -> 产出什么 -> 风险是什么 -> 人如何治理”答。",
        "en": "If asked about AI and architecture, answer “what it assists -> what it produces -> risks -> how humans govern it”."
      },
      "lectureNotes": [
        {
          "title": {
            "zh": "AI 增强为什么是 P3",
            "en": "Why AI-enabled architecture is P3"
          },
          "summary": {
            "zh": "老师明确降权，理解趋势即可。",
            "en": "The instructors lowered its priority; understand the trend only."
          },
          "explain": {
            "zh": "AI/LLM 在复习课中作为架构设计趋势和工具能力出现，而不是今年核心考点。可以理解为它能辅助需求分析、业务建模、数据建模、应用设计、代码生成、测试验证和文档生成，但它不能替代架构师对业务目标、质量需求、约束、风险和治理的判断。",
            "en": "AI/LLM appears in the review class as a trend and tool capability, not a core exam focus. It can assist requirement analysis, business modeling, data modeling, application design, code generation, test verification, and documentation, but it does not replace architects' judgment over business goals, quality requirements, constraints, risks, and governance."
          },
          "memorize": {
            "zh": "能辅助全流程，但不替代架构决策；今年只理解不主背。",
            "en": "Can assist the whole process but does not replace architectural decisions; understand only for this year."
          },
          "answer": {
            "zh": "如果真问，按“能做什么、产出什么、风险是什么、人如何治理”答。",
            "en": "If asked, answer “what it can do, what it produces, what risks it has, and how humans govern it”."
          },
          "boundary": {
            "zh": "吕骏段明确 AI 增强/AI 原生不作为考试重点。",
            "en": "Lu Jun's section explicitly lowers AI-enabled/native architecture as an exam focus."
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
      "noteEn": "High-level design of system elements, relations, properties, and evolution principles."
    },
    {
      "category": "foundation",
      "zh": "架构师",
      "en": "Software Architect",
      "noteZh": "协调利益相关者、做技术/工程决策并管理架构风险的人。",
      "noteEn": "A role coordinating stakeholders, making technical/engineering decisions, and managing architectural risks."
    },
    {
      "category": "requirements",
      "zh": "架构相关需求",
      "en": "Architecturally Significant Requirement (ASR)",
      "noteZh": "会显著影响架构设计决定的需求。",
      "noteEn": "A requirement with significant impact on architectural decisions."
    },
    {
      "category": "requirements",
      "zh": "质量属性",
      "en": "Quality Attribute",
      "noteZh": "系统“做得好不好”的性质，如可用性、性能、可修改性。",
      "noteEn": "A property describing how well a system behaves, such as availability, performance, or modifiability."
    },
    {
      "category": "requirements",
      "zh": "约束",
      "en": "Constraint",
      "noteZh": "设计前已经确定且必须满足的设计决定。",
      "noteEn": "A pre-made design decision that must be satisfied."
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
      "zh": "制品",
      "en": "Artifact",
      "noteZh": "被刺激影响的系统部分。",
      "noteEn": "The part of the system affected by the stimulus."
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
      "noteEn": "An atomic design decision addressing a quality attribute."
    },
    {
      "category": "decision",
      "zh": "模式",
      "en": "Pattern",
      "noteZh": "对反复出现问题的可复用解决方案，常由多个战术组合。",
      "noteEn": "A reusable solution to a recurring problem, often combining tactics."
    },
    {
      "category": "decision",
      "zh": "风格",
      "en": "Style",
      "noteZh": "一类架构组织方式及其约束。",
      "noteEn": "A way of organizing architecture with characteristic constraints."
    },
    {
      "category": "views",
      "zh": "逻辑视图",
      "en": "Logical View",
      "noteZh": "描述重要元素及其关系。",
      "noteEn": "Describes significant elements and their relationships."
    },
    {
      "category": "views",
      "zh": "过程视图",
      "en": "Process View",
      "noteZh": "描述并发、通信和运行时行为。",
      "noteEn": "Describes concurrency, communication, and runtime behavior."
    },
    {
      "category": "views",
      "zh": "物理视图",
      "en": "Physical View",
      "noteZh": "描述进程/软件到硬件或部署环境的映射。",
      "noteEn": "Describes mapping of processes/software to hardware or deployment environments."
    },
    {
      "category": "views",
      "zh": "开发视图",
      "en": "Development View",
      "noteZh": "描述软件内部组织及开发结构。",
      "noteEn": "Describes internal software organization and development structure."
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
      "noteZh": "按驱动因素迭代推导架构设计的方法。",
      "noteEn": "An iterative method deriving architecture from design drivers."
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
      "noteZh": "把质量目标分解成场景与度量，并排序优先级。",
      "noteEn": "A tree decomposing quality goals into scenarios and measures for prioritization."
    },
    {
      "category": "ddd",
      "zh": "限界上下文",
      "en": "Bounded Context",
      "noteZh": "模型和语言保持一致的业务/知识边界。",
      "noteEn": "A boundary within which a model and language stay consistent."
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
      "noteZh": "由聚合根控制一致性边界的一组领域对象。",
      "noteEn": "A consistency boundary of domain objects controlled by an aggregate root."
    },
    {
      "category": "ddd",
      "zh": "领域事件",
      "en": "Domain Event",
      "noteZh": "过去发生且对业务有意义的事实。",
      "noteEn": "A meaningful business fact that has already happened."
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
      "noteEn": "Describes capabilities, processes, organization, and value chains."
    },
    {
      "category": "enterprise",
      "zh": "数据架构",
      "en": "Data Architecture",
      "noteZh": "描述数据资产、标准、责任与模型。",
      "noteEn": "Describes data assets, standards, responsibilities, and models."
    },
    {
      "category": "enterprise",
      "zh": "应用架构",
      "en": "Application Architecture",
      "noteZh": "描述应用蓝图、组件与服务共享关系。",
      "noteEn": "Describes application blueprint, components, and shared services."
    },
    {
      "category": "enterprise",
      "zh": "技术架构",
      "en": "Technology Architecture",
      "noteZh": "描述技术组件、基础设施和标准。",
      "noteEn": "Describes technology components, infrastructure, and standards."
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
      "noteZh": "通过 stakeholder 讨论把质量目标场景化的方法。",
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
      "noteZh": "用 broker 中介客户端与服务端通信的 C&C 模式。",
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
      "noteZh": "把系统逻辑分配到不同部署层或机器上的 allocation 模式。",
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
      "noteZh": "系统内部状态不正确，可能导致 failure。",
      "noteEn": "An incorrect internal state that may lead to a failure."
    },
    {
      "category": "quality",
      "zh": "缺陷/故障源",
      "en": "Fault",
      "noteZh": "导致 error 的潜在缺陷、bug 或硬件问题。",
      "noteEn": "A latent defect, bug, or hardware problem that can cause an error."
    },
    {
      "category": "microservices",
      "zh": "微服务六特性",
      "en": "Six Microservice Traits",
      "noteZh": "粒度小、围绕业务能力、自治、独立部署、去中心化治理/数据、基础设施自动化。",
      "noteEn": "Small services, business capability orientation, autonomy, independent deployment, decentralized governance/data, infrastructure automation."
    }
  ],
  "assets": [
    {
      "title": {
        "zh": "张贺复习课画板",
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
        "zh": "李杉杉复习课画板",
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
        "zh": "对应架构演进与时代矛盾主线。",
        "en": "Architecture evolution and historical-tension storyline."
      }
    }
  ],
  "topicGroups": [
    {
      "id": "core",
      "title": {
        "zh": "基础主线",
        "en": "Core Foundations"
      },
      "note": {
        "zh": "概念、质量属性、ASR 是简答题保底。",
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
        "zh": "微服务、DDD、企业架构是今年高阶重点。",
        "en": "Microservices, DDD, and EA are the advanced focus this year."
      }
    },
    {
      "id": "historical",
      "title": {
        "zh": "历史高频",
        "en": "Historical High-Frequency"
      },
      "note": {
        "zh": "今年未必重，但往年反复出现。",
        "en": "Maybe lower priority this year, but frequent in past papers."
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
        "zh": "先拿保底分",
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
          "zh": "4+1 和 Views and Beyond 只背骨架",
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
        "zh": "冲今年高阶重点",
        "en": "Attack current advanced focus"
      },
      "items": [
        {
          "zh": "ADD 3.0 七步流程 + driver/iteration 口径",
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
          "zh": "按 39 个真题簇逐条看中文答案，再对照英文题干；2025/2022/2021 相邻课程真题只看架构筛选部分，GoF/OOP 题跳过",
          "en": "Read Chinese answer frames for all 39 clusters, then compare English prompts; use only the architecture-filtered parts of 2025/2022/2021 adjacent-course papers and skip GoF/OOP-only questions"
        },
        {
          "zh": "主练微服务 + DDD + ADD/ASR 文档化；三层、缓存只作为 P2 历史题过一遍",
          "en": "Main practice: microservices + DDD + ADD/ASR documentation; skim three-tier/cache as P2 historical prompts only"
        },
        {
          "zh": "ATAM/SPL/MDA/SOA 只保留历史高频简答骨架",
          "en": "Keep only short-answer skeletons for historical ATAM/SPL/MDA/SOA topics"
        }
      ]
    }
  ],
  "coverage": [
    {
      "area": {
        "zh": "考试形式与答题要求",
        "en": "Exam format and answer rules"
      },
      "status": {
        "zh": "以完整录音确认",
        "en": "Confirmed by complete recording"
      },
      "evidence": "data/review-class/complete-review-minutes.md; data/复习课完整录音-张贺吕骏李杉杉.txt"
    },
    {
      "area": {
        "zh": "P0 基础、质量、ASR、4+1、设计决定",
        "en": "P0 foundations, quality, ASR, 4+1, design decisions"
      },
      "status": {
        "zh": "重排为主线",
        "en": "Promoted to mainline"
      },
      "evidence": "Complete recording + Lecture 14 softarch2026-review-1 + Lecture 1/2-4 OCR"
    },
    {
      "area": {
        "zh": "P0 架构演进、ADD、微服务、DDD",
        "en": "P0 evolution, ADD, microservices, DDD"
      },
      "status": {
        "zh": "按复习课强化",
        "en": "Strengthened from review class"
      },
      "evidence": "Lu Jun Lecture 3 review; Li Shanshan review slides; Lecture 6-9/12 OCR"
    },
    {
      "area": {
        "zh": "企业架构",
        "en": "Enterprise architecture"
      },
      "status": {
        "zh": "降为 P1",
        "en": "Set to P1"
      },
      "evidence": "Complete minutes P1; Lecture 10-11 4A/TOGAF/CBM OCR"
    },
    {
      "area": {
        "zh": "ATAM、SPL/MDA、旧三层/缓存题",
        "en": "ATAM, SPL/MDA, old three-tier/cache questions"
      },
      "status": {
        "zh": "历史保底",
        "en": "Historical backup"
      },
      "evidence": "Past papers retained but not allowed to override current review-class scope"
    },
    {
      "area": {
        "zh": "AI 增强/AI 原生、GoF 设计模式",
        "en": "AI-enabled/native and GoF design patterns"
      },
      "status": {
        "zh": "明确不考/排除",
        "en": "Non-exam/excluded"
      },
      "evidence": "Complete recording Lu Jun segment; adjacent-course filtering rule"
    }
  ],
  "whiteboards": [
    {
      "id": "zhang-he",
      "title": {
        "zh": "张贺复习课画板",
        "en": "Zhang He Review Whiteboard"
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
          "zh": "基础主线：架构定义、架构/设计/结构关系、架构师职责、用户与开发者矛盾。",
          "en": "Foundation line: architecture definition, architecture/design/structure, architect role, user-developer tension."
        },
        {
          "zh": "质量主线：质量属性六要素场景、ASR 来源、效用树、设计决定/策略/tactic/pattern。",
          "en": "Quality line: six-part scenarios, ASR sources, utility tree, design decisions/strategy/tactic/pattern."
        }
      ]
    },
    {
      "id": "li-shanshan",
      "title": {
        "zh": "李杉杉复习课画板",
        "en": "Li Shanshan Review Whiteboard"
      },
      "src": "assets/feishu-whiteboards/li-shanshan.jpg",
      "note": {
        "zh": "ADD、微服务、DDD、企业架构是今年复习高阶重点。",
        "en": "ADD, microservices, DDD, and EA are the advanced focus this year."
      },
      "points": [
        {
          "zh": "ADD 3.0：Review inputs；按 driver 建立本轮 iteration goal；选择要细化的元素；选择 design concepts；实例化元素、分配职责、定义接口；画视图并记录决策；分析当前设计并评审本轮目标与 design purpose，必要时继续迭代。",
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
        "en": "Lu Jun Architecture-Patterns Whiteboard"
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
        "zh": "AI Wiki 期末主线画板",
        "en": "AI Wiki Exam Mainline Whiteboard"
      },
      "src": "assets/feishu-whiteboards/ai-wiki-mainline.png",
      "note": {
        "zh": "把 AI 整理资料中的主线压缩成一条可作答链路：业务目标、驱动因素、架构选择、边界落地、考场输出。",
        "en": "Condenses the AI-organized source into an answerable chain: business goals, drivers, architectural choices, boundaries, and exam output."
      },
      "points": [
        {
          "zh": "起点：业务目标与 stakeholders，先说明系统要解决什么，以及最关心哪些风险与价值。",
          "en": "Start with business goals and stakeholders: what problem the system solves, and which risks/value matter most."
        },
        {
          "zh": "识别驱动：质量属性场景、ASR 与约束，把需求转成可设计、可评估的驱动因素。",
          "en": "Identify drivers: quality-attribute scenarios, ASRs, and constraints turn requirements into designable and evaluable drivers."
        },
        {
          "zh": "做出选择：用 ADD 3.0、tactics、patterns 或微服务权衡，说明选择改善了哪些质量属性。",
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
        "zh": "质量属性场景 Ground Truth 表",
        "en": "Quality Attribute Scenario Ground-Truth Table"
      },
      "note": {
        "zh": "按原始课程表格重绘：七列对应质量属性、刺激源、刺激、工件、环境、响应、响应度量。",
        "en": "Redrawn from the original course table: quality attribute, source, stimulus, artifact, environment, response, response measure."
      },
      "use": {
        "zh": "质量场景题直接按此表背；Availability 行不要改成自拟切备用实例。",
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
        "zh": "可信旧图：ASR、需求/约束、patterns/tactics、文档化和评估反馈的过程。",
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
        "zh": "可信旧图：五类 driver 输入 Step 1，Step 1-7 串行推进，必要时迭代。",
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
        "zh": "ASR 效用树 Utility Tree",
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
        "zh": "来自完整录音纪要配套重绘：logical、process、physical、development 与 use-case scenarios。",
        "en": "Redrawn with the complete review minutes: logical, process, physical, development, and use-case scenarios."
      },
      "use": {
        "zh": "4+1 题和文档化题使用。",
        "en": "Use for 4+1 and documentation questions."
      }
    },
    {
      "id": "review-architecture-evolution",
      "src": "assets/diagrams/review-architecture-evolution.svg",
      "srcZh": "assets/diagrams/review-architecture-evolution.svg",
      "srcEn": "assets/diagrams/review-architecture-evolution.en.svg",
      "title": {
        "zh": "软件架构演进主线",
        "en": "Software Architecture Evolution"
      },
      "note": {
        "zh": "吕骏复习段重绘：从主机/终端、C/S、三层、SOA 到微服务、事件驱动/云原生。",
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
        "zh": "按 Lecture 6-7 表格口径重绘，突出微服务与 SOA 的通信、数据、粒度差异。",
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
        "zh": "来自完整录音纪要配套重绘：业务能力、子域、限界上下文与服务边界的关系。",
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
        "zh": "按 Lecture 8-9 OCR 重绘：子域、限界上下文、上下文映射、聚合和事件风暴。",
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
        "zh": "按 Lecture 10-11 与复习课口径重绘，强调 4A 而不是把 5A 放大成主线。",
        "en": "Redrawn from Lecture 10-11 and review-class wording; emphasizes 4A rather than over-promoting 5A."
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
        "zh": "三层架构旧题参考答案图",
        "en": "Three-Tier Old-Paper Reference Diagram"
      },
      "note": {
        "zh": "说明性答题图：订票/ATM 三层职责 + Views and Beyond 文档项，不是今年主线 PPT 原图。",
        "en": "Illustrative answer diagram: booking/ATM three-tier responsibilities plus Views and Beyond documentation; not a current mainline slide."
      },
      "use": {
        "zh": "旧题设计题需要画三层时使用，优先级 P2。",
        "en": "Use for historical three-tier design questions, priority P2."
      }
    },
    {
      "id": "cache-invalidation-reference",
      "src": "assets/diagrams/cache-invalidation-reference.svg",
      "srcZh": "assets/diagrams/cache-invalidation-reference.zh.svg",
      "srcEn": "assets/diagrams/cache-invalidation-reference.svg",
      "title": {
        "zh": "分布式缓存失效旧题参考图",
        "en": "Distributed Cache Invalidation Reference"
      },
      "note": {
        "zh": "说明性答题图：先提交 DB，再由协调器/Broker 广播失效事件到缓存适配器。",
        "en": "Illustrative answer diagram: commit DB first, then coordinator/broker broadcasts invalidation events to cache adapters."
      },
      "use": {
        "zh": "缓存一致性旧题使用，优先级 P2。",
        "en": "Use for historical cache-consistency design questions, priority P2."
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
        "zh": "用 MVC 说明 Component-and-Connector：运行时组件、连接件和交互约束。",
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
        "zh": "SOA/C&C、Web Service/ESB 旧题使用。",
        "en": "Use for SOA/C&C and Web Service/ESB historical questions."
      }
    },
    {
      "id": "pipe-filter-text-pipeline",
      "src": "assets/diagrams/pipe-filter-text-pipeline.svg",
      "srcZh": "assets/diagrams/pipe-filter-text-pipeline.zh.svg",
      "srcEn": "assets/diagrams/pipe-filter-text-pipeline.svg",
      "title": {
        "zh": "Pipe-and-Filter 文本处理参考图",
        "en": "Pipe-and-Filter Text Pipeline Reference"
      },
      "note": {
        "zh": "说明性答题图：每个 Filter 做单步转换，每条 Pipe 标明数据格式。",
        "en": "Illustrative answer diagram: each filter performs one transformation and each pipe labels the data format."
      },
      "use": {
        "zh": "Pipe-and-Filter 旧设计题使用，优先级 P2。",
        "en": "Use for historical Pipe-and-Filter design questions, priority P2."
      }
    },
    {
      "id": "broker-pattern-topology",
      "src": "assets/diagrams/broker-pattern-topology.svg",
      "srcZh": "assets/diagrams/broker-pattern-topology.zh.svg",
      "srcEn": "assets/diagrams/broker-pattern-topology.svg",
      "title": {
        "zh": "Broker 架构模式拓扑参考图",
        "en": "Broker Pattern Topology Reference"
      },
      "note": {
        "zh": "说明性答题图：Client Proxy、Broker、Server Proxy、Server 与可选注册目录。",
        "en": "Illustrative answer diagram: client proxy, broker, server proxy, server, and optional registry."
      },
      "use": {
        "zh": "Broker 旧题使用，优先级 P2。",
        "en": "Use for historical Broker questions, priority P2."
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
        "zh": "旧题说明性表格：只保留 Phase 0-3 输出骨架，不把 ATAM 放成 2026 主线。",
        "en": "Historical reference table: keep only the Phase 0-3 output skeleton and do not promote ATAM to the 2026 mainline."
      },
      "use": {
        "zh": "ATAM 旧题快速回忆用，优先级 P2。",
        "en": "Use as a quick recall aid for historical ATAM questions, priority P2."
      }
    }
  ],
  "examMindmap": {
    "title": {
      "zh": "复习课完整录音思维导图",
      "en": "Complete Review-Class Scope Mind Map"
    },
    "note": {
      "zh": "以完整录音和复习课 slides 为最高纲领；节点点击会统计，勾选会进入本地 checklist。",
      "en": "Highest-level outline from the complete recording and review slides; node clicks are counted and checklist state is local."
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
              "zh": "Structure / Elements / Relationships / Design decisions。",
              "en": "Structure / Elements / Relationships / Design decisions."
            }
          },
          {
            "id": "mind-views",
            "topicId": "views",
            "title": {
              "zh": "4+1 Views",
              "en": "4+1 Views"
            },
            "note": {
              "zh": "Logical、Process、Physical、Development + Use case scenarios。",
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
              "zh": "ASR 与 Utility Tree",
              "en": "ASRs and Utility Tree"
            },
            "note": {
              "zh": "需求文档、访谈/workshop、业务目标，按重要性和架构影响排序。",
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
              "zh": "driver 输入、iteration goal、refine element、design concept、instantiate、sketch/document、analyze。",
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
              "zh": "HPS ADD case",
              "en": "HPS ADD case"
            },
            "note": {
              "zh": "理解 CQRS、Kafka、command/query/export side 如何支持 ADD 流程。",
              "en": "Understand CQRS, Kafka, command/query/export side as ADD process support."
            }
          }
        ]
      },
      {
        "id": "p2",
        "priority": "P2",
        "title": {
          "zh": "P2 历史保底",
          "en": "P2 Historical Backup"
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
              "zh": "输出、参与者、risk/sensitivity/tradeoff。",
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
              "zh": "旧题保底，不抢 P0 时间。",
              "en": "Old-paper backup; do not steal P0 time."
            }
          }
        ]
      },
      {
        "id": "p3",
        "priority": "P3",
        "title": {
          "zh": "P3 明确不考/只读",
          "en": "P3 Non-Exam / Read Only"
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
              "zh": "吕骏完整录音明确不考。",
              "en": "Lu Jun explicitly said this will not be tested."
            }
          },
          {
            "id": "mind-gof",
            "title": {
              "zh": "GoF 设计模式与代码实现题",
              "en": "GoF design patterns and coding questions"
            },
            "note": {
              "zh": "相邻课程材料中剔除，不纳入本课程主线。",
              "en": "Filtered from adjacent-course material and excluded from this course mainline."
            }
          }
        ]
      }
    ]
  }
};
