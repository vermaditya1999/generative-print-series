// The piece.
// Chapter 1: a page with margins and a grid of strokes.

const px = (u) => u * width;   // page units in, pixels out

function setup() {
  createCanvas(800, 1000);     // the only pixel numbers in the file
  noLoop();                    // draw once: this is a print, not an animation
}

function draw() {
  background(255);
  stroke(20);
  strokeWeight(px(0.002));

  // Your code goes here.
}
