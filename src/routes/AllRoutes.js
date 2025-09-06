import {Routes,Route} from 'react-router-dom'
import {MovieDetails,MovieList,SearchPage,PageNotFound} from '../pages'

import React from 'react'

export function AllRoutes() {
  return (
    <Routes>
        <Route path='/'  element={<MovieList url="https://www.omdbapi.com/?apikey=2a6b8207&s=Batman&type=movie" title="Home"/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetails />}/>
        <Route path='/movies/popular' element={<MovieList url="https://www.omdbapi.com/?apikey=2a6b8207&s=2025&type=movie" title="Popular" />}/>
        <Route path='/movies/top'  element={<MovieList url="https://www.omdbapi.com/?apikey=2a6b8207&s=Avengers&type=movie"title="Top"/>}/>
        <Route path='/movies/upcomming'  element={<MovieList url="https://www.omdbapi.com/?apikey=2a6b8207&s=2021&type=movie" title="Upcomming"/>}/>
         <Route path='/search' element={<SearchPage />}/>
         <Route path='*' element={<PageNotFound/>}/> 
    </Routes>
  )
}
