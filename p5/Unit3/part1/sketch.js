let cars = [];

function setup() {
  createCanvas(500, 500);

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  //}
  noStroke() ;
}

function draw() {
    background('#ffb3ba');
    cars.push(new Car());
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1) ;
    }
  }
}



class Car {

  constructor() {
    // attributes
    this.pos = createVector(50, height - 80);
    this.vel = createVector(random(-10, 100), random(-10, -5));
    this.r = random(255) ;
    this.g = random(255) ;
    this.b = random(255) ;
    this.a = random(255) ;
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a) ;
    rect(this.pos.x, this.pos.y, 40, 40);

  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5 ;
    // if (this.pos.x > width) this.pos.x = 0 ;
    // if (this.pos.x < 0) this.pos.x = width ;
    // if (this.pos.y > height) this.pos.y = 0 ;
    // if (this.pos.y <0) this.pos.y = height ;
  }
}
