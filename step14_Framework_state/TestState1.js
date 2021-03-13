function TestState1(){
    return this;
}

TestState1.prototype.Update = function(){
    if(inputSystem.isKeyDown(13)){
        // game_state = new TestState2();
        ChangeGameState(new TestState2());
    }
}

TestState1.prototype.Render = function(){
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillText("테스트 1", 100, 100);
}