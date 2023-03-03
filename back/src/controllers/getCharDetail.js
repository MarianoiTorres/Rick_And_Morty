const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')

const getCharDetail = async (req, res) => {
    try {
        const {id} = req.params
            let response = await axios.get(URL + id)
            let data = response.data

            if(!response.data) throw Error('Hubo un error')
            let char = {
                id: data.id,
                name: data.name,
                image: data.image,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name
            }
            res.status(200).json(char) 

    } catch (err) {
        (err => res.status(500).json(err.message))
    }
    
}

module.exports = getCharDetail