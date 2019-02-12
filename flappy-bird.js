let bird;
let pipe;

function setup(){
	createCanvas(550,650);
	bird = new Bird();
	pipe = new Pipe();
}

function draw(){
	background(51);
	bird.update();
	bird.show();
	pipe.show();
}

function keyPressed(){
	if(key == " "){
		bird.applyFlap();
	}
}