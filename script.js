var audio1 = new Audio("sound/C1.mp3");
var audio2 = new Audio("sound/C2.mp3");
var audio3 = new Audio("sound/C3.mp3");
var audio4 = new Audio("sound/C4.mp3");
var audio5 = new Audio("sound/C5.mp3");
var audio6 = new Audio("sound/C6.mp3");
var audio7 = new Audio("sound/C7.mp3");

var btn1 = document.getElementsByClassName("c1");
btn1[0].addEventListener("click", (e) => {
    audio1.play();
});

var btn2 = document.getElementsByClassName("c2");
btn2[0].addEventListener("click", (e) => {
    audio2.play();
});
var btn3 = document.getElementsByClassName("c3");
btn3[0].addEventListener("click", (e) => {
    audio3.play();
});
var btn4 = document.getElementsByClassName("c4");
btn4[0].addEventListener("click", (e) => {
    audio4.play();
});
var btn5 = document.getElementsByClassName("c5");
btn5[0].addEventListener("click", (e) => {
    audio5.play();
});
var btn6 = document.getElementsByClassName("c6");
btn6[0].addEventListener("click", (e) => {
    audio6.play();
});
var btn7 = document.getElementsByClassName("c7");
btn7[0].addEventListener("click", (e) => {
    audio7.play();
});
var playsound = document.getElementsByClassName("play");
playsound[0].addEventListener("click", (e) =>{
    audio1.play();
    setTimeout(function(){
        audio2.play();

    }, 1500);
    setTimeout(function(){
        audio3.play();

    }, 2000);
    setTimeout(function(){
        audio4.play();

    }, 2500);
    setTimeout(function(){
        audio5.play();

    }, 3000);
    setTimeout(function(){
        audio6.play();

    }, 3500);
    setTimeout(function(){
        audio7.play();

    }, 4000);
});