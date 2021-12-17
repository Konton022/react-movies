import React from 'react'
import { Movie } from './Movie'

function Movies({ movies }) {
  return (
    <div className="movies cards">
      {movies.Search
        ? movies.Search.map(({ Title, Poster, Type, Year, imdbID }) => {
            // console.log('item', item)
            return (
              <div key={imdbID}>
                <Movie title={Title} poster={Poster} type={Type} year={Year} />
              </div>
            )
          })
        : null}
    </div>
  )
}

export { Movies }
