import React from 'react'

function Movie(props) {
  const {
    Title: title,
    Poster: poster,
    Year: year,
    Type: type,
    imdbID: id,
  } = props

  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={poster} alt="poster" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {type} <span className="right">{year}</span>{' '}
        </p>
      </div>
    </div>
  )
}

export { Movie }
