const burgerBtn=document.getElementById("burgerbtn");
const navlink=document.getElementById("links");

burgerBtn.addEventListener('click',()=>{
    navlink.classList.toggle("burger-click");
    burgerBtn.classList.toggle("rotate");
})