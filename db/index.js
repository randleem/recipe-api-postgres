const { Pool } = require("pg");

const pool = new Pool({
    user: 'qsiaofdhrrpdvz',
    host: 'ec2-54-170-123-247.eu-west-1.compute.amazonaws.com',
    database: 'd4tq9ur2pfaken',
    password: '86838bffd2356fbe3e4fb7c42ff8e572269f1e4b8bfa54e2c3208ae5641d3f3d',
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
    },
  })

module.exports = { query: (sql, values, cb)=>pool.query (sql, values, cb)};


