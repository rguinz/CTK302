var mic;
var vol;
var y = 0 ;
let state = 0;

function setup() {
  createCanvas(500, 500);

  mic = new p5.AudioIn();
  mic.start();
}


function draw() {

  vol = (mic.getLevel()).toFixed(2);

  switch(state) {

    case 0:
      background('red')
      text("shhhhhhhhhhh", 250, 250);
      if (vol > .010) {
        state = 1
    }
      break ;

    case 1:
    print('words');
    background('green')
    text("QUIET DOWN!", 250, 250);
    break ;

  }




}

function touchStarted() {
  getAudioContext().resume();
  state++
}
