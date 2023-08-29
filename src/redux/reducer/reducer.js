import {ADD_FAV, FILTER, ORDER, REMOVE_FAV} from '../actions/actionTypes'

let initialState = {
    myFavorites: [],
    allCharacters: [],
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.myFavorites, action.payload],
            }
        
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(personaje => personaje.id !== parseInt(action.payload))
            }

        case FILTER:
            return {
                ...state,
                myFavorites: action.payload === 'All'? state.allCharacters : state.allCharacters.filter(personaje => personaje.gender === action.payload)
            }

        case ORDER:
            return {
                ...state,
                myFavorites: action.payload === 'A'? state.myFavorites.sort((a, b)=> a.id - b.id) : state.myFavorites.sort((a, b)=> b.id - a.id),
            }

        default:
            return state;
    }
}

export default rootReducer;