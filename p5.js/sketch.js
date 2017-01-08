var w = 1400;
var h = 800;

function setup() {

  createCanvas(w,h);
}

function draw() {
	noStroke();
	var x=0;
for (i = 0; i <= 140; i++) {
  for (j = 0; j <= 80; j++) {
    fill(0,0,x%255);
    x = x + 5;
    rect(i,j,i+10,j+10);
  }
}

}