// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temp = 0 ;
var humidity = 0 ;
let sun ;
let cloud ;


function setup() {
  createCanvas(1280, 800);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Urbana,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=65e152be4e8e4057456d329e2e1381f7'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

    sun = loadImage("assets/final.png") ;
    cloud = loadImage("assets/cloud.png") ;
}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp ;
  humidity = weather.main.humidity ;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      image(sun, 0, 0) ;
      textSize(40) ;
      fill('white');
      text("What is the weather in " + weather.name + "?", 40, 40);
      text("windspeed is " + windspeed, 40, 80);
      text("temperature is " + temp, 40, 120) ;
      text("humidity is " +  humidity, 40, 160) ;


      // cloud

      noStroke();
      image(cloud, x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;

      break;

  }
}
