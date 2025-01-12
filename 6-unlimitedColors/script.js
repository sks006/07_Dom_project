/** @format */

const ntc = require("ntcjs");

const startRandomColor = document.getElementById("start");
const stopRandomColor = document.getElementById("stop");

const p = document.createElement("p");
p.id = "colorNameDisplay";
p.style.fontSize = "32px";
p.style.fontFamily="roboto"
p.style.marginTop = "20px";
document.body.appendChild(p);

function randomColor() {
     const hex = "0123456789ABCDEF";
     let color = "#";
     for (let i = 0; i < 6; i++) {
          color += hex[Math.floor(Math.random() * 16)];
     }

     const n_match = ntc.name(color);
     const n_name = n_match[1];
     p.innerHTML = `Color is: <strong>${n_name}</strong> (${color})`;

     return color;
}

let intervalId = null;

const startChangingColor = function () {
     if (!intervalId) {
          intervalId = setInterval(() => {
               document.body.style.backgroundColor = randomColor();
          }, 1000);
     }
};

const stopChangingColor = () => {
     clearInterval(intervalId);
     intervalId = null;
};

startRandomColor.addEventListener("click", startChangingColor);
stopRandomColor.addEventListener("click", stopChangingColor);
