var w = 600;
var h = 600;

var url1 = 'http://api.wordnik.com:80/v4/word.json/';
var word = 'mobile';
var url2 = '/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

var link;

function setup() {
  noCanvas();
  link = createA('#',word);
  link.mousePressed(get_related_word);

  	//var url = url1+word+url2;
  	// console.log(url);
	// loadJSON(url,gotData);
	
}


function get_related_word() {
	console.log(url1+word+url2);
		loadJSON(url1+word+url2,gotData);
}

    



function gotData(data) {


var ind1 = floor(random(0,data.length));
if (data[ind1]){
var ind2 =  floor(random(0,data[ind1].words.length));

word = data[ind1].words[ind2];
link.html(word);
console.log(data);
}
else{
	word = 'internet';
}
}

   