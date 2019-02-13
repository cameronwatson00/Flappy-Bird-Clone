let bird;
let pipes;
let gameOver;
let score; 

function setup(){
	createCanvas(550,650);
	bird = new Bird();
	pipes = [];
	gameOver = false;
	setInterval(newPipe, 2000);
	score = 0;
}

function newPipe(){
		pipes.push(new Pipe());
}

function draw(){
	background(51);
	
	for(let i = 0; i < pipes.length; i++){
		pipes[i].show();
		pipes[i].update();
		if(circleRect(bird.pos.x, bird.pos.y, bird.r, pipes[i].xpos, pipes[i].topY, pipes[i].w, pipes[i].topBar)){
			gameOver = true;
		}

		if(circleRect(bird.pos.x, bird.pos.y, bird.r, pipes[i].xpos, pipes[i].bottomBar, pipes[i].w, height - pipes[i].topBar + 1)){
			gameOver = true;
		}

		if(!gameOver && bird.pos.x > pipes[i].xpos + pipes[i].w + 10 && !pipes[i].past){
			pipes[i].past = true;
			score++;
		}

		if(pipes[i].xpos < 0 - pipes[i].w){
			pipes.shift();
		}
	}
		
	if(!gameOver){
		bird.update();
		bird.show();
		fill(255);
		textSize(20);
  		textAlign(CENTER, CENTER);
		text('Score: ' + score, 50, 30);
	}

	if(gameOver){
		fill(255);
		textSize(50);
  		textAlign(CENTER, CENTER);
		text('Game Over', width/2, height/2);
		textSize(35);
		text('Score: ' + score, width/2, height/2 + 50);
	}
}

function keyPressed(){
	if(key == " "){
		bird.applyFlap();
	}
}

function circleRect(cx, cy, r, sx, sy, sw, sh){
	let testX = cx;
	let testY = cy;

	if(cx < sx){
		testX = sx;
	}
	else if(cx > sx + sw){
		testX = sx + sw;
	}

	if(cy < sy){
		testY = sy;
	}
	else if(cy > sy + sh){
		testY = sy + sh;
	}

	let distX = cx - testX;
	let distY = cy - testY;

	let distance = sqrt((distX * distX) + (distY * distY));

	if(distance <= r){
		return true;
	}

	return false;
}