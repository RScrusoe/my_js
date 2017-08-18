var w = 600;
var h = 600;
var img;

function preload() {
  img = loadImage('a/hand.png',loaded);
}

function loaded(image) {
  img = image;
}


function setup() {
 createCanvas(w,h);
  imageMode(CORNERS); 

 }

var x = 200;
function draw() {
  background(51);
  image(img,w/2-x/2,h/2-x/2,w/2+x/2,h/2+x/2);
  // image(img,w/2-x/2,h/2-x/2,x,x,);
  x -= 3;
  if (x<=0){x = 200;}
}
