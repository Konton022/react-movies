import React from 'react';
import { Movies } from '../components/Movies';

const Main = ({movies}) => {

	return (
		<main className='container content'>
			<Movies movies={movies} />
		</main>
	);
}

export default Main;
