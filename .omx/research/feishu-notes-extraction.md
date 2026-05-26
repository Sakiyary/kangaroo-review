# Feishu Notes Extraction

## Sources

- Zhang He review notes: `https://my.feishu.cn/docx/EOjedYSMpoNscoxzPBCcNKVDncc`
- Li Shanshan review notes: `https://my.feishu.cn/docx/RrjOdIMTioXr6px8zmdcuQB5nSh`
- Lu Jun architectural-patterns review notes: `https://my.feishu.cn/docx/YcXldb3cootFPax3OAYcPrf4nJe`

## Commands

```bash
bytedcli --json lark docs fetch --doc <url> > data/feishu/<name>.json
jq -r '.data.markdown' data/feishu/<name>.json > data/feishu/<name>.md
bytedcli lark whiteboard query --whiteboard-token <token> --output_as image --output data/feishu/whiteboards/<name> --overwrite
lark-cli docs +media-download --token <token> --type media --output data/feishu/media/<name> --overwrite
```

## Extracted Artifacts

- `data/feishu/zhang-he-course-review.json`
- `data/feishu/zhang-he-course-review.md`
- `data/feishu/li-shanshan-course-review.json`
- `data/feishu/li-shanshan-course-review.md`
- `data/feishu/lu-jun-architectural-patterns-review.json`
- `data/feishu/lu-jun-architectural-patterns-review.md`
- `data/feishu/whiteboards/zhang-he.png`
- `data/feishu/whiteboards/li-shanshan.png`
- `data/feishu/whiteboards/lu-jun.png`
- `data/feishu/media/zhang-he-summary-image.png`
- `data/feishu/media/li-shanshan-image-1.png`
- `data/feishu/media/li-shanshan-image-2.png`

The public site copies the visual assets into `site/assets/` and uses synthesized content in `site/content.js`.

## Key Evidence

- Exam: final 60%, coursework 40%.
- Question types: short answers, essay/Q&A, design analysis.
- Questions are in English; answers may be Chinese or English but should not mix languages.
- Current review focus: ADD 3.0, microservices, DDD, enterprise architecture.
- Architecture-patterns review emphasizes historical tension, management object changes, and quality-attribute tradeoffs rather than rote definitions.
