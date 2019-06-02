import React from 'react'
import axios from 'axios'
// const apikey = process.env.apiToken


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/index'


const apikey = process.env.OMDB_KEY


import debounce from 'lodash/debounce'

import SearchResults from './SearchResults'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      searched: 'Star',
      search: '',
      results: [],
      error: ''
    }

    this.delayedCallback = debounce(this.apiCall, 1000)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.searchMovie('star')
    console.log(this.props)
    // axios.get(`https://www.omdbapi.com/?s=star&apikey=${apikey}`)
    //   .then(res => this.setState({ results: res.data.Search }))
  }

  apiCall() {
    axios.get(`https://www.omdbapi.com/?s=${this.state.search}&type=movie&apikey=${apikey}`)
      .then(res => {
        if (res.data.Response === 'True') this.setState({ results: res.data.Search, error: '', searched: this.state.search })
        else this.setState({ results: [], error: res.data.Error, searched: this.state.search })
      })
  }

  handleChange({ target: { name, value } }) {
    this.setState({ ...this.state, [name]: value })
    // this.delayedCallback()
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.searchMovie(this.state.search)
    // console.log(this.props.searchMovie)
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Search for movie</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Search for movie" name="search" onChange={this.handleChange} />
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="title is-1">Movies with {this.state.searched} in their title</h2>

            <div className="columns is-multiline">
              {this.state.results && this.state.results.map(result =>
                <div className="column is-one-fifth" key={result.imdbID}>
                  <SearchResults {...result} />
                </div>
              )}
              <div className="column">
                <p>{this.state.error}</p>
              </div>

            </div>
          </div>
        </section>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(state.movieReducers.searched)
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
