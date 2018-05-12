var express = require("express")
var getJson = require('./components/create-json')

var app = express()

app.get("/", (req, res) => {
    res.send('ROOT')
})

app.get("/sum/:num" , (req, res) => {
    let json = getJson(req.params.num)
    res.json(json)
    }
)

app.listen(3000, null);