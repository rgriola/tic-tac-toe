export function botMove(gameBoard, cells, currentPlayer, winningConditions, makeBotMove, checkWin, updateMessage, updateBackground, gameActive) {
    // Use the Minimax algorithm to find the best move
    const bestMove = minimax(gameBoard, currentPlayer, winningConditions).index;

    // Make the best move
    if (bestMove !== undefined) {
        makeBotMove(bestMove, gameBoard, cells, currentPlayer, checkWin, updateMessage, updateBackground, gameActive);
    }
}

// Minimax algorithm
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

        // Recursively call minimax
        if (player === 'O') {
            const result = minimax(newBoard, 'X', winningConditions);
           // filepath: /Users/rgriola/Desktop/01_Vibecode/tic-tac-toe/public/minimax.js

export function botMove(gameBoard, cells, currentPlayer, winningConditions, makeBotMove, checkWin, updateMessage, updateBackground, gameActive) {
    // Use the Minimax algorithm to find the best move
    const bestMove = minimax(gameBoard, currentPlayer, winningConditions).index;

    // Make the best move
    if (bestMove !== undefined) {
        makeBotMove(bestMove, gameBoard, cells, currentPlayer, checkWin, updateMessage, updateBackground, gameActive);
    }
}

// Minimax algorithm
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

        // Recursively call minimax
        if (player === 'O') {
            const result = minimax(newBoard, 'X', winningConditions);
           