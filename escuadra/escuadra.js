let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle='red';
pincel.beginPath();
pincel.moveTo(40, 40);
pincel.lineTo(40, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle='blue';
pincel.beginPath();
pincel.moveTo(70, 100);
pincel.lineTo(70, 380);
pincel.lineTo(350, 380);
pincel.fill();

pincel.fillStyle='green';
pincel.beginPath();
pincel.moveTo(100, 150);
pincel.lineTo(100, 360);
pincel.lineTo(320, 360);
pincel.fill();

pincel.fillStyle='yellow';
pincel.beginPath();
pincel.moveTo(125, 205);
pincel.lineTo(125, 340);
pincel.lineTo(275, 340);
pincel.fill();