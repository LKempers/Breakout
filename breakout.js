"use strict";

//bring up the canvas
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
var x = 500;
var y = 650;

var xBall = 1250/2;
var yBall = 700-30;
var dx = 2;
var dy = -2;


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
    ctx.arc(600, 600, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "#2387";
    ctx.fill();
    ctx.closePath();

    xBall += dx;
    yBall += dy;
}
drawBall();
setInterval(drawBall, 10);


//make the ball move

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
