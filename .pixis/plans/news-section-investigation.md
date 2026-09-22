# Investigation: Homepage "News" Section (`_news/` collection)

This is a research report, not an implementation plan — no code changes were made or proposed to be made as part of answering this question.

## 1. Config settings controlling the news section

Two files together control the news section; there is no top-level `news:` block in `_config.yml` beyond the collection registration.

**`_config.yml`** (lines ~144-150) registers `news` as a Jekyll collection:
```yaml
collections:
  books:
    output: true
  news:
    defaults:
      layout: post
    output: true
  projects:
    output: true
```
This makes every file in `_news/` a collection document (`site.news`) with `output: true` (each gets its own generated page/permalink) and a default `layout: post`. There is no `future: false` (or any `future:` key) set anywhere in `_config.yml`, and Jekyll's future-date filtering (`site.future`) only applies to the built-in `_posts` reader, not to custom collections — so date-based visibility for `_news/` is governed entirely by the `page.announcements.limit` setting below, not by whether a date is in the future.

**`_pages/about.md`** front matter (the homepage, `permalink: /`, lines 18-21) sets the per-page display options consumed by the include:
```yaml
announcements:
  enabled: true # includes a list of news items
  scrollable: true
  limit: 5
```
- `enabled: true` — the news block is rendered on the homepage.
- `scrollable: true` — if there are more than 3 items, the table gets a `max-height: 60vw` with a scrollbar rather than growing indefinitely.
- `limit: 5` — only the 5 most recent news items are shown.

**`_includes/news.liquid`** is the template that actually applies these settings (invoked from the `about` layout, not shown here but referenced by `page.announcements`):
- `{% assign news = site.news | reverse %}` — Jekyll collections are sorted ascending by date by default, so `reverse` puts the **newest item first**.
- `{% assign news_limit = page.announcements.limit %}` (falls back to `news_size` i.e. no cap if `announcements.limit` isn't set) — then `{% for item in news limit: news_limit %}` takes only the first `news_limit` items of the already-reversed (newest-first) list.
- For each shown item: if `item.inline` is true, the raw content (minus wrapping `<p>` tags) is shown inline in the table row; otherwise it links to the item's title/URL (post-style entry).

## 2. All files found in `_news/` (5 total)

| File | `date` (front matter) | `inline` | `related_posts` | Content |
|---|---|---|---|---|
| `_news/2025-12-17-news.md` | 2025-12-17 12:00:00-0400 | true | false | "Website is live!" |
| `_news/2026-04-08-ease-paper.md` | 2026-04-08 12:00:00-0400 | true | false | "Paper accepted and published at EASE 2026 — OpenClassGen: A Large-Scale Open Dataset of LLM-Generated Python Classes. DOI: 10.1145/3816483.3816547." |
| `_news/2026-06-10-ease-symposium.md` | 2026-06-10 12:00:00-0400 | true | false | "Presented at the Doctoral Symposium at EASE 2026. Talk title: \"From Observation to Explanation: Mechanistic Interpretability of LLM-Generated Code for Principled Repair.\"" |
| `_news/2026-07-01-job-search.md` | 2026-07-01 12:00:00-0400 | true | false | "Actively seeking industry and research roles in ML/AI Engineering, Applied Science, and Data Science. Open to opportunities across Canada and the US." |
| `_news/2026-09-12-sieve-live.md` | 2026-09-12 12:00:00-0400 | true | false | "SIEVE is now live — try the contamination-aware GitHub corpus builder at https://mrahman2025-sieve.hf.space." |

All five entries have `layout: post` (inherited from the collection default), `inline: true`, and `related_posts: false`. None use a separate `title:` field, since `inline: true` items render their body content directly rather than a linked title.

## 3. What's shown on the homepage, and in what order

Given "today" is 2026-09-22 (per the environment), every item's date (latest is 2026-09-12) is in the past, so none are future-dated/hidden — and as noted, future-date filtering wouldn't apply to this collection anyway. There are exactly 5 news items and `announcements.limit: 5`, so **all 5 currently display**, newest first (reverse chronological, as produced by `site.news | reverse` then capped at `limit: 5`):

1. **2026-09-12** — "SIEVE is now live — try the contamination-aware GitHub corpus builder at https://mrahman2025-sieve.hf.space." (`_news/2026-09-12-sieve-live.md`)
2. **2026-07-01** — "Actively seeking industry and research roles in ML/AI Engineering, Applied Science, and Data Science. Open to opportunities across Canada and the US." (`_news/2026-07-01-job-search.md`)
3. **2026-06-10** — "Presented at the Doctoral Symposium at EASE 2026. Talk title: 'From Observation to Explanation: Mechanistic Interpretability of LLM-Generated Code for Principled Repair.'" (`_news/2026-06-10-ease-symposium.md`)
4. **2026-04-08** — "Paper accepted and published at EASE 2026 — OpenClassGen: A Large-Scale Open Dataset of LLM-Generated Python Classes. DOI: 10.1145/3816483.3816547." (`_news/2026-04-08-ease-paper.md`)
5. **2025-12-17** — "Website is live!" (`_news/2025-12-17-news.md`)

Because there are only 5 items and the limit is also 5, nothing is currently being truncated by the `limit: 5` setting — but it is at capacity: **adding a 6th news item would push the oldest one ("Website is live!", 2025-12-17) off the visible homepage list** unless `announcements.limit` in `_pages/about.md` is raised. The `scrollable: true` flag would then also start taking effect (it only engages once `news_size > 3`, which is already true, so the scroll behavior is already active at 5 items — a `max-height: 60vw` scrollable box, not a hard cutoff).

## Key files for any future edit to this section
- `_pages/about.md` — homepage front matter; edit `announcements.limit` / `scrollable` here to change how many items show.
- `_config.yml` — collection registration (`collections.news`); would only need changes for structural things like output/permalink behavior, not display count.
- `_includes/news.liquid` — rendering logic; would only need changes to alter *how* items are sorted/filtered/displayed (e.g., adding future-date filtering, changing sort key, changing inline vs. title rendering).
- `_news/*.md` — the actual content, one file per news item, each needing `date` and either `inline: true` + body text, or `title:` (with `inline` omitted/false) for a linked post-style entry.
</content>
