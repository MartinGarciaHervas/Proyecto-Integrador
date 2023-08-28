import {createStore} from 'redux';
import rootReducer from '../reducer/reducer.js';

export const store = createStore(rootReducer);

