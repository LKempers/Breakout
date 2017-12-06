"use strict";

//bring up the canvas
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
var x = 500;
var y = 650;

let moveX = 3;
let moveY = -5;
let ballPosX = 600;
let ballPosY = 600;

//create a paddle
function drawPaddle(x,y) {

	ctx.fillStyle = "#666";
	ctx.fillRect(x,y,200,20);
}
drawPaddle(x,y);

//make the paddle move
//draw more paddles
window.addEventListener("keydown", function(e) {
	switch(e.keyCode){
	    case 37:
	        if //draw more left and delete right
	        	(drawPaddle(x = x - 40,y)) {
	        	ctx.fillRect(x = x - 40,y,200,20);
	        	ctx.clearRect(x, y, 200, 20);
	    	}
	    break;
	    
	    case 39:
	        if ///draw more right and delete left
	        	(drawPaddle(x = x + 40,y)) {
	        	ctx.fillRect(x = x + 40,y,200,20)
	        	ctx.clearRect(x, y, 200, 20); 	
	    	}
	   	break;
	}
});

//create a ball
function drawBall() {
	ctx.beginPath();
    ctx.arc(ballPosX, ballPosY, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "#238472";
    ctx.fill();
    ctx.closePath();

}
drawBall();

//make the ball move 
function moveBall() {

	//move the ball up
	//move the ball right
	drawBall(ballPosX, ballPosY);
	ballPosX += moveX;
	ballPosY += moveY;
}
setInterval(moveBall, 10);

//make the ball bounce

//erase the ball lines

//create bricks

function drawBrick(x,y) {

ctx.fillStyle = "#F90000";
ctx.fillRect(x,y,75,50);

}

for (let yBrick = 0; yBrick < 6; yBrick++){
	for (let xBrick = 0; xBrick < 13; xBrick++) {
	   drawBrick(15 + xBrick * 95, yBrick * 70); 
	}
}

//make the bricks hitable

//remove brick after hit from ball
