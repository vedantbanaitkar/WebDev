// let box = (document.body.querySelector(".box").hidden = true);
// console.log(box.hasAttribute("hidden"));

// console.log("start");

// setInterval(() => {
//     console.log("timeout")
// }, 100);

// console.log("End");

// let b = true;
// let prom = new Promise((resolve, reject) => {
//     if(b){
//         resolve("resolved");
//     }
//     reject("rejected");

// })

// prom.then( (res) =>{
//     console.log(res);
// }).catch( (res) => {
//     console.log(res);
// })

// console.log(1/0);

let a = parseInt(prompt("Enter Num A: "));
let b = parseInt(prompt("Enter Num B: "));

try {
  if (!a || !b) {
    throw new TypeError("Enter numbers only!");
  }
  let sum = a + b;
  console.log(sum);
} catch (error) {
  console.log(error.message);
}
