let chek1 = document.querySelector("#chek1"),
chek2 = document.querySelector("#chek2"),
chek3 = document.querySelector("#chek3"),
reset = document.querySelector(".reset");
chek1.onclick = function(){
    if(chek1.checked === true){
        chek1.disabled = "true";
    }
}
chek2.onclick = function(){
    if(chek2.checked === true){
        chek2.disabled ="true";
    }
}
chek3.onclick = function(){
    if(chek3.checked === true){
        chek3.disabled ="true";
    }
}
reset.onclick = function(){
    chek1.disabled = false;
    chek1.checked = false;
    chek2.disabled = false;
    chek2.checked = false;
    chek3.disabled = false;
    chek3.checked = false;
}