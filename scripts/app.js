function render() {
	player1.paddle.render();
	computer.paddle.render();
	ball.render();
}

var animate = window.requestAnimationFrame ||
							window.webkitRequestAnimationFrame ||
							window.mozRequestAnimationFrame ||
							window.oRequestAnimationFrame ||
							window.msRequestAnimationFrame ||
							function(callback) { window.setTimeout(callback, 1000/60) };

function step() {
	ball.move();
	render();
	animate(step);
}

window.onload = function() {
	animate(step);
};

window.addEventListener('keydown', function(e) {
	player1.paddle.move(e.keyCode);
})