---
date: '2021-11-17' title: 'Javascript 객체 정렬하기(faet.typescript)' categories: ['Javascript','Typescript']
summary: 'Javascript 에서 객체를 정렬하는 방법을 공유합니다.' thumbnail: './thumbnail.png'
---

> 📍해당 블로그의 모든 내용들은 제 기준 주관적인 내용임을 알립니다.

## Javascript 객체 정렬하기(faet.typescript)

​    

현재 블로그에서 실제로 받아오는 caterogyList(#태그 메뉴)는 아래와 같은 Object 로 넘겨 받는다.

```typescript
const CATEGORY_LIST:{[key:string]:number} = {
  All: 6
	ETC: 3
	IntelliJ: 1
	Javascript: 1
	SETTING: 1
	TODO: 1
	Trouble Shooting: 1
	Typescript: 1
	UX/UI: 1
}
```



기존 정렬하기 전 코드를 보자.

```typescript
Object.entries(CATEGORY_LIST)
  .map(([name,count]) => <Cate key={name}>{name} #{count}</Cate>)
```

순서를 보장하지 않는 값이 나온다.

<br>

객체를 정렬해보자. 

어려 방법이 있겠지만 `entries` 를 이용하는걸로 진행 하겠다.

1. 먼저 `Object` 를 `Array` 로 변환하기 위해`entries` 를 이용하여 객체를 배열로 만들어준다. 
   - keys, valuse 편한걸 사용하셔도 됩니다.
   - 별도의 Object.prototype 을 이용하여 sort 메소드를 만드어 주셔도 상관없습니다.
2. 배열로 변환 하였다면 `sort` 사용하여 정렬해준다.
3. 렌더링!

```typescript
const categoryList = Object.entries(CATEGORY_LIST)
	.sort(([keyA,],[keyB,])=> keyA.toUpperCase() < keyB.toUpperCase() ? -1 : 1)
  .map(([name,count]) => <Cate key={name}>{name} #{count}</Cate>)

```

 

그럼 이만 :D 🖐

