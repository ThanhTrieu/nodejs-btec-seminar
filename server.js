const express = require('express')
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 8080;

var corsOptions = {
    origin: "https://fakestoreapi.com/docs"
}
  
app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to BTEC - FPT" });
})

require("./app/routes/api")(app)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})