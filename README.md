# Tic-Tac-Toe

This project is a simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript. It features a single-player mode where the user plays against a basic AI bot.

## Features
- **Interactive Gameplay**: Click on the cells to make your move.
- **AI Bot**: The bot plays as "O" and makes moves based on simple logic.
- **Win Detection**: The game detects when a player or the bot wins.
- **Draw Detection**: The game detects when the board is full and declares a draw.
- **Restart Option**: A button to restart the game at any time.

## File Structure
index.html # Main HTML file for the game style.css # CSS file for styling the game script.js # JavaScript file containing game logic README.md # Documentation for the project

## How to Play

1. Open `index.html` in your browser.
2. The game starts with the player as "X".
3. Click on an empty cell to make your move.
4. The bot will automatically make its move as "O".
5. The game ends when either the player or the bot wins, or if the board is full (draw).
6. Click the "Restart Game" button to play again.

## How It Works

- The game board is represented as a 3x3 grid.
- The game logic is implemented in [`script.js`](script.js), which handles:
  - Player and bot moves.
  - Win and draw detection.
  - Restart functionality.
- The styling is defined in [`style.css`](style.css) to create a visually appealing layout.

## Technologies Used

- **HTML**: Structure of the game.
- **CSS**: Styling for the game board and elements.
- **JavaScript**: Game logic and interactivity.

## Future Improvements

- Add a difficulty level for the bot.
- Implement a two-player mode.
- Enhance the UI/UX with animations and sound effects.

## License

This project is open-source and available under the MIT License.