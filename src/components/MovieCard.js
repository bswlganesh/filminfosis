import React from 'react'

import { Link } from 'react-router-dom'

export default function MovieCard({movie}) {
    

  return (
   <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          className="movie-card-image"
          src={movie.Poster}
          alt={movie.Title}
        />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.Title}</h3>
          <p className="movie-card-year">{movie.Year}</p>
        </div>
      </Link>
    </div>
  )
}

   
