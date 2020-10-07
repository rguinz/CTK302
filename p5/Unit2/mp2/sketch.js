let state = 0;
let song1, song2, song3;
var img1, img2, img3;

function preload() {
  song1 = loadSound("assets/one.mp3");
  song2 = loadSound("assets/elastic.mp3");
  song3 = loadSound("assets/feeling.mp3");

  song1.loop();
  song1.pause();

  song2.loop();
  song2.pause();

  song3.loop();
  song3.pause();
}

function setup() {
  createCanvas(1700, 1500);
img1 = loadImage("assets/sadguy.png");
img2 = loadImage("assets/person.png");
img3 = loadImage("assets/happyppl.png") ;
}

function draw() {

  switch (state) {

    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
      background("#c72b50");
      fill('white');
      textSize(50) ;
      text("he is so sad :(", 650, 200);
      image(img1, 300, 300);
      break;

    case 2:

      song2.play();
      state = 3;
      break;

    case 3:
      background("#c82b70")
      fill('white');
      textSize(50) ;
      text("here comes someone to spend time with!", 350, 200);
      image(img2, 100, 300);
      break;

    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      background("#c82b99")
      fill('white');
      textSize(50) ;
      text("now they are happy!", 600, 200);
      image(img3, 250, 300);
      break;


  }
}

function mouseReleased() {
  state++;
  if (state > 5) state = 0;

song1.pause () ;
song2.pause () ;
song3.pause () ;
}
