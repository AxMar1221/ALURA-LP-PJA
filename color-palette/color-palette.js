let screen = document.querySelector("canvas");
let pincel = screen.getContext("2d");
pincel.fillStyle = "orange";
pincel.fillRect(0, 0, 1250, 670);

let canDraw = false;

//Variables para dibujar la paleta
let xRed = 0;
let xWithe = 50;
let xBlue = 100;
let yRects = 0;
let sizeRects = 50;
let currentColor = 'red'

function drawCircle(x, y) {
  if (canDraw) {
    pincel.fillStyle = currentColor;
    pincel.beginPath();
    pincel.arc(x, y, 15, 0, 2 * 3.14);
    pincel.fill();
  }
}

//Función para dibujar cada uno de los cuadrados de la paleta
function drawRects(x, y, size, color) {
  pincel.fillStyle = color;
  pincel.fillRect(x, y, size, size);
  pincel.fill();
}

//Función para dibujar la paleta de colores
function drawPalette() {
  drawRects(xRed, yRects, sizeRects, "red");
  drawRects(xWithe, yRects, sizeRects, "white");
  drawRects(xBlue, yRects, sizeRects, "blue");
}

function enableDraw() {
  canDraw = true;
}

function disableDraw() {
  canDraw = false;
}

//Función para delimitar el área
function protectArea(xCoord, yCoord) {
  if (
    xCoord >= 0 &&
    xCoord < 3 * sizeRects + 5 &&
    yCoord >= 0 &&
    yCoord < sizeRects + 5
  ) {
    return false;
  } else {
    return true;
  }
}

function catchMouse(eve) {
  let x = eve.pageX - screen.offsetLeft;
  let y = eve.pageY - screen.offsetTop;
  
  if (protectArea(x, y)) {
    drawCircle(x, y, setColor);
  }
}

function setColor(eve){
  let x = eve.pageX - screen.offsetLeft;
  let y = eve.pageY - screen.offsetTop;

  if ( y > yRects && y < ( yRects + sizeRects )) {
    if ( x > xRed && x < (xRed + sizeRects )) {
      currentColor = 'red'
      alert('El color actual es: ' + currentColor)
    } else if ( x > xWithe && x < (xWithe + sizeRects )) {
      currentColor = 'white'
      alert('El color actual es: ' + currentColor)
    } else if ( x > xBlue && x < ( xBlue + sizeRects )) {
      currentColor = 'blue'
      alert('El color actual es: ' + currentColor)
    }
  }

}

screen.onmousemove = catchMouse;
screen.onmousedown = enableDraw;
screen.onmouseup = disableDraw;

drawPalette();

screen.onclick = setColor;