var lincoln;
var wind=0;
var clouds;
var sunset;
var sunrise;
var temperature;

var lincolnImg;

function preload() {
  
  var url = 'http://api.openweathermap.org/data/2.5/weather?lat=33.584405&lon=-86.127705&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial';
  lincoln = loadJSON(url);

  lincolnImg = loadImage("assets/lincoln.png");

}

function setup() {
  
  createCanvas(400,400);

  wind = lincoln.wind.speed;

  clouds = lincoln.clouds.all;

  temperature = lincoln.main.temp;

  sunset = new Date(lincoln.sys.sunset*1000);
  sunrise = new Date(lincoln.sys.sunrise*1000);

}

function draw() {

	image(lincolnImg, 0, 0, lincolnImg.width, lincolnImg.height);

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