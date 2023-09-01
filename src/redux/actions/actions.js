import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, ADD_CHARACTER, REMOVE_CHARACTER, ADD_RANDOM_CHARACTER } from './actionTypes'
import axios from 'axios'

export const addFav = (personaje) => {
    return {
        type: ADD_FAV,
        payload: personaje,
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden,
    }
}

export const addCharacter = (id) => {
    return (dispatch) => {
        return axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                const character = data;
                dispatch({
                    type: ADD_CHARACTER,
                    payload: character
                });
            }
        });
    };
};

export const removeCharacter = (id) => {
    return {
        type: REMOVE_CHARACTER,
        payload: id,
    }
}

export const addRandomCharacter = () => {
    let randomId = parseInt((Math.random() * 826).toFixed());
    return (dispatch) => {
        return axios.get(`https://rickandmortyapi.com/api/character/${randomId}`).then(({ data }) => {
            if (data.name) {
                const character = data;
                dispatch({
                    type: ADD_RANDOM_CHARACTER,
                    payload: character
                });
            }
        });
    };
};