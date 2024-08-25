const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT || 3002;

// Import routes
const indexRoute = require('./routes/index');

app.use(express.json());

// Use routes
app.use('/', indexRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});