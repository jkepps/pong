function Computer() {
	this.paddle = new Paddle(20, 200, 20, 100, 5);
	this.score = 0;
}

Computer.prototype.update = function(ball) {
	if (ball.y < this.paddle.y) {
		this.paddle.move(38)
	} else if (ball.y > this.paddle.y + this.paddle.height) {
		this.paddle.move(40)
	}
};