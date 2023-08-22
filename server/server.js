const cors = require('cors')
const express = require('express')
const app = express()
const config = require('./config')
app.use(cors())
const mongoose = require('mongoose')
mongoose.connect(config.dbConnection)
const authRoutes = require('../routes/auth')
const promptRoutes = require('../routes/prompt')
const answerRoutes = require('../routes/answer')

app.use(express.json())
app.use("/auth",authRoutes)
app.use("/prompt",promptRoutes)
app.use("/answer",answerRoutes)

app.get('/', (req, res) => {
    res.send('Hello World from GET!')
})


app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
})
