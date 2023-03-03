const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')

const  getCharById = async (req, res) => {
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
                species: data.species
            }

            res.status(200).json(char)
                
    } catch (err) {
        err => res.status(500).json(err.message)
    }

   
}

module.exports = getCharById

/*const axios = require('axios')

let getCharById = (res, id) => {
    
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        let char = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species
        }

        res.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(char))
    })
    .catch( err => res.writeHead(500, {'Content-type': 'text/plain'}).end('Personaje no encontrado'))
}

module.exports = getCharById*/