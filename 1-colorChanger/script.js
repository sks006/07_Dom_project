/** @format */

const button = document.querySelectorAll(".button");
const body = document.querySelector("body");
button.forEach((item) => {
     item.addEventListener("click", (e) => {
          console.log(e);
          console.log(e.target.id);
          if (e.target.id === "grey") {
               body.style.background = e.target.id;
          } else if (e.target.id === "green") {
               body.style.background = e.target.id;
          } else if (e.target.id === "blue") {
               body.style.background = e.target.id;
          } else if (e.target.id === "yellow") {
               body.style.background = e.target.id;
          }
     });
});
