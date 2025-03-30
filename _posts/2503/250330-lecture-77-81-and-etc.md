---
title: "강의 77~81강 수강, 강의 감상, 이후 어떻게 할지, 그리고 2D Sprite 적용"
date: 2025-03-30
---

## \#1

강의 수강: [Unity Turn-Based Strategy Game: Intermediate C# Coding](https://www.udemy.com/course/unity-turn-based-strategy/)

### 77. Interface IInteractable (12:06)

이전 강의에서 예고한대로, 이번 강의에서 상호작용 가능한 객체 클래스를 추상화한다.

이전 강의에서 만든 `Door` 와, 이번 강의에서 테스트를 위해 추가한 `InteractSphere` 두 클래스에서 공통으로 쓰일 함수 `Interact` 를 `IInteractable` 이라는 인터페이스를 만들어서 추상화한 뒤에 사용하게끔 코드를 수정했다.

그리고 이전에 73,74강에서 의문을 가졌던, 파괴 가능한 객체를 왜 추상화하지 않는가에 대한 대답이 나왔는데, 강의 마지막에 당연히 해당 객체 클래스들도 추상화 가능하고 그걸 도전해보라고 말하고 있다.

### 78. Input Refactoring (08:49)

기존에 Unity 에서 제공하는 `Input` 클래스를 필요한 곳에서 각각 사용하고 있던 것을, `InputManager` 라는 새로 만든 클래스에서 모두 관리하게끔 수정. 다른 클래스들은 이제 입력 관련 기능이 필요할 때는 `InputManager` 를 거치게 된다. 간단한 리팩토링이었고 다음 강의에서 입력 시스템을 개선한다고 한다.

### 79. Input System (15:42)

Package Manager 에서 Input System 설치. 설치 직후 기존 Input Manager 를 비활성화하고 새로운 것을 활성화하겠냐는 대화 상자가 뜨는데 일단은 No.

이후 Edit - Project Settings - Player 에서 Active Input Handling 을 찾아 Both 를 선택.

![screenshot](/images/250330-1.png)

Project 탭에서 Input Actions 를 `PlayerInputActions` 를 만들고, 더블 클릭해서 수정창을 열어서 입력 값들을 설정해준다.

![screenshot](/images/250330-2.png)

그리고 `PlayerInputActions` 의 c# 클래스를 자동 생성하게끔 설정하고

![screenshot](/images/250330-3.png)

`InputManager` 클래스에서 해당 클래스를 사용하면 된다.

```c#  
        playerInputActions = new PlayerInputActions();
        playerInputActions.Player.Enable();
    }

    public Vector2 GetMouseScreenPosition()
    {
#if USE_NEW_INPUT_SYSTEM
        return Mouse.current.position.ReadValue();
#else
        return Input.mousePosition;
#endif
    }
```

키보드로 카메라 이동/회전/확대축소 도 설정하는 코드가 있는데 궁금하면 강의를 다시 보거나 코드를 다시 보자.

강사가 preprocessor 까지 써가면서 `Input` 을 사용하는 기존 코드를 남겨놓는 이유는 `Input` 이 테스트 등의 용도에서는 작성 및 사용이 훨씬 간단해서라고 한다. 즉 간단한 프로토타이핑이나 테스트에는 기존 `Input` 을 사용하고, 본격적인 구현에서 Input System 을 사용하라는 의미다.

이건 나중에 상황 봐서 걷어내도 될 것 같고, 유용하다면 계속 써도 될 것 같다. 너무 신경쓰진 말자.

### 80. Final Level (04:18)

맵을 좀 더 수정하고 상호 작용 가능한 객체 종류를 추가하고 문이 열리기 전에는 닫혀 있는 곳을 검은 안개?로 보이지 않게 처리하는 등 실제로 한 스테이지를 플레이해볼 수 있는 처리들을 진행했다.

하지만 지금까지의 강의들과는 다르게 작업하는 모습을 빨리 감기로 하이라이트만 보여주는 모습이었는데, 마지막으로 과제를 준 느낌이다. (날먹은 아닌 것이 강의 GitLab 에 들어가면 해당 강의의 코드 내역이 모두 존재한다.)

### 81. Congratulations! What’s Next? (01:41)

마무리 인사.

## \#2

### <강의 리뷰>

보너스 섹션이 두 섹션 남아있지만 본 강의가 끝난 시점에서 가벼운 리뷰를 한 번 해보자.

일단 단순히 동작하는 코드 혹은 결과를 만드는 것이 아니라 확장 및 유지보수에 용이한 코드 및 결과 구현에 집중한 것이 매우 마음에 드는 강의였다.

하지만 몇몇 기초적인 부분이 누락된 것이 아쉬운데 예를 들면 씬 전환과 같은 기본적인 게임 구성에 필요한 것들이다. 이건 쉽게 찾아볼 수 있는 정보라 그냥 강의에서 뺀 것일까 (아니면 UI 컴포넌트로 충분히 구성 가능하다고 생각한 것일까). 이것만 살짝 아쉽다.

전체적으로 보면 매우 만족스러운 강의였고 (리뷰도 만점 줬다.) 보너스 섹션인 Hex Grid System 과 Multi-Floors 도 (당장은 아니더라도) 모두 볼 생각이다.

### <앞으로 어떻게 할까>

일단 (같이 게임을 만들기로 의기투합한) willow 형이 원하는 게임은 캐릭터들이 2D 이므로, 3D 맵에서 2D 스프라이트가 움직이게 하던, 혹은 아예 2D 로 통째로 프로젝트를 만들던, 게임 만들기에 앞서 추가적인 지식이 필요한 상황이다.

이 부분을 1. 그냥 시행착오로 부딪혀 볼 것인지, 2. 혹은 다른 강의를 들을 것인지, 3. 혹은 ChatGPT 같은 생성형 AI 의 도움을 받을 것인지 고민 중에 있다. 당장은 1,3번을 조합하되 어려움을 느끼면 2번을 고려할 생각이다.

3D 로 게임을 만드는 것에도 여전히 흥미는 있기 때문에, 이 흥미는 지금이든 나중이든 어떤 식으로 발현해나갈 것인지도 고민이다.

### <2D Sprite 적용해보기>

내친 김에 2D Sprite 이미지를 적용하는 걸 좀 진행해봤다. 움직일 때 캐릭터는 회전하지 않게 하고, 카메라 회전 시 항상 2D 이미지가 잘 보이도록 회전하게 했다. 애니메이션은 Idle, Walking, Slashing 세 개 정도만 적용했고, 걷거나 공격할 때 캐릭터가 해당 방향을 바라보도록 (flipX) 적용했다. 생각보다 쉽게 잘 된다.
