var w = 600;
var h = 600;
var button ;
var n = 1;
var c = 6;
var base_angle = 137.5;

function setup() {
 createCanvas(w,h);
 angleMode(DEGREES);
  background(0);
  colorMode(HSB);
  button = createButton('SWITCH');
  button.position(10, 10);
  button.mousePressed(doit);

 
  }

  function doit() {
    n = 0;
    if (base_angle == 137.3){base_angle = 137.5;}
    else{base_angle = 137.3;}
  background(0);
}



function draw() {
  var a = n * base_angle;
  var r = c * sqrt(n);
  var x = r*cos(a) + w/2;
  var y = r*sin(a) + h/2;

  fill(n%360,50,100);
  noStroke();
  ellipse(x,y,7,7);
  n++;
}
