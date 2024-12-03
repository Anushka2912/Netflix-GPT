import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {
  const selectedLang = useSelector((store) =>  store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //Serach movie in TMDb after getting the search results
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery = "Act as a Movie Recommendatin System and suggest movie names for the query :" + searchText.current.value + "Seperate movie names with comma like this example: Movie1, Movie2";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices) {
      // TODO: Write Error Handling
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResults({movieNames: gptMovies, movieResults: tmdbResults}));
  };

  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()} className='p-6 m-6 flex justify-center gap-3'>
            <input 
              ref = {searchText}
              type='text' 
              className='w-2/5 px-4 py-4 text-black bg-white border border-black rounded-[5px]' 
              placeholder={lang[selectedLang].gptSearchPlaceholder} 
            />
            <button 
              className='w-[200px] py-2 px-4 bg-red border-red text-white rounded-[5px]'
              onClick={handleGptSearchClick}
            >
              {lang[selectedLang].searchBtnText}
            </button>
        </form>
    </div>
  );
};

export default GptSearchBar;