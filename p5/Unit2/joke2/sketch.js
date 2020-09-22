timer = 0;
state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(40) ;
  textAlign(LEFT) ;
}

function draw() {

  switch (state) {
    case 0:
      background('	#525252');
      text("What’s Grey and not very heavy?", 5, 5, 400, 400) ;
      timer++;
      if (timer > 5*60) {
        state = 1;
        timer = 0;
      }
      break;

    case 1:
      background('#D3D3D3');
      text("Light grey.", 5, 5, 400, 400) ;
      break;

  }
}
