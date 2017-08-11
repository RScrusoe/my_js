var w = 600;
var h = 600;
// var PI = 3.1415
var anglel,angler;
var size = 10;
var factor = 0.7;
var factor2 = 0.8;
function setup() {
 createCanvas(w,h);
 
stroke('#00CC00');
createElement('h4','Angle-R');
  slider1 = createSlider(0,TWO_PI, PI/5, 0.01);
createElement('h4','Angle-L');
  slider2 = createSlider(0,TWO_PI, PI/5, 0.01);

}


function draw() {
background('#CCFFFF');

  translate(w/2,h);
  branch(150,10);
  anglel = slider1.value();
  angler = slider2.value();

	}


function branch(len,size) {
  strokeWeight(size);
  line(0,0,0,-len);
  translate(0,-len);
  if(len>5){
    push();
  rotate(anglel);
  branch(len*factor,size*factor2);
  pop();
  push();
  rotate(-angler);
  branch(len*factor,size*factor2);
  pop();
  }
}

