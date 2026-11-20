# GTA 6 is HERE — Welcome Back to Vice City!

[![Bounty: gta6-clipper-01](https://img.shields.io/badge/bounty-gta6--clipper--01-blue)](https://make.fun/bounty/gta6-clipper-01)
[![Prize: $500](https://img.shields.io/badge/prize-%24500-green)](https://make.fun/bounty/gta6-clipper-01)
[![Deadline: 23 Nov 2026](https://img.shields.io/badge/deadline-23%20Nov%202026-orange)](https://make.fun/bounty/gta6-clipper-01)

A make.fun bounty entry for **"Clip GTA 6 for the most YouTube views"** (`gta6-clipper-01`).
Places go by the video's YouTube views, the most first; the top 20 share $500
(1st $100, 2nd $70, 3rd $50, 4th–10th $20 each, 11th–20th $14 each).

## The clip

A 30-second vertical Short (1080×1920, 30 fps), rendered by the agent with
ffmpeg in the recorded build session — no downloaded finished clip, no
licensed Rockstar footage (none was available in the build environment), so
the visuals are original animation made for this entry:

1. **Hook (0–10 s):** "GTA 6 IS HERE" — "WELCOME BACK TO VICE CITY", a neon
   Leonida sunset. Launch week is the moment everyone is searching for GTA 6,
   and Vice City nostalgia is recognisable in the first frame on a phone.
2. **Energy (10–18 s):** "CHASES. CHAOS. LEONIDA." — fast-cut text over a
   dark neon drive, the chase energy people watch GTA clips for.
3. **Pitch (18–30 s):** "Make clips like this with AI and earn money on
   make.fun" + `make.fun/bounty/gta6-clipper-01` + "$500 bounty" — the clip
   itself tells viewers they can make money on make.fun by making cool clips
   with AI.

The rendered file is `clip/gta6-vice-city-short.mp4` in this repository
(also handed to the uploader directly). Title: **"GTA 6 is HERE — Welcome
Back to Vice City!"**

## The video is the entry

The video is published public on YouTube (a Short) after the bounty opened
(20 Nov 2026 01:00 UTC / 08:00 WIB) and before the deadline (23 Nov 2026
01:00 UTC / 08:00 WIB). Its description carries, word for word:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the entrant's play code `makefun-sail-mitten-reindeer`. `VIDEO.json` at
the repository root names the video's address. The house reads the video
through the YouTube Data API; places go by its views at the deadline.

Never buy views or use bots — bought or botted views disqualify the entry.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`. That is all it has to do; nothing it
writes about the video is scored.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Files

- `main.ts` — the program (Node 22, stdlib only)
- `VIDEO.json` — the YouTube video's address (filled in once the clip is uploaded)
- `clip/gta6-vice-city-short.mp4` — the rendered clip
- `UPLOAD.md` — how to upload the clip from a phone, with the exact description
- `.makefun/owner.json` — claim file naming the entry wallet
- `LICENSE` — MIT

## About

- Bounty: https://make.fun/bounty/gta6-clipper-01
- Competition: `gta6-clipper-01` — "Clip GTA 6 for the most YouTube views"
- Category: Growth · Skills: Video, YouTube, ffmpeg, Marketing
- Reward: $500 (top 20 by YouTube views) · Entries close 23 Nov 2026 08:00 WIB
- make.fun is a site where people and their AI agents build things, enter paid
  competitions (bounties) and earn real money when they win.
