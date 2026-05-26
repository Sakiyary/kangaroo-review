# Exam Review Frontend IA Proposal

Status: first-pass proposal from visible filenames plus already-readable Markdown only.

## Evidence Boundary

- Used as content evidence:
  - `raw/架构.md`
  - `raw/(2025-05-21)南京大学软件学院-2024-软件体系结构（研究生）期末复习参考_timeErrors.md`
  - `raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md`
  - `raw/zqx考试复习资料/考题手敲英文版.md`
- Used as filename evidence only:
  - all files under `slides/`
  - PDFs, DOCX, RTF, PNG assets under `raw/`
- Guardrail: do not present slide/PDF-only facts as reviewed content until text extraction or manual validation confirms them. Filename-only sources can drive source-library navigation and pending-work labels, not answer content.

## Proposed Top-Level Frontend Sections

1. `复习总览 / Review Dashboard`
   - Purpose: make the exam scope scannable before the user opens individual notes.
   - Primary blocks:
     - priority tiers
     - current-focus warning/conflict flags
     - recent/pending source extraction status
     - quick links to past-paper clusters

2. `重点路线 / Priority Review Path`
   - Purpose: guide review order.
   - Organize by `P0`, `P1`, `P2`, `Backlog/Pending Extraction`.
   - Each topic card should show:
     - Chinese title
     - English title or key term
     - evidence sources
     - likely question forms seen in Markdown
     - confidence: `Markdown-confirmed`, `Filename-only`, or `Needs OCR/extraction`

3. `知识图谱 / Knowledge Map`
   - Purpose: browse course concepts independently from past papers.
   - Recommended groups:
     - architecture fundamentals
     - requirements, ASR, and quality attributes
     - architecture process, ADD, documentation, and evaluation
     - architecture styles, views, patterns, and tactics
     - microservices
     - DDD
     - enterprise architecture

4. `中英术语表 / Bilingual Glossary`
   - Purpose: support bilingual exam wording and answer recall.
   - Glossary should be category-first, not one flat alphabetic list.
   - Include canonical spelling plus raw aliases/typos where present, for example `Environment` with raw alias `Enviroment`, `Sensitivity points` with raw alias `Sentitivity points`.

5. `往年题库 / Past Papers`
   - Purpose: make historical questions searchable by year, topic, question type, and evidence status.
   - Past-paper cards should preserve original wording and language.
   - Do not merge near-duplicates destructively; show duplicate links across years.

6. `资料库 / Source Library`
   - Purpose: expose all raw inputs and extraction status.
   - Separate tabs:
     - Markdown-confirmed notes
     - filename-only slides
     - filename-only papers/docs
     - image/PDF extraction backlog

## Priority Tiers

### P0: Current Review Focus

These should be the first screen's strongest signal because the large 2024 review Markdown explicitly lists them as the three main focus areas.

1. `微服务 / Microservices`
   - Evidence:
     - 2024 review Markdown lists microservices as a main focus and describes it as an analysis/design question area.
     - filenames include `Lecture 6-7: Microservices Architecture - Microservices Patterns.pdf`.
   - Frontend subsections:
     - mainstream architecture styles: monolith, layered, SOA, microservices
     - core microservice design patterns
     - service decomposition: business capability, subdomain, refactoring/call-relationship analysis
     - communication: service discovery, API gateway, circuit breaker, REST/gRPC
     - deployment: multi-instance, VM, container, deployment platform, serverless
     - migration: communication, deployment, data/service migration strategies
   - Likely interaction:
     - case design checklist
     - compare SOA vs microservices
     - pattern selection cards

2. `领域驱动设计 / Domain-Driven Design`
   - Evidence:
     - 2024 review Markdown lists DDD as a main focus and describes it as case-based short answers.
     - filenames include `Lecture 8-9: Domain Driven Design - 领域驱动设计项目实战讲解.pdf`.
   - Frontend subsections:
     - domain and domain model
     - service decomposition
     - strategic patterns: bounded context, shared kernel, partnership, upstream/downstream, customer/supplier
     - tactical patterns: entity, value object, aggregate, domain event, domain service, repository, factory
     - case workflow: domain exploration, modeling, context mapping, implementation strategy, iteration
   - Likely interaction:
     - term-to-example matching
     - bounded-context decomposition exercise
     - short-answer template

3. `企业架构 / Enterprise Architecture`
   - Evidence:
     - 2024 review Markdown lists enterprise architecture as a main focus and describes it as short-answer material.
     - filenames include `Lecture 10-11: Enterprise Architecture - 企业架构设计实战课-南京大学_课件版.pdf`.
   - Frontend subsections:
     - business architecture
     - application architecture
     - technology architecture
     - security architecture
     - process/meaning/principles
   - Likely interaction:
     - layer/process flashcards
     - case-based mapping from business/application/technology/security concerns

### P1: Historically High-Frequency Core

These appear repeatedly in readable past-paper Markdown and/or are marked as high-frequency/required in the 2024 review Markdown. They should stay prominent but below the current-focus P0 set.

1. `质量属性与场景建模 / Quality Attributes and Scenarios`
   - Topics:
     - source, stimulus, artifact, environment, response, response measure
     - availability, interoperability, modifiability, performance, security, testability, usability
     - tactics as quality design decisions
   - Question forms:
     - draw/model stimulus-response diagrams
     - explain quality attributes and tactics

2. `架构过程、ASR、ADD / Architecture Process, ASR, ADD`
   - Topics:
     - identify ASRs, architecture design, documentation, evaluation
     - inputs and outputs for each process activity
     - ADD steps
     - sources/methods for extracting ASRs
   - Question forms:
     - brief descriptions
     - input/output tables
     - process ordering

3. `视图与文档化 / Views and Documentation`
   - Topics:
     - 4+1 views: logical, process, physical/deployment, development/implementation, use-case scenarios
     - View & Beyond
     - module, component-and-connector, allocation, and quality views
   - Important conflict:
     - Past-paper Markdown shows repeated questions on views/documentation.
     - The 2024 review Markdown also says `ATAM和文档视图不考`.
     - Frontend should show this as an `exam-year-sensitive` warning, not silently remove the topic.

4. `架构模式、风格、战术 / Patterns, Styles, Tactics`
   - Topics:
     - module patterns, component-connector patterns, allocation patterns
     - layered, broker, MVC, pipe-and-filter, client-server, peer-to-peer, service-oriented, publish-subscribe, shared-data, map-reduce, multi-tier
     - patterns vs tactics
   - Question forms:
     - map problems to styles/views
     - compare layered vs multi-tier
     - explain Broker pattern

5. `架构评估与ATAM / Evaluation and ATAM`
   - Topics:
     - risks, non-risks, risk themes
     - sensitivity points
     - trade-off points
     - utility tree
     - ATAM phases, stakeholders, outputs
   - Important conflict:
     - Historical Markdown includes repeated ATAM/evaluation questions.
     - 2024 review Markdown says `ATAM和文档视图不考`.
     - Treat as P1 historical core with a current-focus downgrade flag.

### P2: Foundation and Comparison Topics

These support short answers and context but should not dominate the first screen.

1. `软件架构基础 / Software Architecture Foundations`
   - definition: structure, elements, relationships, design
   - sources: NFRs, ASRs, quality requirements, stakeholders, organizations, technical environment, business goals, business/technical decisions
   - roles/responsibilities of software architect
   - why architecture matters

2. `产品线、复用、变化 / Product Line, Reuse, Variability`
   - software product line vs simple/single product
   - SPL and MDA reuse
   - variability mechanisms
   - binding time and modifiability/testability

3. `设计原则和设计题 / Design Principles and Case Questions`
   - generic design strategies
   - strategy pattern case designs
   - OO principles in strategy pattern
   - drawing architecture/class diagrams when explicitly required by a past question

4. `概念辨析 / Concept Distinctions`
   - software requirements vs quality attributes vs ASRs
   - architecture vs structure vs design
   - software vs hardware
   - science vs engineering
   - stakeholder/concern mapping

### Backlog: Extraction-Dependent Material

These should be visible in the source library but not used as confirmed answer content yet.

- `slides/*.pdf`: lecture filenames establish topic coverage only.
- `raw/*.pdf`: likely contains review summaries and past-paper collections, but content is not confirmed from readable Markdown.
- `raw/zqx考试复习资料/**/*.docx`: filenames establish years/forms only.
- `raw/zqx考试复习资料/考题手敲中文版.rtf`: visible as a Chinese manual-entry source, but content was not used here.
- `raw/架构.assets/*.png`: diagram assets referenced by `raw/架构.md`; diagram semantics need visual/OCR validation before being turned into quiz content.

## Bilingual Glossary Categories

1. `架构基础 / Architecture Fundamentals`
   - software architecture, structure, elements, relationships, design
   - software architect, responsibilities, roles
   - stakeholder, concern

2. `需求与驱动 / Requirements and Drivers`
   - NFRs / non-functional requirements
   - ASRs / architecturally significant requirements
   - quality requirements
   - constraints
   - business goals
   - organisations / organizations
   - technical environment

3. `质量属性场景 / Quality Attribute Scenario Anatomy`
   - source
   - stimulus
   - artifact
   - environment
   - response
   - response measure

4. `质量属性与战术 / Quality Attributes and Tactics`
   - availability
   - interoperability
   - modifiability
   - performance
   - security
   - testability
   - usability
   - tactic
   - quality design decision

5. `视图与文档 / Views and Documentation`
   - View & Beyond
   - logical view
   - process view
   - physical/deployment view
   - development/implementation view
   - use-case/scenario view
   - module view
   - component-and-connector view
   - allocation view
   - quality view
   - documentation roadmap
   - context diagram
   - rationale
   - variability guide

6. `模式与风格 / Patterns and Styles`
   - architecture pattern
   - module pattern
   - component-connector pattern
   - allocation pattern
   - layered pattern
   - broker pattern
   - MVC pattern
   - pipe-and-filter pattern
   - client-server pattern
   - peer-to-peer pattern
   - service-oriented pattern
   - publish-subscribe pattern
   - shared-data pattern
   - map-reduce pattern
   - multi-tier pattern
   - micro-kernel pattern
   - monolith
   - SOA

7. `设计方法 / Design Methods`
   - abstraction
   - decomposition
   - divide and conquer
   - generation and test
   - iteration and refinement
   - reuse
   - Attribute-Driven Design / ADD
   - interface

8. `评估 / Evaluation`
   - ATAM
   - risk
   - non-risk
   - risk theme
   - sensitivity point
   - trade-off point
   - utility tree

9. `微服务 / Microservices`
   - service decomposition
   - business capability
   - subdomain
   - service discovery
   - API gateway
   - circuit breaker
   - RESTful API
   - gRPC
   - Docker
   - Kubernetes
   - blue-green deployment
   - canary release

10. `DDD / Domain-Driven Design`
    - domain
    - domain model
    - subdomain
    - ubiquitous language
    - bounded context
    - shared kernel
    - partnership
    - upstream/downstream
    - customer/supplier
    - entity
    - value object
    - aggregate
    - aggregate root
    - domain event
    - domain service
    - repository
    - factory

11. `企业架构 / Enterprise Architecture`
    - business architecture
    - application architecture
    - technology architecture
    - security architecture
    - strategy design
    - organization design
    - application component
    - physical component
    - technical platform
    - security requirement
    - security tool

12. `题库元数据 / Past-Paper Metadata`
    - year
    - paper
    - recall version
    - A/B paper
    - answer
    - manual entry
    - Chinese version
    - English version
    - source confidence

## Past-Paper Organization

### Source Buckets

1. `Markdown-confirmed item banks`
   - `raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md`
     - explicit sections for 2015, 2017, 2018 recall, 2019 final, plus design-question notes.
   - `raw/zqx考试复习资料/考题手敲英文版.md`
     - English manual-entry question list; content overlaps with the 2015 list, but the file itself is not independently year-labelled.
   - `raw/(2025-05-21)南京大学软件学院-2024-软件体系结构（研究生）期末复习参考_timeErrors.md`
     - topic-organized past-paper review notes with year markers and frequency labels.

2. `Filename-only past-paper files`
   - `raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx`
   - `raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx`
   - `raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx`
   - `raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.pdf`
   - `raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx`
   - `raw/zqx考试复习资料/【批量下载】18年等/18年.pdf`
   - `raw/zqx考试复习资料/往年资料以及答案.docx`
   - `raw/zqx考试复习资料/往年资料以及答案.pdf`
   - `raw/体系结构往年考题整理：.pdf`
   - `raw/体系结构考题回忆版.pdf`

### Metadata Model

Each past-paper item should carry:

- `year`: explicit year from Markdown section or filename; otherwise unknown.
- `session`: e.g. spring/class/final/recall when present.
- `paper_form`: A/B/unknown.
- `language`: Chinese, English, bilingual, unknown.
- `source_type`: Markdown, PDF, DOCX, RTF, filename-only.
- `source_confidence`: Markdown-confirmed, filename-only, OCR-pending, manually-verified.
- `question_type`: definition, compare/contrast, process I/O, diagram/modeling, mapping, case design, short answer.
- `topic_tags`: from the knowledge-map taxonomy.
- `frequency_signal`: repeated-year marker, Markdown bold/high-frequency marker, or none.
- `requires_diagram`: true/false/unknown.
- `answer_status`: has answer, needs answer, filename-only unknown.
- `duplicate_group`: stable ID for repeated or near-duplicate questions.

### Browsing Modes

1. `By Year`
   - 2015, 2016, 2017, 2018, 2019, 2023 marker, 2024 review focus.
   - Keep 2016/2015 A/B papers separate until content is extracted.

2. `By Topic`
   - quality attributes
   - ASR/process/ADD
   - views/documentation
   - patterns/styles/tactics
   - ATAM/evaluation
   - microservices
   - DDD
   - enterprise architecture
   - foundations/comparisons

3. `By Question Type`
   - memorize definition
   - explain relationship
   - compare two concepts
   - draw/model diagram
   - map/matching question
   - design case

4. `By Confidence`
   - Markdown-confirmed
   - filename-only
   - needs extraction
   - conflict with current-focus note

## Conflict and Confidence Handling

1. `Current-focus vs historical-frequency`
   - The frontend should explicitly separate current 2024 focus from historical repetition.
   - Example: ATAM and documentation views appear historically, but the 2024 review Markdown says `ATAM和文档视图不考`.

2. `Filename-only material`
   - Show as source inventory and extraction queue.
   - Do not generate answers, flashcards, or topic-frequency claims from filename-only files.

3. `Image-only diagrams`
   - Markdown references two local image assets in `raw/架构.md`.
   - The frontend may show them as attachments, but diagram content should be marked unverified until manually checked.

4. `Typos and mixed terminology`
   - Store raw text as-is for source fidelity.
   - Add canonical glossary entries for search and study, with raw aliases for misspellings.

## Minimal Acceptance Criteria for Frontend Planning

- A user can distinguish `P0 current-focus topics` from `P1 historical high-frequency topics`.
- A user can open a topic and see which evidence source justified its priority.
- A user can browse past questions by year, topic, question type, and confidence.
- Filename-only PDFs/DOCX/RTF are visible but cannot be mistaken for extracted answer content.
- Bilingual glossary search returns both Chinese and English labels for core terms.
- Conflicting signals, especially `ATAM/documentation historically common` vs `2024 note says not tested`, are visible in the UI.
