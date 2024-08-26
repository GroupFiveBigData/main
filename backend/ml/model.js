const tf = require('@tensorflow/tfjs-node');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

let model;
let dataset = [];

function loadDataset() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '../data', 'creditcard.csv'))
      .pipe(csv())
      .on('data', (row) => {
        dataset.push(row);
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve(dataset);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

function preprocessData(dataset) {
  const X = [];
  const y = [];

  dataset.forEach(row => {
    const features = Object.values(row).map(parseFloat).slice(0, -1);
    X.push(features);
    y.push(parseFloat(row['Class']));
  });

  return { X: tf.tensor2d(X), y: tf.tensor2d(y, [y.length, 1]) };
}

async function trainModel(X, y) {
  model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [X.shape[1]], units: 1, activation: 'sigmoid' }));

  model.compile({
    optimizer: tf.train.adam(),
    loss: 'binaryCrossentropy',
    metrics: ['accuracy'],
  });

  await model.fit(X, y, {
    epochs: 100,
    batchSize: 32,
    validationSplit: 0.2,
  });

  console.log('Model training complete');
}

async function trainAndInitializeModel() {
  try {
    await loadDataset();
    const { X, y } = preprocessData(dataset);
    await trainModel(X, y);
  } catch (error) {
    console.error('Error training model:', error);
  }
}

function predict(inputData) {
  if (!model) {
    throw new Error('Model has not been trained yet');
  }
  const prediction = model.predict(tf.tensor2d([inputData]));
  return prediction.dataSync()[0];
}

module.exports = { trainAndInitializeModel, predict };