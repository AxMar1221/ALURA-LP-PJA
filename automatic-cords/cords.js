let screen = document.querySelector("canvas");
let pincel = screen.getContext("2d");
pincel.fillRect(0, 0, 600, 400);

function drawGirthB(x, y, radio){
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x,y, radio, 0, 2 * Math.PI)
    pincel.fill()
}
function drawGirthR(x, y, radio){
    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.arc(x,y, radio, 0, 2 * Math.PI)
    pincel.fill()
}
function drawGirthY(x, y, radio){
    pincel.fillStyle = 'yellow';
    pincel.beginPath();
    pincel.arc(x,y, radio, 0, 2 * Math.PI)
    pincel.fill()
}
function drawGirthG(x, y, radio){
    pincel.fillStyle = 'green';
    pincel.beginPath();
    pincel.arc(x,y, radio, 0, 2 * Math.PI)
    pincel.fill()
}
function drawGirthP(x, y, radio){
    pincel.fillStyle = 'purple';
    pincel.beginPath();
    pincel.arc(x,y, radio, 0, 2 * Math.PI)
    pincel.fill()
}
function drawGirthO(x, y, radio){
    pincel.fillStyle = 'orange';
    pincel.beginPath();
    pincel.arc(x,y, radio, 0, 2 * Math.PI)
    pincel.fill()
}

function clearScreen(){
    pincel.clearRect(0,0,600,400)
}

let x = 0;
let direction = 1;

function updateScreen(){

    clearScreen()
    if( x > 600){
        direction = -1;
    } else if ( x < 0 ){
        direction = 1;
    }
    drawGirthB(x,20,20);
    drawGirthR(x,60,20);
    drawGirthY(x,100,20);
    drawGirthG(x,140,20);
    drawGirthP(x,180,20);
    drawGirthO(x,220,20);
    x = x + direction;
}

setInterval(updateScreen,1)
