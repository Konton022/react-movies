import React from 'react'
import { Movies } from '../components/Movies'
import { Search } from '../components/Search'
import { Preloader } from '../components/Preloader'

class Main extends React.Component {
  state = { movies: [] }

  //   componentDidMount() {
  //     fetch('http://www.omdbapi.com/?apikey=1d2eba6b&s=dune')
  //       .then((resp) => resp.json())
  //       .then((data) => this.setState({ movies: data.Search }))
  //   }

  getMovies = (props) => {
    fetch(`http://www.omdbapi.com/?apikey=1d2eba6b&s=${props}`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ movies: data.Search }))
  }

  render() {
    const { movies } = this.state

    return (
      <main className="container content">
        <Search onSearchChange={this.getMovies} />
        {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
      </main>
    )
  }
}

export { Main }
