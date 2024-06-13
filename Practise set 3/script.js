for (let i = 0; i <= age; i++) {
  console.log(i);
}

let o = {
  _name: "abc",
  class: 5,
  section: "A",
  address: "xyz",
  city: "zyx",
  rollNo: "99",
};

for (let k in o) {
  console.log(`${k}: ${o[k]}`);
}

let cars = ["BMW", "Merc", "Audi", "KIA", "Suzuki", "Toyota"];

for (car of cars) {
  console.log(car);
}

let obj = {
  harry: 98,
  rohan: 70,
  aakash: 7,
};

for (key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
let n = -1;
// n = Number(prompt("Enter a number: "));
do {
  n = Number(prompt("Enter a number: "));
  if (n != 98) {
    console.log("Try again");
  } else {
    break;
  }
} while (true);

let mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};

console.log(mean(1, 2, 3, 4, 6));
