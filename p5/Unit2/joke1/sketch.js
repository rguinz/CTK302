let state = 0 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER) ;
  textSize(40) ;
  

}

function draw() {

  switch (state) {
    case 0:
    background('#aff8d8') ;
    text("why do we tell actors to break a leg?", 5, 5, 400, 400) ;
    break ;

    case 1:
    background('#afcbff');
    text("because every play has a cast.", 5, 5, 400, 400) ;
    break ;
  }
}

function mouseReleased() {
  state++ ;

  if (state > 1){
    state = 0 ;
  }

}
