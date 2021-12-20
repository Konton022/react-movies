import React from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = { movies: [], loading: true };

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=dune`)
            .then((resp) => resp.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    getMovies = ({ search, type = 'all' }) => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((resp) => resp.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
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
