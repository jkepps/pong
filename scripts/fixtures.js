var canvas = document.getElementById('pong-table');
var context = canvas.getContext('2d');
var player1 = new Player();
var computer = new Computer();
var ball = new Ball(395, 245, 10, 10);
var $player1Score = document.getElementsByClassName('player-score')[0];
var $computerScore = document.getElementsByClassName('computer-score')[0];

function Ball(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = 10;	
	if(Math.random()>=0.5) {
		this.angle = Math.PI + (-1 + 2 * Math.random()) * Math.PI / 3;
	} else {
		this.angle = (-1 + 2 * Math.random()) * Math.PI / 3;
	}
	this.xSpeed = this.speed * Math.cos(this.angle);
	this.ySpeed = this.speed * Math.sin(this.angle);

	this.reset = function() {
		this.x = x;
		this.y = y;
		if(Math.random()>=0.5) {
			this.angle = Math.PI + (-1 + 2 * Math.random()) * Math.PI / 3;
		} else {
			this.angle = (-1 + 2 * Math.random()) * Math.PI / 3;
		}
		this.xSpeed = this.speed * Math.cos(this.angle);
		this.ySpeed = this.speed * Math.sin(this.angle);
	};

	this.render = function() {
		var radius = 10;
		var startAngle = 0 * Math.PI;
		var endAngle = 2 * Math.PI;
		var counterClockwise = false;

		context.beginPath();
		context.rect(this.x, this.y, width, height);
		context.fillStyle = 'white';
		context.fill();
	};

	this.move = function() {
		context.clearRect(this.x,this.y,this.width,this.height)
		if(this.y <= 5 || this.y >= canvas.height - this.height/2) {
			this.ySpeed *= -1;
		}	
		if(this.x <= player1.paddle.x + player1.paddle.width && this.x >= player1.paddle.x && this.y >= player1.paddle.y && this.y <= player1.paddle.y + player1.paddle.height ||
			 this.x <= computer.paddle.x && this.x >= computer.paddle.x - computer.paddle.width && this.y >= computer.paddle.y && this.y <= computer.paddle.y + computer.paddle.height) {
			this.xSpeed *= -1;
			this.ySpeed *= (Math.random() * 3 + 1)/2;
			if(Math.random() > 0.5) {this.ySpeed *= -1;}
		}
		if (this.x + this.width > canvas.width) {
			computer.score++;
			$computerScore.innerHTML = computer.score;
			this.reset();
		} else if (this.x < 0) {
			player1.score++;
			$player1Score.innerHTML = player1.score;
			this.reset();
		}
		this.y += this.ySpeed;
		this.x += this.xSpeed;
	};
}

function Paddle(x, y, width, height, speed) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = speed;

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
	this.paddle = new Paddle(760, 200, 20, 100, 50);
	this.score = 0;
}

function Computer() {
	this.paddle = new Paddle(20, 200, 20, 100, 5);
	this.score = 0;

	this.update = function(ball) {
		if (ball.y < this.paddle.y) {
			this.paddle.move(38)
		} else if (ball.y > this.paddle.y + this.paddle.height) {
			this.paddle.move(40)
		}
	}
}