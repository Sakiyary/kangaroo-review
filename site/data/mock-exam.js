window.reviewMockExam = {
  "id": "mock-exam-2026-softarch",
  "title": "Software Architecture Mock Exam",
  "course": "Software Architecture, Graduate Course, NJU Software Institute, 2026",
  "duration": "Suggested practice time: 120 minutes",
  "totalPoints": 100,
  "paperNote": "Questions are written in English to match the exam surface. The answer key is Chinese-only for memorization.",
  "sourcePolicy": [
    "Highest priority: complete review-class transcript and review-class slides.",
    "Next priority: recent past papers of this course and adjacent Software System Design architecture questions.",
    "Lower priority: older past papers and peer notes, used only when they agree with the current review scope."
  ],
  "instructions": [
    "Answer all questions.",
    "You may answer in Chinese or English, but do not mix Chinese and English in the same answer.",
    "Use clear points. Draw diagrams where the question asks for a sketch or model.",
    "When a question asks for trade-offs, state both the benefit and the cost."
  ],
  "scoreRows": [
    { "label": "Part A", "points": 36, "description": "Short Answer Questions, 6 questions x 6 points" },
    { "label": "Part B", "points": 24, "description": "Applied Discussion Questions, 3 questions x 8 points" },
    { "label": "Part C", "points": 20, "description": "Diagram and Modeling Questions, 2 questions x 10 points" },
    { "label": "Part D", "points": 20, "description": "Design Analysis Question, 1 question x 20 points" }
  ],
  "sections": [
    {
      "id": "part-a",
      "title": "Part A. Short Answer Questions",
      "points": 36,
      "note": "Answer each question in about 6 to 8 well-organized points.",
      "questionIds": ["mock-q1", "mock-q2", "mock-q3", "mock-q4", "mock-q5", "mock-q6"]
    },
    {
      "id": "part-b",
      "title": "Part B. Applied Discussion Questions",
      "points": 24,
      "note": "Explain the concepts, then apply them to architectural reasoning.",
      "questionIds": ["mock-q7", "mock-q8", "mock-q9"]
    },
    {
      "id": "part-c",
      "title": "Part C. Diagram and Modeling Questions",
      "points": 20,
      "note": "Your diagram should be readable and should be explained in text.",
      "questionIds": ["mock-q10", "mock-q11"]
    },
    {
      "id": "part-d",
      "title": "Part D. Design Analysis Question",
      "points": 20,
      "note": "Use DDD and microservice architecture together. Discuss quality trade-offs.",
      "questionIds": ["mock-q12"]
    }
  ],
  "questions": [
    {
      "id": "mock-q1",
      "number": 1,
      "points": 6,
      "priority": "P0",
      "probability": "High",
      "difficulty": "Easy",
      "topicIds": ["foundation", "asr"],
      "sourceQuestionIds": ["q_arch_sources", "q_req_quality_asr"],
      "title": "Describe the difference and relationship between software requirements, quality attributes, and architecturally significant requirements (ASRs).",
      "prediction": "直接基础题，结合了复习课核心范围和近年相邻课程真题的题面形态。",
      "answer": {
        "summary": "这题按“范围从大到小、影响从业务到架构”的顺序答，核心是把 ASR 讲成会改变架构结构和关键设计决定的少数需求。",
        "points": [
          "软件需求是总集合，包含功能需求、质量需求和约束，说明系统要做什么、做到什么程度、受到什么限制。",
          "质量属性是需求中的一类，描述系统运行和演化时的质量目标，例如可用性、性能、可修改性、安全性、可测试性、易用性。",
          "ASR 是对架构有显著影响的需求，不一定只来自质量属性，也可能来自关键功能或强约束。",
          "判断 ASR 的标准是它是否会影响模块划分、运行时通信、部署结构、数据边界、技术选型或团队责任边界。",
          "质量属性通常要写成可测试的质量属性场景，再根据业务重要性和架构影响排序。",
          "答题时可用一句话收束：需求给目标，质量属性给可度量质量目标，ASR 决定哪些目标必须优先进入架构设计。"
        ],
        "related": [
          { "type": "topic", "id": "asr", "label": "ASR 与质量属性" },
          { "type": "question", "id": "q_req_quality_asr", "label": "需求、质量属性与 ASR" }
        ]
      }
    },
    {
      "id": "mock-q2",
      "number": 2,
      "points": 6,
      "priority": "P0",
      "probability": "High",
      "difficulty": "Medium",
      "topicIds": ["quality"],
      "sourceQuestionIds": ["q_quality_scenarios"],
      "title": "Model a quality attribute requirement using the stimulus-response scenario format. Explain each element with an example.",
      "prediction": "很可能考，六要素场景同时服务质量属性和 ASR，容易改成简答或画表题。",
      "answer": {
        "summary": "质量属性场景把“系统要稳定、要快、要容易改”这类模糊说法变成可验证的架构需求。",
        "points": [
          "完整场景有六个要素：刺激源、刺激、工件、环境、响应、响应度量。",
          "刺激源说明谁或什么触发事件，例如用户、开发者、心跳监视器、攻击者。",
          "刺激说明发生了什么，例如请求到达、服务器无响应、修改 UI、非法访问。",
          "工件说明受影响对象，例如系统、处理器、代码、数据、路况监控系统。",
          "环境说明事件发生时系统处于什么状态，例如正常运行、设计时、开发时、运行时。",
          "响应说明系统做什么，响应度量说明做到什么程度，必须可以观察或测试。",
          "可用性例子：心跳监视器发现服务器无响应，处理器在正常操作中通知操作者继续操作，响应度量是没有停机时间。"
        ],
        "drawing": {
          "how": [
            "考场先画六列表头：Source、Stimulus、Artifact、Environment、Response、Response Measure。",
            "再把题目中的质量属性需求拆到六列里。",
            "最后检查响应度量是否可测量；没有量化标准时主动补一个合理指标。"
          ],
          "diagramId": "quality-scenario-table"
        },
        "related": [
          { "type": "topic", "id": "quality", "label": "质量属性场景" },
          { "type": "question", "id": "q_quality_scenarios", "label": "六要素场景题" }
        ]
      }
    },
    {
      "id": "mock-q3",
      "number": 3,
      "points": 6,
      "priority": "P0",
      "probability": "High",
      "difficulty": "Easy",
      "topicIds": ["views"],
      "sourceQuestionIds": ["q_4_plus_1", "q_different_views", "q_doc_package"],
      "title": "Why should software architecture be documented using different views? Give four example views and their purposes.",
      "prediction": "概率较高，多视图文档化既在当前范围内，也在往年题簇中反复出现。",
      "answer": {
        "summary": "多视图文档化的本质是：一个图无法回答所有利益相关者的问题，所以要按关注点选择视图。",
        "points": [
          "架构有多个结构：模块结构、运行时组件与连接件、部署结构、工作分配结构等。",
          "不同利益相关者关注点不同：开发者看模块职责和依赖，运维人员看节点和部署，性能分析看运行时交互，项目管理看任务和责任边界。",
          "逻辑视图说明主要概念、类或领域模型，帮助理解功能分解。",
          "开发视图说明模块、包、层、依赖和代码组织，帮助开发与维护。",
          "进程视图说明运行时进程、线程、通信和同步，帮助分析性能、并发和可用性。",
          "物理视图说明部署节点、网络和硬件/容器映射，帮助运维和部署。",
          "场景/用例视图把其他视图串起来，用关键场景验证架构是否满足需求。"
        ],
        "drawing": {
          "how": [
            "画 4+1 时把 Use Case/Scenarios 放中间或上方，四个视图围绕它。",
            "每个视图旁写一句用途，不要只写名称。",
            "如果题目给出具体系统，要把视图内容替换成该系统的模块、进程、节点和场景。"
          ],
          "diagramId": "review-4-plus-1-views"
        },
        "related": [
          { "type": "topic", "id": "views", "label": "4+1 与视图文档化" },
          { "type": "question", "id": "q_4_plus_1", "label": "4+1 视图" }
        ]
      }
    },
    {
      "id": "mock-q4",
      "number": 4,
      "points": 6,
      "priority": "P0",
      "probability": "High",
      "difficulty": "Medium",
      "topicIds": ["add"],
      "sourceQuestionIds": ["q_add_process", "q_arch_process"],
      "title": "Describe ADD 3.0, including its inputs, seven-step process, and iterative relationship.",
      "prediction": "概率较高，ADD 在复习课纲领中明确出现，也很容易改成流程图题。",
      "answer": {
        "summary": "ADD 3.0 是围绕驱动因素逐轮细化架构的设计方法，答题要把输入、七步、迭代关系说完整。",
        "points": [
          "输入是五类驱动因素：设计目的、主要功能、质量属性、架构关注点、约束。",
          "第 1 步审查输入，产物是整理后的输入包、关键场景/约束清单和可用驱动因素。",
          "第 2 步选择驱动因素并建立本轮迭代目标，产物是本轮目标、优先驱动因素和目标达成依据。",
          "第 3 步选择一个或多个要细化的系统元素，产物是本轮设计边界，例如系统、子系统、服务或已有组件。",
          "第 4 步选择能满足驱动因素的设计概念，产物是候选参考架构、风格、模式、战术、外部组件或技术机制。",
          "第 5 步实例化架构元素，产物是具体元素、职责分配、接口和交互关系。",
          "第 6 步绘制视图草图并记录设计决定，产物是视图草图、设计决策和设计理由。",
          "第 7 步分析当前设计，产物是目标达成判断、风险/取舍和下一轮迭代动作；必要时回到第 2 步继续迭代。"
        ],
        "drawing": {
          "how": [
            "先画顶部五个输入框。",
            "中间画 Step 1 到 Step 7 的纵向流程。",
            "左侧补两条反馈箭头：从已有系统/上一轮迭代进入 Step 1，必要时从 Step 7 回到 Step 2。",
            "底部画出 refined software architecture design。"
          ],
          "diagramId": "add-roadmap"
        },
        "related": [
          { "type": "topic", "id": "add", "label": "ADD 3.0" },
          { "type": "question", "id": "q_add_process", "label": "ADD 七步流程" }
        ]
      }
    },
    {
      "id": "mock-q5",
      "number": 5,
      "points": 6,
      "priority": "P0",
      "probability": "High",
      "difficulty": "Medium",
      "topicIds": ["patterns", "quality-tactics", "design-decisions"],
      "sourceQuestionIds": ["q_patterns_tactics", "q_style_view_mapping", "q_design_decisions_importance"],
      "title": "Explain the relationship between tactics, architectural patterns, architectural styles, and design decisions. Give an example using microservices.",
      "prediction": "概率较高，适合考察是否真正理解模式、风格、战术和设计决定，而不是只背名词。",
      "answer": {
        "summary": "这题用“粒度从小到大、答案从机制到结构”的方式组织。",
        "points": [
          "战术是面向质量属性的局部设计策略，例如冗余、心跳、限流、缓存、隔离、异步通信。",
          "架构模式是反复出现的结构性解决方案，包含元素、关系和约束，例如分层、代理、管道过滤器、发布订阅。",
          "架构风格更像一类系统结构的组织方式和约束集合，例如 C/S、三层、SOA、微服务、事件驱动。",
          "设计决定说明为什么选择某个职责划分、协调模型、数据模型、资源管理方式、映射关系、绑定时间或技术方案。",
          "微服务例子：服务按业务能力拆分是结构/风格选择；API Gateway、服务发现、熔断、集中日志、分布式追踪是支撑该风格的模式或战术。",
          "答题必须说明质量取舍：微服务提升独立部署、扩展和团队自治，但引入网络通信、数据一致性、运维和可观测性复杂度。"
        ],
        "related": [
          { "type": "topic", "id": "patterns", "label": "模式/风格/战术" },
          { "type": "topic", "id": "design-decisions", "label": "设计决定七分类" },
          { "type": "question", "id": "q_patterns_tactics", "label": "模式与战术关系" }
        ]
      }
    },
    {
      "id": "mock-q6",
      "number": 6,
      "points": 6,
      "priority": "P0",
      "probability": "High",
      "difficulty": "Medium",
      "topicIds": ["microservices"],
      "sourceQuestionIds": ["q_microservices_vs_soa", "q_microservices_characteristics"],
      "title": "Compare microservices and SOA in terms of service granularity, governance, deployment, data ownership, and quality trade-offs.",
      "prediction": "概率较高，微服务是当前复习课主块之一，且很适合与 SOA 做对比。",
      "answer": {
        "summary": "微服务与 SOA 都强调服务，但微服务更强调小粒度、自治团队、独立部署和去中心化治理。",
        "points": [
          "服务粒度：SOA 往往服务较粗，偏企业级复用；微服务按业务能力或限界上下文拆分，粒度更小。",
          "治理方式：SOA 常见集中式治理和统一企业服务总线；微服务强调轻量协议、去中心化治理和团队自治。",
          "部署方式：SOA 服务可以独立，但常受共享平台影响；微服务以独立构建、独立部署、独立扩缩容为重要目标。",
          "数据所有权：SOA 更容易出现共享数据库或共享数据模型；微服务强调每个服务拥有自己的数据边界。",
          "通信方式：SOA 常见 SOAP/ESB 等重型集成；微服务常用 REST、消息、事件和轻量协议。",
          "质量取舍：微服务提升可修改性、可伸缩性和组织自治，但牺牲部分简单性，引入分布式一致性、故障隔离、观测和部署复杂度。"
        ],
        "related": [
          { "type": "topic", "id": "microservices", "label": "微服务特性与模式" },
          { "type": "question", "id": "q_microservices_vs_soa", "label": "微服务与 SOA 对比" }
        ]
      }
    },
    {
      "id": "mock-q7",
      "number": 7,
      "points": 8,
      "priority": "P0",
      "probability": "High",
      "difficulty": "Medium",
      "topicIds": ["patterns", "microservices"],
      "sourceQuestionIds": ["q_style_view_mapping"],
      "title": "Explain why architecture evolved from client-server to layered architecture, SOA, microservices, and event-driven or cloud-native architecture. Focus on problems solved and trade-offs.",
      "prediction": "概率较高，复习课强调把架构演进答成推理链，而不是罗列架构名词。",
      "answer": {
        "summary": "架构演进题按“旧结构的问题 - 新约束 - 新结构 - 质量收益 - 新代价”作答。",
        "points": [
          "C/S 把客户端和服务器分开，适合基本交互，但客户端复杂度、部署升级和扩展性会成为问题。",
          "分层/三层把表示、业务和数据分离，提升可维护性和职责清晰度，但层间调用和性能开销需要管理。",
          "SOA 用服务和契约做企业级集成，解决异构系统复用和集成问题，但集中治理和重型中间件可能降低敏捷性。",
          "微服务把系统按业务能力拆成小服务，提升独立部署、扩展和团队自治，但带来分布式事务、网络故障、观测和治理复杂度。",
          "事件驱动通过事件解耦生产者和消费者，适合异步协作和扩展，但一致性、顺序、重复消费和调试更难。",
          "云原生利用容器、自动化运维和弹性基础设施，提高交付与弹性能力，但要求更成熟的监控、部署流水线和平台治理。"
        ],
        "drawing": {
          "how": [
            "画一条从 C/S、三层、SOA、微服务到事件驱动/云原生的时间线。",
            "每个节点下写一句解决的问题和一句代价。",
            "最后用质量属性串起来：可修改性、可伸缩性、可用性提升，复杂度和一致性成本上升。"
          ],
          "diagramId": "review-architecture-evolution"
        },
        "related": [
          { "type": "topic", "id": "patterns", "label": "架构风格演进" },
          { "type": "question", "id": "q_style_view_mapping", "label": "风格与视图" }
        ]
      }
    },
    {
      "id": "mock-q8",
      "number": 8,
      "points": 8,
      "priority": "P0",
      "probability": "Very High",
      "difficulty": "Hard",
      "topicIds": ["ddd", "microservices"],
      "sourceQuestionIds": ["q_microservice_food_delivery_design"],
      "title": "Given a business scenario, apply DDD to identify subdomains, bounded contexts, aggregates, and domain events, then map them to microservice boundaries.",
      "prediction": "概率很高，DDD 与微服务都是当前重点，很适合作为设计分析题的基础。",
      "answer": {
        "summary": "DDD 题不是先画类图，而是先从业务空间切分边界，再把边界映射到服务。",
        "points": [
          "先识别子域：核心子域承载业务差异化，支撑子域提供重要但非差异化能力，通用子域可复用通用方案。",
          "再识别限界上下文：每个上下文内术语和模型保持一致，不同上下文之间通过上下文映射或接口协作。",
          "聚合是事务一致性边界，由聚合根保护内部不变量，例如订单聚合、支付聚合、配送任务聚合。",
          "领域事件表示业务上已经发生的事实，例如订单已创建、支付已授权、骑手已接单。",
          "微服务边界通常优先对齐限界上下文，而不是按数据库表或技术层拆分。",
          "跨服务协作可用同步 API 完成查询或命令，也可用事件和 Saga/补偿实现最终一致性。",
          "答题最后要说明取舍：边界清晰带来自治和可演化性，但分布式一致性和端到端追踪更复杂。"
        ],
        "drawing": {
          "how": [
            "先画子域/限界上下文框，再在框内写聚合。",
            "用事件箭头连接上下文，不要把所有服务连成网状调用。",
            "服务边界与上下文边界大体对齐，并标注每个服务拥有自己的数据。"
          ],
          "diagramId": "ddd-core-model"
        },
        "related": [
          { "type": "topic", "id": "ddd", "label": "DDD 战略与战术设计" },
          { "type": "question", "id": "q_microservice_food_delivery_design", "label": "微服务 + DDD 设计题" }
        ]
      }
    },
    {
      "id": "mock-q9",
      "number": 9,
      "points": 8,
      "priority": "P1",
      "probability": "Medium",
      "difficulty": "Medium",
      "topicIds": ["enterprise"],
      "sourceQuestionIds": ["q_enterprise_architecture_outline"],
      "title": "Explain Enterprise Architecture: its core idea, 4A, TOGAF ADM, CBM, values, and suitable scenarios.",
      "prediction": "中等概率，往年真题支撑不强，但属于当前复习范围，适合以应用论述题出现。",
      "answer": {
        "summary": "企业架构不是单个系统的类图，而是把业务、应用、数据和技术对齐到企业目标的治理方法。",
        "points": [
          "核心思想：在企业范围内描述能力、流程、应用、数据和技术平台之间的关系，让 IT 建设服务业务目标。",
          "业务架构说明业务能力、流程、组织和价值流，回答企业要做什么、能力如何分布。",
          "应用架构说明应用系统和应用间协作，回答哪些系统支撑哪些能力。",
          "数据架构说明核心数据对象、数据流、主数据和数据治理，回答数据如何被拥有、共享和治理。",
          "技术架构说明基础设施、平台、中间件、安全和部署环境，回答系统运行在什么技术底座上。",
          "TOGAF ADM 提供从愿景、业务、信息系统、技术到迁移治理的架构开发过程。",
          "CBM 用业务能力模块化企业，适合识别能力缺口、重复建设和转型优先级。",
          "适用场景包括大型组织数字化转型、多系统集成、业务与 IT 不一致、技术债治理和平台化建设。"
        ],
        "related": [
          { "type": "topic", "id": "enterprise", "label": "企业架构" },
          { "type": "question", "id": "q_enterprise_architecture_outline", "label": "企业架构答题框架" }
        ]
      }
    },
    {
      "id": "mock-q10",
      "number": 10,
      "points": 10,
      "priority": "P0",
      "probability": "High",
      "difficulty": "Medium",
      "topicIds": ["asr", "quality"],
      "sourceQuestionIds": ["q_asr_sources", "q_quality_scenarios"],
      "title": "For an online course review platform, sketch a utility tree with at least four leaf scenarios. Explain how the tree helps identify and prioritize ASRs.",
      "prediction": "概率较高，是 ASR 与质量属性场景的画图建模版本。",
      "answer": {
        "summary": "效用树把抽象质量目标展开成具体场景，再用重要性和架构影响筛出 ASR。",
        "points": [
          "根节点是 Utility，下一层是质量属性，例如可用性、性能、可修改性、安全性。",
          "每个质量属性下面写具体场景，场景必须有刺激、环境、响应和响应度量。",
          "每个叶子节点用两个维度标记：业务/用户重要性和架构影响。",
          "优先选择高重要性且高架构影响的叶子作为 ASR。",
          "示例叶子：考试周大量访问时 95% 请求在 2 秒内返回；评论服务故障时核心资料浏览仍可用；新增资料类型可在 1 天内接入；下载源文件需要记录并限制异常访问。",
          "效用树的价值是让架构设计先处理真正会改变缓存、部署、服务边界、安全策略和监控方案的需求。"
        ],
        "drawing": {
          "how": [
            "画根节点 Utility。",
            "第二层画 3 到 4 个质量属性。",
            "第三层写具体、可测的场景叶子，并在括号里标 H/M/L 或重要性/影响。",
            "圈出高重要性、高影响的叶子，说明它们进入 ASR。"
          ],
          "diagramId": "utility-tree"
        },
        "related": [
          { "type": "topic", "id": "asr", "label": "效用树与 ASR 排序" },
          { "type": "question", "id": "q_asr_sources", "label": "ASR 来源与排序" }
        ]
      }
    },
    {
      "id": "mock-q11",
      "number": 11,
      "points": 10,
      "priority": "P1",
      "probability": "Medium",
      "difficulty": "Hard",
      "topicIds": ["patterns", "quality-tactics"],
      "sourceQuestionIds": ["q_distributed_cache_design"],
      "title": "A server cluster uses local caches in each server. When one server updates cached data after committing to the database, other servers may keep stale data. Propose an architectural solution and draw the cache invalidation flow.",
      "prediction": "中等概率，改编自近年相邻课程架构题，主要用于练模式、战术、连接件和一致性取舍。",
      "answer": {
        "summary": "这题把 2022 相邻课程的缓存题改成架构题，重点是失效协调、事件广播、适配异构缓存协议和一致性取舍。",
        "points": [
          "新增缓存失效协调器或消息代理，负责把某个节点的数据变更广播给其他节点。",
          "更新节点先完成数据库提交，再发布 CacheInvalidated 或 DataChanged 事件，避免其他节点先失效后又读到旧数据。",
          "每个服务器旁放一个缓存适配器，适配本地缓存协议，收到事件后删除、标记过期或重新加载对应数据。",
          "连接件可以是消息队列、发布订阅通道或 Web Service/统一接口，作用是隔离异构协议并降低节点直接耦合。",
          "如果要求强一致性，需要同步失效或集中缓存，代价是延迟和可用性压力；如果接受最终一致性，可异步广播，代价是短时间旧数据。",
          "还要补监控与失败处理：事件重试、幂等处理、失效日志、死信队列和缓存版本号。"
        ],
        "drawing": {
          "how": [
            "先画 Client、Server A/B/N、Database。",
            "在服务器之间增加 Invalidation Coordinator/Broker。",
            "从 Server A 到 Database 画提交箭头，再从 Server A 到 Broker 画发布失效事件。",
            "Broker 向其他 Cache Adapter 广播，适配器删除或刷新本地缓存。"
          ],
          "src": "assets/diagrams/mock-cache-invalidation-sequence.svg",
          "alt": "缓存失效时序参考图"
        },
        "related": [
          { "type": "topic", "id": "patterns", "label": "连接件与架构模式" },
          { "type": "question", "id": "q_distributed_cache_design", "label": "分布式缓存设计题" }
        ]
      }
    },
    {
      "id": "mock-q12",
      "number": 12,
      "points": 20,
      "priority": "P0",
      "probability": "Very High",
      "difficulty": "Hard",
      "topicIds": ["microservices", "ddd", "quality", "design-decisions"],
      "sourceQuestionIds": ["q_microservice_food_delivery_design", "q_microservices_characteristics", "q_microservices_vs_soa"],
      "title": "Given an online food-delivery platform with customers, restaurants, menus, orders, payments, riders, delivery tracking, notifications, promotion rules, and settlement, use DDD and microservice architecture to design the system. Identify subdomains and bounded contexts, key aggregates and domain events, service boundaries, APIs/events, data ownership, quality trade-offs, and draw the architecture.",
      "prediction": "概率很高，适合作为主设计分析题，因为它同时覆盖 DDD、微服务、质量属性和设计决定。",
      "answer": {
        "summary": "主设计题按“适用性 - DDD 切分 - 服务映射 - 协作方式 - 数据与质量取舍 - 图”作答。",
        "points": [
          "适用性：外卖平台业务复杂、变化频繁、子域多，订单、支付、配送、商家等能力需要独立演进，适合 DDD + 微服务。",
          "子域与限界上下文：用户上下文、商家/菜单上下文、订单上下文、支付上下文、配送调度上下文、通知上下文、促销上下文、结算上下文。",
          "关键聚合：订单聚合负责订单生命周期；支付聚合负责授权、扣款、退款；配送任务聚合负责接单和配送状态；商家/菜单聚合负责菜品和营业状态；结算聚合负责商家与骑手结算。",
          "领域事件：OrderCreated、PaymentAuthorized、RestaurantAccepted、RiderAssigned、DeliveryStarted、DeliveryCompleted、OrderCancelled、SettlementGenerated。",
          "服务边界：服务优先对齐限界上下文，每个服务有自己的数据库或数据存储，不共享表。",
          "协作方式：用户下单可经 API Gateway 进入订单服务；订单创建后发布事件；支付、商家、配送、通知通过事件协作；需要事务链时使用 Saga 和补偿。",
          "接口与事件：同步 API 用于查询、提交命令和用户交互；事件用于跨服务状态推进和解耦。",
          "质量属性：独立部署和弹性扩展提升可修改性和可伸缩性；熔断、重试、超时、健康检查提升可用性；集中日志、指标和分布式追踪支撑可观测性。",
          "主要取舍：系统从单进程调用变成网络协作，数据一致性、调试、部署治理和端到端测试都更复杂。",
          "文档化：至少给出服务/事件的组件连接件视图、部署视图，以及关键业务场景的序列说明。"
        ],
        "drawing": {
          "how": [
            "先画用户端、商家端、骑手端和 API Gateway。",
            "中间画订单、支付、商家菜单、配送、通知、促销、结算等服务，并用不同边界表示限界上下文。",
            "每个服务下方画自己的数据存储，强调数据所有权。",
            "用事件总线连接订单、支付、配送、通知、结算，箭头标出关键领域事件。",
            "右侧补监控、日志、追踪、配置和服务发现等平台能力。"
          ],
          "src": "assets/diagrams/mock-food-delivery-ddd-microservices.svg",
          "alt": "外卖平台 DDD 与微服务参考架构图"
        },
        "related": [
          { "type": "topic", "id": "ddd", "label": "DDD 与服务边界" },
          { "type": "topic", "id": "microservices", "label": "微服务模式" },
          { "type": "question", "id": "q_microservice_food_delivery_design", "label": "微服务 + DDD 设计题" }
        ]
      }
    }
  ]
};
