let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// const newGame = () => {
//   turnO = true;
//   enableBoxes();
// };

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  count = 0;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    checkTie();
    checkWinner();
  });
});

const checkTie = () =>{
    if(count==9){
        msg.innerText = `It's a tie`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = "true"; 
  }
};

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);