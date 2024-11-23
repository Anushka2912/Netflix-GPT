import React from 'react';

const VideoTitle = ({title, overview}) => {

  // const getMovieImages = async () => {
  //   const data = await fetch("https://api.themoviedb.org/3/movie/912649/images", MOVIE_IMAGES_OPTIONS);
  //   const json = await data.json();
  //   console.log(json);
  // }

  // useEffect(() => {
  //   getMovieImages();
  // }, []);

  return (
    <div className='absolute bottom-0 left-0 w-screen aspect-video px-20 pt-[44%] bg-gradient-to-r from-black'>
      <div>
          <h1 className='text-white text-5xl font-bold'>{title}</h1>
          <p className='text-white py-6 text-lg w-1/4'>{overview}</p>
      </div>
      <div className='flex gap-3'>
          <button className='bg-white rounded-[4px] text-black font-bold w-32 px-5 py-2'>Play</button>
          <button className='bg-grey bg-opacity-70 rounded-[4px] text-white font-bold w-32 px-5 py-2'>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;