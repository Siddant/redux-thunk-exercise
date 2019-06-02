import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index'

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

const store = createStore(rootReducer, enhancers)


export default store