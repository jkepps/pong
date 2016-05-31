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
}

Ball.prototype.reset = function() {
	this.x = 395;
	this.y = 245;
	if(Math.random()>=0.5) {
		this.angle = Math.PI + (-1 + 2 * Math.random()) * Math.PI / 3;
	} else {
		this.angle = (-1 + 2 * Math.random()) * Math.PI / 3;
	}
	this.xSpeed = this.speed * Math.cos(this.angle);
	this.ySpeed = this.speed * Math.sin(this.angle);
};

Ball.prototype.render = function() {
	var radius = 10;
	var startAngle = 0 * Math.PI;
	var endAngle = 2 * Math.PI;
	var counterClockwise = false;

	context.beginPath();
	context.rect(this.x, this.y, this.width, this.height);
	context.fillStyle = 'white';
	context.fill();
};

Ball.prototype.move = function() {
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