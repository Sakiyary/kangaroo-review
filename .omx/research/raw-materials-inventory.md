# Raw Materials Inventory

## Scope

- Inspected `raw/` only for source materials.
- Did not modify `site/` or app files.
- `slides/` contains courseware PDFs, but this lane treated them as context, not primary raw exam materials.

## Extraction Outcome

- Stable machine-readable as-is:
  - Markdown: `raw/架构.md`
  - Markdown: `raw/(2025-05-21)南京大学软件学院-2024-软件体系结构（研究生）期末复习参考_timeErrors.md`
  - Markdown: `raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md`
  - Markdown: `raw/zqx考试复习资料/考题手敲英文版.md`
- Stable machine-readable after local conversion with `textutil`:
  - `raw/zqx考试复习资料/往年资料以及答案.docx` -> `data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt`
  - `raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx` -> `data/extracted/raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.txt`
  - `raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx` -> `data/extracted/raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.txt`
  - `raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx` -> `data/extracted/raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.txt`
  - `raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx` -> `data/extracted/raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.txt`
- Not actually extractable from current workspace snapshot:
  - `raw/zqx考试复习资料/考题手敲中文版.rtf` is a Git LFS pointer, not the real RTF payload.
- Present but not stably text-extracted with local tools available in this lane:
  - `raw/软统整理-体系结构部分.pdf`
  - `raw/架构.pdf`
  - `raw/软件系统设计-系统架构（简）zhy.pdf`
  - `raw/体系结构往年考题整理：.pdf`
  - `raw/体系结构考题回忆版.pdf`
  - `raw/zqx考试复习资料/往年资料以及答案.pdf`
  - `raw/zqx考试复习资料/【批量下载】18年等/18年.pdf`
  - `raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.pdf`

## Source Inventory

| Source path | Format | Machine-readable status | Confidence | Signal |
| --- | --- | --- | --- | --- |
| `raw/架构.md` | md | directly readable | high | course outline / concept notes |
| `raw/(2025-05-21)南京大学软件学院-2024-软件体系结构（研究生）期末复习参考_timeErrors.md` | md | directly readable | high | curated review outline with explicit high-frequency labels |
| `raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md` | md | directly readable | high | year-by-year recalled questions |
| `raw/zqx考试复习资料/考题手敲英文版.md` | md | directly readable | high | compact English question list |
| `raw/zqx考试复习资料/往年资料以及答案.docx` | docx | converted to txt | high | compiled Q&A with answer text |
| `raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx` | docx | converted to txt | high | exam paper with model answers |
| `raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx` | docx | converted to txt | high | exam paper with model answers |
| `raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx` | docx | converted to txt | high | exam paper with model answers + design questions |
| `raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx` | docx | converted to txt | high | exam paper with model answers |
| `raw/zqx考试复习资料/考题手敲中文版.rtf` | rtf | unavailable; LFS pointer only | high | missing real content in current checkout |
| `raw/软统整理-体系结构部分.pdf` | pdf | file present, text not stably extracted here | low | likely review notes |
| `raw/架构.pdf` | pdf | file present, text not stably extracted here | low | likely PDF export of `架构.md` |
| `raw/软件系统设计-系统架构（简）zhy.pdf` | pdf | file present, text not stably extracted here | low | likely condensed review notes |
| `raw/体系结构往年考题整理：.pdf` | pdf | file present, text not stably extracted here | low | likely question compilation |
| `raw/体系结构考题回忆版.pdf` | pdf | file present, text not stably extracted here | low | likely recalled questions |
| `raw/zqx考试复习资料/往年资料以及答案.pdf` | pdf | file present, text not stably extracted here | low | likely PDF twin of compiled Q&A |
| `raw/zqx考试复习资料/【批量下载】18年等/18年.pdf` | pdf | file present, text not stably extracted here | low | likely 2018 paper or scan |
| `raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.pdf` | pdf | file present, text not stably extracted here | low | likely PDF twin of 2016 A paper |

## Exam-Topic Signals

High-confidence repeated topics across multiple readable sources:

1. Software product line vs single/simple product architecture.
2. Quality attribute scenario modeling in stimulus-response form, especially `availability`, `performance`, `modifiability`, sometimes `interoperability`.
3. General software architecture process, especially activities plus inputs/outputs.
4. Architecture documentation and views:
   - why multiple views are needed
   - documentation package / Views and Beyond
   - `4+1` view
   - mapping questions across module / component-connector / allocation styles.
5. `ASR` identification and sources.
6. `ATAM` outputs; in some sources also stakeholder roles, risks, sensitivity points, trade-off points.
7. Pattern vs tactic relationship, and named tactics.
8. Canonical patterns/styles repeatedly asked:
   - Broker
   - Layered
   - MVC / component-connector
   - SOA
   - Multi-tier vs Layered.
9. `ADD` process steps.
10. Design questions recur in some paper-like sources:
   - strategy-pattern design
   - three-tier booking / ATM style architecture
   - document the design with views.

Medium-confidence side topics:

- Architecture vs design vs structure.
- Requirements vs quality attributes vs constraints / ASR.
- SOA vs microservices.
- SPL vs MDA high reusability.

## Notes

- This lane had no `pdftotext`-style extractor available locally, so PDF claims above are intentionally conservative.
- The strongest machine-readable evidence came from Markdown plus the five converted DOCX files under `data/extracted/raw/`.

## Verification Appendix

- Inventory/file-count cross-check:
  - `raw/*.pdf`: 8 files
  - `raw/*.docx`: 5 files
  - `raw/*.(md|rtf)`: 5 files
  - `data/extracted/raw/*.txt`: 5 files
- Extracted text line counts:
  - `data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt`: 398
  - `data/extracted/raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.txt`: 221
  - `data/extracted/raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.txt`: 210
  - `data/extracted/raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.txt`: 539
  - `data/extracted/raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.txt`: 181
- Provenance check:
  - `unzip -p ...docx word/document.xml` showed the original Word XML already contains the same exam/review text later seen in the converted `.txt`.
- Duplicate/overlap signal:
  - `raw/zqx考试复习资料/考题手敲英文版.md` is not byte-identical to `raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md`, but the first three 2015 questions match by text and ordering.
  - `data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt` overlaps strongly with `raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md` on recurring question stems, while also carrying longer answer text.
- File-level evidence for PDFs:
  - `raw/zqx考试复习资料/往年资料以及答案.pdf` is a 24-page PDF and exposes `Pages/Count 24` plus embedded font/text metadata.
  - `raw/架构.pdf` is a real PDF with multiple page objects visible via `strings`, but this lane did not obtain a stable plain-text extraction.
- Output fingerprints (sha256):
  - `fa0dc5c9201747ff97f3eef108e581ed247d55841beee575ef3c347eff65dc7d` `.omx/research/raw-materials-inventory.md`
  - `61cfd88d6091c2e1df137ff8586cd07046b6b156ba98e845db62babc9273867d` `data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt`
  - `d8c3a8d600d8116780cd4843b756e9282a75d1f120785cd2c7b3e0ebb2ec46d8` `.../体系结构2015年春季2班A卷.txt`
  - `14b87385f649c8a2aa116782a6da44994241607e6e92df2c615521eb747d8028` `.../体系结构2015年春季2班B卷.txt`
  - `feba02e0bdc5be779d19fc239964a6cf4ae1098fd00613cbb6b32fd132af333f` `.../体系结构2016年春季2班A卷.txt`
  - `444094196b89208b87d8a8f1c18cf042b39a1b364fd09aed5770e317035e6e6d` `.../体系结构2016年春季2班B卷.txt`
