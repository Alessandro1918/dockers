require('dotenv').config()
const express = require("express")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const SERVER_PORT = process.env.SERVER_PORT || 4000

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
  res
    .status(200)  //OK
    .send({"message": "Hello, Docker!"})
})

//Saves a new user on the db
app.post("/users", async (req, res) => {
  const newUser = {
    username: req.body.username
  }
  await prisma.user.create({
    data: newUser
  })
  res
    .status(201)  //CREATED
    .send("User created!")
})

//Get a list of all users from the db
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany()
  res
    .status(200)  //OK
    .send(users)
})

app.listen(SERVER_PORT, () => 
  console.log(`Server running on http://localhost:${SERVER_PORT}`)
)