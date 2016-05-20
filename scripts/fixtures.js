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
		context.arc(this.x,this.y,radius,startAngle,endAngle,counterClockwise);
		context.fillStyle = 'white';
		context.fill();
	}
}

function Paddle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = 50;

	this.render = function() {
		context.beginPath();
		context.fillStyle = 'white';
		context.fillRect(this.x,this.y,this.width,this.height);
	}

	this.move = function(dir) {
		context.clearRect(this.x,this.y,this.width,this.height);
		if (dir == 38) {
			if(this.y == 0) { return }
			this.y -= this.speed;
		} else if (dir == 40) {
			if(this.y >= canvas.height - this.height) { return }
			this.y += this.speed;
		}
	};
}

function Player() {
	this.paddle = new Paddle(740, 200, 20, 100);
}

function Computer() {
	this.paddle = new Paddle(40, 200, 20, 100);
}