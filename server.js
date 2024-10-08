const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})

app.use('/',require('./routes/index.js'))

app.listen(port, () => console.log(`Listening on port ${port}`))