class Star{
	
	float x;
	float y;
	float z;

	Star()	 {

		x = random(0, w);
		 y = random(0, h);
		 z = random(0, z);
	}

	void show(){
		fill(255);
		noStroke();
		ellipse(x,y,8,8);
	}

	void update(){

	}

}
