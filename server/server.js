const express = require('express')
const CarRouter = require('./routes/cars_router.js')

const server = express()
server.use(express.json())

server.use('/api/cars', CarRouter)

server.get('/', (req, res) => {
    res.send('Entering the car DB')
})

module.exports = server