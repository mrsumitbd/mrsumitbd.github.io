# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal academic website built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme, deployed to GitHub Pages at `mrsumitbd.github.io`. Content (bio, publications, projects, CV, blog posts) lives in data/markdown files; the theme's Ruby/Liquid/SCSS internals are largely untouched vendor code.

## Commands

Serve locally (requires Ruby + Bundler):

```bash
bundle install
bundle exec jekyll serve   # dev server with live reload
bundle exec jekyll build   # production build -> _site/
```

Alternatively, this repo has a devcontainer (`.devcontainer/devcontainer.json`) using the `mcr.microsoft.com/devcontainers/jekyll` image; opening it runs `bin/entry_point.sh`, which serves Jekyll on port 8080 with live reload and auto-restarts on `_config.yml` changes.

CI build check (what `deploy.yml` runs):

```bash
bundle exec jekyll build
```

Format code (Prettier + Liquid plugin):

```bash
npx prettier --write .
```

Deploy (manual, via `bin/deploy`): builds the site, purges unused CSS, and force-pushes the built output to the `gh-pages` branch. Requires a clean working tree. Do not run this unless explicitly asked — it force-pushes to a branch other than `main`.

There is no JS/Ruby test suite in this repo. Quality gates are: Prettier formatting, `jekyll build` succeeding, and lychee link-checking (`.lycheeignore` configures exclusions) — all run in GitHub Actions, not locally via a single test command.

## Architecture

This is a Jekyll site, not an app with source code to compile — "development" mostly means editing content files and letting Jekyll's collection/plugin system render them.

- **`_config.yml`** — single source of truth for site metadata, enabled features (dark mode, analytics, tooltips, masonry, etc. are all boolean toggles here), collection definitions, and Jekyll Scholar bibliography settings. Check here first before assuming a feature needs code changes — most theme behavior is config-driven.
- **`_data/`** — structured content consumed by includes/layouts: `cv.yml` (CV/resume fallback when no `resume.json` is set), `socials.yml`, `coauthors.yml`, `venues.yml`, `repositories.yml` (GitHub stats page), `citations.yml` (auto-updated monthly by `update-citations.yml` workflow via `bin/update_scholar_citations.py`, scraping Google Scholar).
- **`_bibliography/papers.bib`** — publications list in BibTeX; rendered by `jekyll-scholar`. Supports extra fields per entry (`pdf`, `code`, `poster`, `slides`, `abstract`, etc.) — see `_pages/publications.md` for how the entries are rendered.
- **Collections** (`_news`, `_projects`, plus theme built-ins like `_books`): each is a Jekyll collection defined in `_config.yml`; `_news` items surface on the home page, `_projects` render on a responsive grid via `_includes/projects.liquid` / `_includes/projects_horizontal.liquid`.
- **`_pages/`** — top-level site pages (about, projects, publications, resume, awards, contact, photography, blog, 404). Page front matter controls layout and behavior (e.g. `related_posts: false`).
- **`_posts/`** — blog posts, filename-dated (`YYYY-MM-DD-title.md`), rendered via `post` or `distill` layout.
- **`_layouts/`** and **`_includes/`** — theme templates (Liquid). Includes are the composable building blocks (e.g. `citation.liquid`, `bib_search.liquid`, `repository/*`); layouts assemble includes per page type. Edit these only when changing structural/theme behavior, not for adding content.
- **`_sass/`** — theme styling; `_themes.scss` holds the `--global-theme-color` and other theme-color variables, `_variables.scss` holds the palette of selectable stock colors.
- **`_plugins/`** — custom Jekyll plugins (Ruby) that extend build-time behavior (e.g. `google-scholar-citations.rb`, `cache-bust.rb`, `hide-custom-bibtex.rb`). These run during `jekyll build`.
- **`assets/`** — static assets (images, PDFs, JSON including `resume.json` for the alternate CV source, bibliography assets, JS/CSS).
- **`bin/`** — operational scripts: `cibuild` (CI build entrypoint), `deploy` (gh-pages deploy), `entry_point.sh` (Docker container entrypoint running Jekyll with file-watch), `update_scholar_citations.py` (Python scraper for `_data/citations.yml`, invoked by the scheduled GitHub Action, needs `requirements.txt`).

### CV data precedence

The CV/resume page prefers `assets/json/resume.json` (JSON Resume standard) if present; otherwise it falls back to `_data/cv.yml`. Only edit one of these per change — check `_config.yml` / `resume.json` presence to know which is authoritative before editing CV content.

### Automation to be aware of

- `update-citations.yml`: monthly cron job that overwrites `_data/citations.yml` — don't hand-edit that file expecting changes to persist.
- `update-tocs.yml`: auto-inserts a table of contents into changed `*.md` files on push to `main`.
- `deploy.yml`: builds and deploys on push to `main`/`master` when relevant paths change; also runs on PRs (build-only, no deploy).
