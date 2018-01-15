var w = 600;
var h = 600;
let cam;
function setup() {
    createCanvas(w,h,WEBGL);
    cam = createCapture(VIDEO);
    cam.hide();
}

function draw() {
    background(51);
    rotateX(frameCount*0.01);
    // // rotateZ(frameCount*0.01);
    rotateY(frameCount*0.01);
    
    texture(cam);
    box(250);
}