const clock=document.getElementById("clock");






function updateTime() {
  let date = new Date();
  clock.innerHTML = `${date.toLocaleTimeString()}`;
  setInterval(updateTime,1000)
}

updateTime()