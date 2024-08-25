const express = require('express');
const cors = require('cors');
const app = express();
const transactionsRoute = require('./routes/transactions');

app.use(cors());  // Add this line
app.use(express.json());
app.use(transactionsRoute);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));