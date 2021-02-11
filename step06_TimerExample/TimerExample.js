window.addEventListener("load", drawScreen, false);

var intLevel = 1;

var imgChar = new Image();
imgChar.src = "character.png";
imgChar.addEventListener("load", drawScreen, false);

var TimerId = setInterval(onLevelUp, 5000);

var bShowLevelUpMessage = false;

function drawScreen(){
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 320, 480);

    Context.drawImage(imgChar, 100, 180);

    Context.fillStyle = "#ffffff";
    Context.font = "25px Arial";
    Context.textBaseline = "top";
    Context.fillText("Lv :" + intLevel, 130, 300);

    if(bShowLevelUpMessage){
        Context.fillText("Level Up !!!", 100, 150);
    }
}

function onLevelUp(){
    intLevel++;
    bShowLevelUpMessage = true;
    setTimeout(closeLevelUpMessage, 3000);

    if(intLevel >= 5){
        console.log(TimerId);
        clearInterval(TimerId);
    }
    drawScreen();
}

function closeLevelUpMessage(){
    bShowLevelUpMessage = false;
    drawScreen();
}