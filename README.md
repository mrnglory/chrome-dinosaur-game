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

## Demo
![dinosaur_game_demo](https://user-images.githubusercontent.com/52367973/213620721-72bc2b99-00d3-467f-907b-078f12bb9f2d.gif)



<br/>

## Wrapup

게임이라고 하기엔 민망할 정도로 어설프지만, 평소에 크롬 브라우저에서 공룡 게임이 어떤 원리로 동작하고 만들어지는지에 대한 궁금증은 해결됐다.
