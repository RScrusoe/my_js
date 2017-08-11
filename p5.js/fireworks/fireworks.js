function Firework() {
	this.firework = new Particle(random(width), height);
	this.exploded = false;
	this.update = function() {

		if (!this.exploded) {
			this.firework.applyF(gravity);
			this.firework.update();
			if (this.firework.v.y >= 0) {
				this.firework = null;
				this.exploded = true;
			}
		}
	}
	this.show = function() {
		if (!this.exploded) {
			this.firework.show();
		}
	}
}