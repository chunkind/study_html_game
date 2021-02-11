window.addEventListener("load", drawScreen, false);
window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);

var imgIcon = new Image();
imgIcon.src = "icon.png";
imgIcon.addEventListener("load", drawScreen, false);

var bMouseClicked = false;
var intMouseX = 60;
var intMouseY = 60;
var strMouseStatus = "None";

function drawScreen(){
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle="#000000";
    Context.fillRect(0, 0, 800, 600);

    Context.drawImage(imgIcon, intMouseX, intMouseY);

    Context.fillStyle = "#ffffff";
    Context.font = "25px Arial";
    Context.textBaseline = "top";
    Context.fillText("발생한 마우스 이벤트 :" + strMouseStatus, 5, 5);
    Context.fillText("마우스 좌표  x : " + intMouseX + ", y : " + intMouseY, 5, 30);
}

function onMouseMove(e){
    strMouseStatus = "Move!!";

    if(bMouseClicked){
        var theCanvas = document.getElementById("GameCanvas");
        intMouseX = e.clientX - theCanvas.offsetLeft;
        intMouseY = e.clientY - theCanvas.offsetTop;
        drawScreen();
    }
}

function onMouseDown(e){
    strMouseStatus = "Down!!";

    var theCanvas = document.getElementById("GameCanvas");
    intMouseX = e.clientX - theCanvas.offsetLeft;
    intMouseY = e.clientY - theCanvas.offsetTop;

    bMouseClicked = true;

    drawScreen();
}

function onMouseUp(e){
    strMouseStatus = "Up!!";

    bMouseClicked = false;
    intMouseX = 0;
    intMouseY = 0;
    
    drawScreen();
}