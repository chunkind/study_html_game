function DebugSystem(){
    return this;
}

DebugSystem.prototype.Log = function(type, msg){
    if(typeof console == undefined)
        return;
    
    switch(type){
        case "LOG":
            console.log(msg);
            break;
        case "WARN":
            console.warn(msg);
            break;
        case "ERROR":
            console.error(msg);
            break;
    }
}

var debugSystem = new DebugSystem();