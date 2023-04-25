
let screen = document.querySelector("canvas");
let pincel = screen.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function drawCircle(x, y, radio, color) {
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * 3.14);
  pincel.fill();
}

function drawFlower(){
  drawCircle(260,200,20,'purple')
  drawCircle(300,200,20,'red')
  drawCircle(340,200,20,'green')
  drawCircle(300,160,20,'yellow')
  drawCircle(300,240,20,'blue')
}

drawFlower()
