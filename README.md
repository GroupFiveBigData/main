# Fraud Detection System

## Introduction

### Project Overview:
This project aims to detect fraudulent patterns and anomalies in financial transaction data using the MERN stack (MySQL, Express.js, React.js, Node.js) with PostgreSQL and Docker. The system will provide a user-friendly interface, backend services, and data visualization tools to help financial institutions identify and manage fraudulent activities.

### Objectives:
- Build a robust system to detect fraudulent activities in financial transactions.
- Develop a user-friendly interface for interaction.
- Provide tools for data analysis and visualization.

### Team Members:
- Ahlam Jebril
- Betsegaw Tamirat
- Mulusew Meselu
- Wondwosen Soressa

## Background and Motivation

### Problem Statement:
Fraud in financial transactions is a significant issue for financial institutions, leading to substantial financial losses and undermining customer trust. Detecting fraudulent transactions efficiently and accurately is crucial for minimizing these impacts.

### Importance:
Detecting fraud is essential to protect financial assets, maintain customer trust, and comply with regulatory requirements. Effective fraud detection can prevent financial losses and enhance the overall security of financial systems.

### Related Work:
Previous research and projects in fraud detection have utilized various machine learning algorithms and data analysis techniques to identify suspicious patterns. This project builds upon these efforts by leveraging the MERN stack and PostgreSQL for enhanced performance and scalability.

## System Architecture

### High-Level Architecture:
The system comprises three main components: frontend, backend, and data analysis/visualization tools. Docker is used for containerization to ensure consistency across different environments.

### Components:
- **Frontend:** Developed using React.js, it provides a user-friendly interface for interacting with the system, displaying alerts, and visualizing data.
- **Backend:** Built with Node.js and Express.js, it handles server-side logic, processes requests from the frontend, and manages communication with the PostgreSQL database.
- **Database:** PostgreSQL is used for storing and managing financial transaction data, offering robust data handling capabilities.
- **Docker:** Docker is used to containerize the application, ensuring consistency and portability across development, testing, and production environments.
- **Data Analysis/Visualization:** Tools like D3.js and Chart.js are used to create interactive and informative visualizations of the data.

## Data Collection and Preprocessing

### Data Sources:
The financial transaction data is sourced from a publicly available dataset on Kaggle. You can download the dataset from the following link:
[Credit Card Fraud Detection Dataset](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud)

### Data Storage:
The data is stored in a PostgreSQL database, which provides advanced data handling and querying capabilities.

### Preprocessing:
Data preprocessing involves cleaning the data, handling missing values, normalizing transaction amounts, and encoding categorical variables to prepare the dataset for analysis.

### Proof of Data Loading:
![Data Loaded Successfully](https://i.ibb.co/bs3nJ8x/2024-08-25-11-37-01.jpg)

## Machine Learning Models

### Model Selection:
Various machine learning models such as logistic regression, decision trees, and neural networks were evaluated for detecting fraudulent transactions. The choice of model depended on the data characteristics and the desired balance between accuracy and interpretability.

### Training and Testing:
The dataset was split into training and testing sets to evaluate the models’ performance. Cross-validation techniques were used to ensure the models generalized well to unseen data.

### Evaluation Metrics:
Metrics such as accuracy, precision, recall, F1-score, and area under the receiver operating characteristic (ROC) curve were used to evaluate the models’ performance in detecting fraud.

## Implementation

### Frontend Development:
The frontend, developed using React.js, provides features such as user authentication, data visualization dashboards, and alerts for detected fraudulent transactions.

### Backend Development:
The backend, implemented with Node.js and Express.js, handles user requests, processes data, interacts with the PostgreSQL database, and executes machine learning models.

### Database Management:
PostgreSQL manages financial transaction data, supporting complex queries and efficient data storage.

### Docker Integration:
Docker is used to containerize the application, ensuring a consistent environment for development, testing, and deployment.

## Data Analysis and Visualization

### Tools and Libraries:
Tools such as D3.js, Chart.js, and other JavaScript libraries are used for data visualization. Python libraries like Pandas and Matplotlib aid in data analysis.

### Visualization Techniques:
Techniques include creating graphs, charts, and interactive dashboards to visualize transaction patterns, anomalies, and model predictions.

### Model Performance:
The model training process was completed successfully over 100 epochs. The final accuracy achieved by the model is 99.8% on the training data with a validation accuracy of 99.9%. The model's loss on the training data was 0.0295, with a validation loss of 0.0212. These metrics indicate that the model has learned the patterns in the data well and is generalizing effectively to unseen data.

- **Training Accuracy:** 99.8%
- **Validation Accuracy:** 99.9%
- **Training Loss:** 0.0295
- **Validation Loss:** 0.0212

The high accuracy and low loss values suggest that the model is performing exceptionally well in detecting fraudulent transactions. However, continuous monitoring and evaluation are recommended to ensure consistent performance over time, especially when applied to new datasets.

## Installation Steps

### Prerequisites:
- Node.js
- PostgreSQL
- Docker (optional for containerization)
- Git

### Steps: 
```bash
git clone https://github.com/GroupFiveBigData/main


 Install Backend Dependencies
cd backend
npm install
 Set Up the PostgreSQL Database

	•	Create a new PostgreSQL database.
	•	Import the dataset into the database.

 Configure Environment Variables

Create a .env file in the root of the backend directory and add the following:
DATABASE_URL=your_postgresql_connection_string
npm run dev ---for backend
npm start---for frontend
