import React, { useState, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    SetErrorMessage(message);
    if(message) return;

    if(!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        SetErrorMessage(errorCode + "-" + errorMessage);
      });
    } 
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        SetErrorMessage(errorCode + "-" + errorMessage);
      });
    }
  };

  return (
    <div className='relative'>
        <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/CA-en-20241104-TRIFECTA-perspective_c9918c41-adde-428f-b9f1-3aa64bfa091f_medium.jpg")] h-screen bg-cover bg-no-repeat'>
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50' />
            <div className='relative z-10 h-full flex flex-col justify-between'>
              <div className='HeaderContainer'>
                <Header /> 
              </div>
              <form onSubmit={(e) => e.preventDefault()} className='SignInContainer bg-black bg-opacity-70 w-full max-w-[450px] mx-auto mb-[50px] px-[30px]'>
                <div className='SignInWrapper flex flex-col gap-7 px-[48px] py-[48px]'>
                  <div className='HeadingSection'>
                    <h1 className='text-white text-[32px] font-bold'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                  </div>
                  <div className='flex flex-col gap-[16px] FormSection'>
                    <input
                      ref={email}
                      type="text"
                      className="w-full px-4 py-4 border text-white bg-gray bg-opacity-70 border-grey rounded-[5px]"
                      placeholder="Email or mobile number"
                    />
                    <input
                      ref={password}
                      type="text"
                      className="w-full px-4 py-4 border text-white bg-gray bg-opacity-70 border-grey rounded-[5px]"
                      placeholder="Password"
                    />
                    <p className='text-[13px] text-red font-medium'>{errorMessage}</p>
                    <button 
                      className='bg-red border-red rounded-[5px] text-white font-medium hover:bg-hoverRed w-full p-2'
                      onClick={handleButtonClick}>
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </button>
                  </div>
                  <div className='FormFooterSection'>
                    <p className='flex gap-2 justify-center'>
                      <span className='text-white text-opacity-70'>
                        {isSignIn ? "New to Netflix?" : "Already a member?"}
                      </span>
                      <button 
                        className='text-white font-medium'
                        onClick={toggleForm}>
                          {isSignIn ? "Sign up now." : "Sign In now."}
                      </button>
                    </p>
                  </div>
                </div>
              </form>
              <div className='FooterContainer'>
                <Footer />
              </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn;