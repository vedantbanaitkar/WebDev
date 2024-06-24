let body = document.querySelector("body");
let arr = [
  "Initializing Hacking",
  "Reading Your Files",
  "Password Files Detected",
  "Sending All Passwords and Personal Files to Server",
  "Cleaning Up",
];

let i = 0;

function randNumber() {
  let c = Math.floor(Math.random() * (-5000 + 10000) + 5000);
  console.log("asfasdf:   ", c);
  return c;
}

function add() {
  if (i < arr.length) {
    let div = document.createElement("div");
    div.textContent = arr[i];
    i++;
    body.appendChild(div);
  }
//   let dots-div = document
}

function dynamicInterval() {
  if (i < arr.length) {
    add();
    setTimeout(dynamicInterval, randNumber());
  }
}

setTimeout(dynamicInterval, randNumber());
