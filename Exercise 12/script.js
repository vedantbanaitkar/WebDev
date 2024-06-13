let randNo = () =>{
    return Math.floor(Math.random()*256);
}

let randArr = () =>{
    let arr = [randNo(), randNo(), randNo()];
    return arr;
}

let randColor = (b) =>{
    let a = randArr();
    b.style.backgroundColor = `rgb(${a[0]}, ${a[1]}, ${a[2]})`;
}

let boxes = document.getElementsByClassName("box");
boxes = Array.from(boxes)

boxes.forEach(element => {
    randColor(element);
});