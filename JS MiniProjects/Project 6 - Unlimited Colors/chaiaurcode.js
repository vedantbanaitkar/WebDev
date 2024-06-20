let st = null;
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

startBtn.addEventListener("click", (e) => {
  if (!st) {
    st = setInterval(() => {
      // console.log("setInterval" + Date.now());

      document.body.style.backgroundColor = `rgb(${randNo255()}, ${randNo255()}, ${randNo255()})`;
    }, 2000);
  }
});
stopBtn.addEventListener("click", () => {
  clearInterval(st);
  st = null;
  console.log("stopped!");
});

let randNo255 = () => {
  return Math.floor(Math.random() * 256);
};
