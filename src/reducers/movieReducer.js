import { MOVIE_SEARCH_RESULT, MOVIE_SEARCH_RESULT_ERROR } from '../actions/types'



const initialState = {
    searched: '',
    search: 'Star',
    results: [],
    error: ''
}

const movieReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case MOVIE_SEARCH_RESULT:
            return { ...state, results: payload.results, error: '', searched: payload.search }
        case MOVIE_SEARCH_RESULT_ERROR:
            return { ...state, results: [], error: payload.error, searched: payload.search }
        default:
            return state
    }
}


export default movieReducers
