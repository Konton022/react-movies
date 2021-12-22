import React, { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=dune`)
            .then((resp) => resp.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const getMovies = (search, type = 'all') => {
        setLoading(true);
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((resp) => resp.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    //const { movies, loading } = this.state;
    //console.log('main movies', movies, loading);
    return (
        <main className='container content'>
            <Search onSearchChange={getMovies} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    );
};

export { Main };
