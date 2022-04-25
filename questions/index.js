const btn=document.getElementsByClassName("btn");
const answer=document.getElementsByClassName("answer");

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',()=>{
        answer[i].classList.toggle("show-answer");
    })
}