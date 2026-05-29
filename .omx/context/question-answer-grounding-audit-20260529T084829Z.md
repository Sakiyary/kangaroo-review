# Question Answer Grounding Audit

## Task Statement

Audit all past-paper question answer patterns and sample answers in the Kangaroo review site for hallucination risk. Treat the user-provided/redrawn ADD 3.0 and architecture design/process diagrams as ground truth where applicable, then teacher review notes, then slide text, then senior blog/materials.

## Desired Outcome

- Answer whether the five architecture-source items are grounded or hallucinated.
- Tighten any over-broad or invented wording in question answer patterns and sample answers.
- Add visible grounding/audit notes to every question so users can see whether an answer is review-class core, slide-backed, historical-paper-backed, or illustrative.
- Preserve `/Users/bytedance/Codes/Self/kangaroo-2` as private reference only; do not add it to the site, data, or public repo.

## Known Facts And Evidence

- The old-paper answer for "Where does software architecture come from?" lists Requirements, System stakeholders, Development organization, Architects, and Technical environment.
- Current review-class notes emphasize architecture basis as NFRs / quality requirements / ASRs, plus stakeholder workshop/interview, business goals, and utility tree for ASR identification.
- The architecture process ground-truth figure centers four activities: Specifying ASRs, Architecture design, Documenting, and Architecture Evaluation with feedback.
- The ADD 3.0 ground-truth figure centers seven steps and the two side feedback loops.
- The quality scenario table provides exact examples; invented order-service failover numbers should be replaced or explicitly labeled illustrative.

## Constraints

- Do not add `kangaroo-2` materials to any shared source list.
- Prefer source-grounded wording over plausible but unsupported examples.
- Keep old/recent adjacent-course questions, but label lower-priority and illustrative parts clearly.
- Use browser/local verification before claiming UI is healthy.

## Unknowns / Open Questions

- Some historical paper answers are OCR-derived and imperfect; when exact source text is noisy, use conservative wording and avoid fake precision.
- Some adjacent-course microservice/DDD examples are legitimate practice but not central review-class core; mark them accordingly.

## Likely Touchpoints

- `site/data/questions.json`
- `site/data/questions.js`
- `site/app.js`
- `site/styles.css`
- `site/content.js`
- `.omx/research/`
- `tools/`
