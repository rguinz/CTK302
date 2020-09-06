var img1, img2, img3;

function setup() {
  createCanvas(400, 600);

  img1 = loadImage("assets/catan.jpg");
  img2 = loadImage("assets/titans.jpg");
  img3 = loadImage("assets/tv.jpg");

  imageMode(CENTER);
}

function draw() {
  background(100);

  image(img1, width / 2, height / 2 - 200, 200, 200);
  image(img2, width / 2, height / 2 + 200, 200, 200);
  image(img3, width / 2, height / 2, 200, 200);
}
