import React from 'react'

function Movie({ title, poster, type, year }) {
  return (
    <div className="movie card">
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={poster} alt="poster" />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <span>{type}</span>
              <span>{year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Movie }
