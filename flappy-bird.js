let bird;
let pipes;

function setup(){
	createCanvas(550,650);
	bird = new Bird();
	pipes = [];
	setInterval(newPipe, 2000);
}

function newPipe(){
	pipes.push(new Pipe());
}

function draw(){
	background(51);
	
	for(let i = 0; i < pipes.length; i++){
		pipes[i].show();
		pipes[i].update();

		if(pipes[i].xpos < 0 - pipes[i].w){
			pipes.shift();
		}
	}
	
	bird.update();
	bird.show();
}

function keyPressed(){
	if(key == " "){
		bird.applyFlap();
	}
}