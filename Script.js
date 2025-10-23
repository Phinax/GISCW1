const startBtn = document.getElementById('startBtn');
const exitCoverBtn = document.getElementById('exitCoverBtn');
const coverPage = document.getElementById('coverPage');
const gameArea = document.getElementById('gameArea');

// START GAME
startBtn.addEventListener('click', () => {
  coverPage.style.opacity = '0';
  setTimeout(() => {
    coverPage.style.display = 'none';
    gameArea.style.display = 'block';
    setTimeout(() => {
      gameArea.style.opacity = '1';
    }, 100);
  }, 800);
});

// EXIT GAME FROM COVER PAGE
exitCoverBtn.addEventListener('click', () => {
  window.close(); // closes tab if allowed
});

const cells = document.querySelectorAll('.cell');
const xScoreEl = document.getElementById('x-score');
const oScoreEl = document.getElementById('o-score');
const resetBtn = document.getElementById('resetBtn');
const continueBtn = document.getElementById('continueBtn');
const exitBtn = document.getElementById('exitBtn');

let currentPlayer = 'X';
let xScore = 0;
let oScore = 0;
let gameOver = false;

const winningCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function handleClick(e) {
  const cell = e.target;
  if (cell.textContent !== '' || gameOver) return;
  cell.textContent = currentPlayer;

  if (checkWin(currentPlayer)) {
    alert(currentPlayer + " won!");
    updateScore(currentPlayer);
    showContinueButton();
    gameOver = true;
  } else if (isDraw()) {
    alert("It's a draw!");
    showContinueButton();
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin(player) {
  return winningCombos.some(combo => combo.every(index => cells[index].textContent === player));
}

function isDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

function updateScore(player) {
  if (player === 'X') {
    xScore++;
    xScoreEl.textContent = xScore;
  } else {
    oScore++;
    oScoreEl.textContent = oScore;
  }
}

function resetBoard() {
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  gameOver = false;
}

function showContinueButton() {
  continueBtn.style.display = 'inline-block';
}

continueBtn.addEventListener('click', () => {
  resetBoard();
  continueBtn.style.display = 'none';
});

resetBtn.addEventListener('click', () => {
  xScore = 0;
  oScore = 0;
  xScoreEl.textContent = xScore;
  oScoreEl.textContent = oScore;
  resetBoard();
  continueBtn.style.display = 'none';
});

// EXIT TO HOME PAGE
exitBtn.addEventListener('click', () => {
  gameArea.style.opacity = '0';
  setTimeout(() => {
    gameArea.style.display = 'none';
    coverPage.style.display = 'flex';
    setTimeout(() => {
      coverPage.style.opacity = '1';
    }, 100);
  }, 800);
});

cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});
