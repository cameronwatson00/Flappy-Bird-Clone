let bird;
let pipes;
let count;

function setup(){
	createCanvas(550,650);
	bird = new Bird();
	pipes = [];
	count = 0;
}

function draw(){
	background(51);
	count++;

	if(count == 150){
		pipes.push(new Pipe());
		count = 0;
	}


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