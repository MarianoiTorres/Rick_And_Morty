const express = require('express')
const router = require('./routes/index')
const cors = require('cors');
const {saveApiData} = require('./controllers/saveApiData')
const {sequelize} = require('./DB_connection')


const server = express()
server.use(cors());
server.use(express.json());

server.use('/rickandmorty', router)
saveApiData()
console.log('DB CONECTADA');
sequelize.sync({force: true}).then(() => {
    server.listen(3001, () => {
        console.log('server on port 3001');
    })
})

module.exports = express