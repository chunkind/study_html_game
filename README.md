# Html 게임 프로그래밍
---
## step01_ImageExample
Canvas에 기본적으로 이미지를 띄우는 예제.

## step02_DodgeGame
총알 피하기 기본 배경과 플레이어 이미지만 그려보자.

## step03_KeyDownExample
키보드 이벤트에 관한 예제.
onkeydown : 키보드를 누른 순간부터 키에서 손을 뗄 때까지 지속해서 이벤트가 발생
onkeyup : 키에서 손을 뗐을 때 한 번만 발생한다.

이미지와 텍스트는 출력의 원점 기준 좌표에 차이를 보인다
따라서 텍스트를 표시할땐 Context.textBaseline = "top" 으로 주어
이미지와 같게 하자.