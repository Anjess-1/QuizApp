const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({message: "Test Success"})
})

require("./routes/route.js")(app)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is working on port : ${PORT}`)
})




