function Pipe(){

	this.xpos = width+1;
	this.distanceBetween = 150;
	this.w = 55;

	this.topBar = random(50,height-150);
	this.bottomBar = this.topBar + this.distanceBetween;

	this.show = function(){
		stroke(0);
		strokeWeight(2);
		fill(0,255,0);
		rect(this.xpos, -1, this.w ,this.topBar);
		rect(this.xpos, this.bottomBar, this.w ,height - this.bottomBar + 1);
	}

	this.update = function(){
		this.xpos -= 3;
	}
	

	// fine tune numbers to ensure its all even
}