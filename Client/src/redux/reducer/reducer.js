import { ADD_CHARACTER, ADD_FAV, ADD_RANDOM_CHARACTER, CHARACTER_DETAIL, CLEAR_CHARACTERS, DETAIL_CLEAR, FILTER, ORDER, REMOVE_CHARACTER, REMOVE_FAV } from '../actions/actionTypes'

let initialState = {
    myFavorites: [],
    allFavorites: [],
    characters: [],
    detail: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allFavorites: action.payload,
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allFavorites: action.payload,
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

        case CLEAR_CHARACTERS:
            return {
                ...state,
                characters: []
            }

        case CHARACTER_DETAIL:
            return {
                ...state,
                detail: state.characters.filter(character => character.id === parseInt(action.payload))
            }

        case DETAIL_CLEAR:
            return{
                ...state,
                detail:[]
            }



        default:
            return state;
    }
}

export default rootReducer;