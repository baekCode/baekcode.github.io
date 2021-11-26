---
date: '2021-11-17' title: '카테고리 Menu UX/UI 고민' categories: ['UX/UI','ETC']
summary: '점점 늘어나는 카테고리.. UI 수정내용들을 기록하기 ' thumbnail: './thumbnail.jpeg'
---

> 📍해당 블로그의 모든 내용들은 제 기준 주관적인 내용임을 알립니다.

## 카테고리 Menu UX/UI 고민

    

![image](https://user-images.githubusercontent.com/85144569/142146257-42d7d141-7d0d-486c-a035-4bc35eabb9bd.png)

블로그 시작의 단계라 여러 부분이 수정이 필요하다.

그중에 일부분인 Post 글마다 생성되는 `#카테고리 메뉴` 를 수정해보려고 한다.

<br>

**문제**

- Post 글이 늘어날수록 `#카테고리 메뉴` 도 늘어날것이다.
- 반응형일때는 역시나 이상하게 보인다.
- 생성되는 `#카테고리 메뉴` 정렬 기준이 필요하다. 
  - 1순위 : 카테고리가 많은 수
  - 2순위 : 알파벳 순서 

<br>

**해결 방안**

- `#카테고리 메뉴` 정렬은 category 로 넘겨 받는 값을 [sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 를 이용하여 정렬한다.

  (참고 : [객체 정렬 하기](/2021-11-17/javascript-obejct-sort/))

