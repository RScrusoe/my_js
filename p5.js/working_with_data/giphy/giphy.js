var w = 600;
var h = 600;

var url = 'http://api.giphy.com/v1/gifs/search?api_key=b90c01b7fd8e4a428c964d1c31a31db0&limit=10&q=';
var q = 'funny cat';


function setup() {
  noCanvas();
  take_input(q);
  
}

function take_input(q){
  var inp = createInput(q);
  inp.input(log_input);
  var button = createButton('submit');
  button.mousePressed(getGifs);
  var trend_button = createButton('Trending!');
  trend_button.mousePressed(trending);
}

function trending(){
var urlt = 'http://api.giphy.com/v1/gifs/trending?api_key=b90c01b7fd8e4a428c964d1c31a31db0&limit=10';
loadJSON(urlt,gotData);
console.log(urlt);
}

function log_input() {
q = this.value();
}

function getGifs(){
	console.log(q);
	var url_now = url + q;
	console.log(url_now);
	loadJSON(url_now,gotData);
}
 
function gotData(data){
removeElements();
take_input(q);

console.log(data);
var images = data.data;
var src;
createP('');
for (var i=0;i<images.length;i++){
	src = images[i].images.original.url;
	console.log(src);
	createP('');
	createImg(src);
}

}

function keyPressed() {
	if(keyCode == ENTER)
	{
		getGifs();
	}
}