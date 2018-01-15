var w = 600;
var h = 600;
let a = 0;
let r = 200;
let add =1;
let ct = 0;
let n = 1;
let offset;
let start = 0;
function setup() {
    createCanvas(w,h);
}

function draw() {
    background(255);

    for(var hori = 1;hori<w/r+1;hori++){
        for(var ver = 0;ver<2*h/r;ver++){

    push();
    translate(r*hori-r/2,ver*r/2);
    stroke(0);
    noFill();
    arc(0,0,r,r,0,PI,OPEN);
    offset = map(sin(a),0,1,0.01,0.1);
    fill(map(offset,0.01,0.1,0,255),0,255-map(offset,0.01,0.1,0,255));
    ellipse(r*cos(a)/2,r*sin(a)/2,20,20);
    pop();
    }
}
    a += add*offset ;
    if(a>PI){
        add = -1;
    }
    if(a<0){
        add = 1;
    }


    // start+=0.01;

}