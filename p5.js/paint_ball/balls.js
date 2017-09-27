
function Ball(x,y) {
    this.x = x;
    this.y = y;
    this.r = random(10,30);
    this.vel = random(0.1,3);
    this.color = randomColor();
    this.update = function () {
        // this.x += 0;
        if(this.y>height){}
        else{this.y += this.vel;}
    }
    this.show = function () {

        this.update();
        fill(this.color);
        ellipse(this.x, this.y,this.r,this.r);
    }


}