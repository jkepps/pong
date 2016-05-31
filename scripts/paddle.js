function Paddle(x, y, width, height, speed) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = speed;
}

Paddle.prototype.render = function() {
	context.beginPath();
	context.fillStyle = 'white';
	context.fillRect(this.x,this.y,this.width,this.height);
};

Paddle.prototype.move = function(dir) {
	context.clearRect(this.x,this.y,this.width,this.height);
	if (dir == 38) {
		if(this.y == 0) { return }
		this.y -= this.speed;
	} else if (dir == 40) {
		if(this.y >= canvas.height - this.height) { return }
		this.y += this.speed;
	}
};