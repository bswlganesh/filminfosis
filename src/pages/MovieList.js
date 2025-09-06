
import MovieCard from '../components/MovieCard'
import './MovieList.css'
import useFetch from '../hooks/useFetch'
import  LoadingSpinner from '../components/LoadingSpinner';
import useTitleChange from '../hooks/useTitleChange';
export default function MovieList({url,title}) {
 
  
  //const url=`https://www.omdbapi.com/?apikey=2a6b8207&s=2025&type=movie`;
  const {data:movies, isLoading}=useFetch({url})
 useTitleChange(title);
  return (
    <main>
      {/* 3. Conditionally render the spinner or the movie list */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className='card'>
          {movies && movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </section>
      )}
    </main>
    
  )
}