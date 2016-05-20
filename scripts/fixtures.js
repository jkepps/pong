var canvas = document.getElementById('pong-table');
var context = canvas.getContext('2d');

function Ball(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.render = function() {
		var radius = 7;
		var startAngle = 0 * Math.PI;
		var endAngle = 2 * Math.PI;
		var counterClockwise = false;

		context.beginPath();
		context.arc(x,y,radius,startAngle,endAngle,counterClockwise);
		context.fillStyle = 'white';
		context.fill();
	}
}

function Paddle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.render = function() {
		context.beginPath();
		context.fillStyle = 'white';
		context.fillRect(x,y,width,height);
	}
}

function Player() {
	this.paddle = new Paddle(740, 200, 20, 100);
}

function Computer() {
	this.paddle = new Paddle(40, 200, 20, 100);
}