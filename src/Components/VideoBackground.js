import { useSelector } from 'react-redux';
import useMovieTrailer from '../CustomHooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

  useMovieTrailer(movieId);

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  return (
    <div>
      <iframe
        className='relative w-full aspect-video -mt-[130px]'
        src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
    </div>
  );
};

export default VideoBackground;