var w = 600;
var h = 600;
var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apikey = '&appid=2aafcbb8bd751116ef719e2ca76b179c&units=metric';

function setup() {
  noCanvas();

  var button = select('#submit');
  button.mousePressed(getCity);
  var input = select('#city');
  
  function getCity() {
  	var city = input.value();

  	var url = api + city + apikey;
  	console.log(url);
	loadJSON(url,gotData);
	
}

    
}


function gotData(data) {
	weather=data;
	console.log(data);
	removeElements()
	createElement('h2',weather.name);
	createElement('h3',weather.main.temp+' *C');
	createElement('h3','Humidity = ' + weather.main.humidity);
	createElement('h3','Forcast: '+weather.weather[0].description);
}

   