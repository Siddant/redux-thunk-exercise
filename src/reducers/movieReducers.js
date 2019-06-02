import { constantName } from '../actions/types'


const initialState = {
    searched: 'Star',
    search: '',
    results: [],
    error: ''
}

const movieReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case constantName:
            return { ...state, ...payload }
        default:
            return state
    }
}


export default movieReducers
