const axios = require('axios')
const { Character } = require('../models/Character')

const getApiData = async () => {
    try {
        let cont = 1;
        let characters = []

        while(cont < 100){
            const response = await axios.get("https://rickandmortyapi.com/api/character" + cont)
            const data = response.data
            console.log(data)
            characters.push({
                id: data.id,
                name: data.name,
                species: data.Species,
                status: data.Status,
                origin: data.Origin,
                gender: data.Gender,
                image: data.image
            })
            cont++
        }
        return characters
    } catch (error) {
        return {error: error.message}
    }
}

const saveApiData = async () => {
    try {
        const apiData = await getApiData()
        const createChar = await Character.bulkCreate(apiData)       
    } catch (error) {
        return {error: error.message}  
    }
}

module.exports = {saveApiData}