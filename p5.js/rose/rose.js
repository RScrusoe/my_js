var w = 600;
var h = 600;
let n;
let d;
let slidern,sliderd;
function setup() {
    createCanvas(w,h);
    slidern = createSlider(1,20,4);
    sliderd = createSlider(1,20,1);
}

function draw() {
    background(0);
    n = slidern.value();
    d = sliderd.value();
    // console.log(n,d);
    translate(w/2,h/2);
    beginShape()
    stroke(255);
    noFill();
    strokeWeight(3);
    for (var a =0 ;a<=d*TWO_PI;a+=0.01){
        let r = 200*cos(a*n/d);
        let x = r*cos(a);
        let y = r*sin(a);
        vertex(x,y);
    }
    endShape();
}