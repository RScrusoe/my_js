let w = 600;
let h = 600;


function setup() {
    createCanvas(w,h);
    angleMode(DEGREES);
        noFill();
    stroke(255);
}


function draw() {
    background(0);
    circle(w/2,h/2,mouseX*10);

}   

function circle(x,y,d) {

    ellipse(x,y,d);
    // ellipse(x,y,d);
    if(d>2){
    circle(x+d*0.5,y,d*0.5);
    circle(x-d*0.5,y,d*0.5);
    // circle(x,y+d*0.5,d*0.5);
    // circle(x,y-d*0.5,d*0.5);
    }

}