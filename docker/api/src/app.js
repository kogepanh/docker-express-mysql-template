const express = require('express')
const app = express()
const port = 8080
const env = require('dotenv').config()
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

app.get('/fruits', (req, res) => {
  const sql = "select * from fruits;"
  connection.query(sql, function (err, result, fields) {
    res.send(result)
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})
