let screen = document.querySelector('canvas');
let pincel = screen.getContext('2d');

pincel.fillStyle = 'purple';
pincel.fillRect(0, 0, 1250, 670);

let puedoDibujar = false;

function dibujarCirculo(evento) {

    if(puedoDibujar) {
        var x = evento.pageX - screen.offsetLeft;
        var y = evento.pageY - screen.offsetTop;
        pincel.fillStyle = 'white';
        pincel.beginPath();
        pincel.arc(x, y, 15, 0, 2 * 3.14);
        pincel.fill();
    }

}

screen.onmousemove = dibujarCirculo;

function habilitarDibujar(eve) {

    puedoDibujar = true;
    console.log(eve, puedoDibujar)
}

function deshabilitarDibujar(eve) {
    
    puedoDibujar = false;
    console.log(eve, puedoDibujar)
}

screen.onmousedown = habilitarDibujar;

screen.onmouseup = deshabilitarDibujar;
