let x = document.querySelector(".img24")
let y = document.querySelector(".ulLi-1")
let z = true ;
x.addEventListener("click" , function () {
    z = !z
    if(z === false){
        y.style.display = "block"
        document.body.style.overflowY = "hidden"
    }else{
        y.style.display = "none"
        document.body.style.overflowY = "scroll"

    }
})