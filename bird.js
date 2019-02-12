function Bird(){

	this.w = 35;
	this.pos = new p5.Vector(150, 250);
	this.velocity = new p5.Vector(0,0);
	this.gravity = new p5.Vector(0, 0.5);
	this.flap = new p5.Vector(0, -10);

	this.show = function(){
		fill(255,0,0);
		stroke(0);
		strokeWeight(1);
		ellipse(this.pos.x, this.pos.y, this.w, this.w);
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
		}

	}

	this.applyFlap = function(){
		this.velocity.y = 0;
		this.velocity.add(this.flap);
	}
	
}