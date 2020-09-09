function setup() {
  createCanvas(720, 400);

}

function draw() {
   background("black");

  fill('#301934 ');
  ellipse(345, 500, 1500, 325);

  fill('white');
  circle(690, 30, 125, 125) ;


  fill ('#394149');
  quad (250, 290, 300, 290, 268, 370, 250, 370)

  fill ('#394149');
  quad (323, 290, 280, 290, 302, 370, 323, 370)

  fill('black');
  rect(230, 360, 40, 20, TWO_PI) ;

  fill ('black');
  rect(300, 360, 40, 20, TWO_PI);

  fill ('#d2b48c');
  quad(250, 210, 265, 225, 225, 285, 210, 265);

  fill ('#d2b48c');
  quad(323, 210, 380, 250, 355, 265, 310, 230);

  fill ('#d2b48c');
  rect(270, 195, 40, 20);

  fill ('#ccccff');
  rect(250, 210, 73, 80);

  fill('#d2b48c');
  circle(290, 165, 75, 75);

  fill('black');
  circle(307, 156, 10, 10);

  fill('black');
  circle(280, 156, 10, 10);

  fill('black');
  circle(295, 175, 18, 18);

  fill('black');
  circle(678, 37, 20, 20);

  fill('black');
  line(648, 37, 678, 37, TWO_PI);

  fill('black');
  line(708, 37, 678, 37, TWO_PI);

  if (mouseIsPressed) {
    textSize(20)
   let s = 'Suddenly, the bat transformed into a vampire and landed right next to Ed!  Ed then became terrified!!!!';
   fill('white');
   text(s, 10, 10, 600, 150);

  fill ('gray');
  quad (450, 290, 500, 290, 468, 370, 450, 370)

  fill ('gray');
  quad (523, 290, 480, 290, 502, 370, 523, 370)

  fill('black');
  rect(430, 360, 40, 20, TWO_PI) ;

  fill ('black');
  rect(500, 360, 40, 20, TWO_PI);

  fill ('white');
  quad(450, 210, 465, 225, 425, 285, 410, 265);

  fill ('white');
  quad(523, 210, 580, 250, 555, 265, 510, 230);


  fill('red');
  quad(458, 217, 400, 151, 570, 151, 511, 217);

    fill ('white');
  rect(470, 195, 40, 20);

    fill ('red');
  rect(450, 210, 73, 80);

  fill('white');
  circle(490, 165, 75, 75);

  fill('black');
  circle(500, 156, 10, 10);

  fill('black');
  circle(470, 156, 10, 10);



  fill('white');
  circle(690, 30, 125, 125) ;

   fill('black');
   line(470, 142, 482, 145);

     fill('black');
   line(503, 142, 490, 145);

    fill ('black');
  rect(476, 168, 20, 10, TWO_PI);

    fill('white');
    triangle(479, 168, 482, 174, 485, 168);

     fill('white');
    triangle(487, 168, 490, 174, 493, 168);

    fill('black');
  circle(295, 175, 25, 25);
  } else {

    textSize(25)
    let s = 'Ed was walking during the night, in late Autumn, when he noticed a huge bat in the glow of the moon...he began to feel uneasy...';
    fill(255);
    text(s, 10, 10, 600, 300);
}
}
