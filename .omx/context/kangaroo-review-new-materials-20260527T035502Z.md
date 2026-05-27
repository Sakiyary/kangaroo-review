# Kangaroo Review New Materials Iteration 2026-05-27

## Task Statement

Integrate higher-priority review materials into the existing Kangaroo Review frontend and source library:

- Two newly-added `raw/` Software System Design past-paper files should be mined for software-architecture questions only.
- Exclude Software System Design questions that belong to the design-pattern half of that course.
- The 2022 recall paper is a photographed exam PDF and needs OCR / multimodal extraction.
- Read the Feishu wiki at `https://my.feishu.cn/wiki/BkyewuKSViRZnmkQ5uMc4WxunZb`, including subdocuments, referenced documents, and whiteboard/diagram content when available, via bytedcli.
- Use extracted text and image logic as supplemental material in the source library and review frontend.

## Desired Outcome

The web review material reflects the new sources with clear provenance and priority:

- Updated source catalog / source library entries.
- Updated past-paper clusters and/or knowledge notes where the new materials add useful architecture content.
- Design-pattern-only questions are explicitly excluded or not imported.
- OCR/intermediate extraction outputs are persisted for future inspection.
- Local tests/smoke checks pass; if deployment is still expected, update the live docs.cpl.icu site consistently.

## Known Facts / Evidence

- Repo is clean before this iteration.
- Newly visible raw files include:
  - `raw/软件系统设计-系统架构（简）zhy.pdf`
  - `raw/软统2022试卷.pdf`
  - `raw/软统整理-体系结构部分.pdf`
- Existing site data:
  - `site/data/questions.json`: 33 question clusters.
  - `site/data/sources.json`: 42 source records.
  - `data/catalog/sources.json`: extractor catalog with 30 raw/slides records.
- Existing extraction tool is `tools/extract_sources.py`; it marks low-text PDFs as `needs_ocr`.
- Need use `bytedcli lark docs fetch`, `bytedcli lark docs media-download`, and/or `bytedcli lark whiteboard query` for Feishu/Lark docs and whiteboards.

## Constraints

- Source-of-truth preference: original course and paper artifacts over secondary summaries.
- Public repo should not include private raw/slides/Feishu source files unless already intentionally tracked; deployment may include full source library.
- Preserve current frontend structure and low-noise study prioritization.
- Do not import design-pattern-only exam questions.
- Keep intermediate OCR/extraction data persisted under `data/`.

## Unknowns / Open Questions

- Exact titles and formats of the two newly added past-paper files must be confirmed.
- `raw/软统2022试卷.pdf` may require image rendering plus OCR if pypdf text is empty.
- Feishu wiki node tree and whiteboard attachment structure are unknown until fetched.
- Some Feishu referenced documents may require permission or separate export/download.

## Likely Codebase Touchpoints

- `data/catalog/sources.json`
- `data/extracted/raw/*`
- `data/ocr/*`
- `data/feishu/*`
- `site/data/questions.json`
- `site/data/questions.js`
- `site/data/sources.json`
- `site/data/sources.js`
- `site/content.js`
- `README.md`
- `tools/*` extraction/smoke helpers if needed
