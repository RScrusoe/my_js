var w = 800;
var h = 400;
var theta = 0;
var r = 50;
var n = 10;
var particles = [];

function setup() {
    createCanvas(w,h);
    for (var i =0; i<n;i++){
        var p = new Particle(mouseX,mouseY,r,theta);
        particles.push(p);
        theta += 0.01;
    }
    fill(255);
    noStroke();
}

function draw() {
    background(0);

    for (var i =0; i<n;i++){
        ellipse(particles[i].x,particles[i].y,10,10);
        particles[i].theta += 0.03;    
    }

    // theta += 0.03;
}