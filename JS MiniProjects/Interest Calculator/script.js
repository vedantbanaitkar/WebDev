let totAmt = document.querySelector("#total-amount");

let principalInput = document.querySelector("#principal");
let rateInput = document.querySelector("#rate");
let yearsInput = document.querySelector("#years");

principalInput.value = 0;
rateInput.value = 0;
yearsInput.value = 0;

function calculate() {
  let principal = Number(principalInput.value);
  let rate = Number(rateInput.value)/100;
  let years = Number(yearsInput.value);

  if (!principal || principal < 0) {
    principal = 0;
    principalInput.value = 0;
  }
  if (!rate || rate < 0) {
    rate = 0;
    rateInput.value = 0;
  }
  if (!years || years < 0) {
    years = 0;
    yearsInput.value = 0;
  }
//   let result = principal*Math.pow(1+(rate/1), 1*years)
  const result = principal * Math.pow(1 + rate / 1, 1 * years);

    totAmt.textContent = result.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
    });
}
