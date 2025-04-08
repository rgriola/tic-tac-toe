const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express(); // Initialize the app

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON requests

// PostgreSQL connection setup
const pool = new Pool({
    user: 'postgres', // Replace with your PostgreSQL username
    host: 'localhost',
    database: 'tictactoe',
    password: '8123', // Replace with your PostgreSQL password
    port: 5432,
});

// Endpoint to save game results
app.post('/save-result', async (req, res) => {
    const { playerName, result } = req.body;
    console.log('Incoming request:', req.body); // Debugging line

    try {
        const query = 'INSERT INTO public.game_result (status, player, game_date) VALUES ($1, $2, NOW())';
        await pool.query(query, [result, playerName]);
        res.status(200).send('Game result saved successfully!');
    } catch (error) {
        console.error('Error saving game result:', error.message); // Log the error message
        res.status(500).json({ error: error.message }); // Send the error message to the client
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//c = "SELECT * FROM game_result ORDER BY date DESC"; 
// = INSERT INTO game_result (status, player, game_date) VALUES ($1, $2);
//INSERT INTO game_result (status, player, game_date) 
//VALUES ('loss', 'jose', NOW());

