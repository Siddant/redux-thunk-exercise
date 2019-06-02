import { SEARCH_MOVIE } from '../actions/types'
import axios from 'axios'
const apikey = process.env.OMDB_KEY


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
            let results
            axios.get(`https://www.omdbapi.com/?s=${payload}&apikey=${apikey}`)
                .then(res => results = res.data.Search)
            console.log(results)
            // .catch()
            return { ...state, ...payload }
        default:
            return state
    }
}


export default movieReducers
