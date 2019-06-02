import { MOVIE_SEARCH_RESULT, MOVIE_SEARCH_RESULT_ERROR } from './types'
import axios from 'axios'
const apikey = process.env.OMDB_KEY

export const searchMovie = (payload) => dispatch => {
    axios.get(`https://www.omdbapi.com/?s=${payload}&apikey=${apikey}`)
        .then(res => {
            if (res.data.Response === 'True') {
                dispatch({
                    type: MOVIE_SEARCH_RESULT,
                    payload: { results: res.data.Search, search: payload }
                })
            }
            else {
                dispatch({
                    type: MOVIE_SEARCH_RESULT_ERROR,
                    payload: { error: res.data.Error, search: payload }
                })
            }
        })
}




export const getMovie = (payload) => ({
    type: type,
    payload
})
























// middleware examples

// export const fetchPosts = () => dispatch => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(posts =>
//         dispatch({
//           type: FETCH_POSTS,
//           payload: posts
//         })
//       );
//   };




// export function apiRequest() {
//     return dispatch => {
//         // axios.get()
//         // axios.get('https://jsonplaceholder.typicode.com/todos/1')
//         axios.get('https://jsonplaceholder.typicodaaae.com/todos/1')

//             .then(response => console.log(response.data))
//             .catch((error) => dispatch(showError()))
//         // .then(json => console.log(json))
//     }
// }


// export function fetchTweets() {
//     return function(dispatch) {
//       dispatch({type: "FETCH_TWEETS"});

//       /* 
//         http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
//         If you get console errors due to bad data:
//         - change "reacttest" below to any other username
//         - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
//       */
//       axios.get("http://rest.learncode.academy/api/reacttest/tweets")
//         .then((response) => {
//           dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
//         })
//         .catch((err) => {
//           dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
//         })
//     }
//   }
