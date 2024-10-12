const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Route to get all data from the country table
router.get('/', (req, res) => {
  const query = 'SELECT * FROM country';  // Query to select all data from the 'city' table

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Error retrieving data from the database');
      return;
    }
    res.json(results);  // Send the results as JSON
  });
});

module.exports = router;
