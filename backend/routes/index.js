const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API is UP and Running');
});

module.exports = router;