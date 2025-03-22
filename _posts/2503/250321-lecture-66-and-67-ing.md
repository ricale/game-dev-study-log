---
title: "강의 66,67강 수강 중"
date: 2025-03-20
---

강의 수강: [Unity Turn-Based Strategy Game: Intermediate C# Coding](https://www.udemy.com/course/unity-turn-based-strategy/)

### 66. Pathfinding Obstacles (12:45)

장애물을 위한 Layer 를 새로 만들고, Wall prefab 을 만들어 해당 layer 를 적용한 뒤에, 맵 위에 wall 을 새워놓으면 raycast 로 wall 이 서 있는 칸을 확인해 해당 칸은 pathfinding 에서 사용하지 않도록 수정.

이를 위해 `PathNode` 는 `isWalable` 이라는 필드가 추가되었다.

그런데 다 잘 따라한 것 같은데 장애물을 인식을 못해서 한참 찾다가 raycast 랑 충돌할 layer mask 를 제대로 지정 안한 걸 겨우 찾아냈다.

### 67. Level Design (~07:05, 15:41)

맵을 만든다. 7분까지도 조용히 몇 마디 말 없이 맵만 만든다.
