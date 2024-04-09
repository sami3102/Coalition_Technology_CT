
 function myFunctionm1(){
    var m1 = document.getElementById("m1");
    m1.style.backgroundColor = "rgba(184, 175, 175, 0.788)";
    m1.style.textDecoration = "underline 2px";
    m1.style.textUnderlineOffset = "5px";
    m1.style.color = "rgb(18, 47, 69)";
    m2.style = "";
    var sched = document.getElementById("sched");
    sched.style.height = "40vh";

 }
 function myFunctionm2(){
    var m2 = document.getElementById("m2");
    sched.style.height = "0vh";
    m2.style.backgroundColor = "rgba(184, 175, 175, 0.788)";
    m2.style.textDecoration = "underline 2px";
    m2.style.textUnderlineOffset = "5px";
    m2.style.color = "rgb(18, 47, 69)";
    m1.style = "";
 }

const slide = document.querySelectorAll(".slides");
var counter = 0;
 slide.forEach(
  (slide,index)=>{
    slide.style.left=`${index*100}%`
  }
 )
 const goprev = () => {
  counter--;
  slideImg();
 }
 const gonext = () => {
  let i = 3;
  if(counter<i){
  counter++;
  }
  slideImg();
 }

const slideImg = () => {
  slide.forEach(
    (slide) => {
      slide.style.transform = `translateX(-${counter*100}%)`
    }
  )
}










