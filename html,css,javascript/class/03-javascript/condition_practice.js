if("철수" === "철수") {
    console.log("철수입니다.")
} else {
    console.log("철수가 아닙니다.")
}
VM254:2 철수입니다.
undefined
let age = 10

if(age > 8){
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}
    
VM525:2 학생입니다.
undefined
if (age > 20){
    console.log("성인입니다.")
} else if (age >8) {
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}

---------
VM903:4 학생입니다.
undefined
const profile = {
    name: "철수,
    age: 13,
    school: "다람쥐초등학교"
}

let age = 12
if (age > 20){
    console.log("성인입니다.")
} else if (8 <= age <= 19) {
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}