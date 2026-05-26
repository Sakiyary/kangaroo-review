# Software Architecture Review

静态复习网站：把《软件体系结构》课程 slides、复习课纪要、raw 前人资料和往年题整理成可浏览的复习资料。

## 本地浏览

```bash
python3 -m http.server 18080 --bind 127.0.0.1
```

然后打开 <http://127.0.0.1:18080/site/>。

也可以直接打开 `site/index.html`；页面会使用 `site/data/*.js` fallback 数据。若要在“资料库”里预览本机抽取内容，请从仓库根目录启动 18080 服务。

线上部署目标：<https://docs.cpl.icu/kangaroo-review/>。

## 内容结构

- `site/`：前端页面、样式、交互和可发布数据。
- `site/content.js`：复习路线、15 个知识点、79 条术语、11 张本地图解和画板资源。
- `site/data/questions.json`：33 条往年题聚类，包含中文完整示例答案、英文关键词和图解关联。
- `site/data/sources.json`：42 个源文件的抽取状态清单。
- `tools/extract_sources.py`：本地文本抽取脚本。
- `tools/vision_pdf_ocr.swift`：macOS Vision/PDFKit OCR 脚本。
- `data/catalog/sources.json`：源文件清单。
- `.omx/research/`：资料盘点、真题分析、信息架构、UX 方案等研究记录。

## 本地中间数据

以下目录保留在本机，默认不推送到 public repo：

- `raw/`
- `slides/`
- `data/extracted/`
- `data/ocr/`
- `data/feishu/*.json`
- `data/feishu/*.md`

原因是这些目录包含原始课件、前人资料、飞书纪要原文和 OCR 中间结果；公开仓库只保留可浏览网站、合成后的题库/资料清单、工具和研究记录。

## 验证记录

- `node --check site/app.js site/content.js site/data/questions.js site/data/sources.js tools/smoke-site.mjs`
- `jq empty site/data/questions.json site/data/sources.json`
- Playwright/Chrome 桌面与移动视口验证：15 个知识点、33 条真题聚类、79 个术语、42 条资料清单、11 张本地图解，无控制台错误，无横向溢出。

## License

MIT
