const express = require('express');
const cors = require('cors');
const app = express();
const transactionsRoute = require('./routes/transactions');
const { trainAndInitializeModel, predict } = require('./ml/model');

app.use(cors());
app.use(express.json());

// Load the transactions route
app.use(transactionsRoute);
app.post('/predict', (req, res) => {
  const inputData = req.body; 

  // Check if the input data has the correct shape
  if (!Array.isArray(inputData) || inputData.length !== 30) {
      return res.status(400).json({ error: 'Input data must be an array with 30 features.' });
  }

  // Convert the input data to a tensor with the correct shape
  const tensor = tf.tensor2d([inputData], [1, 30]);

  model.predict(tensor).then((prediction) => {
      res.json({ prediction });
  }).catch((error) => {
      res.status(500).json({ error: 'Error during prediction: ' + error.message });
  });
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Train the model after the server starts
  trainAndInitializeModel();
});