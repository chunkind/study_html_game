window.addEventListener("load", onPageLoadComplete, false);

var temp_text_x = 400;
var temp_text_y = 300;

function onPageLoadComplete(){
    var FPS = 100;

    setInterval(gameLoop, 1000/FPS);
}

function Update(){
    //업데이트
    if(inputSystem.isKeyDown(37)){
        //LEFT
        temp_text_x -= 5;
    }
    if(inputSystem.isKeyDown(39)){
        //RIGHT
        temp_text_x += 5;
    }
    if(inputSystem.isKeyDown(38)){
        //TOP
        temp_text_y -= 5;
    }
    if(inputSystem.isKeyDown(40)){
        //BOTTOM
        temp_text_y += 5;
    }
}

function Render(){
    //그리기
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = '#000000';
    Context.fillRect(0, 0, 800, 600);

    //FPS 표시
    Context.fillStyle = '#ffffff';
    Context.font = '15px Arial';
    Context.textBaseline = 'top';
    Context.fillText("fps : " + frameCounter.Lastfps, 10, 10);

    Context.font = '40px Arial';
    Context.fillText("▲", temp_text_x, temp_text_y);
}

function gameLoop(){
    Update();
    Render();

    frameCounter.countFrame();
}