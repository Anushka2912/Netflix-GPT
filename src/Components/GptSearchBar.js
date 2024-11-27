import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const selectedLang = useSelector((store) =>  store.config.lang);

  return (
    <div>
        <form className='p-6 m-6 flex justify-center gap-3'>
            <input 
              type='text' 
              className='w-2/5 px-4 py-4 text-black bg-white border border-black rounded-[5px]' 
              placeholder={lang[selectedLang].gptSearchPlaceholder} 
            />
            <button className='w-[200px] py-2 px-4 bg-red border-red text-white rounded-[5px]'>
              {lang[selectedLang].searchBtnText}
            </button>
        </form>
    </div>
  );
};

export default GptSearchBar;