---
title: "VS Code intelliSense 이슈 해결 + 강의 13강 수강"
date: 2025-02-16
---

## \#1

강의에서 C# 스크립트를 수정하기 시작했는데 VS Code 에서 여전히 Unity 코드의 자동 완성 기능이 동작하지 않아서, 답답해서 강의를 멈추고 찾아봤다.

일단 구글에서 "vscode unity autocomplete" 라고 검색해서 돌아다니다보니 보인 영상 [Set up Visual Studio Code with Unity and INTELLISENSE WORKING 2023](https://www.youtube.com/watch?v=ihVAKiJdd40)을 따라해봤는데 잘 되지 않았다.

그런데 해당 영상에서 VS Code 의 extension 에러 메시지를 확인해보라는 말이 있어서 확인해보았는데, 거기에 아래와 같은 에러가 있었다.

> "Microsoft.VisualStudio.ProjectSystem.Query.Remoting.QueryExecutionService (0.3)" 서비스를 활성화하지 못했습니다.

해당 에러로 검색을 해보니 [[BUG] C# Dev Kit installed but not working #1732](https://github.com/microsoft/vscode-dotnettools/issues/1732) 글이 나왔고, 해당 글의 [코멘트](https://github.com/microsoft/vscode-dotnettools/issues/1732#issuecomment-2611362439)에서 아래와 같은 내용을 찾았다.

> To do that, you need to uncheck this setting located under `Extensions` -> `C#` -> `C# Dev Kit`: `Dotnet: Use Legacy Dotnet Resolution`  
> Please make sure you reload VS Code window after changing this setting.

바로 해당 설정을 한 뒤 Developer: Reload Window 를 해보니 위 에러는 없어지고 다른 에러가 나왔다. 지금 와서 찾으려니 정확한 에러 메시지를 찾을 수 없는데, "Apple CPU 인데 x64 용 .net SDK 가 깔려있는 것 같다" 는 내용의 에러였다.

그래서 .net 에서 공식으로 제공하는 [.net 삭제 스크립트](https://github.com/dotnet/cli-lab/releases)를 사용해 기존에 깔려있던 .net SDK 를 삭제한 뒤, Apple Sillicon CPU 용 .net 9.0 SDK 를 재설치했다.

재설치한 후에는 뭔가 알 수 없는 에러가 떠서 깔끔하게 재부팅을 했고, 재부팅 후에는 Unity 코드들의 자동 완성 및 타입 추론이 잘 되는 것을 확인할 수 있었다.


## \#2

강의 수강: [Unity Turn-Based Strategy Game: Intermediate C# Coding](https://www.udemy.com/course/unity-turn-based-strategy/)

### 13. Unit Move (08:01)

- 캐릭터를 특정 지정으로 움직이기 위한 C# 스크립트 작성
- 현재 씬뷰와 동일하게 카메라 위치 조정: cmd + shift + f (GameObject - Align With View)

중급자용 코스라서 조금 걱정을 했는데, 이 정도 수준도 (짧지만) 별개의 강의로 만들어 줄 정도라면 앞으로도 따라가는 데 무리는 없을 것 같다.
