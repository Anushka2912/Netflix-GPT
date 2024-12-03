import React from 'react';
import { IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;

  return (
    <div>
        <img 
            alt='Movie_Poster' 
            src={IMG_CDN_URL + posterPath}
            className='min-w-48'
        />
    </div>
  );
};

export default MovieCard;