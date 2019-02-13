function Pipe(){

	this.xpos = width+1;
	this.distanceBetween = 120;
	this.w = 55;
	this.color = 'green';

	this.topBar = random(50,height-200);
	this.bottomBar = this.topBar + this.distanceBetween;

	this.show = function(){
		stroke(0);
		strokeWeight(2);
		fill(this.color);
		rect(this.xpos, -1, this.w ,this.topBar);
		rect(this.xpos, this.bottomBar, this.w ,height - this.topBar + 1);
	}

	this.update = function(){
		this.xpos -= 3;
	}
}