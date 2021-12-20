import React from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

class Main extends React.Component {
    state = { movies: [], loading: true };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=1d2eba6b&s=dune')
            .then((resp) => resp.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    }

    getMovies = ({ search, type = 'all' }) => {
        this.setState({ loading: true });
        fetch(
            `http://www.omdbapi.com/?apikey=1d2eba6b&s=${search}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((resp) => resp.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    };

    render() {
        const { movies, loading } = this.state;
        //console.log('main movies', movies, loading);
        return (
            <main className='container content'>
                <Search onSearchChange={this.getMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export { Main };
