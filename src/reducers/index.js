import wordsReducer from './words';
import colorsReducer from './colors';
import {
    combineReducers,
} from 'redux';

const reducers = combineReducers({
    words: wordsReducer,
    colors: colorsReducer,
})

export default reducers;