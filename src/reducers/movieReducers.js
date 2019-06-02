import { MOVIE_SEARCH_RESULT, MOVIE_SEARCH_RESULT_ERROR } from '../actions/types'



const initialState = {
    searched: '',
    search: '',
    results: [],
    error: ''
}

const movieReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case MOVIE_SEARCH_RESULT:
            console.log(payload)
            return { ...state, results: payload }
        // this.setState({ results: res.data.Search, error: '', searched: this.state.search })
        case MOVIE_SEARCH_RESULT_ERROR:
            console.log(payload)
            return { ...state, results: payload }
        default:
            return state
    }
}


export default movieReducers
