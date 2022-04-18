const count =document.getElementById("count");
let a=0;
function resetCount(){
    a=0;
    count.innerText=a;
    count.style.color="black";
}
function increaseCount(){
    count.innerText=++a;
    if(a>0){
        count.style.color="green";
    }
    else if(a<0){
        count.style.color="red";
    }
}
function decreaseCount(){
    count.innerText=--a;
    if(a>0){
        count.style.color="green";
    }
    else if(a<0){
        count.style.color="red";
    }
}