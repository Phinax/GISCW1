let currentPlayer = 'x';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

function createBoard() {
    const boardDiv = document.getElementById('board');
    boardDiv.innerHTML = '';
    board.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = index;
        cell.addEventListener('click', handleCellClick);
        boardDiv.appendChild(cell);
    });
}

function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (board[index] || !gameActive) return;

    board[index] = currentPlayer;
    event.target.classList.add(currentPlayer);

    const winCombo = checkWin();
    if (winCombo) {
        document.getElementById('status').textContent = `Player ${currentPlayer.toUpperCase()} Wins!`;
        gameActive = false;
        highlightWinningCells(winCombo);
        return;
    }
    if (board.every(cell => cell)) {
        document.getElementById('status').textContent = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    document.getElementById('status').textContent = `Player ${currentPlayer.toUpperCase()}'s Turn`;
}

function checkWin() {
    return winCombos.find(combo => combo.every(index => board[index] === currentPlayer));
}

function highlightWinningCells(combo) {
    if (combo) {
        combo.forEach(index => {
            document.querySelector(`.cell[data-index="${index}"]`).classList.add('win');
        });
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'x';
    gameActive = true;
    document.getElementById('status').textContent = `Player X's Turn`;
    createBoard();
}

document.getElementById('reset').addEventListener('click', resetGame);
document.addEventListener('DOMContentLoaded', createBoard);