function Pipe(){

	this.distanceBetween = 120;
	this.w = 50;

	this.topBar = random(50,height-150);
	this.bottomBar = this.topBar + this.distanceBetween;

	this.show = function(){
		stroke(0);
		strokeWeight(2);
		fill(255);
		rect(width/2, -1, this.w ,this.topBar);
		rect(width/2, this.bottomBar, this.w ,height - this.bottomBar + 1);

	}
	

	// fine tune numbers to ensure its all even
}