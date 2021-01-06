let progress =3.01;

document.getElementById('modeSwitch').addEventListener('click',function(){
document.getElementById('modeSwitch').classList.toggle('clicked');
document.getElementsByTagName('body')[0].classList.toggle('night_mode');
document.querySelectorAll('.items')[0].classList.toggle('item');
document.querySelectorAll('.items')[1].classList.toggle('item');
document.querySelectorAll('.items')[2].classList.toggle('item');
document.querySelectorAll('.items')[3].classList.toggle('item');
document.querySelectorAll('.items')[4].classList.toggle('item');
document.querySelectorAll('.items')[5].classList.toggle('item');
document.querySelectorAll('.items')[6].classList.toggle('item');
document.querySelectorAll('.items')[7].classList.toggle('item');
document.querySelectorAll('.items')[8].classList.toggle('item');
document.querySelector('.up-load').classList.toggle('color');
});



setInterval(pro,1000);


   function pro(){
   document.querySelector('.f1').classList.toggle('appear');
   document.querySelector('.f2').classList.toggle('appear');
   document.querySelector('.f3').classList.toggle('appear');
    document.querySelector('.linel').style.width=progress + 'vw';
      progress+=3.01;
    if(progress>21.2){
      progress=0;
    }
   }

let display1 = document.getElementById('t1');
let btn1 = document.getElementById('1');
btn1.onclick = function() {
  display1.style.display = "block";
}
var close1 = document.getElementsByClassName("close")[0];
close1.onclick = function() {
  display1.style.display = "none";
}


let display2 = document.getElementById('t2');
let btn2 = document.getElementById('2');
btn2.onclick = function() {
  display2.style.display = "block";
}
var close2 = document.getElementsByClassName("close")[1];
close2.onclick = function() {
  display2.style.display = "none";

}
let display3 = document.getElementById('t3');
let btn3 = document.getElementById('3');
btn3.onclick = function() {
  display3.style.display = "block";
}
var close3 = document.getElementsByClassName("close")[2];
close3.onclick = function() {
  display3.style.display = "none";


}
let display4 = document.getElementById('t4');
let btn4 = document.getElementById('4');
btn4.onclick = function() {
  display4.style.display = "block";
}
var close4 = document.getElementsByClassName("close")[3];
close4.onclick = function() {
  display4.style.display = "none";

}
let display5 = document.getElementById('t5');
let btn5 = document.getElementById('5');
btn5.onclick = function() {
  display5.style.display = "block";
}
var close5 = document.getElementsByClassName("close")[4];
close5.onclick = function() {
  display5.style.display = "none";

}
let display6 = document.getElementById('t6');
let btn6 = document.getElementById('6');
btn6.onclick = function() {
  display6.style.display = "block";
}
var close6 = document.getElementsByClassName("close")[5];
close6.onclick = function() {
  display6.style.display = "none";
}
let display7 = document.getElementById('t7');
let btn7 = document.getElementById('7');
btn7.onclick = function() {
  display7.style.display = "block";
}
var close7 = document.getElementsByClassName("close")[6];
close7.onclick = function() {
  display7.style.display = "none";

}
let display8 = document.getElementById('t8');
let btn8 = document.getElementById('8');
btn8.onclick = function() {
  display8.style.display = "block";
}
var close8 = document.getElementsByClassName("close")[7];
close8.onclick = function() {
  display8.style.display = "none";
}
let display9 = document.getElementById('t9');
let btn9 = document.getElementById('9');
btn9.onclick = function() {
  display9.style.display = "block";
}
var close9 = document.getElementsByClassName("close")[8];
close9.onclick = function() {
  display9.style.display = "none";
}
