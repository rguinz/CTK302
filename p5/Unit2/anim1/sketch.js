var x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  text("a nice sentence", x, 250);

  x += 5;

  if (x > width) {
      x = -500 ;
  }
}
