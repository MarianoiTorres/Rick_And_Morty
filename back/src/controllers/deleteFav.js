let dataBase = require('../utils/favs')

const deleteFav = ('/',(req, res) => {
    const {id} = req.params

    dataBase = dataBase.filter(char => char.id !== Number(id))
    console.log(dataBase)
    return res.status(200).json(dataBase)    
        
 })

module.exports = deleteFav