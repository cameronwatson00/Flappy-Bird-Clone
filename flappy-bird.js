let bird;

function setup(){
	createCanvas(550,650);
	bird = new Bird();
}

function draw(){
	background(51);
	bird.update();
	bird.show();
}

function keyPressed(){
	if(key == " "){
		bird.applyFlap();
	}
}