

let numberincrease= document.getElementById("btn-inc");
let myNum = document.getElementById("display_num");
let minhan = document.getElementById(`text_min`);
let maxhan = document.getElementById(`text_max`);
let count =0;
let handlemin;
let handlemax;

numberincrease.onclick = function(){
    handlemin = minhan.value;
    handlemax = maxhan.value;
    handlemax = Number(handlemax);
    handlemin = Number(handlemin);

    count =  Math.floor(Math.random() * (handlemax - handlemin)) + handlemin ;
    myNum.textContent = count;
   
}

