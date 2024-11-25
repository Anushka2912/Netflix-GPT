import useNowPlayingMovies from '../CustomHooks/useNowPlayingmovies';
import Header from './Header';
import Footer from './Footer';
import VideoContainer from './VideoContainer';
import MainContainer from './MainContainer';
import usePopularMovies from '../CustomHooks/usePopularMovies';
import useUpcomingMovies from '../CustomHooks/useUpcomingMovies';
import GptSearch from "./GptSearch";


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header />
      <GptSearch />
      <VideoContainer />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default Browse;