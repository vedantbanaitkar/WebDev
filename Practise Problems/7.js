let div = document.querySelector("div");
function saveToLocalStorage(note) {
  localStorage.setItem("note", note);
}

let note = localStorage.getItem("note");
if (note) {
  div.innerHTML = note;
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let a = prompt("Enter your note here: ");
  saveToLocalStorage(a);
  div.innerHTML = a;
});
