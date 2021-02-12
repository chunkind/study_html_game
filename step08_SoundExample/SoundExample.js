window.addEventListener("load", onPageLoadComplete, false);

window.addEventListener("click", onClicked, false);

window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);
window.addEventListener("mousemove", onMouseMove, false);

var nowResourceLoadedCount = 0; // 현재 로딩된 리소스 수
var intAllResourceCount = 6; //로딩할 리소스 수

var imgBtnPrev;
var imgBtnNext;
var imgBtnPlay;
var imgBtnPause;
var imgCtrlSlider;
var imgSlider;
var soundMusic;

var isDragVolumeIcon = false; // 클릭하여 드래그되었을때 여부
var intVolumeY = 55; // 드래그되는 아이콘의 y값을 저장할 변수

function drawScreen(){
  var theCanvas = document.getElementById("GameCanvas");
  var Context = theCanvas.getContext("2d");

  Context.fillStye = "#000000";
  Context.fillRect(0, 0, 500, 200);

  Context.drawImage(imgBtnPrev, 10, 80);
  if(soundMusic.paused == false) // 재생 중이면 일시정지 버튼을 표시
    Context.drawImage(imgBtnPause, 60, 80);
  else //재생 중이 아니면 버튼을 표시
    Context.drawImage(imgBtnPlay, 60, 80);
  Context.drawImage(imgBtnNext, 110, 80);

  Context.drawImage(imgSlider, 10, 60, 140, 9);
  Context.drawImage(imgCtrlSlider, 
    (soundMusic.currentTime / soundMusic.duration) * 140 + 10, 60 - 5);

  Context.save(); //저장
  //이 사이에서 행렬 변환과 그리기를 처리
  Context.translate(160 + 9, 60);

  var radian = 90 * (Math.PI / 180);
  Context.rotate(radian);

  Context.scale(60/44, 1);
  Context.drawImage(imgSlider, 0, 0);

  Context.restore(); //복구
  Context.drawImage(imgCtrlSlider, 160 - 5, intVolumeY);

}

function onPageLoadComplete(){
  // 이미지 리소스 불러오기
  // 이전 곡 버튼
  imgBtnPrev = new Image();
  imgBtnPrev.src = "button_prev.png";
  imgBtnPrev.addEventListener("load", onResourceLoaded, false);
  // 다음 곡 버튼
  imgBtnNext = new Image();
  imgBtnNext.src = "button_next.png";
  imgBtnNext.addEventListener("load", onResourceLoaded, false);
  // 실행 버튼
  imgBtnPlay = new Image();
  imgBtnPlay.src = "button_play.png";
  imgBtnPlay.addEventListener("load", onResourceLoaded, false);
  // 일시정지 버튼
  imgBtnPause = new Image();
  imgBtnPause.src = "button_pause.png";
  imgBtnPause.addEventListener("load", onResourceLoaded, false);
  // 바 컨트롤러
  imgCtrlSlider = new Image();
  imgCtrlSlider.src = "control_slider.png";
  imgCtrlSlider.addEventListener("load", onResourceLoaded, false);
  // 상태 진행 바
  imgSlider = new Image();
  imgSlider.src = "slider.png";
  imgSlider.addEventListener("load", onResourceLoaded, false);

  // 사운드 리소스 불러오기
  soundMusic = new Audio();
  soundMusic.src = "background.mp3";
  document.body.appendChild(soundMusic);
}

function onClicked(e){
  var theCanvas = document.getElementById("GameCanvas");
  var intMouseX = e.clientX - theCanvas.offsetLeft;
  var intMouseY = e.clientY - theCanvas.offsetTop;

  //재생 버튼의 영역과 비교
  if(60 < intMouseX && 80 < intMouseY && 
      60 + 41 > intMouseX && 80 + 41 > intMouseY){
      //소리 실행
      if(soundMusic.paused == false){
        soundMusic.pause();
      }else{
        soundMusic.play();
      }
      drawScreen();
  }

}

function onMouseDown(e){
  var theCanvas = document.getElementById("GameCanvas");
  var intMouseX = e.clientX - theCanvas.offsetLeft;
  var intMouseY = e.clientY - theCanvas.offsetTop;
  
  if( 160 < intMouseX && intVolumeY < intMouseY &&
    160 + 15 > intMouseX && intVolumeY + 15 > intMouseY ){
    isDragVolumeIcon = true;    
    drawScreen();
  }
}

function onMouseMove(e){
  var theCanvas = document.getElementById("GameCanvas");
  var intMouseX = e.clientX - theCanvas.offsetLeft;
  var intMouseY = e.clientY - theCanvas.offsetTop;
  
  if( isDragVolumeIcon ){
    // 볼룸 조절
    intVolumeY = intMouseY - 10;  
    if( intVolumeY < 55 )
      intVolumeY = 55;
    else if( intVolumeY > 110 )
      intVolumeY = 110;
    soundMusic.volume = 1 - ((intVolumeY - 55) / 55);
    drawScreen();
  }
}

function onMouseUp(e){
  var theCanvas = document.getElementById("GameCanvas");
  var intMouseX = e.clientX - theCanvas.offsetLeft;
  var intMouseY = e.clientY - theCanvas.offsetTop;
  
  if( isDragVolumeIcon )
  {
    isDragVolumeIcon = false;
  }
}

function onResourceLoaded(e){
  nowResourceLoadedCount++;
  //현재 로딩된 리소스 수와 총 리소스 수를 비교
  if(nowResourceLoadedCount == intAllResourceCount){
    //모든 리소스 로딩 완료!!
    setInterval(drawScreen, 500);
  }
}