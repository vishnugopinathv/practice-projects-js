const colors=["orange","yellow","red","aqua","gray","brown","violet","salmon","tomato"];
const btn= document.getElementById("btn");
const color=document.getElementById("color");
function randomNumber(){
    return Math.floor(Math.random()*colors.length);
}
function colorChange(){
    let num=randomNumber();
    color.innerText=colors[num];
    document.body.style.backgroundColor=colors[num];
}