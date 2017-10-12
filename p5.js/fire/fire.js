var w = 800;
var h = 800;

var l = [];

function setup() {
    createCanvas(w,h);
    angleMode(DEGREES);
    p = new Particle();
}


function draw() {
    background(0);
    for (var i=0;i<=2;i++){
        l.push(new Particle());
    }
    for(var i = 0; i<l.length;i++){
        if(l[i].alpha < 0){l.splice(i,1);}
        l[i].show();
    }

}   

class Particle{
    
    constructor(){
        this.x = w/2;
        this.y = h-50;
        this.vx = random(-2,2);
        this.vy = random(-8,-1);
        this.g = 0.08;
        this.alpha = 255;
        this.cg = 80;
    }

    update(){
        this.alpha -=3;
        this.vy -= this.g;
        this.x += this.vx;
        this.y += this.vy;
        this.cg += 2;
    }

    show(){
        this.update();
        noStroke();
        fill(255,this.cg,0,this.alpha);
        ellipse(this.x,this.y, 30);   
    }

}
