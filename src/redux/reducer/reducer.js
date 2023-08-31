import { ADD_CHARACTER, ADD_FAV, ADD_RANDOM_CHARACTER, FILTER, ORDER, REMOVE_CHARACTER, REMOVE_FAV } from '../actions/actionTypes'

let initialState = {
    myFavorites: [],
    allFavorites: [],
    characters: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allFavorites: [...state.myFavorites, action.payload],
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(personaje => personaje.id !== parseInt(action.payload)),
                allFavorites: state.allFavorites.filter(personaje => personaje.id !== parseInt(action.payload))
            }

        case FILTER:
            return {
                ...state,
                myFavorites: action.payload === 'All' ? state.allFavorites : state.allFavorites.filter(personaje => personaje.gender === action.payload)
            }

        case ORDER:
            return {
                ...state,
                myFavorites: action.payload === 'A' ? state.myFavorites.sort((a, b) => a.id - b.id) : state.myFavorites.sort((a, b) => b.id - a.id),
            }

        case ADD_CHARACTER:
            if (!state.characters.some(character => character.id === parseInt(action.payload.id)))
                return {
                    ...state,
                    characters: [...state.characters, action.payload]
                }

        case REMOVE_CHARACTER:
            return {
                ...state,
                characters: state.characters.filter(personaje => personaje.id !== action.payload)
            }

        case ADD_RANDOM_CHARACTER:
            if (!state.characters.some(character => character.id === parseInt(action.payload.id)))
                return {
                    ...state,
                    characters: [...state.characters, action.payload]
                }



        default:
            return state;
    }
}

export default rootReducer;