import useNowPlayingMovies from '../CustomHooks/useNowPlayingmovies';
import Header from './Header';

const Browse = () => {  

  useNowPlayingMovies();
  
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse;