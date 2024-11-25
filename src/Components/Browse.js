import useNowPlayingMovies from '../CustomHooks/useNowPlayingmovies';
import Header from './Header';
import Footer from './Footer';
import VideoContainer from './VideoContainer';
import MainContainer from './MainContainer';
import usePopularMovies from '../CustomHooks/usePopularMovies';
import useUpcomingMovies from '../CustomHooks/useUpcomingMovies';
import GptSearch from "./GptSearch";
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <VideoContainer />
          <MainContainer />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Browse;