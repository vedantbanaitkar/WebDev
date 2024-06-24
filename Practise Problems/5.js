
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1];

function add(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            
            return sum;
        }
        else{
            sum += arr[i];
        }
    }
    return sum;
}

console.log(add(arr));