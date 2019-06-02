import { createStore, applyMiddleware, compose } from 'redux'


import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'

const enhancers = compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

const store = createStore(rootReducer, enhancers)


export default store