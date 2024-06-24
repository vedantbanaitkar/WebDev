
let s = "Aeioujklmnb" ;

function checkVowel(s){
    let c = 0;
    let v = [65, 69, 73, 79, 85];
    v.forEach( e => {
        v.push(e+32);
    });
    // console.log(v);

    for (let i = 0; i < s.length; i++) {
        if(v.includes(s.charCodeAt(i))){
            c++;
        }
        
    }
    return c;
}

console.log(s.length);
console.log(checkVowel(s));