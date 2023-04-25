let screen = document.querySelector("canvas");
let pincel = screen.getContext("2d");
pincel.fillStyle = "white";
pincel.fillRect(0, 0, 1250, 670);

let radio = 20
let xAleatory;
let yAleatory;

function drawGirth(x, y, radio, color) {
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * Math.PI);
  pincel.fill();
}

function clearScreen() {
  pincel.clearRect(0, 0, 1250, 670);
}

let x = 0;
let direction = 1;

function drawTarget(x, y, radio = 10) {
  drawGirth(x, y, radio + 40, "red");
  drawGirth(x, y, radio + 30, "white");
  drawGirth(x, y, radio + 20, "red");
  drawGirth(x, y, radio + 10, "white");
  drawGirth(x, y, radio, "red");
}

function randomPlace(max) {
  return Math.floor(Math.random() * max);
}

function updateScreen() {
  clearScreen();
  xAleatory = randomPlace(1250);
  yAleatory = randomPlace(670);
  drawTarget(xAleatory, yAleatory);
  x++;
}

setInterval(updateScreen, 2000);

function shot(eve){
  let x = eve.pageX - screen.offsetLeft;
  let y = eve.pageY - screen.offsetTop;

  if (( x < xAleatory + radio) &&
      ( x > xAleatory - radio) &&
      ( y < yAleatory + radio) &&
      ( y > yAleatory - radio) ) {
        alert('Tiro certero')
      }
}
screen.onclick = shot;
