const express = require('express')
const router = require('./routes/index')
const cors = require('cors');

const server = express()
server.use(cors());
server.use(express.json());

server.use('/rickandmorty', router)

server.listen(3001)

module.exports = express