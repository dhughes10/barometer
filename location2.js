var Antarctica;
var wind=0;
var clouds;
var sunset;
var sunrise;
var temperature;

var AntarcticaImg

function preload() {
  
  var url = 'http://api.openweathermap.org/data/2.5/weather?lat=-80.361215&lon=18.989146&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial';
  Antarctica = loadJSON(url);

  AntarcticaImg = loadImage("assets/antarctica.png");
}

function setup() {
  
  createCanvas(400,400);

  wind = Antarctica.wind.speed;

  clouds = Antarctica.clouds.all;

  temperature = Antarctica.main.temp;

  sunset = new Date(Antarctica.sys.sunset*1000);
  sunrise = new Date(Antarctica.sys.sunrise*1000);

}

function draw() {
	image(AntarcticaImg, 0, 0, AntarcticaImg.width, AntarcticaImg.height);

		       for(var t = 0;t < temperature; t++){
        	   if(temperature > 60 ){
        	   	noStroke()
			    fill("red")
				rect(random(0,400),random(0,400),temperature/5, temperature/5);
			 } else if(temperature < 60){
			 	noStroke()
			 	fill("blue")
				rect(random(0,400),random(0,400),temperature/5, temperature/5);
			}

}

	textSize(16);

	//wind
	  fill("white");
	  text("wind:", 290, 200);
      text(wind, 335, 200);
	//clounds
	  fill("white");
	  text("clouds:", 20, 200);
	  text(clouds, 80, 200);

	  textSize(22);

	//sunset
	   fill("black");
	   text(sunset.toLocaleTimeString(), 145,375);

	//sunrise
	   fill("white")
	   text(sunrise.toLocaleTimeString(), 145,50);

	//temperature
		noStroke();
		fill("white")
		rect(160,170,85,45);
	   if(temperature > 60 ){
			fill("red")
			text(temperature, 175, 200);
		} else if(temperature < 60){
			fill("blue")
			text(temperature, 175, 200);
		}





}