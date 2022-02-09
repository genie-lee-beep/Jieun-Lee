const getPhoneAuthFinal=() => {
    const phoneAuthFinal = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("aaa").innerText = phoneAuthFinal

    }

    
        let time = 10
        setInterval(function() {
            if(time >= 0){
                document.getElementById("bbb").innerText = time //document("bbb)에 뜨게 해야 하니까 console.log가 아닌 document로!
                time =  time - 1
            } else {
                document.getElementById("sss").setAttribute("disabled",true)
                document.getElementById("sss").innerText = "시간초과"
             }
    },1000)


// 🔔 if(조건){
//    A
//    } else{}     >>여기서는 조건 필요없음
//    } B