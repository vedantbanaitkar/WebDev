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
arr[4] = "6";
str = arr.join("");
console.log(str);
