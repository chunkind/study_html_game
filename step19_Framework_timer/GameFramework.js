window.addEventListener("load", onPageLoadComplete, false);
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);

var GAME_FPS = 30;

var game_state;

//테스트용 임시 상태
function TestState(){
    resourcePreLoader.AddImage("walk.png");
    this.testObject = new SpriteAnimation(resourcePreLoader.GetImage("walk.png"),
        125, 167, 4, 4);
    return this;
}
TestState.prototype.Render = function(){
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    this.testObject.Render(Context);
}
TestState.prototype.Update = function(){
    this.testObject.Update();
}


function onPageLoadComplete(){    
    setInterval(gameLoop, 1000/GAME_FPS);

    //리소스 프리로딩
    resourcePreLoader.AddImage("walk.png");
    resourcePreLoader.AddImage("test_img.png");
    resourcePreLoader.AddImage("test_img.png");
    soundSystem.AddSound("test_shoot.mp3", 8);
    soundSystem.AddSound("test_long.mp3");

    var img_walk = resourcePreLoader.GetImage("walk.png");

    //게임 초기 시작 상태 설정
    game_state = new TestState();
}

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
    //타이머 업데이트
    timerSystem.Update();

    //업데이트
    game_state.Update();

    //배포 시에는 아래 코드를 주석 처리하거나 삭제하면 개발 버전 전환 기능 해제
    debugSystem.UseDebugMode();
}

function Render(){
    //그리기
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = '#000000';
    Context.fillRect(0, 0, 800, 600);

    game_state.Render();

    if(debugSystem.debugMode){
        //FPS 표시
        Context.fillStyle = '#ffffff';
        Context.font = '15px Arial';
        Context.textBaseline = 'top';
        Context.fillText("fps : " + frameCounter.Lastfps, 10, 10);
    }
    
}

function gameLoop(){
    Update();
    Render();

    frameCounter.countFrame();
}