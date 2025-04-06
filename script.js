const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const messageDisplay = document.querySelector('.message');
const restartButton = document.getElementById('restartBtn');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.dataset.index);

    if (gameBoard[clickedCellIndex] !== '' || !gameActive || currentPlayer === 'O') {
        return;
    }

    gameBoard[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    checkWin();
    if (gameActive) {
        currentPlayer = 'O';
        updateMessage();
        setTimeout(botMove, 500); // Bot makes a move after a short delay
    }
}

function botMove() {
    if (!gameActive || currentPlayer === 'X') {
        return;
    }

    let bestMove;

    // Simple bot: Try to win or block, otherwise pick a random empty spot
    bestMove = findWinningMove('O');
    if (bestMove === undefined) {
        bestMove = findWinningMove('X');
        if (bestMove === undefined) {
            bestMove = getRandomEmptyCell();
        }
    }

    if (bestMove !== undefined) {
        gameBoard[bestMove] = currentPlayer;
        cells[bestMove].textContent = currentPlayer;
        checkWin();
        if (gameActive) {
            currentPlayer = 'X';
            updateMessage();
        }
    }
}

function findWinningMove(player) {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameBoard[a] === player && gameBoard[b] === player && gameBoard[c] === '') {
            return c;
        }
        if (gameBoard[a] === player && gameBoard[b] === '' && gameBoard[c] === player) {
            return b;
        }
        if (gameBoard[a] === '' && gameBoard[b] === player && gameBoard[c] === player) {
            return a;
        }
    }
    return undefined;
}

function getRandomEmptyCell() {
    const emptyCells = gameBoard.reduce((acc, cell, index) => {
        if (cell === '') {
            acc.push(index);
        }
        return acc;
    }, []);
    if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        return emptyCells[randomIndex];
    }
    return undefined;
}

function checkWin() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            messageDisplay.textContent = `${currentPlayer === 'X' ? 'You' : 'Bot'} won!`;
            gameActive = false;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        messageDisplay.textContent = "It's a draw!";
        gameActive = false;
    }
}

function updateMessage() {
    messageDisplay.textContent = `Your turn (${currentPlayer})`;
}

function restartGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
    updateMessage();
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);

updateMessage(); // Initial message