---
date: '2021-11-15'
title: 'intellij Setting & 추천 Plugin'
categories: ['SETTING']
summary: '나만의 개발환경 세팅' 
thumbnail: './thumbnail.png'
---

> 📍해당 블로그의 모든 내용들은 제 기준 주관적인 내용임을 알립니다.


## 개발 환경 인텔리제이 설정 

여러 개발 도구와 협업 관련 도구들이 존재합니다.

그중에서 오늘은 주로 사용하고 있는 IDE JetBrains 의 Intellij 기본 환경 세팅을 공유합니다. 

> 📍 WebStorm 거의 비슷하거나 동일합니다.



<br>

#### 기본 개발 환경

- github 
- Jetbrain IDE (Intellij, WebStorm) / VSCode
- iterm



##### 기타 툴

- Slack
- Jira
- Zeplin



----

## Intellij Preferences 

##### General

On save > Ensure every saved file ends with a line break 활성화

![image](https://user-images.githubusercontent.com/85144569/142137855-8c9381e6-80a3-488e-9d64-7e6aefc8aa9b.png)

위와같은 문제가 발생하지 않도록 해줄 수 있습니다.

##### Code Style

**HTML**

Add for JSX attributes - Based on type (기본으로는 자동으로 brace가 생겨서 귀찮았음)



### Languages & Frameworks

##### Javscript

Code Quality Tools - ESLint

![image](https://user-images.githubusercontent.com/85144569/142137779-aa60594b-8768-422e-8dac-f9857c6705bf.png)

`Run eslint --fix on save` : 저장 시 자동으로 ESLint가 실행됩니다.

**Prettier**

![image](https://user-images.githubusercontent.com/85144569/141739747-f2956c75-76eb-43b8-80a5-f9249dfec800.png)

저장 및 Reformat(opt+control+L) 시 자동으로 포매팅된다.

`On reformat code action` , `On Save` 저장 및 Reformat 시 자동으로 Prettier가 실행이됩니다.

### Plugins

##### Atom Material Icons

파일 아이콘들을 예쁘게 바꾸어줍니다.

##### Jira Integration

Jira 계정과 연동하여 이슈 관리 및 브랜치, Changelist 생성을 쉽게 할 수 있습니다.

##### Key Promoter X

단축키를 안 쓰고 마우스로 굳이 힘겹게 작업할 경우 단축키를 알려줍니다.

##### Nyan Progress Bar

빌드, 런타임, 세이브시에 동작하는 Progress Bar 를 커스텀한 버전입니다.

##### Rainbow Brackets

괄호(Bracket)을 색상을 입혀 가독성을 증가 시켜줍니다,

![image](https://user-images.githubusercontent.com/85144569/142137693-7af8ee29-6f80-4684-bd6b-2cdbfd26ecea.png)

##### React snippets

React Snippets 입니다.

##### String Manipulation

String 작업할 때 편리함. ex) snake_case → camelCase 일괄 변환