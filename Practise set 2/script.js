let age = Number(prompt("Enter Your age: "));

if (age > 10 && age < 20) {
  console.log("In the range");
} else {
  console.log("Not in the range");
}

let x = 8;

switch (x) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Input");
}

function by2(a) {
  if (a % 2 == 0) {
    return true;
  }
  return false;
}
function by3(a) {
  if (a % 3 == 0) {
    return true;
  }
  return false;
}

function by2and3(a) {
  if (by3(a) && by2(a)) {
    return true;
  }
  return false;
}

let inp = Number(prompt("Enter you number: "));
if (by2and3(inp)) {
  console.log("divisible by both");
} else if (by2(inp)) {
  console.log("divisble by only 2");
} else if (by3(inp)) {
  console.log("divisble by only 3");
} else {
  console.log("NOt divisible");
}

let a = Number(prompt("Enter Your Age: "));

if (a < 19) {
  console.log("You can't drive");
} else if (a < 75) {
  console.log("You can drive with a license");
} else {
  console.log("You shouldn't drive");
}
