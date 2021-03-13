window.addEventListener("load", onPageLoadComplete, false);
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);

var game_state;

function onPageLoadComplete(){
    var FPS = 30;
    setInterval(gameLoop, 1000/FPS);

    //게임 초기 시작 상태 설정
    game_state = null;

    //사운드 테스트
    //soundSystem.AddSound("test_shoot.mp3", 2);
    //setInterval(TestSoundSystem, 100);
}

//사운드 테스트
// function TestSoundSystem(){
//     soundSystem.PlaySound("test_shoot.mp3");
// }

function onMouseDown(e){
    if(game_state.onMouseDown != undefined)
        game_state.onMouseDown(e);
}

function onMouseUp(e){
    if(game_state.onMouseUp != undefined)
        game_state.onMouseUp(e);
}

function ChangeGameState(nextGameState){
    //필수 함수가 있는지 확인한다.
    if(nextGameState.Update == undefined)
        return;
    if(nextGameState.Render == undefined)
        return;
    
    //필수 함수가 있으면 상태 전환
    game_state = nextGameState;
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

