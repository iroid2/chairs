const menuIcon =document.querySelector(".menuIcon");
const cancelBtn =document.querySelector(".cancelBtn");
const homeNav =document.querySelector(".homeNav");

menuIcon.addEventListener(('click'),function(){
    homeNav.style.visibility='visible'
})
cancelBtn.addEventListener(('click'),function(){
    homeNav.style.visibility='hidden'
})

// const minus =document.querySelector(".minus");
// // const numb =document.querySelector(".numb");
// // const add =document.querySelector(".add");


// add.addEventListener(("click"),function(){
//     console.log("minus is working")
// })



