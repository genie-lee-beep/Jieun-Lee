// javascript console 배열 연습 1 <기본>
// Tip:방향키로 위에 사용했던 코드를 가져올 수 있다.
const email = "codecamp@gmail.com"
email.includes("@") //@가 포함되어 있는지 확인할 때 include를 사용한다. 
email.split("@")
(2) ["codecamp", "gmail.com"]
email.split("@")[0]
"codecamp"
const front = email.split("@")[0]
const back = email.split("@")[1]
front
"codecamp"
back
"gmail.com"
const temp = []
// temp는 임시로 사용할 변수이름을 만들 때 사용
temp.push(front[0])
1
temp
["c"]
temp.push(front[1])
2
temp.push(front[2])
3
temp.push(front[3])
4
temp
(4) ["c", "o", "d", "e"]
temp.push("*")
5
temp.push("*")
6
temp.push("*")
7
temp.push("*")
8
temp
(8) ["c", "o", "d", "e", "*", "*", "*", "*"]
temp.join("")
"code****"
const newFront = temp.join("")
newFront
"code****"
back
"gmail.com"
newFront + "@" +back
"code****@gmail.com"
const result = newFront + "@" +back
console.log(result)
code****@gmail.com