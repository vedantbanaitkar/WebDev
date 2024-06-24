let string = "hi this is the string";

function reverse(str){
    let s = str.split("").reverse().join("");
    return s;
}

function add(str){
    return str +"|"+reverse(str);
}

console.log(add(string));

// console.log(reverse(string));