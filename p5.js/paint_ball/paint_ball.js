var w = 600;
var h = 600;
var balls = [];
var ct = 0;
var but;
var r = 20;
var back = 255;

function setup() {
    createCanvas(w,h);
    background(back);
    noStroke();

}




function mouseDragged() {
    ellipse(mouseX,mouseY,r,r);
    balls[ct] = new Ball(mouseX,mouseY);
    ct += 1;
}

function mouseClicked() {

    ellipse(mouseX,mouseY,r,r);
    balls[ct] = new Ball(mouseX,mouseY);
    ct += 1;
}

function draw() {
    but = createButton('Clear!');
    but.position(10,10);
    but.mousePressed(clear);
    function clear() {
        balls = [];
        ct = 0;
        background(back);
        but = createButton('Clear!');
        but.position(10,10);

    }
    for (var i = 0; i<balls.length; i++){
        balls[i].show();
    }

}   

