const express = require("express")
const app = express()
const PORT = 3000

app.get("/get", (req, res) => {
  res.json({ message: "Get the file" })
})

app.post("/post", (req, res) => {
  res.json({ message: "File is added" })
})

app.put("/put", (req, res) => {
  const id = req.params.id
  res.json({ message: "file is is updated", id: id })
})

app.delete("/delete", (req, res) => {
  res.json({ message: "File is deleted" })
})

app.listen(PORT, () => {
  console.log("Server is listening on port 3000")
})
