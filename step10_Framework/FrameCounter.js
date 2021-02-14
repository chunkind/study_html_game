function FrameCounter(){
    this.Lastfps = 0;
    this.frameCount = 0;
    this.LastTime = 0;
    
    return this;
}

FrameCounter.prototype.countFrame = function(){
    this.frameCount++;
}

var frameCounter = new FrameCounter();