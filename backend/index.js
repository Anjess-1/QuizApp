const express = require('express')
const bodyParser = require('body-parser')
const mongo = require("./db/db");
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { errorHandler } = require('./utility/error.handler');

const app = express();

app.use(bodyParser.json())
app.use(cors());
dotenv.config();

mongo;

app.get('/', (req, res) => {
    res.json({ message: "Test Success" })
})

require("./route/admin.route")(app)
require("./route/user.route")(app)
require("./route/question.route")(app)
require("./route/quiz.route")(app)
app.use(errorHandler);


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is working on port : ${PORT}`)
})




