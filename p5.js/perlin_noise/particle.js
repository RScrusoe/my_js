function Particle() {
    this.pos = createVector(random(width),random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);
    this.maxvel = 2;
    this.prepos = this.pos.copy();
    this.color = randomColor({luminosity: 'bright',format:'rgba',alpha:0.5});
    this.update = function () {
        this.edges();
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.vel.limit(this.maxvel)
    }

    this.follow = function (vectors) {
        var x = floor(this.pos.x/scl);
        var y = floor(this.pos.y/scl);
        this.applyForce(vectors[x+y*cols]);
    }

    this.applyForce = function (f) {
        this.acc.add(f);
    }

    this.show = function () {
        stroke(this.color);
        strokeWeight(1);
        line(this.pos.x,this.pos.y,this.prepos.x,this.prepos.y);
        this.updateprev();
        // point(this.pos.x,this.pos.y);
    }

    this.updateprev = function () {
        this.prepos.x = this.pos.x;
        this.prepos.y = this.pos.y;
    }

    this.edges = function () {

        if (this.pos.x > width) {this.pos.x=0; this.updateprev();}
        if (this.pos.x <0) {this.pos.x=width; this.updateprev();}
        if (this.pos.y > height) {this.pos.y=0; this.updateprev();}
        if (this.pos.y <0) {this.pos.y=height; this.updateprev();}
    }
}