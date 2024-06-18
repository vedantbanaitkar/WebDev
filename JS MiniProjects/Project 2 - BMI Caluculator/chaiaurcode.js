// let h = document.querySelector("#height").value;
// let w = document.querySelector("#weight-guide").value;
let res = document.querySelector("#results");
const form = document.querySelector("form");

// function check(height, weight){
//   if(height)
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let h = Number(document.querySelector("#height").value);
  let w = Number(document.querySelector("#weight").value);
  if (!h || !w || h<1 || w<1) {
    // let t = document.createTextNode("Enter Valid Input");
    // res.append(t);
    res.innerHTML = "Enter valid Input";
  } else {
    bmi = w / (h * h * 10000);
    // let t = document.createTextNode(`Your BMI: ${bmi}`);
    // res.append(t);
    res.innerHTML = `Your BMI: ${bmi}`;
    console.log(bmi);
  }
  // console.log(h);
  // console.log(w);
});
