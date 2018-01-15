var w = 600;
var h = 600;

function setup() {
    createCanvas(w,h);
    frameRate(15);
}
let start = 0;
function draw() {
    background(0);
    let r = 20;
    translate(w/2,h/2);
    for (var a =start;a<TWO_PI+start-0.6;a+=0.3){
        let rad = 100;
        stroke(255);
        fill(255);
        ellipse(rad*cos(a),rad*sin(a),r);
        r = r/1.1;
    }
    start += 0.3;
}