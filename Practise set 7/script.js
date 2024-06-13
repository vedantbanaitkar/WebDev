// let firstItem = document.querySelector("#one");
// firstItem.style.backgroundColor = "red" ;

// let cont = document.body.querySelector(".container");

// cont.firstElementChild.style.backgroundColor = "green";
// cont.lastElementChild.style.backgroundColor = "green";
let item = document.body.getElementsByTagName("li");

item = Array.from(item);

item.forEach( i => {
  i.style.color = "cyan";
});