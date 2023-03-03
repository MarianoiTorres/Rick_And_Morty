import axios from 'axios'
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const ALL_CHARACTERS = 'ALL_CHARACTERS';

export const addFavorite = (character) => {
    try {
        console.log(character);
        return async (dispatch) => {
            const response = await axios.post('http://localhost:3001/rickandmorty/fav', character)
            const data = response.data;
            return dispatch({
                type: ADD_FAVORITE,
                payload: data
            })

        }        
    } catch (error) {
        console.log('Error addFavorite')
    }

}

export const deleteFavorite = (id) => {
    try {
        return async (dispatch) => {
            const response = await axios.delete('http://localhost:3001/rickandmorty/fav/' + id);
            const data = response.data;
            console.log(response.data)
            if(!response.data) throw Error('Error deleteFavorite')
            return dispatch({
                type: DELETE_FAVORITE,
                payload: data
            })
        }        
    } catch (error) {
        throw Error(error.message)
    }

}

export const filterCards = (status) => {
    return {type:FILTER, payload: status}
}

export const orderCards = (id) => {
    return{type: ORDER, payload: id}
}

export const allCharacters = () => {
    return {type: ALL_CHARACTERS}
}