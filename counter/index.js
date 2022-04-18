const count =document.getElementById("count");
let a=0;
function resetCount(){
    a=0;
    count.innerText=a;
    count.style.color="black";
}
function increaseCount(){
    count.innerText=++a;
    a>0 ? count.style.color="green": count.style.color="red";
}
function decreaseCount(){
    count.innerText=--a;
    a>0 ? count.style.color="green": count.style.color="red";
}