# ugc

Monorepo for UGC ad work — one folder per client, shared tools at the root.

## Layout

```
.claude/skills/      shared skills — direct-response (/ad-*) and organic (/organic-script)
clients/<brand>/     one folder per client — brand brief, prompts, generated assets
shared/<tool>/       reusable tooling
                       ├── seedance/   Seedance text-to-video via fal.ai
                       └── scrape/     pull reference reels from IG/TikTok/YouTube → summary.md
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
