window.reviewQuestions = [
  {
    "id": "q_arch_sources",
    "cluster": "architecture_basics",
    "canonical_question": "Where does software architecture come from? List five possible sources.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 B"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx"
    ],
    "recurring_terms": [
      "requirements",
      "stakeholders",
      "development organization",
      "architects",
      "technical environment"
    ],
    "likely_answer_pattern": "List five sources: requirements, system stakeholders, development organization, architects, and technical/operational environment."
  },
  {
    "id": "q_arch_design_structure",
    "cluster": "architecture_basics",
    "canonical_question": "Explain the difference between architecture and design, and between architecture and structure.",
    "appearances": [
      "2015 B",
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "architecture",
      "design",
      "structure",
      "externally visible properties"
    ],
    "likely_answer_pattern": "Architecture is high-level design and a set of structures; all architecture is design but not all design is architecture; structure is elements, relations, and externally visible properties."
  },
  {
    "id": "q_req_quality_asr",
    "cluster": "quality_attributes_asr",
    "canonical_question": "Describe the difference and relationship between software requirements, quality attributes, and ASRs.",
    "appearances": [
      "2015 B",
      "2016 B",
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "requirements",
      "quality attributes",
      "ASR",
      "constraints",
      "non-functional requirements"
    ],
    "likely_answer_pattern": "Requirements describe what the system must do and constraints; quality attributes are non-functional qualities; ASRs are requirements that significantly affect architectural decisions."
  },
  {
    "id": "q_requirement_kinds",
    "cluster": "quality_attributes_asr",
    "canonical_question": "What kinds of requirements influence architecture design decisions and how are they specified?",
    "appearances": [
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "functional requirements",
      "quality requirements",
      "constraints"
    ],
    "likely_answer_pattern": "Name functional requirements, quality requirements, and constraints; explain that functional requirements state behavior/value, quality requirements state desired system characteristics, and constraints are pre-made design decisions."
  },
  {
    "id": "q_quality_scenarios",
    "cluster": "quality_attributes_asr",
    "canonical_question": "Model quality attribute scenarios in stimulus-response format.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2017 recall",
      "2018 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "source of stimulus",
      "stimulus",
      "environment",
      "artifact",
      "response",
      "response measure",
      "availability",
      "performance",
      "modifiability",
      "interoperability"
    ],
    "likely_answer_pattern": "Draw or describe the six-part quality attribute scenario: source, stimulus, environment, artifact, response, response measure; provide requested attributes such as availability, performance, modifiability, or interoperability."
  },
  {
    "id": "q_asr_sources",
    "cluster": "quality_attributes_asr",
    "canonical_question": "What are ASRs? List sources and methods for extracting and identifying ASRs.",
    "appearances": [
      "2017 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "ASR",
      "requirements documents",
      "stakeholders",
      "scenario analysis",
      "constraints",
      "business goals"
    ],
    "likely_answer_pattern": "Define ASR as architecturally significant requirement; list requirement document analysis, stakeholder workshops/interviews, scenario/use-case analysis, business goals, and technical/organizational constraints."
  },
  {
    "id": "q_risk_sensitivity_tradeoff",
    "cluster": "quality_attributes_asr",
    "canonical_question": "Define risks, sensitivity points, and trade-off points, with examples.",
    "appearances": [
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "risks",
      "sensitivity points",
      "trade-off points",
      "quality attributes"
    ],
    "likely_answer_pattern": "Risk is a potential negative outcome; sensitivity point is a decision or parameter where small change affects a quality attribute; trade-off point affects multiple quality attributes in opposite directions."
  },
  {
    "id": "q_arch_process",
    "cluster": "process_methods",
    "canonical_question": "Briefly describe general activities in a software architecture process, including inputs and outputs.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 A",
      "2017 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "ASR",
      "architecture design",
      "documentation",
      "evaluation",
      "inputs",
      "outputs"
    ],
    "likely_answer_pattern": "Use the process chain: identify/specify ASRs, design architecture, document views and rationale, evaluate architecture, and evolve/manage it; include inputs/outputs when requested."
  },
  {
    "id": "q_add_process",
    "cluster": "process_methods",
    "canonical_question": "Describe the Attribute-Driven Design (ADD) process.",
    "appearances": [
      "2015 B",
      "2016 B",
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "ADD",
      "ASR",
      "decompose",
      "design concept",
      "patterns",
      "tactics",
      "interfaces"
    ],
    "likely_answer_pattern": "Confirm requirements, choose an element, identify ASRs, choose design concepts/patterns/tactics, capture preliminary views, instantiate elements, assign responsibilities, define interfaces, refine requirements, repeat."
  },
  {
    "id": "q_atam_outputs",
    "cluster": "process_methods",
    "canonical_question": "Describe outputs generated from each phase of ATAM.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 B",
      "2017 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "ATAM",
      "evaluation plan",
      "utility tree",
      "risks",
      "non-risks",
      "sensitivity points",
      "tradeoff points",
      "final report"
    ],
    "likely_answer_pattern": "Phase 0 evaluation plan; Phase 1 business goals, architecture presentation, utility tree, scenarios, risks/non-risks, sensitivity/tradeoff points; Phase 2 stakeholder scenarios and risk themes; Phase 3 final report."
  },
  {
    "id": "q_atam_stakeholders",
    "cluster": "process_methods",
    "canonical_question": "Describe stakeholders involved in ATAM and their roles in each phase/step.",
    "appearances": [
      "2015 B",
      "2016 A",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "ATAM",
      "evaluation team",
      "project decision makers",
      "stakeholders",
      "architect",
      "scenarios"
    ],
    "likely_answer_pattern": "Explain roles for evaluation team leadership, project decision makers, project manager/customer, lead architect, and broader stakeholders; tie each role to scenario generation, prioritization, architecture presentation, and risk analysis."
  },
  {
    "id": "q_style_view_mapping",
    "cluster": "views_documentation",
    "canonical_question": "Map architecture questions to style/view categories and list four views for each category.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 A",
      "2017 recall",
      "2018 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "module styles",
      "component-connector styles",
      "allocation styles",
      "views"
    ],
    "likely_answer_pattern": "Map implementation units to module styles, runtime behavior/interactions to C&C styles, and non-software environment relation to allocation styles; list examples for each category."
  },
  {
    "id": "q_different_views",
    "cluster": "views_documentation",
    "canonical_question": "Why should software architecture be documented using different views? Give four example views and purposes.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 A",
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "views",
      "stakeholders",
      "quality attributes",
      "module",
      "C&C",
      "allocation",
      "quality views"
    ],
    "likely_answer_pattern": "Different views serve different stakeholders/goals, highlight different elements/relations, and expose different quality attributes; name module, C&C, allocation, and quality or 4+1 views with purposes."
  },
  {
    "id": "q_doc_package",
    "cluster": "views_documentation",
    "canonical_question": "What should be included in a typical software architecture documentation package?",
    "appearances": [
      "2015 B",
      "2016 B",
      "2017 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "architecture documentation",
      "views",
      "documentation roadmap",
      "rationale",
      "interfaces",
      "quality attributes"
    ],
    "likely_answer_pattern": "Include architecture overview, views and view descriptions, beyond-view documentation, mapping between views, rationale/decisions, interface definitions, quality attributes, deployment/configuration notes."
  },
  {
    "id": "q_4_plus_1",
    "cluster": "views_documentation",
    "canonical_question": "Describe Philippe Kruchten's 4+1 views.",
    "appearances": [
      "2015 B",
      "2016 B",
      "2017 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx",
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md"
    ],
    "recurring_terms": [
      "4+1",
      "logical view",
      "process view",
      "physical view",
      "development view",
      "use cases"
    ],
    "likely_answer_pattern": "List logical, process, physical/deployment, development/implementation, plus scenarios/use cases; explain the purpose of each."
  },
  {
    "id": "q_patterns_tactics",
    "cluster": "patterns_styles",
    "canonical_question": "Describe relationships between architectural patterns and tactics; list tactics and their usage.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "patterns",
      "tactics",
      "building blocks",
      "architectural force"
    ],
    "likely_answer_pattern": "Tactics are smaller mechanisms addressing one force; patterns package multiple decisions and often combine tactics; list tactics such as timestamp, sanity checking, orchestrate, control resource demand, caching, load balancing."
  },
  {
    "id": "q_generic_design_strategies",
    "cluster": "patterns_styles",
    "canonical_question": "What generic design strategies are applied in software design? Give architecture examples.",
    "appearances": [
      "2017 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "layering",
      "componentization",
      "SOA",
      "plug-in"
    ],
    "likely_answer_pattern": "Name strategies such as layering, componentization, SOA, plug-in; for each, provide a small architecture example and why it supports change/reuse."
  },
  {
    "id": "q_cnc_mvc",
    "cluster": "patterns_styles",
    "canonical_question": "What is the nature of component-connector style? Use MVC as an example.",
    "appearances": [
      "2015 B",
      "2016 B",
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "component-connector",
      "MVC",
      "model",
      "view",
      "controller",
      "notifies"
    ],
    "likely_answer_pattern": "Explain C&C as runtime components and connectors; MVC has model data/state, view UI, controller mediating user input and model/view updates, connected through calls/events/notifications."
  },
  {
    "id": "q_broker_pattern",
    "cluster": "patterns_styles",
    "canonical_question": "Explain the context, benefits, and limitations of Broker Architecture Pattern.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 B",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx"
    ],
    "recurring_terms": [
      "broker",
      "clients",
      "servers",
      "indirection",
      "latency",
      "single point of failure"
    ],
    "likely_answer_pattern": "Broker mediates communication between clients and servers; benefits are extensibility/reuse/dynamic server changes; limits are latency, bottleneck, single point of failure, complexity, security target, test difficulty."
  },
  {
    "id": "q_layered_style",
    "cluster": "patterns_styles",
    "canonical_question": "Explain the context, benefits, and limitations of Layered Architecture Style.",
    "appearances": [
      "2015 B",
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "layered",
      "allowed-to-use",
      "reuse",
      "performance penalty",
      "portability",
      "modifiability"
    ],
    "likely_answer_pattern": "Layered style groups modules into layers with an allowed-to-use relation; benefits are separation and reuse; limitations are complexity, performance penalty, poor abstractions, and layer bridging."
  },
  {
    "id": "q_layered_vs_multitier",
    "cluster": "patterns_styles",
    "canonical_question": "Describe the difference between Layered pattern and Multi-tier pattern.",
    "appearances": [
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "Layered",
      "Multi-tier",
      "logical layers",
      "physical deployment"
    ],
    "likely_answer_pattern": "Layered emphasizes logical separation and allowed-to-use dependencies; multi-tier emphasizes deployment/distribution of tiers across processes or machines."
  },
  {
    "id": "q_soa_quality",
    "cluster": "patterns_styles",
    "canonical_question": "Describe SOA principles and their impact on quality attributes.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "SOA",
      "boundaries",
      "autonomous services",
      "contracts",
      "interoperability",
      "scalability",
      "security"
    ],
    "likely_answer_pattern": "State explicit boundaries, autonomous services, shared schemas/contracts not implementations, policy-based compatibility; discuss interoperability, scalability/performance, and security tradeoffs."
  },
  {
    "id": "q_soa_ws_esb",
    "cluster": "patterns_styles",
    "canonical_question": "Describe purposes of SOA, Web Service, and ESB; discuss differences and relations.",
    "appearances": [
      "2015 B",
      "2016 B"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx"
    ],
    "recurring_terms": [
      "SOA",
      "Web Service",
      "ESB",
      "interoperability",
      "middleware",
      "SOAP",
      "WSDL"
    ],
    "likely_answer_pattern": "SOA is architectural principle/style; Web Service is integration/implementation technology; ESB is middleware infrastructure that can support SOA, often using Web Services but not equivalent to SOA."
  },
  {
    "id": "q_microservices_vs_soa",
    "cluster": "patterns_styles",
    "canonical_question": "Compare microservices and SOA.",
    "appearances": [
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "microservices",
      "SOA",
      "service granularity",
      "autonomy",
      "data ownership",
      "communication"
    ],
    "likely_answer_pattern": "Both are service-oriented, modular, distributed, and loosely coupled; microservices are smaller, independently deployed/owned, often lightweight protocol and service-owned data; SOA may use larger enterprise services and ESB governance."
  },
  {
    "id": "q_spl_vs_single",
    "cluster": "reuse_variability",
    "canonical_question": "What distinguishes architecture for a software product line from architecture for a single/simple product?",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 B",
      "2017 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx"
    ],
    "recurring_terms": [
      "SPL",
      "software product line",
      "variants",
      "core assets",
      "systematic variation"
    ],
    "likely_answer_pattern": "SPL architecture supports multiple simultaneous variants from managed shared core assets; it manages commonality/variability and is not merely releases or reconfiguration of one product."
  },
  {
    "id": "q_reuse_spl_mda_soa",
    "cluster": "reuse_variability",
    "canonical_question": "Why do SPL, MDA, and/or SOA have high reusability? Compare commonalities and differences.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2015 B",
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "SPL",
      "MDA",
      "SOA",
      "reuse",
      "variation",
      "PIM",
      "PSM",
      "models",
      "services"
    ],
    "likely_answer_pattern": "SPL reuses core assets with variation; MDA reuses platform-independent models and transformations; SOA reuses services/contracts and compositions; compare code/core-asset reuse, model reuse, and service reuse."
  },
  {
    "id": "q_spl_variability",
    "cluster": "reuse_variability",
    "canonical_question": "How does SPL architecture implement variability? Describe variation mechanisms and variation points.",
    "appearances": [
      "2015 B",
      "2016 A",
      "2016 B",
      "2018 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx",
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md"
    ],
    "recurring_terms": [
      "SPL",
      "variability",
      "variation points",
      "PLA",
      "feature model",
      "configuration management",
      "binding time"
    ],
    "likely_answer_pattern": "Core assets provide variation points; PLA provides the architectural basis; mechanisms include configurable components, feature models, variant management, configuration management, and binding at workspace/build/startup/runtime."
  },
  {
    "id": "q_binding_time",
    "cluster": "reuse_variability",
    "canonical_question": "Describe three change dimensions in software design and how differing binding time affects modifiability and testability.",
    "appearances": [
      "2017 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "binding time",
      "modifiability",
      "testability",
      "change dimensions"
    ],
    "likely_answer_pattern": "Explain dimensions of time, space/structure, and abstraction; later binding improves modifiability but can reduce testability, while earlier/static binding can improve testability."
  },
  {
    "id": "q_oo_principles_strategy",
    "cluster": "design_diagrams",
    "canonical_question": "Name object-oriented principles and explain how they apply in Strategy pattern.",
    "appearances": [
      "2017 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "Strategy pattern",
      "SRP",
      "OCP",
      "DIP",
      "polymorphism"
    ],
    "likely_answer_pattern": "Use SRP for each concrete strategy, OCP for adding strategies without changing context, and DIP for depending on strategy abstraction rather than concrete algorithms."
  },
  {
    "id": "q_strategy_design",
    "cluster": "design_diagrams",
    "canonical_question": "Design a system using Strategy pattern, such as flight simulation or ticket discounts.",
    "appearances": [
      "2018 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "Strategy pattern",
      "class diagram",
      "architecture diagram",
      "context",
      "strategy interface",
      "concrete strategies"
    ],
    "likely_answer_pattern": "Draw context class holding a strategy interface, concrete strategies for aircraft/discount types, and runtime selection; explain extensibility and when Strategy applies."
  },
  {
    "id": "q_three_tier_design",
    "cluster": "design_diagrams",
    "canonical_question": "Design a simple ATM or booking system in three-tier style and document it with Views and Beyond.",
    "appearances": [
      "2015 B supplemental",
      "2016 B"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx"
    ],
    "recurring_terms": [
      "three-tier",
      "presentation layer",
      "business logic layer",
      "data access layer",
      "Views and Beyond"
    ],
    "likely_answer_pattern": "Draw presentation, business logic, and data access layers; assign responsibilities; document relevant views, mappings, rationale, and interfaces."
  },
  {
    "id": "q_distributed_cache_design",
    "cluster": "design_diagrams",
    "canonical_question": "Analyze distributed cache updates and add components/patterns/tactics to invalidate other caches after state changes.",
    "appearances": [
      "2015 A",
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "distributed cache",
      "invalidation",
      "broker",
      "publish-subscribe",
      "connector",
      "web services",
      "sequence diagram"
    ],
    "likely_answer_pattern": "Add cache invalidation/update coordinator or broker/pub-sub component; commit to DB then notify other caches to invalidate/reload; for heterogeneous protocols, use connectors/adapters or web services for generic invocation."
  },
  {
    "id": "q_stakeholder_concerns",
    "cluster": "architecture_basics",
    "canonical_question": "What are software architecture concerns and who are stakeholders?",
    "appearances": [
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "concerns",
      "stakeholders",
      "functional requirements",
      "quality attributes",
      "risk management"
    ],
    "likely_answer_pattern": "List concerns such as functionality, quality attributes, design/technology choices, risk management; list stakeholders such as users/customers, business owners, developers, project managers, testers, operators, regulators."
  }
];
