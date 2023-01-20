# chrome-dinosaur-game

## How to make 2D game in web browser?

1. 화면에 도형을 그릴 줄 알면 된다.
    * `canvas` 활용
    * 캐릭터 정보를 클래스로 관리
2. 코드를 1초에 60번 실행하면 에니메이션을 만들 수 있다.
    * `requestAnimationFrame()` 활용
    * 프레임마다 장애물 소환 및 배열에 보관
    * 프레임에서 장애물이 이미 지나갔다면 배열에서 삭제
3. 게임 캐릭터에 이미지를 입힌다.
    * `drawImage()` 활용
    * 이미지 객체를 생성하고 drawImage() 메소드 내에 위치 및 크기를 할당한다.