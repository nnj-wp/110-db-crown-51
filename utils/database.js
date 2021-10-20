const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

let pool;

if (isProduction) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_51',
    password: '209410751',
    port: '5432',
  });
}

// pool.query('SELECT * from category', (err, res) => {
//   console.log(JSON.stringify(res.rows));
//   pool.end();
// });

module.exports = pool;
