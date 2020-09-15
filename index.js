const express = require('express')

const server = express()

server.use(() => {
    console.log('hello server...')
    console.log('hello server...')
})

server.listen(4000)
