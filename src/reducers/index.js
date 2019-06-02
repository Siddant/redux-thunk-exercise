import { combineReducers } from 'redux'


import movieReducers from './movieReducers'


const rootReducer = combineReducers({ movieReducers })


export default rootReducer