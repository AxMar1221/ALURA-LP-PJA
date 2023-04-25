function print(text) {
  document.write(text);
}
let screen = document.querySelector("canvas");
let pincel = screen.getContext("2d");
pincel.fillStyle = "purple";
pincel.fillRect(0, 0, 600, 400);

function showMessage(eve) {
  let x = eve.pageX - screen.offsetLeft; //pos x
  let y = eve.pageY - screen.offsetTop; //pos y
  let day = new Date(); //crea una variable de tipo date
  let hour =
    checkTime(day.getHours()) +
    ":" +
    checkTime(day.getMinutes()) +
    ":" +
    checkTime(day.getSeconds());
  //Verifica si el número de las horas, minutos o segundos, tiene un solo dígito,
  //caso positivo le adiciona el cero en la frente para obtener el formato deseado 00:00:00
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  alert("La hora es: " + hour + " y las coordenadas son: x=" + x + ", y=" + y);
}

function drawCircle(eve) {
  let x = eve.pageX - screen.offsetLeft; //pos x
  let y = eve.pageY - screen.offsetTop; //pos y

  pincel.fillStyle = colors[selectColor];
  pincel.beginPath();
  pincel.arc(x, y, 15, 0, 2 * 3.1416);
  pincel.fill();

  console.log(x + "," + y);
}

// screen.onclick = showMessage;
screen.onclick = drawCircle;

let colors = ["blue", "red", "green", 'yellow', 'white', 'orange'];
let selectColor = 0;

function changeColor() {
  selectColor++;
  if (selectColor >= colors.length) {
    selectColor = 0;
  }
  return false;
}

screen.oncontextmenu = changeColor;
