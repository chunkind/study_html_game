function Timer(){
    this.nowFrame = 0;
    return this;
}

Timer.prototype.Update = function(){
    this.nowFrame += 1000 / GAME_FPS;
}

Timer.prototype.Reset = function(){
    this.nowFrame = 0;
}

