console.log("helloworld");
// const a = {
//     firstName: "first-name"
// }

// let a = 333;
// let b = 30;

// let c = (a<b)? 10: 20;

// console.log(c)

// let age = Number(prompt("Enter Your age: "));

// if(age>10 && age<20){
//     console.log("In the range");
// }
// else{
//     console.log("Not in the range");
// }

// let inp = 8;

// switch (inp) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
// default:
//     console.log("Invalid Input");
// }

// function by2(a){
//     if(a%2==0){
//         return true;
//     }
//     return false;
// }
// function by3(a) {
//   if (a % 3 == 0) {
//     return true;
//   }
//   return false;
// }

// function by2and3(a){
//     if(by3(a) && by2(a)){
//         return true;
//     }
//     return false;
// }

// let inp = Number(prompt("Enter you number: "));
// if(by2and3(inp)){
//     console.log("divisible by both");
// }
// else if (by2(inp)) {
//   console.log("divisble by only 2");
// }
// else if (by3(inp)) {
//   console.log("divisble by only 3");
// } else {
//   console.log("NOt divisible");
// }

// let age = Number(prompt("Enter Your Age: "));

// if(age<19){
//     console.log("You can't drive");
// }
// else if(age<75){
//     console.log("You can drive with a license");
// }
// else{
//     console.log("You shouldn't drive");
// }

// for(let i=0; i<=age; i++){
//     console.log(i);
// }

// let o = {
//     _name:"abc",
//     class:5,
//     section:"A",
//     address:"xyz",
//     city:"zyx",
//     rollNo:"99"
// };

// for(let k in o){
//     console.log(`${k}: ${o[k]}`);
// }

// let cars = ["BMW", "Merc", "Audi", "KIA", "Suzuki", "Toyota"];

// for(car of cars){
//     console.log(car);
// }

// let obj = {
//     harry: 98,
//     rohan: 70,
//     aakash: 7
// }

// for(key in obj){
//     console.log(`${key}: ${obj[key]}`);
// }
// let n = -1;
// // n = Number(prompt("Enter a number: "));
// do {
//   n = Number(prompt("Enter a number: "));
//   if (n != 98) {
//     console.log("Try again");
//   }
//   else{
//     break;
//   }
// } while (true);

// let mean = (a, b, c, d, e) =>{
//     return (a+b+c+d+e)/5;
// }

// console.log(mean(1,2,3,4,6));

let a = "Harry is good Boy";
// console.log("har\"".length)
// console.log(a.includes("s g"));
// console.log(a.includes("s  g"));
// console.log(a.startsWith("Ha"));
// console.log(a.startsWith("ar"));
// console.log(a.endsWith("oy"));
// console.log(a.endsWith("oy "));
// console.log(a.toLowerCase());
// console.log(a)

// let str = "Please give Rs 1000";
// let l = str.length-1;
// // console.log(l)

// let amt = "";
// function isNumber(char) {
//   let code = char.charCodeAt(0);
//   return code >= 48 && code <= 57;
// }

// while(isNumber(str.charAt(l))){
//     amt+=str.charAt(l);
//     l--;
// }
// function reverseString(str) {
//     // Step 1: Split the string into an array of characters
//     let charArray = str.split('');
    
//     // Step 2: Reverse the array
//     let reversedArray = charArray.reverse();
    
//     // Step 3: Join the array back into a string
//     let reversedString = reversedArray.join('');
    
//     return reversedString;
// }
// console.log(reverseString(amt));


let str = "Please give Rs 1000";
let arr = str.split("");
arr[4]="6";
str = arr.join("");
console.log(str)