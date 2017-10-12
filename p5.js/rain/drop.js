function Drop() {
    this.x = random(width);
    this.y = random(-400,100);
    this.vel = random(3,9);
    // this.color = randomColor();
    this.l = random(5,15);
    this.update = function () {
        this.y += this.vel;
        if(this.y>height){
            this.y = random(-200,100);
            this.vel = random(3,9);
        }

    }

    this.show = function () {
        this.update();
        stroke(100,10,220);
        strokeWeight(3);
        line(this.x,this.y,this.x,this.y + this.l);
    }


}