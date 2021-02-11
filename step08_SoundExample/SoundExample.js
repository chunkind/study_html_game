window.addEventListener("load", drawScreen, false);

var nowResourceLoadedCount = 0; // 현재 로딩된 리소스 수
var intAllResourceCount = 6; //로딩할 리소스 수

// 이전 곡 버튼
var imgBtnPrev = new Image();
imgBtnPrev.src = "button_prev.png";
imgBtnPrev.addEventListener("load", onResourceLoaded, false);
// 다음 곡 버튼
var imgBtnNext = new Image();
imgBtnNext.src = "button_next.png";
imgBtnNext.addEventListener("load", onResourceLoaded, false);
// 실행 버튼
var imgBtnPlay = new Image();
imgBtnPlay.src = "button_play.png";
imgBtnPlay.addEventListener("load", onResourceLoaded, false);
// 일시정지 버튼
var imgBtnPause = new Image();
imgBtnPause.src = "button_pause.png";
imgBtnPause.addEventListener("load", onResourceLoaded, false);
// 바 컨트롤러
var imgCtrlSlider = new Image();
imgCtrlSlider.src = "control_slider.png";
imgCtrlSlider.addEventListener("load", onResourceLoaded, false);
// 상태 진행 바
var imgSlider = new Image();
imgSlider.src = "slider.png";
imgSlider.addEventListener("load", onResourceLoaded, false);

var isPlayNow = false; //재생 여부

function drawScreen(){
  var theCanvas = document.getElementById("GameCanvas");
  var Context = theCanvas.getContext("2d");

  Context.fillStye = "#000000";
  Context.fillRect(0, 0, 500, 200);

  Context.drawImage(imgBtnPrev, 10, 80);
  if(isPlayNow) // 재생 중이면 일시정지 버튼을 표시
    Context.drawImage(imgBtnPlay, 60, 80);
  else //재생 중이 아니면 버튼을 표시
    Context.drawImage(imgBtnPause, 60, 80);
  Context.drawImage(imgBtnNext, 110, 80);

  Context.drawImage(imgSlider, 10, 60, 140, 9);
  Context.drawImage(imgCtrlSlider, 10, 55);

  Context.drawImage(imgSlider, 160, 60, 60, 9);
  Context.drawImage(imgCtrlSlider, 160 - 5, 55);

}

function onResourceLoaded(e){
  nowResourceLoadedCount++;
  //현재 로딩된 리소스 수와 총 리소스 수를 비교
  if(nowResourceLoadedCount == intAllResourceCount){
    //모든 리소스 로딩 완료!!
  }
}