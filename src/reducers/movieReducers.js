import { SEARCH_MOVIE } from '../actions/types'



const initialState = {
    searched: 'Star',
    search: '',
    results: [],
    error: ''
}

const movieReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_MOVIE:
            // console.log(type, payload)
            return { ...state, results: payload }
        default:
            return state
    }
}


export default movieReducers
