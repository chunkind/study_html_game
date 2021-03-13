window.addEventListener("load", onPageLoadComplete, false);

var temp_text_x = 400;
var temp_text_y = 300;

var game_state = new TestState1();

function onPageLoadComplete(){
    var FPS = 30;

    soundSystem.AddSound("test_shoot.mp3", 2);
    setInterval(gameLoop, 1000/FPS);
    // setInterval(TestSoundSystem, 100);
}

function TestSoundSystem(){
    soundSystem.PlaySound("test_shoot.mp3");
}

function Update(){
    //업데이트
    game_state.Update();
}

function Render(){
    //그리기
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = '#000000';
    Context.fillRect(0, 0, 800, 600);

    Context.fillStyle = '#ffffff';
    Context.font = '15px Arial';
    Context.textBaseline = 'top';

    game_state.Render();

    //FPS 표시
    Context.fillText("fps : " + frameCounter.Lastfps, 10, 10);
}

function gameLoop(){
    Update();
    Render();

    frameCounter.countFrame();
}