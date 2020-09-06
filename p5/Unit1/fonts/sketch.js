var f;

var f1;

function setup() {
  createCanvas(800, 800);
  f = loadFont("assets/Krona.ttf");
  f1 =loadFont("assets/dancing.ttf");
  textAlign(CENTER);

}

function draw() {
  background(100);
  textFont(f);
  textSize(35);
  text("hello world", width / 2, height / 2);

  textFont(f1);
  textSize(35);
  text(" my name is Russell", width / 2, height / 2 + 30);
}
