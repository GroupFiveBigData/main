const fs = require('fs');
const { Pool } = require('pg');
const csv = require('csv-parser');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const csvFilePath = path.join(__dirname, 'data', 'creditcard.csv');

const loadCSVData = async () => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Stream the CSV file and insert data into the database
    const stream = fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', async (row) => {
        try {
          const values = [
            parseFloat(row.Time), parseFloat(row.V1), parseFloat(row.V2), parseFloat(row.V3),
            parseFloat(row.V4), parseFloat(row.V5), parseFloat(row.V6), parseFloat(row.V7),
            parseFloat(row.V8), parseFloat(row.V9), parseFloat(row.V10), parseFloat(row.V11),
            parseFloat(row.V12), parseFloat(row.V13), parseFloat(row.V14), parseFloat(row.V15),
            parseFloat(row.V16), parseFloat(row.V17), parseFloat(row.V18), parseFloat(row.V19),
            parseFloat(row.V20), parseFloat(row.V21), parseFloat(row.V22), parseFloat(row.V23),
            parseFloat(row.V24), parseFloat(row.V25), parseFloat(row.V26), parseFloat(row.V27),
            parseFloat(row.V28), parseFloat(row.Amount), parseInt(row.Class)
          ];

          // Log the values being inserted for debugging
          console.log('Inserting values:', values);

          // Insert the row into the transactions table
          await client.query(`
            INSERT INTO transactions (
              time, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15,
              v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, amount, class
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15,
                      $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31)`,
            values
          );
        } catch (err) {
          console.error('Error inserting row:', err.message);
        }
      })
      .on('end', async () => {
        await client.query('COMMIT');
        console.log('CSV data successfully loaded into the database');
        client.release();
        pool.end();
      })
      .on('error', async (error) => {
        await client.query('ROLLBACK');
        console.error('Error loading CSV data:', error.message);
        client.release();
        pool.end();
      });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error:', error.message);
    client.release();
    pool.end();
  }
};

loadCSVData();