import React from 'react'
import { Movies } from '../components/Movies'

class Main extends React.Component {
  state = { movies: [] }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=1d2eba6b&s=dune')
      .then((resp) => resp.json())
      .then((data) => this.setState({ movies: data.Search }))
  }
  render() {
    const { movies } = this.state

    return (
      <main className="container content">
        {movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <h5>Loading...</h5>
        )}
      </main>
    )
  }
}

export { Main }
