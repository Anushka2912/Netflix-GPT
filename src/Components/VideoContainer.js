import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const VideoContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[0];
    console.log({mainMovie});
    const {original_title, overview, id} = mainMovie;

    return (
        <div className='bg-gray bg-opacity-30'>
            <VideoBackground movieId={id}/>
            <VideoTitle title={original_title} overview={overview} />
        </div>
    );
};

export default VideoContainer;