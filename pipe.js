function Pipe(){

	this.xpos = width+1;
	this.distanceBetween = 120;
	this.w = 55;
	this.topBar = random(50,height-200);
	this.bottomBar = this.topBar + this.distanceBetween;	
	this.topY = -1;
	this.past = false;

	this.show = function(){
		stroke(0);
		strokeWeight(2);
		fill(0,255,0);
		rect(this.xpos, this.topY, this.w ,this.topBar);
		rect(this.xpos, this.bottomBar, this.w ,height - this.topBar + 1);
	}

	this.update = function(){
		this.xpos -= 3;
	}
}