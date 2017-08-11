function Particle(x, y) {
	this.pos = createVector(x, y);
	this.v = createVector(0, random(-15, -10));
	this.a = createVector(0, 0);

	this.applyF = function(f) {
		this.a.add(f);
	}

	this.update = function() {
		this.v.add(this.a);
		this.pos.add(this.v);
		this.a.mult(0);
	}

	this.show = function() {
		point(this.pos.x, this.pos.y);
		// console.log(1);
	}

}