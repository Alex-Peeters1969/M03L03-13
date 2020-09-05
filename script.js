function changeBodyBg(color){
  document.body.style.background = color;
 }

function toggleClass(){
  let menu = document.querySelector(".mainbtn");
  menu.classList.toggle("toggleCls");
}

let hamburger = document.querySelector(".menubtn");
hamburger.addEventListener("click", toggleClass);

let h = document.querySelector(".home");
h.addEventListener("click", toggleClass);

let r = document.querySelector(".red");
r.addEventListener("click", toggleClass);

let y = document.querySelector(".yellow");
y.addEventListener("click", toggleClass);

let b = document.querySelector(".blue");
b.addEventListener("click", toggleClass);

let p = document.querySelector(".pink");
p.addEventListener("click", toggleClass);

































