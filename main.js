const Pool = require('pg').Pool;
require('dotenv').config();

const credentials = {
    user: `${process.env.DBUSER}`,
    host: "localhost",
    database: `${process.env.DBNAME}`,
    password: `${process.env.DBPASS}`,
    port: 5432,
}

const pool = new Pool(credentials);
