// 객체 - 객체는 중괄호{} shift+enter
const profile = {
    name: "철수",
    age: 13,
    school: "다람쥐초등학교"
}
undefined
profile.name
"철수"
profile.age
13

// 배열에 담긴 객체 -비슷한 객체를 한 묶음으로 만들어야 할 때
const classmates = [
    {name:"철수", age:8, school:"다람쥐초등학교"},
    {name:"영희", age:8, school:"다람쥐초등학교"},
    {name:"훈이", age:7, school:"토끼초등학교"}
]

classmates[0].name
"철수"
// 객체에서 무엇을 가지고 올때는 .을찍고 가지고 올것을 쓴다. ex).name

classmates[0].name + "는" + classmates[0].age + "살 이고," + classmates[0].school + "에 다닙니다."
"철수는8살 이고,다람쥐초등학교에 다닙니다."

classmates[1].name + "는" + classmates[1].age + "살 이고," + classmates[1].school + "에 다닙니다."
"영희는8살 이고,다람쥐초등학교에 다닙니다."

// slide 72번 실습예제 
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
// console 
fruits[0].number + fruits[0].title
"1레드향"
fruits[1].number + fruits[1].title
"2샤인머스켓"
fruits[2].number + fruits[2].title
"3산청딸기"
fruits[3].number + fruits[3].title
"4한라봉"
fruits[4].number + fruits[4].title
"5사과"