import React from 'react'

function Movie({ title, poster, type, year }) {
  return (
    <div className="movie card">
      <div className="card-image">
        <img src={poster} alt="poster" />
        <p className="card-title">{title}</p>
      </div>
      <div className="card-content">
        <span>{type}</span>
        <span className="right">{year}</span>
      </div>
    </div>
  )
}

export { Movie }
