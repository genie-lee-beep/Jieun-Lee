
        
        
        // 함수 작성방법1.선언식 
        // function getPhoneAuthFianl() {
        //     const phoneAuthFianl = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        //     console.log(phoneAuthFianl)
        //     document.getElementById("aaa").innerText = phoneAuthFianl

        // 함수 작성방법2.함수 화살표
            const getPhoneAuthFianl=() => {
            const phoneAuthFianl = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
            console.log(phoneAuthFianl) //이 부분은 삭제 해도 됨, 우리는 console에도 돌아가게 하려면 넣고.
            document.getElementById("aaa").innerText = phoneAuthFianl

        }

        