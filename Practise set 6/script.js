// let age = Number(prompt("Enter Your Age"));
// if (age < 0) {
//   console.error("Age can't be negative");
// } else if (age < 18 || age > 75) {
//   let confirmResponse = confirm("You shouldn't drive");
// } else {
//   alert("You can drive");
// }

// let inp = prompt("Enter a number:");
// inp = Number(inp);

// if (isNaN(inp)) {
//   alert("Please enter a valid number");
// } else if (inp > 4) {
//   location.href = "https://www.google.com";
// } else {
//   alert("Input is not greater than 4");
// }

let inp = prompt("Enter a number:");
inp = Number(inp);
// inp = 400;111
if (isNaN(inp)) {
  alert("Please enter a valid number");
} else if (inp > 100) {
  document.body.querySelector(".box").style.backgroundColor = "green";
}
// document.body.querySelector(".box").style.backgroundColor = "green";
