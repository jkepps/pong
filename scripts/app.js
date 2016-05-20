var player1 = new Player();
var computer = new Computer();
var ball = new Ball(395, 245, 10, 10);

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
	render();
	animate(step);
}

window.onload = function() {
	animate(step);
};

window.addEventListener('keydown', function(e) {
	player1.paddle.move(e.keyCode);
})