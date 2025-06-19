let score = 0;
let timeLeft = 30;
let timer;
let gameInterval;

function startGame() {
  score = 0;
  timeLeft = 30;
  document.getElementById("score").textContent = score;
  document.getElementById("time").textContent = timeLeft;

  clearInterval(timer);
  clearInterval(gameInterval);

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      clearInterval(gameInterval);
      showFinalPopup();
    }
  }, 1000);

  gameInterval = setInterval(showMole, 800);
}

function showMole() {
  const moles = document.querySelectorAll(".mole");
  moles.forEach(mole => {
    mole.classList.remove("up");
    mole.onclick = null;
  });

  const index = Math.floor(Math.random() * moles.length);
  const mole = moles[index];
  mole.classList.add("up");

  mole.onclick = () => {
    if (mole.classList.contains("up")) {
      score++;
      document.getElementById("score").textContent = score;
      mole.classList.remove("up");
    }
  };
}

function showFinalPopup() {
  const modal = new bootstrap.Modal(document.getElementById("gameOverModal"));
  document.getElementById("finalScore").textContent = `Your Score: ${score}`;
  modal.show();
}

// ✅ Fix: Add this to make "Start Game" button work
document.getElementById("startBtn").addEventListener("click", startGame);
