// let a = []
// let i = 0;
// let x = 99;
// while(x>=1){
//     x = Number(prompt("Enter a number: "));
//     a[i] = x;
//     i++;
// }

let arr = [1, 92, 50, 34, 80, 39, 40];
console.log(arr.filter(a=>{
    if(a%10==0){
        return true;
    }
    return false;
}));

console.log(arr.map(a=>a**2));

// let arr=[]
// for (let index = 1; index <= num; index++) {
//     arr.push(index);
// }
// let product = (a, b) =>{
//     return a*b;
// }
// let res = arr.reduce(product);
// console.log(res);