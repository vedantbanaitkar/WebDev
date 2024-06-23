'use strict';

let score = 5;
let highscore = 0;
let secretNumber;

function reset(){
  score = 8;
  secretNumber = Math.trunc(Math.random()*100+1); // Assign to the outer scope variable
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector('.number').style.width = '15rem';
  document.querySelector(".score").textContent = score;
}
reset();
document.querySelector(".again").addEventListener("click", reset);

document.querySelector(".check").addEventListener("click", function(){
  let g = Number(document.querySelector(".guess").value);
  if(score > 1){
    if(!g){
      document.querySelector(".message").textContent = "⛔🚫No number!"
    }
    else if(g === secretNumber){
      document.querySelector('.message').textContent = '🎉Correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if(score>highscore){
        highscore=score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }
    else if(g > secretNumber){
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector(".score").textContent = score;
    }
    else{
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  else if(score == 1){
    if (!g) {
      document.querySelector('.message').textContent = '⛔🚫No number!';
    } else if (g === secretNumber) {
      document.querySelector('.message').textContent = '🎉Correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.message').textContent = '💥 You Lost!';
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = secretNumber;
    }
  }
  else{
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector('.message').textContent = '💥 You Lost!';
    score=0;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
  }

});
