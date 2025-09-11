require("dotenv").config()
const express = require("express")

// const Redis = require('ioredis')
// const redis = new Redis()
const redis = require("./libs/redis")

const SERVER_PORT = process.env.SERVER_PORT || 5000

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
  res
    .status(200)  //OK
    .send({"message": "Hello, Docker!"})
})

// Saves a new key-value pais of data in the db
app.post("/db", async (req, res) => {
  const key = Object.keys(req.body)[0]
  const value = req.body[key]
  await redis.set(key, value)
  res
    .status(201)  //Created
    .send({key: key, value: value})
})

// Returns the data for that key-value pair
app.get("/db", async (req, res) => {
  const key = req.query.key
  await redis.get(key, (err, result) => {
    if (err) {
      return res
        .status(500)  //Internal Server Error
        .send({"message": `${key} key not found`})
    }
    if (!result) {
      return res
        .status(404)  //Not found
        .send({"message": `'${key}' key not found`})
    }
    return res
      .status(200)  //OK
      .send({[key]: result})
  })
})

app.listen(SERVER_PORT, () => 
  console.log(`Server running on http://localhost:${SERVER_PORT}`)
)
