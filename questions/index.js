const btn=document.getElementsByClassName("btn");
const answer=document.getElementsByClassName("answer");
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',()=>{
        answer[i].classList.toggle("show-answer");
        btn[i].classList.toggle("fa-square-plus");
        btn[i].classList.toggle("fa-square-minus");
        for(let j=0;j<3;j++){
            if(answer[i].classList.contains("show-answer")&&(i!==j)){
                answer[j].classList.remove("show-answer");
                btn[j].classList.remove("fa-square-minus");
                btn[j].classList.add("fa-square-plus");
            }
        }
    })
}
