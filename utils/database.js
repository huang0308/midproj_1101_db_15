const { Pool } = require('pg');

// set production variable. This will be called when deployed to a live host
const isProduction = process.env.NODE_ENV === 'production';

// if project has been deployed, connect with the host's DATABASE_URL
// else connect with the local DATABASE_URL
const pool = new Pool({
  connectionString: isProduction
    ? process.env.DATABASE_URL
    : `postgresql://postgres:0000@localhost:5432/crown_xx`,
});

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'crown_xx',
//   password: '0000',
//   port: '5432',
// });

pool.query('SELECT * from category', (err, res) => {
  console.log(JSON.stringify(res.rows));
  pool.end();
});

module.exports = pool;
