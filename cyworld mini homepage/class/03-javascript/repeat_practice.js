for (let i=0; i<5; i=i+1){
    console.log("hello")
    }

---
const classmates = ["철수", "영희", "훈이"]
for(let i =0; i<3; i++){
    console.log(classmates[i] + "입니다.")
    }
     철수입니다.
     영희입니다.
     훈이입니다.

classmates.length
3

for(let i =0; i<classmates.length; i++){
        console.log(classmates[i] + "입니다.")
        }

-------
✌실습✌

const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
]

for (let i=0; i<fruits.length; i++){
    console.log(fruits[i].number + '. ' + fruits[i].title)
}
1. 레드향
2. 샤인머스켓
3. 산청딸기
4. 한라봉
5. 사과
6. 애플망고
7. 딸기
8. 천혜향
9. 과일선물세트
10. 귤