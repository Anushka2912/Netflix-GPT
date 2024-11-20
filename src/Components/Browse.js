import useNowPlayingMovies from '../CustomHooks/useNowPlayingmovies';
import Header from './Header';
import Footer from './Footer';

const Browse = () => {  

  useNowPlayingMovies();
  
  return (
    <div>
      <Header />
      <div></div>
    </div>
  )
}

export default Browse;