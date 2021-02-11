window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onkeydown, false);

var imgBackground = new Image();
imgBackground.src = "img/background.png";
imgBackground.addEventListener("load", drawScreen, false);

var imgPlayer = new Image();
imgPlayer.src = "img/player.png";
imgPlayer.addEventListener("load", drawScreen, false);

var intPlayerX = 350;
var intPlayerY = 250;

function drawScreen(){
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 800, 600);

    //배경 그리기
    Context.drawImage(imgBackground, 0, 0);

    //플레이어 그리기
    Context.drawImage(imgPlayer, intPlayerX, intPlayerY);
}

function onkeydown(e){
    console.log(e.keyCode);
    switch(e.keyCode){
        case 37: //left
            intPlayerX-=5;
            break;
        case 39: //Right
            intPlayerX+=5;
            break;
        case 38: //Up
            intPlayerY-=5;
            break;
        case 40: //Down
            intPlayerY+=5;
            break;
    }
    drawScreen();
}