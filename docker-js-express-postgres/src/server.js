require('dotenv').config()
const express = require("express")
const db = require("./db")

const SERVER_PORT = process.env.SERVER_PORT

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
  res
    .status(200)  //OK
    .send({"message": "Hello, Docker!"})
})

//Saves a new user on the db
app.post("/users", async (req, res) => {
  const { username } = req.body
  try {
    await db.query("INSERT INTO users (username) VALUES ($1)", [username])
    res
      .status(201)  //CREATED
      .send({"message": "User added"})
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .send({"error": err})
  }
})

//Get a list of all users from the db
app.get("/users", async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM users")
    res
      .status(200)  //OK
      .send(data.rows)
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .send({"error": err})
  }
})

app.listen(SERVER_PORT, () => console.log(`Server running on http://localhost:${SERVER_PORT}`))