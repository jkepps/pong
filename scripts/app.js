var player1 = new Player();
var computer = new Computer();
var ball = new Ball(395, 245, 10, 10);

function render() {
	player1.paddle.render();
	computer.paddle.render();
	ball.render();
}

window.onload = function() {
	render();
};