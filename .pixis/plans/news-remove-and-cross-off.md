# Plan: Remove oldest news item and "cross off" job-search item (FINALIZED)

**Status: Decision confirmed by user — Option 1 (strikethrough, keep item visible). Ready for execution in Build mode.**

## Investigation summary

**`_news/` directory — exactly 5 files, matching the stated display order:**

| File | Front-matter date | Content |
|---|---|---|
| `_news/2025-12-17-news.md` | `2025-12-17 12:00:00-0400` | `Website is live!` |
| `_news/2026-04-08-ease-paper.md` | 2026-04-08 | OpenClassGen paper accepted at EASE 2026 |
| `_news/2026-06-10-ease-symposium.md` | 2026-06-10 | EASE 2026 Doctoral Symposium talk |
| `_news/2026-07-01-job-search.md` | `2026-07-01 12:00:00-0400` | `Actively seeking industry and research roles in ML/AI Engineering, Applied Science, and Data Science. Open to opportunities across Canada and the US.` |
| `_news/2026-09-12-sieve-live.md` | 2026-09-12 | SIEVE is now live |

Both target files share the same front matter shape (`layout: post`, `inline: true`, `related_posts: false`).

**`_pages/about.md` announcements config (confirmed via `grep`):**
```yaml
announcements:
  enabled: true
  scrollable: true
  limit: 5
```
`limit: 5` and there are exactly 5 news files today — already at capacity, no 6th older item waiting to backfill.

**Rendering path (`_includes/news.liquid`):**
- Builds `news` = `site.news | reverse` (newest first — matches the stated display order).
- Applies `limit: news_limit` from `page.announcements.limit` (5) — this is a cap via Liquid's `limit:` filter, not a fixed row count, so having fewer than 5 items causes no blank rows or errors.
- For `inline: true` items (both targets are inline), it renders `item.content` directly (already converted from markdown to HTML by Jekyll/kramdown at this point), strips `<p>`/`</p>` wrapper tags, then runs `emojify`.
- `_config.yml` confirms `markdown: kramdown` with `kramdown: input: GFM` — GitHub-Flavored-Markdown strikethrough (`~~text~~`) is supported by kramdown's GFM input mode and renders as `<del>...</del>`. Plain `~~...~~` markdown syntax works here without needing manual HTML tags.

## Confirmed decision

The user has explicitly confirmed **Option 1** for item B: wrap the existing job-search announcement text in GFM strikethrough (`~~...~~`), keep the file and the homepage news item, do not delete it and do not append any extra "position filled" note. The other two options (delete the file; append an update note) discussed in the earlier draft of this plan are rejected and are not part of the execution steps below.

## Final step-by-step execution order

1. **Delete `_news/2025-12-17-news.md`** (item A — the "Website is live!" entry). No config changes needed elsewhere.

2. **Edit `_news/2026-07-01-job-search.md`** — wrap the existing body text in `~~...~~`. Front matter (`layout`, `date`, `inline`, `related_posts`) is unchanged; only the content line changes.

   **Before:**
   ```
   ---
   layout: post
   date: 2026-07-01 12:00:00-0400
   inline: true
   related_posts: false
   ---

   Actively seeking industry and research roles in ML/AI Engineering, Applied Science, and Data Science. Open to opportunities across Canada and the US.
   ```

   **After:**
   ```
   ---
   layout: post
   date: 2026-07-01 12:00:00-0400
   inline: true
   related_posts: false
   ---

   ~~Actively seeking industry and research roles in ML/AI Engineering, Applied Science, and Data Science. Open to opportunities across Canada and the US.~~
   ```

   In other words, the only change is wrapping the single content line in `~~` at the very start and the very end. This renders as `<del>Actively seeking industry and research roles in ML/AI Engineering, Applied Science, and Data Science. Open to opportunities across Canada and the US.</del>` on the homepage news list.

3. **No changes to `_pages/about.md`.** `announcements.limit: 5` stays as-is — after step 1, `site.news` contains 4 items; the Liquid `limit:` filter simply shows up to 5, so all 4 remaining items display with no blank rows and no error. Editing the limit is optional cosmetic tidying only, not functionally required, and is out of scope for this plan.

4. **Verify locally:** run `bundle exec jekyll build --trace` (or `jekyll serve`) from the repo root and load the page where `announcements` renders (`_pages/about.md` / homepage) in a browser to visually confirm:
   - "Website is live!" (2025-12-17) row is gone.
   - The 2026-07-01 job-search row renders with visible strikethrough (`<del>` styling) over the full sentence.
   - Remaining items (SIEVE, job-search/struck-through, EASE symposium, OpenClassGen paper) still appear newest-first with correct dates, 4 rows total.

5. `git status` / `git diff` to confirm exactly the two intended file changes before committing: one deletion (`_news/2025-12-17-news.md`) and one content edit (`_news/2026-07-01-job-search.md`), with `_pages/about.md` untouched.

## Trade-offs considered (resolved)

- Strikethrough-in-place (chosen) preserves the historical record that the search happened, visually signals it's no longer active, and requires only a one-line content edit with no config changes — lowest risk, most reversible.
- Deleting the file (rejected) would lose the record entirely and was explicitly ruled out by the user.
- Appending an "Update: position filled" note (rejected) doesn't visually "cross off" anything and adds text not requested.

## Verification

- **Narrowest check:** `bundle exec jekyll build --trace` (or `jekyll serve`) and visually inspect the rendered news list for the two effects above (item removed; item struck through, still present, 4 total rows).
- No automated tests exist for this static content; a build + visual check is the appropriate verification level. If `.github/workflows/` has a CI build step for Jekyll, a passing local build is a reasonable proxy but is not required to be separately run for this content-only change.

## Files touched

- `_news/2025-12-17-news.md` — deleted.
- `_news/2026-07-01-job-search.md` — content edited (body wrapped in `~~...~~`); front matter unchanged.
- `_pages/about.md` — no change.
