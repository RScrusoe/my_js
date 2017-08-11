var url = 'http://api.voicerss.org/?key=6c8935bf65fb4a3dba81d1ca28aee893&f=16khz_16bit_mono&hl=en-in&c=WAV&src=';
var data = "The name is Bond. James Bond.";
var inp;
var s;


function setup() {
  init();	
}


function init() {
	createElement('h1','Text-To-Speech');
	var inp = createInput("The name is Bond. James Bond.",);
	inp.input(typing);
	inp.size(350);
	var but = createButton('Speak');
	but.mousePressed(speak);
	createElement('h4','Volume');
	s = createSlider(0,1,0.7,0.1);
}


function speak() {
	console.log('getting data......');
	var urlt = url + data;
	loadSound(urlt,gotSound);
	console.log(urlt);
}	

function gotSound(sound) {
	sound.setVolume(s.value());
	sound.play();
	console.log('done');
}



function typing() {
	data = this.value();
	console.log(data);
	// var urlt = url + this.value();

}

function keyPressed() {
	if(keyCode==ENTER){
		speak();
	}
}