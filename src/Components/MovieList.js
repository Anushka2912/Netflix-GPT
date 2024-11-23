import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {

  return (
    <div className='flex flex-col gap-5 px-20 py-10'>
        <h1 className='text-white text-3xl font-bold'>{title}</h1>
        <div className='flex gap-5 overflow-x-scroll'>
            {movies?.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            ))}
        </div>
    </div>
  );
};

export default MovieList;