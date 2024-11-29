import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';

const GptSearchBar = () => {
  const selectedLang = useSelector((store) =>  store.config.lang);

  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery = "Act as a Movie Recommendatin System and suggest movie names for the query :" + searchText.current.value;

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    console.log(gptResults.choices);
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