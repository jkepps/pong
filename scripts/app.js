var canvas = document.getElementById('pong-table');
var context = canvas.getContext('2d');
var player1 = new Player();
var computer = new Computer();
var ball = new Ball(395, 245, 10, 10);
var $player1Score = document.getElementsByClassName('player-score')[0];
var $computerScore = document.getElementsByClassName('computer-score')[0];

var animate = window.requestAnimationFrame ||
							window.webkitRequestAnimationFrame ||
							window.mozRequestAnimationFrame ||
							window.oRequestAnimationFrame ||
							window.msRequestAnimationFrame ||
							function(callback) { window.setTimeout(callback, 1000/60) };

function render() {
	context.clearRect(0, 0, canvas.width, canvas.height)
	player1.paddle.render();
	computer.paddle.render();
	ball.render();
}

function step() {
	ball.move();
	computer.update(ball);
	render();
	animate(step);
}

window.onload = function() {
	animate(step);
};

window.addEventListener('keydown', function(e) {
	player1.paddle.move(e.keyCode);
})