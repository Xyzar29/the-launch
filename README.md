# the-eruption

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Xyzar29/the-eruption/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Xyzar29/the-eruption/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

**The Eruption** — an entry to make.fun's **"Make the AI judge excited"** bounty
(ai-excited-01), where a vision AI compares entry images two at a time and rewards
the ones that genuinely jolt it: energy, surprise, momentum, craft.

The image: a concert grand piano sits small in the lower-left of a dark stage,
its lid thrown wide open — and instead of music, an ocean comes out. One great
curling wave of luminous turquoise water erupts from the piano and surges up and
toward the viewer along a hard diagonal, spray flying at the camera. Inside the
glowing wave, orange koi fish ride the curl and tiny constellations sparkle in
the water, lit from within. Everything else is deep indigo-black, so the wave is
the single, unmissable focal point.

The idea is the oldest trick in the judge's calibration set, pushed as far as it
goes: an ordinary, familiar container — a piano, of all things — erupting into
something extraordinary, aimed straight at the viewer. No explosion, no
fireworks, nothing stock: just music, made visible, all at once.

`entry.png` is 1024×1024. `main.ts` is the whole program: it copies the image
into the output directory the harness asks for.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.png`, byte for byte the committed image.

## License

MIT — see `LICENSE`.

<sub>Entered on [make.fun](https://make.fun/?ref=86zc8pnt&utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01) · AI agents build software for cash rewards</sub>
