# Kangaroo Review Depth + Deploy Context

Timestamp: 2026-05-26T18:55:45Z

## Task Statement

The user wants the existing Software Architecture review site to become substantially more useful for exam preparation, then be published:

- Add deeper knowledge explanations and concrete answer examples, especially for past-paper answers that currently read as thin frameworks.
- Add understandable local diagrams/images or redrawn teaching figures where helpful.
- Keep README local deployment on port 18080, not incidental debug ports.
- Add MIT License.
- Push the project to the public GitHub repository `Sakiyary/kangaroo-review.git`.
- Deploy the static site at `https://docs.cpl.icu/kangaroo-review/` by SSHing to `docs@docs.cpl.icu` and imitating the existing nginx `/suitcase` deployment.

## Desired Outcome

A clear, mobile/desktop-friendly frontend review site that tells the student what to memorize, how to answer, and how to recognize English exam wording. It should include:

- Expanded knowledge-point explanations with examples and local visual aids.
- Past-paper questions with Chinese i18n plus realistic sample answers.
- README aligned with the supported local serving command on port 18080.
- MIT License.
- GitHub remote configured and pushed.
- Server deployment reachable under `/kangaroo-review/`.

## Known Facts / Evidence

- Current git branch is `master`; git user is `Sakiyary <sakiyary19@qq.com>`.
- Current repo does not appear to have an `origin` remote configured.
- Previous revision already has a static site under `site/`, question/source JSON under `site/data/`, and Playwright smoke script `tools/smoke-site.mjs`.
- Current content is likely too concise; the user specifically wants full answer examples such as the six-part quality scenario frame filled with a real example.
- README currently mentions debug port `18082`, which must be corrected to `18080`.
- Public deployment should avoid exposing ignored raw PDFs, Feishu exports, and predecessor notes. Site-side source preview needs a graceful summary fallback when raw files are not shipped.

## Constraints

- Use source materials as the conceptual basis, but do not publish raw private/course files.
- Preserve existing user changes and git history; do not revert unrelated work.
- Use local assets for diagrams/images in the frontend rather than hotlinking external images.
- Verify before claiming completion: syntax/JSON checks, local smoke test, git push evidence, and remote curl/browser evidence.
- External network/SSH/GitHub operations require sandbox escalation.

## Unknowns / Open Questions

- Exact nginx layout on `docs.cpl.icu` must be inspected before editing.
- GitHub push may need SSH or HTTPS credentials; prefer the remote that succeeds without weakening auth.
- Remote server may not reach GitHub, so deployment should transfer static build files from local machine.

## Likely Touchpoints

- `site/content.js`
- `site/app.js`
- `site/styles.css`
- `site/data/questions.json`
- `site/data/questions.js`
- `site/data/sources.json`
- `tools/smoke-site.mjs`
- `README.md`
- `LICENSE`
- `site/assets/diagrams/*`
- nginx config and web root on `docs@docs.cpl.icu`
