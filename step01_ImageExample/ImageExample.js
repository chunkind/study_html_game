//html 요소들이 모두 로드시 호출
// window.addEventListener("load", drawScreen, false);

var imgWarrior = new Image();
imgWarrior.src = "warrior.png";
//이미지가 모두 로드시 호출
imgWarrior.addEventListener("load", drawScreen, false);

function drawScreen(){
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 800, 600);

    //이미지를 그린다.
    Context.drawImage(imgWarrior, 0, 0);
}
