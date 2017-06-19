var w = 1300;
var h = 600;
var stars = [];
var speed;
var col1 = 0;
var col2 = 0;
var col3 = 255;
value = 100;

var socket;

function setup() {
 createCanvas(w,h);
  noStroke();
socket=io.connect('http://localhost:3000');
socket.on('mouse',newDrawing);

}

function newDrawing(data) {
  fill(0);
  ellipse(data.x, data.y, 25, 25,4);
  // body...
}

function draw() {
	fill(200);
  rect(5,5,50,20);
  fill(0);
  text("clear", 18, 18);
  fill(200);
  rect(60,5,50,20);
  fill(0);
  text("random", 65, 18);
  print('x='+  mouseX);
  print('y=' + mouseY);
 fill(col1,col2,col3);

	}

function touchMoved() {
	if (!((mouseX>=5 && mouseX<=75 && mouseY>=5 && mouseY<=25)&&(mouseX>=60 && mouseX<=110 && mouseY>=5 && mouseY<=25))){

var data = {
  x: mouseX,
  y:mouseY
}

socket.emit('mouse',data);
  ellipse(mouseX, mouseY, 25, 25);
}

  // prevent default
  return false;
}

function mousePressed() {
  if (mouseX>=5 && mouseX<=55 && mouseY>=5 && mouseY<=25)
  {background(255);}
  else if (mouseX>=60 && mouseX<=110 && mouseY>=5 && mouseY<=25)
  {
    col1 = random(255);
    col2 = random(255);
    col3 = random(255);
  }
  else {
    ellipse(mouseX, mouseY, 25, 25,4);
  }
  return false;
}