import { MOVIE_DETAIL, MOVIE_DETAIL_ERROR } from '../actions/types'

const initialState = {
    search: '',
    movie: [],
    errors: {}
}

const movieReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case MOVIE_DETAIL:
            return { ...state, movie: payload }
        case MOVIE_DETAIL_ERROR:
            return { ...state, errors: payload }
        default:
            return state
    }
}


export default movieReducers