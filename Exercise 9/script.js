let x = Math.random() * 100;

let a = Number(prompt("Enter A: "));
let b = Number(prompt("Enter B: "));
let op = prompt("Enter op: ");;1

// let faulty = x < 10 ? true : false;
let faulty = true;
console.log(a);
console.log(b);
console.log(faulty);
function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function mul(a, b){
    return a*b;
}

function div(a, b){
    return a/b;
}

function exp(a, b){
    return a**b;
}

function calc(a, b, op){
    if(op==='+'){
        if(faulty){
            return sub(a, b);
        }
        return add(a, b);
    }
    else if(op==='-'){
        if (faulty) {
          return div(a, b);
        }
        return sub(a, b);
    }
    else if(op==='*'){
        if (faulty) {
          return add(a, b);
        }
        return mul(a, b);
    }
    else if(op==='/'){
        if (faulty) {
          return exp(a, b);
        }
        return div(a, b);
    }
    else{
        alert("Invalid Op");
    }
}

console.log(calc(a, b, op));1