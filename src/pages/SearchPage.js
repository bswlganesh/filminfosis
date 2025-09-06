import React from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import useFetch from '../hooks/useFetch'
import useTitleChange from '../hooks/useTitleChange'
import './SearchPage.css'
export default function SearchPage() {
 
  const [searchParam]=useSearchParams()
  const queryTerm=searchParam.get('s')
  
   const apiUrl = `https://www.omdbapi.com/?apikey=2a6b8207&s=${queryTerm}`;
   const { data: movies, isLoading } = useFetch({ url: apiUrl });
    useTitleChange(queryTerm);
  return (
         <main>
      {isLoading ? (
        <p className="loading-message">Searching...</p>
      ) : (
        <>
          <p className="search-results-heading">
            {movies && movies.length === 0 
              ? `No result found for '${queryTerm}'` 
              : `Results for '${queryTerm}'`
            }
          </p>
          <section className="results-section">
            <div className="movie-grid">
              {movies && movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  )
}
