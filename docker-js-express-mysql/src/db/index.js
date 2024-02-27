const { createPool } = require("mysql2/promise")
const fs = require("fs")

//DATABASE_URL = provider://USER:PASSWORD@HOST:PORT/DATABASE

const pool = createPool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.MYSQL_DATABASE,
})

// const sql = "CREATE TABLE IF NOT EXISTS users(...)"
const sql = fs.readFileSync(__dirname + "/" + "create_tables.sql").toString()

pool
  .getConnection()
  .then(connection => {
    console.log("DB client connected!")
    connection.execute(sql)
    return connection
  })
  .then(connection => {
    connection.release()
  })
  .catch(err => console.log(err))

module.exports = pool