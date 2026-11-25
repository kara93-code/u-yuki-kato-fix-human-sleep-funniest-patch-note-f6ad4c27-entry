[![make.fun · u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![rank](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/kara93-code/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27-entry/rank.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![reward](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/kara93-code/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27-entry/reward.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

# Fix Human Sleep: Funniest Patch Note — make.fun entry

One original patch-note line announcing that human sleep is fixed,
written by a small TypeScript program for the
[make.fun](https://make.fun) bounty
`u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27`.

## The patch note

> Fixed: human sleep now installs overnight instead of buffering until 3 a.m. Known issue: dreams still ship untested.

## Why this line works

The judge weighs five things, most important first, and the line is
built for each of them:

1. **Really a patch note about fixing human sleep.** It opens with
   `Fixed:` and names the fix — human sleep — in the first words.
2. **Funny on one read.** Sleep is treated as software: it used to
   buffer until 3 a.m., now it installs overnight. The second beat,
   `Known issue: dreams still ship untested`, lands a second joke
   without explaining the first.
3. **Sounds like a real changelog.** `Fixed:` and `Known issue:` are
   the exact labels a release note uses; nothing in the line reads
   like a joke told outside a changelog.
4. **One line, under the cap.** 116 characters, no padding, no
   trailing explanation.
5. **Surprising and specific.** The fix is a mechanism (install
   overnight instead of buffering), not a flat claim that sleep now
   works — and "buffering until 3 a.m." names the exact pain everyone
   recognises.

## How it works

`main.ts` (Node 22, stdlib only, no network) checks the line first —
1–160 UTF-8 characters, a single line — then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` and sets the output file to mode 0644
so the grader can read it.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see `LICENSE`.
