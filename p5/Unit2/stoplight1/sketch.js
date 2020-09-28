let state = 0 ;
let timer = 0 ;
let x = 0 ;
let velocity = 5 ;


function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(100);
  fill('yellow');
  rect(width / 2, height / 2, 200, 700);

  //car code
  fill('orange') ;
  rect(x, 765, 70, 25) ;
  x = x + velocity ;
  if (x > width) {
    x = 0 ;
  }

  switch (state) {
    case 0:
      text("0", 100, 100);
      fill('red') ;
      ellipse(width / 2, height / 2 - 175, 150, 150);
      fill('grey') ;
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 175, 150, 150);
      velocity = 0;
      break;

    case 1:
      text("1", 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 - 175, 150, 150);
      ellipse(width / 2, height / 2, 150, 150);
      fill('green') ;
      ellipse(width / 2, height / 2 + 175, 150, 150);
      velocity = 5 ;


      break;

    case 2:
      text("2", 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 - 175, 150, 150);
      fill('yellow');
      ellipse(width / 2, height / 2, 150, 150);
      fill('grey') ;
      ellipse(width / 2, height / 2 + 175, 150, 150);
      velocity = 2.5 ;
      break;
  }

timer = timer + 1 ;
if (timer > 100) {
  timer = 0 ;
  state++;
  if (state > 2) state = 0 ;
}
}
