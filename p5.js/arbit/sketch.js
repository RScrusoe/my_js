var w = 600;
var h = 600;
var stars = [];
var speed;
value = 100;
function setup() {
 createCanvas(w,h);
  noStroke();

  
}


function draw() {
	fill(200);
  rect(5,5,50,20);
  fill(0);
  text("clear", 18, 18);
  print('x='+  mouseX);
  print('y=' + mouseY);
 fill('blue');
	}

function touchMoved() {
	if (!(mouseX>=5 && mouseX<=75 && mouseY>=5 && mouseY<=25)){
  ellipse(mouseX, mouseY, 25, 25);
}
  // prevent default
  return false;
}

function mousePressed() {
  if (mouseX>=5 && mouseX<=75 && mouseY>=5 && mouseY<=25)
  {background(255);}

  return false;
}