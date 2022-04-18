const colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn= document.getElementById("btn");
const color=document.getElementById("color");
function randomNumber(){
    return Math.floor(Math.random()*colors.length);
}
function colorChange(){
    console.log("working")
    let hex="#";
    for(i=0;i<6;i++){
        let num=randomNumber();
        hex+=colors[num];
    }
    color.innerText=hex;
    document.body.style.backgroundColor=hex;
}