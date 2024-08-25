import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import './AnalyticsSection.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const AnalyticsSection = ({ transactions }) => {
  // Data for the bar chart
  const barData = {
    labels: transactions.map(t => `Transaction ${t.id}`),
    datasets: [
      {
        label: 'Transaction Amounts',
        data: transactions.map(t => t.amount),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for the pie chart
  const flaggedCount = transactions.filter(t => t.flagged).length;
  const nonFlaggedCount = transactions.length - flaggedCount;
  const pieData = {
    labels: ['Flagged', 'Non-Flagged'],
    datasets: [
      {
        data: [flaggedCount, nonFlaggedCount],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div className="analytics-section">
      <h2>Data Analysis & Visualization</h2>
      <div className="chart-container">
        <Bar data={barData} options={{ plugins: { legend: { display: false } } }} />
      </div>
      <div className="chart-container">
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default AnalyticsSection;