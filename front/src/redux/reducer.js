import { ADD_FAVORITE, ALL_CHARACTERS, DELETE_FAVORITE, FILTER, ORDER } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE: 
        return {
            ...state,
            myFavorites:action.payload,
            allCharacters: action.payload
        }
        case DELETE_FAVORITE:
        return {
            ...state,
            myFavorites: action.payload
        }
        case FILTER:
        const { allCharacters } = state
        const allCharactersFilter = allCharacters.filter(element => element.gender === action.payload)
        return {
            ...state,
            myFavorites: allCharactersFilter
        }
        case ORDER:
            if(action.payload === "Ascendente"){
                return {
                ...state, 
                myFavorites:[...state.myFavorites.sort((a , b) => a.id - b.id)]
                }
              }
              if(action.payload === 'Descendente'){
              return {
                ...state,
                myFavorites: [...state.myFavorites.sort((a , b) => b.id - a.id)]
              }}
        case ALL_CHARACTERS:
            return {
                ...state,
                myFavorites: state.allCharacters.length !== 0 && state.allCharacters
            }
        default: return {...state}
    }
}

export default reducer