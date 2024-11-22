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
    <div className='py-20 px-12 w-1/4'>
        <div>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='py-6 text-lg'>{overview}</p>
        </div>
        <div className='flex gap-3'>
            <button className='bg-white rounded-[2px] text-black w-32 px-5 py-2'>Play</button>
            <button className='bg-lightGray bg-opacity-60 rounded-[2px] text-white w-32 px-5 py-2'>More Info</button>
        </div>
    </div>
  );
};

export default VideoTitle;