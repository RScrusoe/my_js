var w = 800;
var h = 600;
var fireworks = [];
var gravity;

function setup() {
	createCanvas(w, h);
	stroke(255);
	gravity = createVector(0, 0.2);
	strokeWeight(4);
	// ellipse(w/2,h/2,10);

}



function draw() {
	background(51);
	if (random(1) < 0.1) {
		fireworks.push(new Firework());
	}
	for (var i = 0; i < fireworks.length; i++) {
		fireworks[i].update();
		fireworks[i].show();
	}
}