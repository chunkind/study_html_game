function onGameInit() 
{   
    document.title = "HTML5 Game";
    
    GAME_FPS = 30;
    debugSystem.debugMode = true;

    // 리소스 프리로딩 추가
    resourcePreLoader.AddImage( "img/player.png" );
    resourcePreLoader.AddImage( "img/background.png" );
    resourcePreLoader.AddImage( "img/missile.png" );
    
    soundSystem.AddSound( "background.mp3", 1 );
    
    // 게임 초기 시작 상태 설정
    after_loading_state = new ReadyState();
    
    setInterval( gameLoop, 1000 / GAME_FPS );  
}

window.addEventListener("load", onGameInit, false);
