function hola(){
    alert("Hola!")
}
document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("divi").addEventListener("click",()=>{
        alert("Hola! soy el div");
    })

    document.getElementById("botonsaludo").addEventListener("click",(e)=>{
        hola();
        e.stopPropagation();
    })
})


