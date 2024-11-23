import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies = useSelector((store => store.movies));

  return (
    <div className='bg-black text-white'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
    </div>
  );
};

export default MainContainer;