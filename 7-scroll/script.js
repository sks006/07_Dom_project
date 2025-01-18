let indicator = document.querySelector(".scroll-indicator .progress");
let scrollHight=document.documentElement.scrollHeight - document.documentElement.clientHeight
console.log(document.documentElement)
window.addEventListener("scroll",scroll)

function scroll() {
  let scrollTop=document.documentElement.scrollTop
  let scrolled=(scrollTop/scrollHight)*100
  indicator.style.width=`${scrolled}%`

  
}
