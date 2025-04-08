/*
This is the Minimax-based bot. It is the harder bot to beat.
*/

export function botMove(gameBoard, cells, currentPlayer, winningConditions, checkWin, updateMessage, updateBackground, gameActive) {
    // Use the Minimax algorithm to find the best move
    const bestMove = minimax(gameBoard, currentPlayer, winningConditions).index;

    // Make the best move
    if (bestMove !== undefined) {
        makeBotMove(bestMove, gameBoard, cells, currentPlayer, checkWin, updateMessage, updateBackground, gameActive);
    }
}

export function makeBotMove(index, gameBoard, cells, currentPlayer, checkWin, updateMessage, updateBackground, gameActive) {
    console.log('Bot is making a move at index:', index);

    // Update the game board and UI
    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    // Check for a win or draw
    checkWin();

    // Update the game state if still active
    if (gameActive) {
        updateMessage();
        updateBackground();
    }
}

// Minimax algorithm to calculate the best move
function minimax(newBoard, player, winningConditions) {
    const emptyCells = getEmptyCells(newBoard);

    // Check for terminal states
    if (checkWinner(newBoard, 'X', winningConditions)) {
        return { score: -10 }; // Player X wins
    }
    if (checkWinner(newBoard, 'O', winningConditions)) {
        return { score: 10 }; // Player O (Bot) wins
    }
    if (emptyCells.length === 0) {
        return { score: 0 }; // Draw
    }

    const moves = [];

    // Loop through available spots
    for (let i = 0; i < emptyCells.length; i++) {
        const move = {};
        move.index = emptyCells[i];

        // Make the move
        newBoard[emptyCells[i]] = player;

        // Recursively call Minimax
        if (player === 'O') {
            const result = minimax(newBoard, 'X', winningConditions);
            move.score = result.score;
        } else {
            const result = minimax(newBoard, 'O', winningConditions);
            move.score = result.score;
        }

        // Undo the move
        newBoard[emptyCells[i]] = '';
        moves.push(move);
    }

    // Choose the best move
    let bestMove;
    if (player === 'O') {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}

// Helper function to get empty cells
function getEmptyCells(board) {
    return board.reduce((acc, cell, index) => {
        if (cell === '') acc.push(index);
        return acc;
    }, []);
}

// Helper function to check for a winner
function checkWinner(board, player, winningConditions) {
    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] === player && board[b] === player && board[c] === player;
    });
}