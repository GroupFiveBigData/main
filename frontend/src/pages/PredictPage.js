import React, { useState } from 'react';

const PredictPage = () => {
  const [inputData, setInputData] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handlePredict = async () => {
    try {
      const response = await fetch('http://localhost:3002/predict', 
        {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Make a Prediction</h1>
      {error ? <p>Error: {error}</p> : null}
      {prediction !== null ? <p>Prediction: {prediction}</p> : null}
      <button onClick={handlePredict}>Predict</button>
    </div>
  );
};

export default PredictPage;