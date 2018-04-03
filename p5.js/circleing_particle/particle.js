function Particle (x,y,r,theta,rad) {
    this.x = x;//+ r*cos(theta);
    this.y = y;// + r*sin(theta);
    this.r = r;
    this.rad = rad;
    this.theta = theta;
    this.delta_theta = random(0.07,0.1);
    this.update = function (f,g) {
        this.x = f + this.r*cos(this.theta);
        this.y = g + this.r*sin(this.theta);
    }
}