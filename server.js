const express       = require('express')
const app           = express()
const path          = require('path')
const bodyParser    = require('body-parser')
const api           = require('./server/routes/api')


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', api)


const port = 1337 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})