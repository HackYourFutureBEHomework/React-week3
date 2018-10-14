import React, { Component } from 'react';
import './App.css';
import movieList from './data/movielist.json'
import genreList from './data/genrelist.json'
import CurrencyCalculator from './CurrencyCalculator'

class Movie extends Component {
  render () {
    const props = this.props
    return (
      <li>{props.movie.original_title}</li>
    )
  }
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movieList : movieList.results,
      genreList : genreList.genres,
      selectedGenreId : '',

    }
  }

  selectGenre = (event) => {
    //console.log(event.target.value)
    this.setState({selectedGenreId: event.target.value});
  }

  render() {
    const filteredMovieList = this.state.movieList.filter(movie => {
      const selectedGenreId = this.state.selectedGenreId
      if(selectedGenreId.length < 1 ) return true // if empty show everything
      console.log('filtering genre ids for movie: ', movie.genre_ids)
      return movie.genre_ids.some(id => { 
        console.log('comparing id', id, 'with', selectedGenreId)
        return id == selectedGenreId
      })
    })

    const movieElementArray = filteredMovieList.map(movie => {
      return (
        <Movie key={movie.id} movie={movie} />
      )
    })

    const genreOptionsArray = this.state.genreList.map(genre => {
      return (
        <option 
          key={genre.id} 
          value={genre.id} 
        >
          {genre.name}
        </option>
      )
    })
    return (
      <div className="">
        <CurrencyCalculator/>
        <hr/>
        <select 
          onChange={this.selectGenre}
          value={this.state.selectedGenreId}
        >
          <option value="">-</option>
          {genreOptionsArray}
        </select>
        <ul>
          {movieElementArray}
        </ul>
      </div>
    );
  }
}

export default App;
