/*
 js para el mitico juego de arkanoid
*/

console.trace('comenzamos a jugar');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Pelota
var x = canvas.width / 2;
var y = canvas.height - 30
var dx = 2;
var dy = -2;
var ballRadius = 10;

// Paleta
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleHeight) / 2;

// Teclado
var rightPressed = false;
var leftPressed = false;

// Ladrillos
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];
for(c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for(r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0 , y: 0}
    }
}

// Variables del juego
var velocidadJuego = 10;
var gameOver = false;


// Main functions

function drawBricks() {
    for(c = 0; c < brickColumnCount; c++) {
        for(r = 0; r < brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop

            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBall () {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);

    drawBall();
    drawPaddle();
    drawBricks();

    x += dx;
    y += dy;

    // Comprobar que la bola no se salga
    //  Borde superior e inferior
    if(y + dy < ballRadius) {
        dy = -dy
    } else if (y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else if(gameOver == false){
            alert("GAME OVER");
            document.location.reload();
            gameOver = true;
        }
    }

    //  Borde izquierdo y derecho
    if(x + dx > canvas.width - ballRadius || x - ballRadius + dx < ballRadius) {
        dx = -dx 
    }

    // Mover paleta
    if(rightPressed && paddleX < canvas.width-paddleWidth){
        paddleX += 7;
    } else if( leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

}

setInterval(draw, velocidadJuego);

// Event listeners
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// Event handlers
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    } else {
        console.log(e.keyCode);
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    } 
}


