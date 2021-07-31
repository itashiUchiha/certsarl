const mobileBtn = document.getElementById("mobile-cta")
        nav = document.querySelector('nav')
        mobileBtnExit= document.getElementById("mobile-exit");


        mobileBtn.addEventListener('click',()=>{
            nav.style.display="block";
        })
        mobileBtnExit.addEventListener('click',()=>{
            nav.style.display="none";
        })
        