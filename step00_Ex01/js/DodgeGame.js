window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onKeyDown, false);

var GAME_STATE_READY = 0;
var GAME_STATE_GAME = 1;
var GAME_STATE_OVER = 2;

var GameState = GAME_STATE_READY;

var intPlayerX = 350;
var intPlayerY = 250;

var tempMissile1 = {x:0, y:0, go_x:1, go_y:1};
var tempMissile2 = {x:800, y:0, go_x:-1, go_y:1};
var tempMissile3 = {x:800, y:600, go_x:-1, go_y:-1};
var tempMissile4 = {x:0, y:600, go_x:1, go_y:-1};

var imgBackgound = new Image();
imgBackgound.src = "imgs/background.png";
imgBackgound.addEventListener("load", drawScreen, false);

var imgPlayer = new Image();
imgPlayer.src = "imgs/player.png";
imgPlayer.addEventListener("load", drawScreen, false);

var imgMissile = new Image();
imgMissile.src = "imgs/missile.png";

function drawScreen(){
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 800, 600);

    Context.drawImage(imgBackgound, 0, 0);
    Context.drawImage(imgPlayer, intPlayerX, intPlayerY);

    Context.fillStyle = "#ffffff";
    Context.font = '50px Arial';
    Context.textBaseline = "top";

    //게임 준비 중
    if(GameState == GAME_STATE_READY){
        Context.fillText("준비", 300, 180);
    }
    //게임 중
    else if(GameState == GAME_STATE_GAME){
        
    }
    //게임 오버
    else if(GameState == GAME_STATE_OVER){
        Context.fillText("게임 오버", 300, 180);
    }
}

function onKeyDown(e){
    //게임 준비 중
    if(GameState == GAME_STATE_READY){
        //게임을 시작합니다.
        if(e.keyCode == 13){
            GameState = GAME_STATE_GAME;
            onGameStart();
        }
    }
    //게임 중
    else if(GameState == GAME_STATE_GAME){
        //기존의 플레이어 이동 처리 코드
        switch(e.keyCode){
            case 37:
                intPlayerX -= 5;
                if(intPlayerX < 0){
                    intPlayerX = 0;
                }
                break;
            case 39:
                intPlayerX += 5;
                if(intPlayerX > 740){
                    intPlayerX = 740;
                }
                break;
            case 38:
                intPlayerY -= 5;
                if(intPlayerY < 0){
                    intPlayerY = 0;
                }
                break;
            case 40:
                intPlayerY += 5;
                if(intPlayerY > 540){
                    intPlayerY = 540;
                }
                break;
        }
    }
    //게임 오버
    else if(GameState == GAME_STATE_OVER){
        //게임 준비 상태로 변경
        if(e.keyCode == 13){
            //엔터를 입력하면 준비 상태로
            GameState = GAME_STATE_READY;
        }
    }
    drawScreen();
}

function onGameStart(){
    //게임 시작
}