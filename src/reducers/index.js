import { combineReducers } from 'redux'


import movieReducer from './movieReducer'
import movieShowReducer from './movieShowReducer'


const rootReducer = combineReducers({ movieReducer, movieShowReducer })


export default rootReducer