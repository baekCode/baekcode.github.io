---
date: '2021-11-16' title: 'Intellij 폴더가 안보이는 버그 해결 방법' categories: ['Trouble Shooting','IntelliJ','ETC']
summary: 'IntelliJ 에서 Project 뷰에서 폴더가 안보이는 버그를 해결하는 방법을 공유 합니다.' thumbnail: './thumbnail.png'
---

> 📍해당 블로그의 모든 내용들은 제 기준 주관적인 내용임을 알립니다.

## Intellij 폴더가 안보이는 버그 해결 방법



금일 오전 오후 까지만 잘쓰고 있던 인텔리제이가 저녁에 잠시 블로그 내용을 수정하려고 켰다가.. 아래의 스샷 처럼 되어버렸다..

![image](https://user-images.githubusercontent.com/85144569/142137064-211b0a17-259a-463c-ba9c-15b5b7b1e35d.png)

응...?? 디렉토리가 다 날라갔나..? 싶어서 터미널로 확인해보니

![image](https://user-images.githubusercontent.com/85144569/142137119-fcf57787-d0b6-473f-b414-c017491bc4fc.png) 

디렉토리와 파일들이 아주 잘 있었다.. 



바로 구글님을 이용해보자 해서 

`intellij project view hide directory` 

`인텔리제이 폴더 안보임` .. 등등 검색을 해보았지만 



다들 오래된 글을 참고하셔서 그런지.. 적절한 방법이 아니라고 생각했다. 
(Import Module 을 해서 뭐 하시면된다.. 뭐 그런..글들..뿐...)

뭔가 인텔리제이에서 설정 오류라 생각하여 개발 변태인 친구 [@디온](https://github.com/ksundong)에게 메이데이를 요청했다.



역시 그는 아주 쉽게 해결했다..

터미널에서 해당 root 에서 `rm -rf .idea` 을 해주어 지웠다 재시작하니...

![image](https://user-images.githubusercontent.com/85144569/142137307-7a10b516-0b8e-4066-80f0-39423373ec8e.png)

허무하게 잘보이게 되었다... 

그럼 이만 🖐

> 인텔리제이에서 종종 설정 오류로 이렇다고 하긴한다.

----

메이데이 요청전 나의 삽질...

- 인텔리제이 재시작
- 컴퓨터 재시작
- 인텔리제이 재설치