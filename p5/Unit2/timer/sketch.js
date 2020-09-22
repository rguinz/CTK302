timer = 0;
state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
      background('red');
      timer++;
      if (timer > 5*60) {
        state = 1;
        timer = 0;
      }
      break;

    case 1:
      background('green');
      text("case 1", 250, 250) ;
      break;

  }
}
