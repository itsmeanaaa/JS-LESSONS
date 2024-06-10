

let numberincrease= document.getElementById("btn-inc");
let dec = document.getElementById("btn-decrease");
let reset = document.getElementById("btn-reset");
let myNum = document.getElementById("display_num");
let count =0;

numberincrease.onclick = function(){
    count++;
    myNum.textContent = count;
}

dec.onclick = function(){
    count--;
    myNum.textContent = count;
}

reset.onclick = function(){
    count=0;
    myNum.textContent = count;
}