# Learning Log

Last updated: 10 November 2026

This file is the log that `SKILL.md` describes, and the only copy that counts. It is updated at the end of every set-up, session and review.

## Learner

- **Background:** works things out from scratch when given time. Acquainted with p5.js and happy with plain JavaScript. Depth of coding experience not stated.
- **Preferences** (all asked for on 10 November 2026):
  - Builds from first principles, starting at zero. Questions come before explanations.
  - One classic resource per chapter, with a liking for original talks and lectures.
  - Learns by building one piece. Sitting length varies, so chapters stay short.
  - Chapters are HTML pages with live, interactive figures, not plain documents.
  - Pages stay calm. One view at a time: the map, then each chapter in five parts (The problem, How it works, Practice, Your piece, Wrap-up). Figures are drawn as sheets of paper with no boxes around them, with one line of caption in place of readout panels.
  - Chapter names are plain: the standard term for the topic, never a riddle.
  - The writing sounds like a person teaching a person, with stories and reasons, and never like a specification.
  - Practice answers are submitted all together and only then shown, on the same page. No per-question checking.
  - The code is p5.js. Its built-in tools, such as `random()` and `noise()`, are used as they are. We write our own versions only when it helps to see inside one.
  - The guide is a standalone website that the learner hosts on GitHub Pages. Claude writes chapters and never pushes to GitHub, because the learner uses a different account for that.
  - This log and the method live in the `learning` folder, so that the work can continue on any computer.
- **Reviews:** at the start of each session, until a recurring review is scheduled after chapter 1.

## Topic: Generative print series (started 10 November 2026)

- **End goal:** write, from a blank file, a generative system that draws an endless series of distinct compositions, and take one through to a print worth hanging. The learner has not objected to this wording, and has not confirmed it either.
- **Practice form:** a continuous project. The piece, `piece/sketch.js`, gains one layer each chapter.
- **Guide:** this website. One file per chapter in `chapters/`, listed in `assets/chapters.js`. p5.js 2.3.4 is bundled in `lib/`.
- **Zero:** diagnosed on 10 November 2026. The zero sits at chapter 3.
  - Solid: stepping a point along an angle (correct, not yet automatic), and what a seed is.
  - Half there: reshaping random numbers with a function, and the gist of noise (recalled only that it is smooth in its input).
  - New: fields, tracing curves, how a curve is stored, collision checks, colour and print.
  - Worth building on: faced with the collision question, the learner asked "how are the curves given?", which is the right first question. On seeds, the mechanism was clear and the reason a series needs them was thin.
- **Wrong ideas met:** that squaring a random number crowds dots at the centre of the page. It crowds them at zero, which is a corner. Named on 10 November 2026, not yet cleared. Chapter 3 takes it on.
- **Next time:** run the session on chapter 1, starting with the cold explain-back. The practice page has a "Copy my answers" button, so ask the learner to paste those in. Then set up the recurring review.

| # | Chapter | Status | Last check | Ladder step | Next review | Weak points |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Coordinates and angles | written | | | | |
| 2 | Seeded randomness | planned | | | | |
| 3 | Shaping randomness | planned | | | | |
| 4 | Noise | planned | | | | |
| 5 | Flow fields | planned | | | | |
| 6 | Collisions and packing | planned | | | | |
| 7 | Colour | planned | | | | |
| 8 | Composition | planned | | | | |
| 9 | Designing a series | planned | | | | |
| 10 | Printing | planned | | | | |
