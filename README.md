# ugc

Monorepo for UGC ad work — one folder per client, shared tools at the root.

## Layout

```
.claude/skills/      shared ad-writing skills (/ad-concept, /ad-script, /ad-hook, /ad-headline, /ad-audit)
clients/<brand>/     one folder per client — brand brief, prompts, generated assets
shared/<tool>/       reusable tooling (e.g. shared/seedance/ — Seedance video generator via fal.ai)
```

## Current clients

- `clients/speak-indo/` — speak-indo.com

## Adding a new client

1. `cp -r clients/speak-indo clients/<new-brand>` and clear out anything brand-specific.
2. Fill in `clients/<new-brand>/brief.md`. The ad skills and generators read it for context.
3. Generate content — see `shared/seedance/README.md`.

## Branch convention

Branches are for in-progress work, not separate projects. Multiple unrelated projects belong in
separate repos, not separate branches of this one.
