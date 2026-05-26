# Past Paper Analysis: Software Architecture

Scope: focused on `raw/zqx考试复习资料/**` plus top-level raw files whose names contain `考题` or `往年`.

## Source Coverage

Usable text sources:

- `raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md`: clean year-by-year question list for 2015, 2017, 2018, 2019.
- `raw/zqx考试复习资料/考题手敲英文版.md`: English-only 2015 question list.
- `raw/zqx考试复习资料/往年资料以及答案.docx` and `data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt`: question list plus answer notes for 2015, 2017, 2018, 2019.
- `raw/zqx考试复习资料/【批量下载】18年等/*.docx`: 2015/2016 A/B paper-style documents with scores, answer notes, and design questions.

Limited sources:

- `raw/体系结构考题回忆版.pdf`, `raw/体系结构往年考题整理：.pdf`, `raw/zqx考试复习资料/往年资料以及答案.pdf`, `raw/zqx考试复习资料/【批量下载】18年等/*.pdf`: local PDF text extraction was unavailable (`pdftotext`, `pypdf`, `pdfminer`, and `fitz` not installed; `textutil` could not read the PDFs). The DOCX/Markdown versions appear to cover the same core question sets, but PDF-only image content may still contain diagrams or exact layout.

## Strongest Recurring Clusters

| Rank | Cluster | Evidence | What to Prepare |
| --- | --- | --- | --- |
| 1 | Views, style mapping, and architecture documentation | Appears in nearly every year: mapping style/view categories, 4+1 view, why multiple views, documentation package, Views and Beyond | Memorize the three main view/style categories and examples; be able to map "implementation units" to module, "runtime behavior/interactions" to C&C, and "non-software environment" to allocation. |
| 2 | Quality attributes, scenarios, and ASRs | Quality attribute stimulus-response appears in 2015, 2017, 2018, 2019; ASR questions appear in 2017, 2018, 2019 and 2015/2016 paper variants | Use the six-part scenario template: source, stimulus, environment, artifact, response, response measure. Prepare availability, performance, modifiability, interoperability examples. |
| 3 | Architecture process, ADD, and ATAM | Process activities recur in 2015/2016/2017; ADD in 2015B/2016B/2018; ATAM outputs and stakeholder roles recur in 2015/2016/2017/2019 | Answer phase-by-phase: inputs, activities, outputs, stakeholders, risks/non-risks, sensitivity points, tradeoff points, utility tree, final report. |
| 4 | Patterns, tactics, and architectural styles | Pattern-vs-tactic, Broker, Layered, C&C/MVC, SOA/Web Service/ESB, microservices vs SOA | For each pattern/style, prepare context, core structure, benefits, limitations, and quality attribute impact. |
| 5 | Reuse, SPL/MDA/SOA, and variability | SPL vs single product, SPL/MDA reuse, SPL/SOA/MDA reuse, variation mechanisms, binding time | Use "shared core assets + variation points + PLA + binding time" as the main SPL answer frame. Contrast code reuse, model reuse, and service reuse. |
| 6 | Design and diagram problems | Strategy-pattern flight/ticket systems, three-tier ATM/booking systems, distributed cache invalidation | Practice drawing class/component/sequence sketches. Always name components, responsibilities, connectors, and the quality attributes improved or traded off. |

## Recurring Terms

High-frequency English terms in the extracted question/answer text: `view/views`, `SOA`, `pattern`, `SPL`, `ASR`, `MDA`, `quality attribute(s)`, `ATAM`, `requirements`, `tactics`, `MVC`, `stimulus`, `response`, `scenario`, `component-connector`, `broker`, `4+1`.

High-frequency Chinese terms: `需求`, `组件`, `视图`, `模式`, `质量属性`, `约束`, `风险`, `软件产品线`, `策略模式`, `可变性`, `连接器`, `微服务`, `利益相关方`, `分层`, `架构文档`.

## Likely Answer Patterns

### 1. Views and Documentation

Expected shape:

1. State why views are needed: different stakeholders, concerns, elements, relations, and quality attributes.
2. Name view categories and examples:
   - Module: decomposition, uses, generalization, layered, aspects, data model.
   - Component-and-connector: pipe-and-filter, client-server, peer-to-peer, SOA, publish-subscribe, shared-data, multi-tier.
   - Allocation: deployment, install, work assignment, other allocation.
3. If asked about 4+1, list logical, process, physical, development, plus scenarios/use cases.
4. If asked about documentation package, include view documentation plus beyond-view information: overview, documentation roadmap, view mappings, rationale, interface definitions, quality attributes, deployment/configuration notes.

Common trap: do not list four arbitrary UML diagrams when the question asks for style/view categories. The recurring mapping question is specifically about module, C&C, and allocation styles.

### 2. Quality Attribute Scenarios and ASRs

Expected shape:

1. Define quality attributes as non-functional qualities beyond functionality.
2. Define ASR as a requirement that has significant architectural impact.
3. Scenario template: source of stimulus, stimulus, environment, artifact, response, response measure.
4. Sources/methods for ASRs: requirements documents, stakeholder workshops/interviews, scenario analysis/use cases, business goals, technical constraints, existing environment.
5. For diagrams, use the stimulus-response flow and label every node.

Prepared examples:

- Availability: monitor/heartbeat detects server unresponsive during normal operation; system informs operator/fails over/continues operation; response measure is no downtime or bounded recovery time.
- Performance: users initiate transactions during normal operation; system processes transactions; response measure is average latency or throughput.
- Modifiability: developer requests a feature change; system/local module is modified and tested; response measure is change effort, affected modules, or time.
- Interoperability: external system sends a request using a defined protocol; target system exchanges data correctly; response measure is successful exchange/semantic correctness.

### 3. Architecture Process, ADD, and ATAM

Architecture process answer frame:

1. Identify/specify ASRs.
2. Design architecture using patterns, tactics, constraints, and candidate views.
3. Document selected views and rationale.
4. Evaluate architecture against prioritized quality scenarios.
5. Evolve/manage architecture as requirements and risks change.

ADD answer frame:

1. Confirm enough requirements.
2. Choose element to decompose.
3. Identify ASRs for that element.
4. Choose design concepts: identify concerns, list/select patterns and tactics, relate them to ASRs, capture preliminary views, resolve inconsistencies.
5. Instantiate elements and allocate responsibilities.
6. Define interfaces.
7. Verify/refine requirements and constraints.
8. Repeat until ASRs are satisfied.

ATAM answer frame:

- Phase 0: evaluation plan.
- Phase 1: business goals, architecture presentation, architectural approaches, utility tree, prioritized quality scenarios, risks/non-risks, sensitivity points, tradeoff points.
- Phase 2: stakeholder scenarios, prioritized/merged scenarios, additional analysis, risk themes.
- Phase 3: final evaluation report.

Stakeholder roles often asked: evaluation team leads the process, project decision makers set goals and stakeholder list, project manager/customer presents overview/business drivers, lead architect presents architecture, broader stakeholders contribute/prioritize scenarios.

### 4. Patterns, Tactics, and Styles

Pattern-vs-tactic answer:

- Tactics are smaller design decisions addressing one architectural force.
- Patterns package multiple design decisions and often combine tactics.
- Patterns and tactics are architect tools; tactics are building blocks for patterns.

Reusable style answer template:

1. Context: when the style/pattern is useful.
2. Structure: main components/connectors and relations.
3. Benefits: extensibility, reuse, separation of concerns, interoperability, scalability, etc.
4. Limitations/tradeoffs: latency, bottleneck, single point of failure, up-front complexity, performance penalty, testing difficulty, security exposure.

Specific patterns:

- Broker: broker mediates clients/servers; high extensibility/reuse; adds indirection, latency, bottleneck, SPOF, security and test concerns.
- Layered: layers with allowed-to-use relation; modularity/reuse/portability; adds complexity/performance cost; layer bridging weakens benefits.
- C&C/MVC: model holds data/state, view presents UI, controller mediates user actions and model/view updates; connectors coordinate notifications/events/calls.
- SOA/Web Service/ESB: SOA is an architectural principle/style; Web Service is an implementation technology/standard; ESB is middleware infrastructure that can support SOA.
- Microservices vs SOA: both service-oriented and distributed; microservices are typically smaller, more autonomous, independently deployed, often use lightweight protocols and service-owned data.

### 5. Reuse and Variability

SPL answer frame:

- SPL is a set of related systems sharing managed features and common core assets for a market/mission.
- It is not just versions/releases of one product.
- It uses systematic variability and a product line architecture.
- Variability is implemented through variation points, configurable components, feature models, variant/configuration management, and binding time decisions.

SPL/MDA/SOA comparison:

- SPL: reuse by shared core assets and managed variability.
- MDA: reuse by platform-independent models, transformations, and mappings to platform-specific models.
- SOA: reuse by autonomous services/contracts and composition.
- Commonality: abstraction, reuse, mass customization/variation, platform-independent thinking.
- Difference: code/core-asset reuse vs model reuse vs service reuse; implementation management vs design/model transformation vs runtime/service composition.

### 6. Design and Diagram Questions

Expected design answer shape:

1. Identify style/pattern/tactic being applied.
2. Draw or describe architecture/class/sequence view.
3. Name each component and responsibility.
4. Name connectors/protocols/interfaces.
5. Explain how the design satisfies the quality requirement and what it trades off.

Recurring design prompts:

- Strategy pattern for flight simulator or ticket discount: Context holds a strategy interface; concrete strategies implement aircraft behavior or discount calculation; changing/extending strategy does not modify context.
- Three-tier ATM/booking: presentation layer, business logic layer, data access layer; document with Views and Beyond.
- Distributed cache update: add invalidation/update coordinator or broker/pub-sub mechanism; commit DB update, notify/invalidate all peer caches, reload from DB; if heterogeneous protocols exist, use connectors/adapters or web services to normalize invocation.

## Probability Notes

- Very high confidence: style/view mapping, quality scenario modeling, ASR, ATAM/ADD, and documentation views are core recurring material.
- High confidence: SPL variability/reuse and SOA-related comparison questions recur across multiple years.
- Medium confidence: exact design topic changes, but the required pattern/style is usually explicit and the answer structure is stable.
- Lower confidence: exact PDF-only diagrams and wording could differ because local PDF text extraction was not available.

## Extracted Data

See `data/extracted/exams/questions.json` for normalized question clusters with appearances, terms, and answer patterns.
