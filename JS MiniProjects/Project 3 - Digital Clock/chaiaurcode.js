let clock = document.querySelector("#clock");

setInterval( () =>{
  date = new Date()
  let time = date.toLocaleTimeString();
  clock.innerHTML = time;
}, 1000)