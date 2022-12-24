const express = require('express')
const bodyParser = require('body-parser')
const mongo = require("./db/db");

const app = express();

app.use(bodyParser.json())

mongo;

app.get('/', (req, res) => {
    res.json({message: "Test Success"})
})

require("./route/admin.route")(app)
require("./route/user.route")(app)
require("./route/question.route")(app)
require("./route/quiz.route")(app)


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is working on port : ${PORT}`)
})




