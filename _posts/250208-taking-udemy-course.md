---
title: '강의 보며 개발 환경 셋팅'
date: 2025-02-08
---

[Unity Turn-Based Strategy Game: Intermediate C# Coding](https://www.udemy.com/course/unity-turn-based-strategy/) 의 "4. Set Up Unity & VS Code (10:20)" 영상을 보면서 개발 환경 구성을 시도했다.

해당 영상에서 2021.1 버전을 설치하라고 해서 설치하려고 했는데, Unity 홈페이지에서 받은 설치파일로 설치를 하려고 하면 에러 메시지가 계속 떴다.

![screenshot](./images/250208-1.png)

맥의 "개인정보 보호 및 보안" 설정과 관련된 이슈 같은데, 문제는 회사 노트북이라 해당 설정 수정이 안 된다는 것. 학습용이라 회사에 이야기하면 임시로라도 풀어줄 가능성이 높지만 그 경우 주말을 날려야 한다.

![screenshot](./images/250208-2.png)

*"그래도 열기" 버튼을 눌러도 설치로 넘어가지 않는다.*

어쩔 수 없이 방법을 선회, Unity Hub 를 설치 후 거기서 Unity 를 설치했다. (예전 학습 때는 Unity Hub 를 사용했던 것이 간신히 생각해냈다.) 그나마도 2021.1 버전은 없어서 2021.3.45f1 버전을 설치했다.

(어이없는 게 설치를 위해 멈춰뒀던 강의 영상을 다시 재생하니까 영상에서도 Unity Hub 를 사용하고 있다..)

설치하고 새 프로젝트 만들기 쭉쭉 따라서 진행. 잘 설치된 것까지 확인했다.

그런데 새 프로젝트에서 intellisense 가 작동하지 않아서 원인을 찾아봤는데 알 수 없었다. 다음 강의 "5. IntelliSense Issues? (01:44)" 가 intelliSense 에 관한 내용이었는데, 아쉽게도 해당 글의 내용으로는 이슈가 해결되지 않았다.