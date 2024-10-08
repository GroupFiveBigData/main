const express = require('express');
const pool = require('../database/db');
const router = express.Router();

// Route to get the first 200 transactions
router.get('/transactions', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM transactions LIMIT 200');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;