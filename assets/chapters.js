/* The chapter list. The map on the home page is drawn from this.
   A chapter with a "file" is written and can be opened. One without is still to come.
   To add a chapter: put its page in /chapters and add its "file" here. */
window.GPS_CHAPTERS = [
  { n: 1, stage: 'Marks and randomness', title: 'Coordinates and angles',
    does: 'Put a stroke exactly where you want it, pointing the way you want. You end with a page of them.',
    file: 'chapters/01-coordinates-and-angles.html' },
  { n: 2, stage: 'Marks and randomness', title: 'Seeded randomness',
    does: 'Random numbers you can replay. One number, the seed, decides the whole picture.' },
  { n: 3, stage: 'Marks and randomness', title: 'Shaping randomness',
    does: 'Make chance lean your way: marks that cluster, thin out and vary in size on purpose.' },

  { n: 4, stage: 'Flow', title: 'Noise',
    does: 'Smooth randomness, so that neighbouring marks agree and the page starts to flow.' },
  { n: 5, stage: 'Flow', title: 'Flow fields',
    does: 'Follow a field of directions to draw long, flowing curves.' },
  { n: 6, stage: 'Flow', title: 'Collisions and packing',
    does: 'Keep thousands of curves from touching, and do it fast.' },

  { n: 7, stage: 'Art direction', title: 'Colour',
    does: 'How the eye judges colour, and how to build a palette that holds together.' },
  { n: 8, stage: 'Art direction', title: 'Composition',
    does: 'Scale, density and empty space: what makes one output look finished.' },
  { n: 9, stage: 'Art direction', title: 'Designing a series',
    does: 'Make every seed a keeper, with features, variety and a contact sheet of a hundred outputs.' },

  { n: 10, stage: 'The print', title: 'Printing',
    does: 'From screen to paper: resolution, colour on paper, proofs, and the final print.' }
];
