function Bird(){

	this.r = 20;
	this.pos = new p5.Vector(150, 250);
	this.velocity = new p5.Vector(0,0);
	this.gravity = new p5.Vector(0, 0.5);
	this.flap = new p5.Vector(0, -8);

	this.show = function(){
		fill(255,0,0);
		stroke(0);
		strokeWeight(1);
		ellipseMode(RADIUS);
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
	}

	this.update = function(){
		this.velocity.add(this.gravity);
		this.pos.add(this.velocity);

		if(this.pos.y <= 0){
			this.velocity.y = 0;
			this.pos.y = 0;
		}

		if(this.pos.y >= height){
			this.velocity.y = 0;
			this.pos.y = height;
			gameOver = true;
		}
	}

	this.applyFlap = function(){
		this.velocity.y = 0;
		this.velocity.add(this.flap);
	}
	
}