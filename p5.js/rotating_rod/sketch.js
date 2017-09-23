var w = 600;
var h = 600;

function setup() {
    createCanvas(w,h);
}


var x = 175;
var y = 0;
var a = 0;
function draw() {
    background(51);
    angleMode(DEGREES);
    translate(w/2,h/2);
    rotate(a);
    stroke(255,150,0);
    strokeWeight(5);
    line(0,0,x,y);
    push();
    translate(x,y);
    stroke(0,150,255);
    rotate(2.5*a);
    line(0,0,50,50);

    push();
    translate(50,50);
    stroke(255,0,150);
    rotate(5*a);
    line(0,0,25,25);
    pop();

    pop();

    a = a + 1;
    
}
