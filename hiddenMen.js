const menuIcon =document.querySelector(".menuIcon");
const cancelBtn =document.querySelector(".cancelBtn");
const homeNav =document.querySelector(".homeNav");

menuIcon.addEventListener(('click'),function(){
    homeNav.style.visibility='visible'
})
cancelBtn.addEventListener(('click'),function(){
    homeNav.style.visibility='hidden'
})


