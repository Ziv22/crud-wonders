const express = require('express')
const router = express.Router()

const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true }
]

router.get('/wonders', function (req, res) {
    res.send(wonders)
})

router.post('/wonders', function(req, res) {
    let wonder = req.body
    wonder.visited = false
    wonders.push(wonder)
    console.log("someone's trying make a post reqest")
    res.send(wonders)
})

router.put('/wonders/:name', function(req, res) {
    const wonderName = req.params.name.split(" - ")[0]
    const currentWonder = wonders.findIndex(w => w.name === wonderName)
    wonders[currentWonder].visited = true
    res.end()
}) 

router.delete('/wonder/:name', function (req, res) {
    const wonderName = req.params.name.split(" - ")[0]
    let wondersIndex = wonders.findIndex(w => w.name === wonderName)
    wonders.splice(wondersIndex, 1)
    res.end()
})

module.exports = router