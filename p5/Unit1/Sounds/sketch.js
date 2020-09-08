var song1;

function preload() {
  song1 = loadSound("assets/ocean_waves.mp3");
}

function setup() {

  song1.play();
}

function draw() {
  background(100);

}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();

  } else {
    song1.loop();
  }
}
