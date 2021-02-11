function onGameInit() 
{   
    document.title = "HTML5 Game";
    
    GAME_FPS = 30;
    debugSystem.debugMode = true;
    
    // 게임 초기 시작 상태 설정
    after_loading_state = new TestState();
    setInterval( gameLoop, 1000 / GAME_FPS );  
}



window.addEventListener("load", onGameInit, false);
