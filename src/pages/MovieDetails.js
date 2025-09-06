import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner';
import useTitleChange from '../hooks/useTitleChange';
import './MovieDetails.css';

export default function MovieDetails() {
  const { imdbID } = useParams();
  const [movie,setMovie]=useState({});
const [isLoading, setIsLoading] = useState(true);
 useTitleChange(movie.Title);

  // useEffect(()=>{
  //   setIsLoading(true);
  //  async function fetchMovie() {
  //     const response = await fetch(`https://www.omdbapi.com/?apikey=2a6b8207&i=${imdbID}`);
  //     const json = await response.json();
  //     setmovie(json);
  //  }
  //  setIsLoading(false);
  //  fetchMovie();
  // },[imdbID])

  useEffect(() => {
    async function fetchMovie() {
      // Set loading to true before starting the fetch
      setIsLoading(true);
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=2a6b8207&i=${imdbID}`);
        const json = await response.json();
        setMovie(json);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      } finally {
        // Set loading to false after the fetch is complete (or has failed)
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [imdbID]);


  return (
      <main className="page-container">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        movie && movie.Title && ( // Check if movie and movie.Title exist before rendering
          <section className="movie-details-section">
            <div className="poster-container">
              <img 
                className="movie-poster" 
                src={movie.Poster !== 'N/A' ? movie.Poster : "backupImage"} 
                alt={movie.Title} 
              />
            </div>
            <div className="info-container">
              <h1 className="movie-title">{movie.Title}</h1>
              <p className="movie-plot">{movie.Plot}</p>
              
              <div className="details-grid">
                <p className="info-item">
                  <span className="info-label">Genre:</span>
                  <span>{movie.Genre}</span>
                </p>
                <p className="info-item">
                  <span className="info-label">Released:</span> {movie.Released}
                </p>
                <p className="info-item">
                  <span className="info-label">IMDB Rating:</span> {movie.imdbRating} / 10
                </p>
                <p className="info-item">
                  <span className="info-label">Director:</span> {movie.Director}
                </p>
                 <p className="info-item">
                  <span className="info-label">Writer:</span> {movie.Writer}
                </p>
                 <p className="info-item">
                  <span className="info-label">Actors:</span> {movie.Actors}
                </p>
              </div>
            </div>
          </section>
        )
      )}
    </main>
  )
}
