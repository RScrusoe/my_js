var w = 1280;
var h = 620;
var x = w/4;
var y = h/2;
var dir = 30;
var r = 25;
var speed = 15;
function setup() {

  createCanvas(w,h);
}

function isStrikingX(){
	if (x > r && (x < (w-r))){
		return 0;	}
	else{
		text("FUCK!!", 10, 150);
		return 1;
	}
}

function isStrikingY(){
	
	if (y > r && (y < (h-r))){
		return 0;	}
	else{
		text("FUCK!!", 10, 60);
		text(x, 10, 90);
		text(y, 10, 120);

		return 1;
	}
}
function draw() {
	background(mouseX*255/w,mouseX*255/w,mouseX*255/w);

text(dir, 10, 30);

	fill(255,0,0);
	if (!(isStrikingX()) && !(isStrikingY())){
		ellipse(x,y,2*r,2*r);
		x = x + speed*cos(dir*PI/180);
		y = y - speed*sin(dir*PI/180);

	}


	else if (isStrikingX){

		dir = 0 - dir;
		
		x = x + speed*cos(dir*PI/180);
		y = y - speed*sin(dir*PI/180);
		ellipse(x,y,2*r,2*r);
	}

	else if(isStrikingY()){
		dir = 180 - dir;
		x = x + speed*cos(dir*PI/180);
		y = y - speed*sin(dir*PI/180);
		ellipse(x,y,2*r,2*r);

	}
	}
