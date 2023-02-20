export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const ALL_CHARACTERS = 'ALL_CHARACTERS';

export const addFavorite = (character) => {
    return {type: ADD_FAVORITE, payload: character}
}

export const deleteFavorite = (characterId) => {
    return{type: DELETE_FAVORITE, payload: characterId}
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