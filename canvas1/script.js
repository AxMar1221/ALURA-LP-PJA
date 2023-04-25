let screen = document.querySelector("canvas");
let pincel = screen.getContext("2d");

pincel.fillStyle = "red";
pincel.fillRect(400, 0, 200, 400);

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = "blue";
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = "green";
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle = "purple";
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.1416);
pincel.fill();
