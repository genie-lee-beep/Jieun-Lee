// 수학객체 실무 실습-랜덤 숫자(21.05,26) - 핸드폰 인증문자
const temp = Math.random()
temp
0.23482687799758506
temp * 1000000
234826.87799758505
Math.floor(temp * 1000000)
234826
// Math.floor는 소수점 밑을 다 버리는 기능
// 위의 경우 운 좋게 6자리 숫자가 나왔으나, 랜덤 숫자가 0.006545.~~이 나와버리면 최종 4자리 숫자가 된다. 
// 따라서 아래와 같이 작업해야 한다. 

Math.random()
0.038438998973548744
const temp2 = 0.038438998973548744

temp2
0.038438998973548744
temp2 *1000000
38438.99897354875
Math.floor(temp2 *1000000)
38438
String(Math.floor(temp2 *1000000)).padStart(6,"*") //String을 활용해 숫자를 문자로 바꿔줌
"*38438"
// 빈자리 수에 넣을 문자를 " "안에 입력한다.
String(Math.floor(Math.random() * 1000000)).padStart(6,"0") 
"037427"


// 핸드폰 인증을 만드는 방법
const phonnAuthFinal = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
phonnAuthFinal //phoneAuthFinal은 임의로 정해준 변수이름이나, 핸드폰 인증문자 겠구나 알 수 있는 이름임.
"486194"
phonnAuthFinal
"486194"


// 👏Final code👏: 핸드폰 인증을 만드는 기능
function getPhoneAuthFianl(){  // phoneAuthFianl라는 변수를 함수에 담는 다는 뜻. phoneAuthFianl()은 함수를 실행하는(불러오는) 명령어?같은 것
    const phoneAuthFianl = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    console.log(phoneAuthFianl) //console에 띄우겠다는 것.(html에 띄우는 건 document!!)
    getPhoneAuthFianl()
    362925
    getPhoneAuthFianl()
    396891
    getPhoneAuthFianl()
    554879