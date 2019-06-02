import React from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/index'


class MoviesShow extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id)

  }
  render() {
    const { Title, Year, imdbRating, Metascore, Poster, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, BoxOffice } = this.props.movie
    if (!this.props.movie) return null
    return (
      <div className="section">
        <div className="container">
          <h1 className="title is-1"> {Title} <span>({Year})</span></h1>
          <div className="scores">
            <p><strong>Imdb Rating:</strong> {imdbRating}   <strong>Metascore:</strong> {Metascore}</p>
          </div>
          <div className="columns">
            <div className="column poster">
              <figure className="image">
                <img src={Poster} />
              </figure>
            </div>
            <div className="column">
              <p><strong>Runtime:</strong> {Runtime}</p>
              <p><strong>Genre:</strong> {Genre}</p>
              <p><strong>Director:</strong> {Director}</p>
              <p><strong>Writer:</strong> {Writer}</p>
              <p><strong>Actors:</strong> {Actors}</p>
              <p><strong>Plot:</strong> {Plot}</p>
              <p><strong>Language:</strong> {Language}</p>
              <p><strong>Country:</strong> {Country}</p>
              <p><strong>BoxOffice:</strong> {BoxOffice}</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}



function mapStateToProps(state) {
  return {
    movie: state.movieShowReducer.movie,
    errors: state.movieShowReducer.errors
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesShow)
