// window.addEventListener('load', onGameStart, false);
window.addEventListener('keydown', onKeyDown, false);

var soundBackgroundMusic;
var soundMusic;
var shootEffect;

function onGameStart(){
    var theCanvas = document.getElementById("GameCanvas");
    var Context  = theCanvas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 320, 480); 

    soundMusic = new Audio();
    soundMusic.src ="background2.wav";
    soundMusic.loop = true;
    document.body.appendChild(soundMusic);

    shootEffect = new Audio();
    shootEffect.src = "shoot.mp3";
    document.body.appendChild(shootEffect);

    soundMusic.play();

    
}

function onKeyDown(){
    shootEffect.play()
}