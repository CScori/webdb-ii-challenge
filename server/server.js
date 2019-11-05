const express = require('express')
// import car server rts

const server = express()
server.use(express.json())

server.use('/api/cars', )

server.get('/', (req, res) => {
    res.send('Entering the car DB')
})

module.exports = server