const p1Button = document.querySelector("#player1");
const p2Button = document.querySelector("#player2");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
let champion = false;
let p1Score = 0;
let winningScore = 6;
let winScore = document.querySelector("#list");
let p2Score = 0;
const whoWin = document.querySelector("#whoWin");

p1Button.addEventListener("click", function () {
  if (!champion) {
    p1Score += 1;
    if (winningScore === p1Score) {
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
      champion = true;
      whoWin.textContent = "Player number 1 WON!";
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!champion) {
    p2Score += 1;
    if (winningScore === p2Score) {
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
      champion = true;
      whoWin.textContent = "Player number 2 WON!";
    }
    p2Display.textContent = p2Score;
  }
});

winScore.addEventListener("change", function () {
  winningScore = parseInt(this.value);
});

resetButton.addEventListener("click", function () {
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Score = 0;
  p2Score = 0;
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
  champion = false;
});
