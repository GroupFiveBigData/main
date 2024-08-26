// import React from 'react';

// const PredictButton = ({ inputFeatures }) => {
//   const handlePredict = async () => {
//     const response = await fetch('http://localhost:3002/predict', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(inputFeatures),
//     });
//     const data = await response.json();
//     console.log('Prediction:', data.prediction);
//   };

//   return (
//     <button onClick={handlePredict}>
//       Predict
//     </button>
//   );
// };

// export default PredictButton;