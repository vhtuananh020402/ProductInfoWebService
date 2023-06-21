var express = require('express');
var app = express();
const Pool = require('pg').Pool;
require('dotenv').config();
const cors = require('cors');

const credentials = {
    user: `${process.env.DBUSER}`,
    host: `${process.env.DBHOST}`,
    database: `${process.env.DBNAME}`,
    password: `${process.env.DBPASS}`,
    port: `${process.env.DBPORT}`,
}

const pool = new Pool(credentials);

app.use(cors());

// STARTING WEB SERVICE
app.listen(5002, function() {
    console.log('Server is listening at port 5002...');
})


app.get('/product/:msp', (req, res) => {
    const MSP = req.params.msp;

    pool.query(`SELECT * FROM product WHERE MSP = $1`, [MSP], (error, results) => {
        if (error) {
            throw error;
        }

        res.status(200).json(results.rows);
    })
})
