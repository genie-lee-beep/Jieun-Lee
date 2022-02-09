
// 
setTimeout(function() {
    console.log("3초가 지났습니다.")
}, 3000)
3초가 지났습니다.



// 1초마다 안녕하세요를 찍어준다.
setInterval(function() {
    console.log("안녕하세요")
},1000)
2 안녕하세요


----
// 
let time = 10
setInterval(function() {
    console.log(time)
    time = time -1 
},1000)
10
 9
 8
 7
 6
 5

---
// 0초 이상일 때만 카운트
let time = 10
setInterval(function() {
    if(time >= 0) {
        console.log(time)
        time = time -1 
    }
},1000)
2
 10
 9
 8
 7
 6
 5
 4
 3
 2
 1
 0


--
180 / 60
3
179 / 60
2.9833333333333334
Math.floor(179 / 60)
2
 179 % 60
59

// ---응용---
let time = 180
setInterval(function() {
    if(time >=0) {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60

    console.log(minutes + ":" + seconds)
    time = time -1 
    }
}, 1000)
2
 3:0
 2:59
 2:58
 2:57
 2:56
 2:55
 2:54
 2:53
 2:52