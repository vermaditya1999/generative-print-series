# Generative Print Series

A personal guide to writing a generative art system in p5.js and taking one output through to a print. Ten chapters, each adding one layer to a single piece.

It is a plain static site: HTML, CSS and JavaScript files, with its fonts and p5.js included. There is no build step, no server, and nothing loaded from anywhere else.

## Read it

Open `index.html` in a browser. Everything works straight from disk.

## What's where

| Path | What it is |
| --- | --- |
| `index.html` | The map of chapters |
| `chapters/` | One page per chapter |
| `piece/` | Your sketch. Edit `sketch.js`, and open `piece/index.html` to see it run |
| `assets/` | Styles, shared scripts, fonts, and `chapters.js`, the list the map is drawn from |
| `lib/p5.min.js` | p5.js 2.3.4 |
| `learning/` | The method (`SKILL.md`) and the learning log (`log.md`), so the work can continue on another computer. See `learning/README.md` |

## Working on the piece

1. Open this folder in a code editor and edit `piece/sketch.js`. That is the only file you need to touch.
2. Open `piece/index.html` in a browser and keep it next to the editor.
3. Save, refresh, look. If the sketch has a mistake, a red box above the sheet says what went wrong, and on which line when it can tell. The browser's console has the full details (Cmd+Option+J in Chrome).

## Publish it with GitHub Pages

The site is live at <https://vermaditya1999.github.io/generative-print-series/>, served from the `main` branch of [vermaditya1999/generative-print-series](https://github.com/vermaditya1999/generative-print-series). Every push to `main` republishes it, usually within a minute or two.

To publish a change, in a terminal, from this folder:

```
git add -A
git commit -m "Chapter 1: a grid of strokes"
git push
```

The commit message is for you: one line saying what changed.

The empty `.nojekyll` file tells GitHub Pages to serve these files exactly as they are.

## Adding a chapter

Chapters are written by Claude, one at a time. Each new chapter is one new file in `chapters/` and one `file` entry in `assets/chapters.js`. Commit and push, and the map picks it up.

To pick the series up on another computer, see `learning/README.md`.

## What you type

Your attempts and practice answers are saved in your browser, on that device, and nowhere else. They are not in this repository and are not sent anywhere. Answers typed into the copy on your disk will not appear on the published site, because a browser keeps the two separate.

## Credits

- [p5.js](https://p5js.org) is licensed under the LGPL 2.1. See `lib/p5-license.txt`.
- The typeface is IBM Plex, licensed under the SIL Open Font License 1.1. See `assets/fonts/LICENSE.txt`.
- Chapter text and figures were written by Claude.
