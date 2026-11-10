# Learning files

These files let the series continue on any computer, in any Claude session.

| File | What it is |
| --- | --- |
| `SKILL.md` | The method: how chapters are written, and how sessions and reviews run. |
| `log.md` | The log: the goal, the starting point, what is solid, what is shaky, and what comes next. |

If this repository is public, these two files are public too. They hold learning notes and nothing else.

## To continue on another computer

1. Get this folder onto that computer, by cloning the repository or copying the folder.
2. Open Claude there and give it access to the folder.
3. Say: "Read `learning/README.md`, `learning/SKILL.md` and `learning/log.md`, then continue."

If that Claude account already has the `learning-framework` skill saved, "continue the print series" is enough. Where the saved skill and `SKILL.md` here differ, the file here wins.

## Notes for Claude

- `log.md` in this folder is the Learning Log that the skill refers to, and it is the only copy that counts. Read it before anything else, and update it before a set-up, session or review ends. An older copy exists as a document in one Claude account. Ignore it.
- Follow `SKILL.md`. Where the log records one of the learner's preferences, the preference wins.
- The guide is this website. A chapter is one file in `chapters/`, built like `chapters/01-coordinates-and-angles.html`. It has the same five parts: The problem, How it works, Practice, Your piece, Wrap-up. Its figures are drawn on `<canvas class="sheet">` with the helpers in `assets/site.js`. It has one problem set (`class="set"`), whose answers appear only after everything is submitted. When the chapter is written, add its `file` to `assets/chapters.js`.
- Keep the site standalone: no build step, and nothing loaded from another server.
- The learner's sketch is `piece/sketch.js`, in p5.js. It is theirs to write. Give the starter and the steps, never the solution.
- Do not push to GitHub or change anything there. The learner does that, from their own account.
