const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

let scoreboard = [
    {
        "id": "Michael",
        "score": 34
    },
    {
        "id": "David",
        "score": 32
    },
    {
        "id": "Mary",
        "score": 31
    },
    {
        "id": "Susan",
        "score": 30
    },
    {
        "id": "Ashley",
        "score": 29
    },
    {
        "id": "Andrew",
        "score": 26
    },
    {
        "id": "Nicole",
        "score": 24
    },
    {
        "id": "Mark",
        "score": 23
    },
    {
        "id": "Emily",
        "score": 19
    },
    {
        "id": "James",
        "score": 11
    }
]

app.get('/', (request, response) => {
    response.json(scoreboard)
})

app.put('/', (request, response) => {
    scoreboard = request.body
    console.log(scoreboard)
    response.json(scoreboard)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})