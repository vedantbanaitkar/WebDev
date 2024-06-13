let arr = [1, 42, 673, 29, 50, 91];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

// arr.forEach((v, i)=>{
//     console.log(v, i)
// });

let arr1 = arr.map((v) =>{
    return v**2;
});
console.log(arr1);

let lessThan1000 = (a) =>{
    if(a<1000){
        return true;
    }
    return false;
}
let arr2 = arr1.filter(lessThan1000);
console.log(arr2);
let add = (a, b) =>{
    return a+b;
}
console.log(arr1.reduce(add));
