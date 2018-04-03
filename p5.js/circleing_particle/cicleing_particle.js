var w = 800;
var h = 400;
var theta = 0;
var r = 35;
var n = 15;
var particles = [];

function setup() {
    createCanvas(w,h);
    for (var i =0; i<n;i++){
        var p = new Particle(mouseX,mouseY,random(60,70),theta,random(5,6));
        particles[i] = p;
        console.log(mouseX,mouseY);
        theta += 0.3;
    }
    fill(255,100);
    noStroke();
    console.log(particles);
    background(0);
}

function draw() {
    if (frameCount/1500.0 == 0){
        background(0);
    }
    for (var i = 0; i<n;i++){
        particles[i].update(mouseX,mouseY);   
        ellipse(particles[i].x,particles[i].y,particles[i].rad,particles[i].rad);
        particles[i].theta += particles[i].delta_theta; 
    }
    // console.log(particles[1].x);
    // theta += 0.03;
}