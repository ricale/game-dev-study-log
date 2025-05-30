---
title: "2D 강의 영상 Part 4,5 시청"
date: 2025-04-14
---

강의: [Unity Tutorial 2024 - Build a 2D RPG](https://www.youtube.com/playlist?list=PLy1Xj-4F5G_cytIH8by-bZ9TVj5qKMlZn)

### Part 04 Collisions (16:34)

Sorting Layer 는 일반 Layer 와 달리 z-index 역할.

2D 장애물을 만들기 위해서는 별도의 TileMap 을 만들고 그 위에 Tile Palette 로 그림을 그린 다음, Tilemap Collider 2D, Composite Collider 2D (+ Rigidbody 2D) 를 적용.

- 중력의 적용을 없애려면 Rigidbody 2D 의 Body Type 을 Static 으로
- Tilemap Collider 2D 에서는 Used By Composite 을 체크해서 Composite Collider 2D 를 자동 사용하도록 적용
- 이 시점에서 Tile Palette 로 TileMap 위에 그린 그림에 자동으로 collider 가 적용된 것을 Scene view 에서 확인 가능.
  - 영상에서는 Composite Collider 2D 의 Gemometry Type 을 Polygons 로 바꾸라는 데 뭐가 바뀌는 건지는 잘 모르겠다.

지금까지 강의에서 작성한 코드량이 얼마 되지도 않지만, `[SerializeField] private` 대신 `public` 을 사용하는 것을 보니 코드 퀄리티에서는 배울 게 없을 것 같다. 하긴 설명하는 수준을 보면 초심자용 영상인 것은 확실하다.

### Part 05 Adding NPCs (~09:40, 17:59)

Project Settings 의 Graphics - Camera Settings 에서
- Transparency Sort Mode - Custom Axis
- Transparency Sort Axis - x: 0, y: 1, z: 0

으로 하면 y 좌표 기준으로 같은 Layer Sprite 객체가 정렬된다.

새로운 캐릭터를 추가하고 Interactable 이라는 Layer 를 추가한 뒤 해당 캐릭터에 지정해줬다. 이후에는 캐릭터에게 말을 걸면 말풍선이 나오는 것을 구현할 듯.
