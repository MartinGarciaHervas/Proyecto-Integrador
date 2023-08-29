import {createStore} from 'redux';
import rootReducer from '../reducer/reducer.js';
import {composeWithDevTools} from '@redux-devtools/extension'
// import thunk from 'redux-thunk'

export const store = createStore(rootReducer, composeWithDevTools());

