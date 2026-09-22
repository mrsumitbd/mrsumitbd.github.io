# Investigation: "Who are you?" — AI assistant identity/config in this repo

This is a research task; no implementation is proposed. This document is the
deliverable and reports findings only. No repository files were modified.

## Method

Searched the repository root and subdirectories for assistant-configuration
files and mentions:

```
find . -iname "CLAUDE.md" -o -iname "AGENTS.md" -o -iname "*.cursorrules*" \
       -o -iname "*.windsurfrules*" -o -iname "copilot-instructions*"
find . -iname ".pixis*"
find .github -type f
grep -il -e "claude" -e "copilot" -e "ai assistant" -e "agent" README.md .github/**/*
```

(excluding `node_modules`, which doesn't exist here, and noting `_site/` is
the built output and simply mirrors the root `CLAUDE.md`).

## Findings

### 1. `CLAUDE.md` (repo root, 5.1 KB) — the only AI-assistant config file

This is guidance written specifically for Claude Code (per its own opening
line: "This file provides guidance to Claude Code (claude.ai/code) when
working with code in this repository."). It defines:

- **Identity of the project**: a personal academic website built on the
  [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme, deployed to
  GitHub Pages at `mrsumitbd.github.io`. Content lives in data/markdown files;
  the theme's Ruby/Liquid/SCSS internals are largely untouched vendor code.
- **Commands** the assistant should know: `bundle exec jekyll serve/build`,
  the devcontainer entrypoint, the CI build check (`bundle exec jekyll
  build`), Prettier formatting (`npx prettier --write .`), and the deploy
  script `bin/deploy`.
- **An explicit scope restriction**: "Do not run [`bin/deploy`] unless
  explicitly asked — it force-pushes to a branch other than `main`."
- **No test suite exists**; quality gates are Prettier formatting, a
  successful `jekyll build`, and lychee link-checking, all run in GitHub
  Actions rather than locally via one test command.
- **Architecture orientation**: explains `_config.yml` as the single source
  of truth for feature toggles (check config before assuming code changes are
  needed), `_data/` structured content, `_bibliography/papers.bib`,
  Jekyll collections (`_news`, `_projects`), `_pages/`, `_posts/`,
  `_layouts/`/`_includes/` (edit only for structural/theme changes, not
  content), `_sass/`, `_plugins/` (custom Ruby build-time plugins), `assets/`,
  and `bin/` operational scripts.
- **CV data precedence rule**: `assets/json/resume.json` takes priority over
  `_data/cv.yml` — edit only one per change.
- **Automation warnings**: `update-citations.yml` overwrites
  `_data/citations.yml` monthly (don't hand-edit expecting persistence);
  `update-tocs.yml` auto-inserts TOCs into changed markdown on push to
  `main`; `deploy.yml` builds/deploys on push to `main`/`master`, and
  build-only on PRs.

In short, `CLAUDE.md` casts the assistant as a **content/config editor for a
Jekyll-based academic site**, explicitly telling it: most changes are
content/data edits or `_config.yml` toggles rather than code; theme internals
are vendor code to leave alone unless a structural change is truly needed;
there's no local test command, so build success + formatting + link-checking
are the bar; and it must not deploy (force-push to `gh-pages`) without
explicit instruction.

### 2. No `AGENTS.md` anywhere in the repo (root or subdirectories).

### 3. No `.pixis/` directory or Pixis-specific config existed prior to this
investigation. (This investigation created only the present plan file under
`.pixis/plans/`, which is the sanctioned output location for this agent type
and not itself a behavioral config for future assistant runs.)

### 4. `.github/` directory contents — none reference an AI agent

Files present: `release.yml`, `stale.yml`, `workflows/deploy.yml`,
`workflows/update-tocs.yml`, `workflows/update-citations.yml`,
`workflows/schedule-posts.txt`, and `ISSUE_TEMPLATE/*`. These are standard
repo-automation workflows (deploy, stale-issue bot, TOC insertion, scheduled
Scholar-citation scraping) and contain no mention of Claude, Copilot, or any
AI assistant.

### 5. `README.md` — no AI-assistant mentions

Grepped for "claude", "copilot", "ai assistant", "agent" — no matches. It is
the standard al-folio theme README (setup/customization instructions for
human users), unrelated to assistant configuration.

### 6. `.devcontainer/devcontainer.json`, `.pre-commit-config.yaml`,
`.prettierrc` — none reference an AI assistant; they are standard tooling
config (Dev Containers, pre-commit hooks, Prettier).

## Conclusion — answer to "Who are you?"

The only file in this repository that defines an AI assistant's identity and
operating rules is **`CLAUDE.md`** at the repo root. According to it, the
assistant working here is **Claude Code**, and its documented role is:

- A collaborator on a **Jekyll-based personal academic website** (al-folio
  theme), primarily editing **content and configuration** (markdown, YAML,
  BibTeX) rather than application code.
- Expected to consult `_config.yml` first for feature-toggle questions before
  writing code.
- Expected to touch theme internals (`_layouts`, `_includes`, `_sass`,
  `_plugins`) only for genuine structural/theme changes, not routine content
  edits.
- Required to respect the CV-data precedence rule (`resume.json` overrides
  `_data/cv.yml`).
- Required to leave `_data/citations.yml` alone (bot-managed).
- Verifying work via `bundle exec jekyll build` + Prettier + lychee, since
  there is no local test suite.
- **Explicitly forbidden from running `bin/deploy`** (which force-pushes to
  `gh-pages`) unless the user explicitly asks for it.

No `AGENTS.md`, `.pixis/` config, or other assistant-identity documentation
exists in this repository. No CI/automation script references an AI agent.
If the user is running under a different tool (e.g. Pixis Code, as the
current session appears to be, given the `.pixis/` output convention), that
tool's own system/tool context — not any file in this repo — is the source of
its identity; the repo itself only speaks to "Claude Code."
