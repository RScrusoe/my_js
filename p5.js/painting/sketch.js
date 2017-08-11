var w = 640;
var h = 480;
var vScale = 16;
var particle;


function setup() {
 createCanvas(w,h);
 pixelDensity(1);
 video = createCapture(VIDEO);
 video.size(w/vScale,h/vScale);
 particle = new Particle(320,240);
 background(51);
  
}


function draw() {
video.loadPixels();
particle.update();
particle.show();

	}

