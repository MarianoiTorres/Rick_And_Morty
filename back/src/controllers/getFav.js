const dataBase = require('../utils/favs')

const getFav = ('/fav' ,(req, res) => {
    res.status(200).json(dataBase)
})

module.exports = getFav