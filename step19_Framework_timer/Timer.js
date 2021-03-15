function Timer(){
    this.nowFrame = 0;
    timerSystem.timers.push(this);
    
    return this;
}

Timer.prototype.Update = function(){
    this.nowFrame += 1000 / GAME_FPS;
}

Timer.prototype.Reset = function(){
    this.nowFrame = 0;
}

function TimerSystem(){
    this.timers = new Array();
    return this;
}

TimerSystem.prototype.Update = function(){
    for(var i=0; i<this.timers.length; i++){
        this.timers[i].nowFrame += 1000/GAME_FPS;
    }
}

var timerSystem = new TimerSystem();
