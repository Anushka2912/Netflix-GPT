import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant ";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
    
        const trailerData = json.results.filter((video) => video.name==="Official Trailer");
        const trailerRes = trailerData.length ? trailerData[0] : json.results[0];
        dispatch(addTrailerVideo(trailerRes));
      };
    
      useEffect(() => {
        getMovieVideos();
      }, []);
}

export default useMovieTrailer;