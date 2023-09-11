import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, ADD_CHARACTER, REMOVE_CHARACTER, ADD_RANDOM_CHARACTER, CLEAR_CHARACTERS, CHARACTER_DETAIL, DETAIL_CLEAR } from './actionTypes'
import axios from 'axios'

export const addFav = (favorite) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3001/rickandmorty/fav', favorite);
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch { (error) => console.log(error.message); };
    };
};

export const removeFav = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch { (error) => console.log(error.message); };
    };
};

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
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
            if (data.name) {
                const character = data;
                dispatch({
                    type: ADD_CHARACTER,
                    payload: character
                });
            }
        } catch {
            (err) => {
                console.log(err);
            }
        };
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
        return axios.get(`http://localhost:3001/rickandmorty/character/${randomId}`).then(({ data }) => {
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

export const clearCharacters = () => {
    return {
        type: CLEAR_CHARACTERS,
    }
}

export const characterDetail = (id) => {
    return {
        type: CHARACTER_DETAIL,
        payload: id,
    }
}

export const detailClear = () => {
    return {
        type: DETAIL_CLEAR,
    }
}