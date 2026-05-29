# Online Visitors And Moderation Update

## Task Statement

Add a lightweight current-online visitor count to the Kangaroo review site, extend comment profanity blocking for comments like `cnm`, and remove the existing deployed offensive comment.

## Desired Outcome

- Each page shows compact current online counts, at least current-page and site-wide.
- Online counts are estimated from browser heartbeat plus IP/UA/language/client id identity hashing.
- Comment submission rejects obvious Chinese and English profanity including pinyin abbreviations such as `cnm`.
- Existing visible deployed offensive comment is removed or hidden from SQLite-backed comments.
- Changes are committed, pushed, deployed, and verified locally and online.

## Known Facts / Evidence

- Metrics backend is `server/metrics_server.py` with SQLite, comments, metrics, and static serving.
- Main frontend logic is `site/app.js`; styling is `site/styles.css`.
- Production is served at `https://docs.cpl.icu/kangaroo-review/`.
- Previous metrics API already stores anonymized visitor hashes from IP/UA/Accept-Language.

## Constraints

- Keep the implementation lightweight; SQLite is preferred.
- Public repo can include this monitoring/commenting code.
- Do not expose hidden metrics page links in the main UI.
- Preserve existing UX and i18n conventions.
- Avoid destructive cleanup outside known temporary artifacts.

## Unknowns / Open Questions

- Exact production DB path and process manager must be discovered via SSH.
- Existing offensive comment exact body/page must be found by querying deployed SQLite.

## Likely Codebase Touchpoints

- `server/metrics_server.py`
- `site/app.js`
- `site/styles.css`
- `tools/smoke-site.mjs`
