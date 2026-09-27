const express = require('express');
const router = express.Router();
const pool = require('../config/connection');

// Fetches directly from Render PostgreSQL
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
        `SELECT id, title, description, ingredients, instructions,
            cuisine, preptime AS "prepTime", difficulty, image
        FROM recipes ORDER BY id ASC;
    `);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching recipes:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// GET a single recipe by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`
        SELECT id, title, description, ingredients, instructions,
            cuisine, preptime AS "prepTime", difficulty, image
        FROM recipes WHERE id = $1;
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching recipe:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;