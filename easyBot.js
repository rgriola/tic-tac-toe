/*
This is the core logic for the BOT. It should be average to beat.
 It is the old bot.js
*/



export function botMove(gameBoard, cells, currentPlayer, winningConditions, makeBotMove, checkWin, updateMessage, updateBackground, gameActive) {
    // Check if the Bot can win
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] === 'O' && gameBoard[b] === 'O' && gameBoard[c] === '') {
            makeBotMove(c, gameBoard, cells, currentPlayer, checkWin, updateMessage, updateBackground, gameActive);
            return;
        }
        if (gameBoard[a] === 'O' && gameBoard[c] === 'O' && gameBoard[b] === '') {
            makeBotMove(b, gameBoard, cells, currentPlayer, checkWin, updateMessage, updateBackground, gameActive);
            return;
        }
        if (gameBoard[b] === 'O' && gameBoard[c] === 'O' && gameBoard[a] === '') {
            makeBotMove(a, gameBoard, cells, currentPlayer, checkWin, updateMessage, updateBackground, gameActive);
            return;
        }
    }

    // Check if the Bot needs to block the opponent
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] === 'X' && gameBoard[b] === 'X' && gameBoard[c] === '') {
            makeBotMove(c, gameBoard, cells, currentPlayer, checkWin, updateMessage, updateBackground, gameActive);
            return;
        }
        if (gameBoard[a] === 'X' && gameBoard[c] === 'X' && gameBoard[b] === '') {
            makeBotMove(b, gameBoard, cells, currentPlayer, checkWin, updateMessage, updateBackground, gameActive);
            return;
        }
        if (gameBoard[b] === 'X' && gameBoard[c] === 'X' && gameBoard[a] === '') {
            makeBotMove(a, gameBoard, cells, currentPlayer, checkWin, updateMessage, updateBackground, gameActive);
            return;
        }
    }

    // Otherwise, pick a random move
    const emptyCells = gameBoard.reduce((acc, cell, index) => {
        if (cell === '') acc.push(index);
        return acc;
    }, []);

    if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        console.log('Bot is making a random move at index:', emptyCells[randomIndex]);
        makeBotMove(emptyCells[randomIndex], gameBoard, cells, currentPlayer, checkWin, updateMessage, updateBackground, gameActive);
    }
}

export function makeBotMove(index, gameBoard, cells, currentPlayer, checkWin, updateMessage, updateBackground, gameActive) {
    console.log(' makeBotMove() : gameBoard before move:', gameBoard);
    console.log(' makeBotMove() : index to update:', index);

    gameBoard[index] = currentPlayer; // Update the game board
    cells[index].textContent = currentPlayer; // Update the UI

    checkWin(); // Check if the Bot has won or if it's a draw

    if (gameActive) {
        updateMessage();
        updateBackground(); // Update the background after the Bot's turn
    }
}