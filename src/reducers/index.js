import { constantName } from '../actions/types'

const initialState = {

}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case constantName:
            return { ...state, ...payload }
        default:
            return state
    }
}

export default rootReducer