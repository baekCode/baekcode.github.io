---
layout:     post
title:      Javascript, <br> part.1
date:       2019-06-29 15:31:02
summary:    if,while
categories: IT
---
Javascript 유연한 언어

자바스크립트는 대소문자 가린다.
_ $ 는 기호가 아니다!

@데이터와 상태
number,string,boolean,undefined,null,nan,symbol,object
string : 문자열
“”, ‘’ 문자열에서는 팀,프로젝트,회사마다 정의하는게 다를수도있다.
‘ :싱글은 html 에서 쓰는 “” 이거와 구분하기위해서 사용되었었다
`` : 영문일때는 그냥 `누르면되고 한글일때는 알트+₩
boolean : 논리값 (참,거짓)
*undefined : 아무값도 정의되지않는 상태의 값
*null : 아무것도 없는 값
object : 객체 { 이걸브레이스 라고 부른다.


변수 : 그릇이라고 보면된다, 이름은 안에 내용물을 유추할수있게 이름을 작성하면 좋다.
= (이퀄) : 대입문

var,let 은 지금 거의 비슷하다, var는 옛날것, let은 요즘것 이라 생각하면된다.
const 콘스탄트의 약자, 상수, 변하지 않는 값

*자바스크립트는 절대 동시에 2개가 실행되지않는다.

1; 
let a = 1;
a+0; // 1이나온다. ====> 값을 이루는 식과,문

형(Type)
:기본형 , 객체형

함수
:코드를 묶고있는 값
function : 기능


-if문은 최대한 안만드는 연습하고, 함수를 만드는 연습을 할것,
=>if문이 버그를 만드는 주범이될수도있다.

-머리속에 생각되는 것을 코드화시키는것을 훈련!

-while 과 do while 차이점 
:두와일은 조건을 실행해두고 조건을 검사,

-반복문
:반복문(컨디션){} 괄호는 컨디션(조건)이라한다.



@연산자
-우선순위가 높을수록 우선으로 진행한다.
-같은 우선순위일때는 왼쪽부터 오른쪽부터 시작된다.
:보통은 괄호를 사용하면 우선순위 무시 
예) 1+3*4/3 일때 의도에 따른 우선순위를 정할수있다.
:((1+3)*4)/3 
++i : 전치
i++ : 후치

단항 : 한가지의 항 2항 : 숫자 + 숫자 

~ : 틸트라고 부른다 (영어이름)
*아스틀레이크 (영어이름)
| 파이프 (영어이름)

== 동등 비교
2 == ‘2’  :: true;

=== 일치 비교 (정확)
2 === ‘2’ :: false;

?: 3항 조건부 연산자
if (b<10) {
	a = 10
} else {
	a = 20 }

a = 참/거짓 ? 10 : 20

a = a + 3      =>> a+=3

let x1 = 100;
let x2 = '100'; //문자열 일공공 이라고 부른다. (숫자가 아님)

console.log(x1 == x2);
console.log(x1 === x2);

let y1 = { 
  name: '홍길동'
};
let y2 = {
  name: '홍길동'
}

console.log(y1 == y2);
console.log(y1 === y2);
// 모든 객체의 내용은 다 다르다! (객체의 유니크함)


// typeof 연산자는 [],{},null => 구분하지못한다.


switch 문은 if 의 복잡도를 낮출수있다.
case 'F40':
    alert('페라리');
    return;  //반환용도 (break역활 대신함)
  default: 
    alert('모르겠습니다.');
    break; //default 에서는 break가없어도 되지만 넣어주는 관례이다.

@값 타입의 변환
값의 타입 변환이 일어납니다. 이를 Type Casting
2가지, 명시적/암묵적 타입변환

prompt 함수는 숫자를 입력하더라도 문자열로 변환 시켜준다.

let age = prompt('나이를 알려주세요. 숫자로만 입력해주세요.');

alert('당신의 13년 후 나이는 ' + (age + 13) + '세입니다.');
// 여기서 age + 13 13이라는 숫자는 문자로 변환해서 출력됨

age = Number(age);
//number라는 함수로 문자열을 숫자로 변환시켜준다.

alert('당신의 13년 후 나이는 ' + (age + 13) + '세입니다.');

0은 거짓, 0을제외한 모든 숫자는 참이다.
‘’ 빈문자열 
음수 양수도 true 값으로 출력된다.

NaN : Not a number 

============= 값의 타입까지가 워밍업! 
함수, 객체 시작!

@함수 는 명시적 return문, 암묵적 return 
return 값이 없으면 undefined반환

함수의 인자의 개수와 상관없이 호출할수있다.

::함수는 만드는관점, 사용하는 관점 2가지가 있다.

::함수는 객체를 이용해서 만들어놓은 구조물이다. 

::함수는 객체로도 쓸수있다.. 인자값을 객체…

:: 함수안에 함수, 내적함수, 이너펑션 문제가없다.

::함수안에 있는 함수는 호출할수없다.

::지금 말하는 함수에서는 세미콜론을 안하는데.(문에서는 안함)
함수식에서는 세미콜론으로 마무리한다. 왜? 변수 = 값; 이렇게 진행하기때문에 아래내용은 
함수이지만 값이되는 함수식이다.

@라이프사이클 
:변수나 모든값을 저장하기위한 저장소
3가지 전역스코프,함수스코프,블럭스코프
전역스코프:실행하면 생기는 스코프
지역스코프:함수스코프,블럭스코프 2가지가있다.
-함수스코프는 함수가 호출되면 생기고, 리턴하면 사라진다.
-블럭스코프는 코드로 묶은  if,while,for..객체를 제외한 문에서의 코드묶음

스코프는 중첩가능하다. 스코프 안에 스코프, 함수스코프,블럭안에 블럭 중첩이 가능하다.
스코프(지역) : 값이 저장되는 저장소


#객체 기본

값-처리-결과
(네모를 소프트웨어,개발코드 를 사용하여 세모를 만드는것)
재료를 만들거나 변형시킴, 만들어놓은걸 꺼내와야하고 먹으면 없어진다. 라는 비유중…
만들기,변경,읽기,삭제
C / U / Read / Delete : CRUD

객체를 함수형으로 관리하면 유연하고 쓰기 편하다.

# new 연산자
-기본적으로 함수를 만드는 방법과 유사하다.
1번째 메카니즘 함수를 호출할때 new 연산으로 함수를 호출하면, 자바스크립트는 빈객체를 만들어둔다.
예) a = {} a 라는 빈객체 만들어두고
a.b 라고 하면 언디파인드 , a.b=dd 라고하면 빈객체에서 추가하게된다.

2번째 메카니즘 new 연산자로 함수를 호출하면 this 에게 return 한다.

# 동적 바인딩
//값으로 주기 때문에 .(마침표)를 사용할수없고 배열처럼 [] 사용
box['borderRadius'] = 5;
box['backgroundColor'] = 'red';
box['border-color'] = 'blue'; // 값이기 때문에, 식별자가 아니기 때문에 카멜케이스, 또는 기호를 넣어도 된다.

//console.log(box.border-color); //하면 에러난다
console.log(box['border-color']); // 이렇게 써야한다.

# 메소드
OOP 라는 개념 및 컨셉 설명.
-getter,setter 값을 읽고 쓰고 하는개념

#값의 참조&복사

변수 개념 정의 설명중(컴퓨터 구조로 cs 비유)

cpu 라는 박스
ram 이라는 박스
hdd 라는 박스

소프트웨어를 다운받거나 설치하면 hdd에 저장/설치,
실행시에는 해당소프트웨어가 ram 으로 이동
ram을 읽어와서 cpu로 가져와서 읽고 실행(계산)

let a = 10; 변수를 만들었을때 램의 저장위치가 변수a 이고 값은 10이 저장된다.

객체는 참조형, 그외는 복사형


# 다시 함수 - 화살표 함수 
기본 함수 논리 
function foo(){}

구문을 식으로 바꾸면 
식 = 값
let foo = function foo() {} 
let foo = function(){} //생략가능

값=>이름=>반환값
10 입력 => ‘’<li>10</li>’ 반환
let foo = ()=> {} // ()=>{} 여기가 함수
(인자값)

let double = (a) => a * 2; //코드가 한줄이면 {} 생략가능 // 한줄일때 식이 결과가되면 바로 리턴

let result = double(100);

console.log(result);



let makeColorObject = (name, value) => ({[name]:value});

console.log(makeColorObject('coloName','red'));
console.log(makeColorObject('coloA','red'));

# 콜백 함수

function salePrice(discountRate, price) {
  return price - (price * (discountRate * 0.01));
}

salePrice(30, 567000); // 코드만 봐서 무엇을 세일하고 30이 뭐고 나머지숫자는 먼지모른다..
salePrice(10, 567000);

//아래로 변경하여 보기 좋게 바꾸는게 좋다.
function discountPrice(discountRate) {
  return function(price) {
    return price - (price * (discountRate * 0.01));
  }
}

console.log('여름 세일 - ' + discountPrice(30)(567000));
console.log('겨울 세일 - ' + discountPrice(10)(567000));

let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

summerPrice(567000); // 함수명으로 확인해서 보기 좋게 바꿀수있다.
winterPrice(567000);


3항 연산자 
ECMAScript에서 다재능한 연산자
변수 = 불리언 ? 참일때 : 거지실때
let abc = (a > b) ? "a" : "b" 


