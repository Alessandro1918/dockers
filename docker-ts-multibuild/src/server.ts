import "dotenv/config"
import express from "express"

const PORT = parseInt(process.env.PORT!) || 3000

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
  res
    .status(200)  //OK
    .send({
      "message": "Hello, Docker!"
    })
})

app.listen(PORT, () => {
  console.log(`Typescrypt server running on http://localhost:${PORT}`)
})