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
