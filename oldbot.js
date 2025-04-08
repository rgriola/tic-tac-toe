//                      <!-- Bot move logic -->
function botMove() {
    const emptyCells = gameBoard.reduce((acc, cell, index) => {
        if (cell === '') acc.push(index);
        return acc;
    }, []);

    if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const botMoveIndex = emptyCells[randomIndex];

        gameBoard[botMoveIndex] = currentPlayer;
        cells[botMoveIndex].textContent = currentPlayer;

        checkWin();

        if (gameActive) {
            currentPlayer = 'X';
            updateMessage();
            updateBackground(); // Update background after bot's turn
        }
    }
}
