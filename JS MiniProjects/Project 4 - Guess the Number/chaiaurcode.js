let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (!guess || guess < 1 || guess > 100) {
    alert("Please Enter Valid Input Within Given Range (1-100)!");
  } else {
    prevGuess.push(guess);
    numGuess++;
    if (numGuess > 9) {
      displayGuess(guess);
      displayMessage(`Game Over! Random number was ${randomNumber}`);
      endGame();
    } else {
      // numGuess++;
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You Guessed It Right!");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too Low!");
  } else if (guess > randomNumber) {
    displayMessage("Number is too High!");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML +=`  ${guess}`;
  // numGuess++;
  remaining.innerHTML = `${10-numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame(){
  userInput.value = "";
  userInput.setAttribute('disabled', '');
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML="";
    remaining.innerHTML = "10";
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  })
}
