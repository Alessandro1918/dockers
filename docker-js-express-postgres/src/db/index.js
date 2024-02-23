const { Pool } = require("pg")
const fs = require("fs")

//DATABASE_URL = provider://USER:PASSWORD@HOST:PORT/DATABASE

const pool = new Pool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
})

// const sql = "CREATE TABLE IF NOT EXISTS users(...)"
const sql = fs.readFileSync(__dirname + "/" + "create_tables.sql").toString()

pool
  .connect()
  .then(client => {
    console.log("DB client connected!")
    client.release()
  })
  .catch(err => console.log(err))

pool.on("connect", client => {
  client.query(sql)
})

module.exports = pool