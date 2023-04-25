function drawRect(x, y, base, height, color) {
  let screen = document.querySelector("canvas");
  let pincel = screen.getContext("2d");

  pincel.fillStyle = color;
  pincel.fillRect(x, y, base, height);
//   pincel.strokeStyle = "black";
//   pincel.strokeRect(x, y, base, altura);
}

function writeText(x, y, text) {
  let screen = document.querySelector("canvas");
  let pincel = screen.getContext("2d");

  pincel.font = "15px Comic Sans";
  pincel.fillStyle = "black";
  pincel.fillText(text, x, y);
}

function drawBar(x, y, serie, colors, text) {
  writeText(x, y - 10, text);

  let sumHeight = 0;
  for (let i = 0; i < serie.length; i++) {
    let height = serie[i];
    drawRect(x, y + sumHeight, 50, height, colors[i]);
    sumHeight = sumHeight + height;
  }
}

let colors = ["blue", "green", "yellow", "red", "gray"];
let serie2009 = [6, 47, 41, 3, 3];
let serie2019 = [81, 9, 3, 3, 4];

drawBar(50, 100, serie2009, colors, "2009");
drawBar(100, 100, serie2009, colors, "");
drawBar(200, 100, serie2019, colors, "2019");
drawBar(250, 100, serie2019, colors, "");
