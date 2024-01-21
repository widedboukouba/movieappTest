import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ movies, text, rate }) => {
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'40px'}}>
   {movies.filter((el) =>
   el.name.toLowerCase().includes(text.toLowerCase()) &&
   el.rating >= rate
   )
   
  .map((el) => (
    <MovieCard movie={el} />
  ))
    

     }


     

    
    </div>
  )
}

export default MovieList;
