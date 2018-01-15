var w = 600;
var h = 600;
let xoff=0;
let yoff=0;
let zoff=0;
let inc = 0.1;
let scl=20;
let rows,cols;
let fr;
let flowfield;
let particles = [];
function setup() {
    fr = createP('');
    createCanvas(w,h);
    rows = height/scl;
    cols = width/scl;
    flowfield = new Array(rows*cols);
    for (var i =0;i<1500;i++){
        particles[i] = new Particle();
    }

background(255);
}

function draw() {
stroke(0);
yoff=0;
for(var y=0;y<rows;y++){
    xoff=0;
    for (var x =0;x<cols;x++){
        var index = x + y*cols;
        var angle = noise(xoff,yoff,zoff)*2*PI*4;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(1)
        flowfield[index] = v;
        // fill(r);
        // push();
        // translate(x*scl,y*scl);
        // rotate(v.heading());
        // stroke(0,25);
        // strokeWeight(1);
        // line(0,0,scl,0);
        // pop();

        // rect(x*scl,y*scl,scl,scl);
        xoff+=inc;
    }
    yoff+=inc
}
fr.html(floor(frameRate()));

for (var i=0;i<particles.length;i++){
    particles[i].follow(flowfield);
    particles[i].show();
    particles[i].update();
}

// noLoop();

zoff += 0.003;
}