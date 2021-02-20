window.addEventListener("load", onPageLoadComplete, false);

function onPageLoadComplete(){
    var FPS = 30;

    //고정 프레임
    // setInterval(gameLoop, 1000/FPS);

    //가변 프레임
    setTimeout(gameLoop, 0);
}

function Update(){

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
}

function gameLoop(){
    Update();
    Render();

    frameCounter.countFrame();

    //가변 프레임
    setTimeout(gameLoop, 0);
}