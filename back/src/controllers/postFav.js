const dataBase = require('../utils/favs')

const postFav = ('/', (req, res) => {
        dataBase.push({ ...req.body })
        res.status(200).json(dataBase)     
})

module.exports = postFav