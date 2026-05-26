# Frontend UX Proposal - Software Architecture Exam Review Site

## Scope

This is a UX proposal only. It does not prescribe implementation files, framework code, or visual assets. Current workspace has no detected frontend framework metadata such as `package.json`, so the proposal stays framework-neutral and component-ready.

Goal: build a dense, responsive study workspace for Software Architecture exam review. It should help a student quickly decide what to study next, switch between Chinese / English / parallel language views, drill high-priority concepts, compare recurring past-paper questions, and use a glossary without leaving the study flow.

Non-goal: no marketing landing page, no oversized hero, no decorative app tour. The first screen should be the working review interface.

## Source-Aware Product Premise

The current material set suggests four source layers:

1. Review-class and course-review material as the highest-priority study guide.
2. Slides as supporting evidence and source attribution.
3. Raw previous notes as distilled study aids, not unquestioned ground truth.
4. Past papers and recalled questions as recurrence evidence.

The UI should make that hierarchy visible without making the student think about data provenance constantly. Every knowledge card should surface source badges and confidence only where it affects trust: e.g. `复习课`, `slides`, `往年题`, `OCR待复核`.

## Aesthetic Direction

Tone: compact academic workstation.

The interface should feel closer to a Bloomberg terminal for exam prep than a course landing page: dense, calm, fast to scan, and optimized for repeated use. Use a light neutral workspace with black text, restrained gray structure, and a sharp green/amber/red priority system.

Suggested palette:

- Background: `#F7F8F3`
- Main surface: `#FFFFFF`
- Text: `#141814`
- Muted text: `#657064`
- Borders: `#D7DDD2`
- High priority / 必考: `#C83232`
- Medium priority / 易拿分: `#D89022`
- Exploratory / 可能考: `#2D7D59`
- Low confidence / OCR warning: `#6F5A8A`
- Active focus: `#126DFF`

Suggested typography:

- Chinese body: `Noto Serif SC` or `Source Han Serif SC` for dense readable Chinese.
- Latin body: `IBM Plex Serif` for exam-style English terms and question text.
- UI numerals / counters: `IBM Plex Mono` or `JetBrains Mono`.

Avoid generic dashboard defaults. Use tight tables, exam-paper blocks, margin notes, and sticky navigation instead of card-heavy marketing composition.

## Information Architecture

Primary navigation should be horizontal on desktop and bottom-tab on mobile:

1. `路线` Review Route
2. `大纲` Outline
3. `知识卡` Knowledge Cards
4. `真题` Past Papers
5. `术语表` Glossary

Global controls remain available across all pages:

- Language mode: `中文` / `English` / `中英对照`
- Priority filter: `全部` / `必考` / `易拿分` / `可能考` / `难拿分`
- Source filter: `复习课` / `Slides` / `往年题` / `OCR待复核`
- Search: terms, English aliases, Chinese aliases, question stems
- Progress state: `未读` / `已读` / `待背诵` / `已掌握`

The default route should open to `路线`, not a landing page.

## Desktop Layout

Use a three-column study shell at widths >= 1100px:

Left rail, 260-300px:

- Course outline tree with collapsible sections.
- Priority chips and count badges per section.
- Sticky so the student can jump between topics quickly.

Center workspace, flexible 640-880px:

- Active page content.
- Dense knowledge cards, past-paper lists, or glossary entries.
- Keyboard-friendly next/previous navigation.

Right rail, 300-360px:

- `今日重点`: filtered high-priority queue.
- `相关真题`: questions linked to the selected concept.
- `术语速查`: compact glossary hits for terms visible in current card.
- Source/confidence panel for selected item.

The right rail should collapse first on medium screens. The left outline remains until tablet width because it is central to study navigation.

## Mobile Layout

At widths < 768px:

- Replace three columns with a single reading column.
- Use a sticky top bar with language toggle, search, and filter icon.
- Use bottom tabs for the five primary areas.
- Convert the outline to a full-screen drawer with section counts and priority badges.
- Convert the right rail into contextual bottom sheets:
  - `相关真题`
  - `术语`
  - `来源`

Mobile cards should not become decorative blocks. Keep them compact:

- One-line title with priority mark.
- Two-line summary.
- Expandable details.
- Swipe or small segmented control to move between Chinese / English / parallel text.

## Language Modes

Language mode is global, but every dense content component must support local fallback.

`中文`:

- Chinese explanation first.
- English term shown inline in small monospace or muted text: `质量属性 Quality Attribute`.
- Past-paper English stems can show a collapsed translation underneath.

`English`:

- English term and answer skeleton first.
- Chinese explanation hidden by default but available through `显示中文`.
- Useful for memorizing exam phrasing.

`中英对照`:

- For definitions: two-column on desktop, stacked pairs on mobile.
- For past-paper questions: English stem above Chinese paraphrase, not side-by-side if narrow.
- For knowledge cards: Chinese reasoning and English answer skeleton should align by sections:
  - Definition
  - Key points
  - Diagram / steps
  - Exam phrasing
  - Common traps

Parallel mode must be readable, not a raw duplication dump. The English side should be exam-answer phrasing; the Chinese side should explain meaning and memory hooks.

## Priority Model

Use four priority classes:

1. `必考`: appears repeatedly or explicitly marked in review material. Examples seen in current notes include quality attribute scenario modeling, ASR sources, architecture process input/output, view documentation, pattern/style mapping, ADD steps.
2. `易拿分`: list/definition/process questions where answer structure is stable, such as ATAM outputs, View & Beyond components, 4+1 view, tactics vs patterns.
3. `可能考`: recurring but less certain comparison or application topics, such as Layered vs Multi-tier, SOA vs Microservices, SPL vs single-product architecture, DDD/microservice split.
4. `难拿分`: design/drawing/application questions requiring synthesis, diagrams, or examples, such as Strategy pattern design, quality attribute scenario diagrams, architecture view drawing.

Priority filtering should affect every surface:

- Outline counts.
- Knowledge card list.
- Past-paper grouping.
- Glossary ranking.
- Review route recommendations.

The filter should be inclusive by default: selecting `必考` still allows linked lower-priority prerequisites to appear as muted supporting items, so the student does not lose context.

## Page Proposals

### 1. Review Route / 路线

Purpose: answer "what should I study in the next 30/60/120 minutes?"

Layout:

- Top compact dashboard: progress count by priority, remaining high-priority cards, unresolved OCR/source warnings.
- `30分钟冲刺`: only highest-recurrence items with answer skeletons.
- `2小时稳态复习`: grouped by topic sequence.
- `考前画图`: diagrams and process flows that need hand practice.
- `薄弱项队列`: cards marked wrong or not mastered.

Each route item links to a knowledge card and shows:

- Priority.
- Expected output: `会背定义`, `会画图`, `会比较`, `会套案例`.
- Linked past papers count.
- Last reviewed state.

### 2. Outline / 大纲

Purpose: provide complete course map and study coverage.

Recommended hierarchy:

- Software Architecture basics
- Requirements, NFR, ASR, quality attributes
- Quality attribute scenarios and tactics
- Architecture patterns and styles
- Views and documentation
- Architecture design and ADD
- Architecture evaluation and ATAM
- SPL, MDA, variability
- Microservices, SOA, DDD, enterprise architecture
- Design/application questions

Each outline node should show:

- Priority distribution bar.
- Source badges.
- Past-paper recurrence count.
- Completion state.
- One-line exam risk: e.g. `常考输入输出`, `常考画图`, `容易混淆`.

Clicking a node opens a topic workspace:

- Summary card.
- Key cards in order.
- Linked questions.
- Glossary terms in this topic.

### 3. Knowledge Cards / 知识卡

Purpose: compact memorization and answer construction.

Card structure:

- Header: title, English alias, priority, recurrence count.
- `考法`: likely question forms.
- `答案骨架`: numbered answer skeleton, optimized for exam writing.
- `理解`: Chinese explanation for why the skeleton is structured this way.
- `图/流程`: diagram placeholder or step list where needed.
- `易错点`: traps and confusing pairs.
- `关联`: prerequisite cards, similar terms, linked past papers.
- `来源`: compact citations and confidence.

Example card types:

- Definition card: ASR, quality attribute, tactic, view.
- Process card: architecture process, ADD, ATAM.
- Comparison card: SOA vs microservices, Layered vs Multi-tier.
- Pattern card: Broker, MVC, Pipe-and-filter, Client-server, Publish-subscribe.
- Drawing card: quality attribute scenario, 4+1 view, strategy-pattern design.

Interactions:

- `背诵模式`: hide answer skeleton until reveal.
- `并排对照`: available only in parallel mode on wide screens.
- `标记薄弱`: sends card to route queue.
- `复制英文答案骨架`: useful for exam memorization; expose as a command button, not a primary visual feature.

### 4. Past Papers / 真题

Purpose: understand recurrence and practice answer framing.

Views:

- `按年份`: 2015, 2017, 2018, 2019, 2023, recalled/uncertain.
- `按题型`: definition, list, comparison, process, drawing, design/application.
- `按知识点`: linked to outline nodes.
- `高频`: questions that map to the same concept across years.

Question row structure:

- Year and source.
- Original stem.
- Chinese paraphrase if needed.
- Priority and type.
- Linked answer card.
- Status: `未练`, `已看`, `能写`, `需重做`.

Question detail:

- Stem in selected language mode.
- Answer skeleton, not a full essay by default.
- Linked cards.
- Source confidence.
- `同类题`: e.g. ASR sources across 2017/2019, quality attribute scenario drawing across multiple years.

Past papers should support "practice mode":

- Filter to selected priority/type.
- Hide answer skeleton.
- Student marks confidence after reveal.
- Progress updates route queue.

### 5. Glossary / 术语表

Purpose: fast bilingual lookup without breaking reading flow.

Entry structure:

- Chinese term.
- English term.
- Acronym if any: ASR, ADD, ATAM, DDD, SOA, SPL, MDA.
- One-sentence definition.
- Exam phrasing.
- Linked cards.
- Confusing terms.

Glossary should have three display densities:

- `速查`: compact table.
- `背诵`: term on left, definition hidden until reveal.
- `对照`: bilingual definition pairs.

Search behavior:

- Match Chinese, English, acronym, misspellings from OCR where known.
- Highlight matching terms inside knowledge cards.
- On mobile, glossary opens as a bottom sheet from selected text or search.

## Filtering and Search Behavior

Filtering should be deterministic and visible:

- Active filters appear as chips under the top bar.
- Every filtered list shows counts: `显示 18 / 全部 64`.
- Empty state should suggest loosening filters, not show marketing text.

Search ranking:

1. Exact acronym or term match.
2. Topic title match.
3. Past-paper stem match.
4. Answer skeleton match.
5. Source text match.

Search result grouping:

- `知识卡`
- `真题`
- `术语`
- `来源片段`

## Responsive Interaction Details

Desktop keyboard shortcuts:

- `/` focus search.
- `L` cycle language mode.
- `P` open priority filter.
- `[` / `]` previous or next card.
- `R` reveal answer in practice mode.

Mobile gestures:

- Horizontal swipe inside card only for language panes, not page navigation.
- Bottom sheet drag for related questions/glossary/source.
- Sticky filter button opens full-screen filter panel.

Accessibility:

- Language toggle must be buttons with `aria-pressed`.
- Priority color must not be the only signal; include text labels.
- Cards need semantic headings for screen-reader navigation.
- Parallel bilingual content should keep reading order Chinese then English on narrow screens.
- Focus order should follow top bar -> outline -> content -> related panel.

## Suggested Component Inventory

Framework-neutral component names for later implementation:

- `StudyShell`
- `GlobalStudyToolbar`
- `LanguageModeToggle`
- `PriorityFilterBar`
- `OutlineTree`
- `TopicWorkspace`
- `KnowledgeCard`
- `AnswerSkeleton`
- `PastPaperBrowser`
- `QuestionDetail`
- `GlossaryTable`
- `RelatedPanel`
- `SourceConfidenceBadge`
- `PracticeModeControls`
- `MobileContextSheet`

These components should share the same content model rather than duplicating language/filter logic per page.

## Data Shape Recommendation

Use normalized study entities so language mode, filters, and cross-links stay consistent:

```text
Topic
- id
- title.zh
- title.en
- parentId
- prioritySummary
- sourceRefs[]

Card
- id
- topicId
- priority
- type
- title.zh
- title.en
- aliases[]
- examForms[]
- skeleton.zh[]
- skeleton.en[]
- explanation.zh
- explanation.en
- traps[]
- relatedCardIds[]
- questionIds[]
- glossaryTermIds[]
- sourceRefs[]
- confidence

Question
- id
- year
- sourceType
- stem.zh
- stem.en
- questionType
- priority
- cardIds[]
- status
- confidence

GlossaryTerm
- id
- term.zh
- term.en
- acronym
- definition.zh
- definition.en
- examPhrase.en
- relatedCardIds[]
```

This model is intentionally small. Avoid over-modeling before extraction quality is known.

## Implementation Risks To Watch Later

- Parallel language mode can double visual length; avoid fixed-height cards and allow section-level folding.
- OCR and Feishu extraction may be incomplete; source confidence must be visible enough to prevent false certainty.
- Priority is partly inferred from recurrence and review notes; the UI should allow later priority correction without data migration.
- Past-paper stems include typos and mixed language; search should normalize but still preserve the original source text.
- Mobile bottom tabs plus sticky filters can crowd the viewport; keep toolbar height tight and avoid large decorative headers.

## Acceptance Criteria For A Future Implementation

- First viewport is the study workspace, not a marketing hero.
- User can switch `中文` / `English` / `中英对照` globally.
- User can filter by priority from every main page.
- Outline, cards, past papers, and glossary cross-link to each other.
- Desktop supports a three-column dense layout.
- Mobile supports single-column reading, bottom tabs, and contextual sheets.
- Priority labels and source confidence are visible without overwhelming the reading flow.
- Common high-frequency topics can be reached within two interactions from the default route.
