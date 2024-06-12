// Business Name Generator

let adj = "Crazy Amazing Fire";
let shopName = "Engine Foods Garments";
let anotherWord = "Bros Limited Hub";

function countWords(str){
    return str.split(" ").length;
}

console.log(countWords(adj));

function getWordByIndex(str, index){
    let words = str.split(" ");
    return words[index];
}

function randomWord(str){
    let index = Math.floor(Math.random()*countWords(str));
    return getWordByIndex(str, index);
}

function randomName(){
    let randomAdj = randomWord(adj);
    let randomShopName = randomWord(shopName);
    let randomAnotherWord = randomWord(anotherWord);
    let _name = `${randomAdj} ${randomShopName} ${randomAnotherWord}`;
    return _name;
}

console.log(randomName())