window.addEventListener("load", onPageLoadComplete, false);
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);

var GAME_FPS = 30;

var game_state;

function TestState1()
{
    var test_img = new Image();
    test_img.src = "transition1.jpg";
    this.testObject = new GraphicObject( test_img );
    this.testObject.SetPosition( 0, 0 );
    return this;
}

TestState1.prototype.Update = function( )
{
    if( inputSystem.isKeyDown( 13 ) ) // 엔터키 
    {
        ChangeGameState( new TransitionFadeOut( this, new TransitionFadeIn( this, new TestState2(), 5.0) , 5.0 ) );
    }    
}

TestState1.prototype.Render = function( )
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context  = theCanvas.getContext("2d");
    
    this.testObject.Render( Context );
}

function TestState2()
{
    var test_img = new Image();
    test_img.src = "transition2.jpg";
    this.testObject = new GraphicObject( test_img );
    this.testObject.SetPosition( 0, 0 );
    return this;
}

TestState2.prototype.Update = function( )
{
    if( inputSystem.isKeyDown( 13 ) ) // 엔터키 
    {
        ChangeGameState( new TransitionFadeOut( this, new TransitionFadeIn( this, new TestState1(), 5.0) , 5.0 ) );
    }    
}

TestState2.prototype.Render = function( )
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context  = theCanvas.getContext("2d");
    
    this.testObject.Render( Context );
}


function onPageLoadComplete() 
{
  setInterval( gameLoop, 1000 / GAME_FPS );   
  /*
  // 리소스 프리로딩
  resourcePreLoader.AddImage( "walk.png" );
  resourcePreLoader.AddImage( "test_img.png" );
  soundSystem.AddSound( "test_shoot.mp3", 8 );
  soundSystem.AddSound( "test_long.mp3" );
  
  var img_walk = resourcePreLoader.GetImage( "walk.png" );
*/
    
  // 게임 초기 시작 상태 설정
  game_state = new TestState1();
}


function onMouseDown (e) 
{
  if( game_state.onMouseDown != undefined )
    game_state.onMouseDown(e);
}

function onMouseUp (e) 
{
  if( game_state.onMouseUp != undefined )
    game_state.onMouseUp(e);
}

function ChangeGameState( nextGameState )
{
  // 필수 함수가 있는지 확인한다.
  if( nextGameState.Update == undefined )
    return;
    
  if( nextGameState.Render == undefined )
    return;
  
  // 필수 함수가 있으면 상태 전환
  game_state = nextGameState;
}

function Update()
{
  // 타이머 업데이트
  timerSystem.Update();
    
  // 업데이트 
  game_state.Update();
  
  // 배포시에는 아래 코드를 주석처리하거나 삭제하면 개발버전 전환 기능 해제
  debugSystem.UseDebugMode();
}

function Render()
{
  // 그리기
  var theCanvas = document.getElementById("GameCanvas");
  var Context  = theCanvas.getContext("2d");

  Context.fillStyle = "#000000";
  Context.fillRect(0, 0, 800, 600); 
  
  game_state.Render();
  
  if( debugSystem.debugMode )
  {
    // FPS 표시
    Context.fillStyle    = "#ffffff";   
    Context.font         = '15px Arial'; 
    Context.textBaseline = "top";
    Context.fillText( "fps : " + frameCounter.Lastfps, 10, 10 );    
  }  
}

function gameLoop()
{   
  Update();
  Render();
  
  frameCounter.countFrame();
}
