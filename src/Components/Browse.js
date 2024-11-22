import useNowPlayingMovies from '../CustomHooks/useNowPlayingmovies';
import Header from './Header';
import Footer from './Footer';
import VideoContainer from './VideoContainer';
import MainContainer from './MainContainer';

const Browse = () => {  

  useNowPlayingMovies();
  
  return (
    <div>
      <Header />
      <VideoContainer />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default Browse;