---
title: "2D 강의 영상 Part 7,8,9 시청"
date: 2025-04-17
---

강의: [Unity Tutorial 2024 - Build a 2D RPG](https://www.youtube.com/playlist?list=PLy1Xj-4F5G_cytIH8by-bZ9TVj5qKMlZn)

### Part 07 Adding Dialog 1 (14:45~, 27:36)

`DialogManager` 클래스를 작성, 싱글톤으로 만든 후 `ShowDialog` 메서드 작성. `ShowDialog` 에서 대화 내용을 주고 받을 때 사용하기 위한 데이터 객체용 클래스 `Dialog` 도 생성. `NPCController` 의 `Interact` 메서드에서 `DialogManager.ShowDialog()` 를 실행하게끔 한다.

NPC 에게 말을 걸 경우 말풍선까지 잘 뜨지만, 다음 문장으로 넘어가지 않고 대화중인데도 움직일 수 있는 등 미비된 사항들이 있다. 이건 다음 영상에서 마저 구현한다.

### Part 08 Adding Dialog 2 (14:05)

`DialogManager` 에 `OnShowDialog`, `OnHideDialog` 이벤트를 추가하고, 해당 이벤트리스너를 통해 `GameController` 가 게임 상태를 바꾸게 했다.

`GameController` 가 대화 상태일 때는 `DialogManager.HandleUpdate()` 만 실행함으로써 말풍선 이외에는 업데이트가 되지 않게 제어한다.

`DialogManager.HandleUpdate()` 는 coroutine 을 활용해 라인 별로 타이핑하듯이 대화를 출력하는 기능을 구현한다.

coroutine.. 분명히 알던 개념인데 오랜만에 봐서 그런지 엄청 헷갈린다. 개념을 다시 찾아봐야겠다.

### Part 09 Battle System Design (~04:30, 28:42)

전투 시스템 설계에 대한 이론 수업이라고 해서 들어야 하나 고민 중. 아마 높은 확률로 듣지 않고 다음 강의로 넘어갈 듯.
