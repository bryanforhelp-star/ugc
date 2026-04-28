# Seedance video generator

Generates videos with ByteDance's Seedance model via [fal.ai](https://fal.ai).

## Setup

```bash
cd shared/seedance
pnpm install              # or: npm install
cp .env.example .env      # then paste your FAL_KEY from https://fal.ai/dashboard/keys
```

## Generate

```bash
# inline prompt
pnpm generate "a cinematic close-up of a young woman speaking Bahasa Indonesia, golden hour, Bali street market" \
  --out ../../clients/speak-indo/output/intro-01.mp4

# from a prompt file
pnpm generate ../../clients/speak-indo/prompts/intro.txt \
  --out ../../clients/speak-indo/output/intro-01.mp4

# higher-quality "pro" model (slower, more expensive)
pnpm generate "..." --model fal-ai/bytedance/seedance/v1/pro/text-to-video
```

Defaults:
- model: `fal-ai/bytedance/seedance/v1/lite/text-to-video`
- output: `output/<timestamp>.mp4` (relative to current working directory)

Output files are gitignored (`clients/*/output/`).
