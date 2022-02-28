let mario=document.getElementById("mario");
let box = document.getElementById("box");
let counter=0;

 function jump(){
     if(mario.classList!=="animate"){
         mario.classList.add("animate")
     }
    setTimeout( function (){
        mario.classList.remove("animate")
    },500)
 }

 let x = setInterval(function (){
     let mariobottom = parseInt(window.getComputedStyle(mario).getPropertyValue("bottom"))
     let boxleft = parseInt(window.getComputedStyle(box).getPropertyValue("left"))
     if(boxleft<20 && mariobottom<20 && boxleft>-20){
         box.style.animation="none";
         alert("Game Over" +  Math.floor( counter/100))
         counter=0;
         box.style.animation="box 2s infinite linear"
     }else{
         counter++;
         document.getElementById("score").innerHTML=Math.floor(counter/100)
     }
 },20)




























// let mario =document.getElementById("mario");
// let box =document.getElementById("box");
// let counter=0;
//
// function jump(){
//     if(mario.classList!=="animate"){
//         mario.classList.add("animate")
//     }
//     setTimeout(function (){
//         mario.classList.remove("animate")
//     },500)
// }
//
// let x = setInterval(function ()
// {
//     let mariobottom= parseInt(window.getComputedStyle(mario).getPropertyValue("bottom"))
//     let boxleft= parseInt(window.getComputedStyle(box).getPropertyValue("left"))
//
//     if(boxleft<20 && boxleft>-20 &&mariobottom<20){
//         box.style.animation="none"
//         alert("game over. Score: "+ Math.floor(counter/100))
//         counter=0;
//         box.style.animation="box 2s infinite linear"
//     }else {
//         counter++;
//         document.getElementById("score").innerHTML=Math.floor(counter/100);
//
//     }
// },20)
//
//
//
//
//












