var x=0;
var mic;
var vol;


function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  mic = new p5.AudioIn() ;
  mic.start() ;
}

function draw() {
  background(200, 240, 150);
  fill('orange') ;
  rect(x, 765, 70, 25) ;
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  // check how loud the input inspect is
    if (vol > .45) {// if the volume is LOUD?
      x+=10;
      // here Im setting the background to a random color

    }

    if(x>width) x=0;
    // extra stuff for debuggins
    textSize(18) ;
    text("talk to move rectangle" + vol, 10, 60) ;

}

function touchStarted() {
  getAudioContext().resume();
}
