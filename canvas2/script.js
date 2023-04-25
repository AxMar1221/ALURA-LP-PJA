function drawRect(x,y,color){
    let screen = document.querySelector('canvas');
    let pincel = screen.getContext('2d');

    pincel.fillStyle = color;
    pincel.fillRect(x,y,50,50);
    // pincel.strokeStyle = 'black'
    // pincel.strokeRect(x,y,50,50)
}

let x = 0;
// while(x < 600 ){
//     drawRect(x,0,'red')
//     drawRect(x,50,'yellow')
//     drawRect(x,100,'green')
//     x = x +50;
// }

for (let x = 0; x < 600; x = x +50) {
        drawRect(x,0,'red')
        drawRect(x,50,'yellow')
        drawRect(x,100,'green')
}
//horizontal top
drawRect(0,150,'blue')
drawRect(50,150,'blue')
drawRect(100,150,'blue')
drawRect(150,150,'blue')
drawRect(200,150,'blue')
drawRect(250,150,'blue')
drawRect(300,150,'blue')
//horizontal bottom
drawRect(0,350,'green')
drawRect(50,350,'green')
drawRect(100,350,'green')
drawRect(150,350,'green')
drawRect(200,350,'green')
drawRect(250,350,'green')
drawRect(300,350,'green')
//verticales left
drawRect(0,200,'red')
drawRect(0,250,'red')
drawRect(0,300,'red')
//verticales right
drawRect(300,200,'yellow')
drawRect(300,250,'yellow')
drawRect(300,300,'yellow')
