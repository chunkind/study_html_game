function TestState1(){
    return this;
}

TestState1.prototype.Update = function(){

}

TestState1.prototype.Render = function(){
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillText("테스트 1", 100, 100);
}