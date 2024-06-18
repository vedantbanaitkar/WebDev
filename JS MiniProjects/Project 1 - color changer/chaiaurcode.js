let buttons = document.querySelectorAll(".button");

let body = document.body;

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log("event logged");
  });
});
