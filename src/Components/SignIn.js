import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

const SignIn = () => {
  return (
    <div className='relative'>
        <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/CA-en-20241104-TRIFECTA-perspective_c9918c41-adde-428f-b9f1-3aa64bfa091f_medium.jpg")] h-screen bg-cover bg-no-repeat'>
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50' />
            <div className='relative z-10 h-full flex flex-col justify-between'>
              <div className='HeaderContainer'>
                <Header /> 
              </div>
              <div className='SignInContainer bg-black bg-opacity-70 w-full max-w-[450px] min-h-[700px] mx-auto mb-[50px] px-[30px]'>
                <div className='SignInWrapper flex flex-col gap-7 px-[48px] py-[48px]'>
                  <div className='HeadingSection'>
                    <h1 className='text-white text-[32px] font-bold'>Sign In</h1>
                  </div>
                  <div className='flex flex-col gap-[16px] FormSection'>
                    <input
                      type="text"
                      className="w-full px-4 py-4 border bg-gray bg-opacity-70 border-grey rounded-[5px]"
                      placeholder="Email or mobile number"
                    />
                    <input
                      type="text"
                      className="w-full px-4 py-4 border bg-gray bg-opacity-70 border-grey rounded-[5px]"
                      placeholder="Password"
                    />
                    <button className='bg-red border-red rounded-[5px] text-white font-medium hover:bg-hoverRed w-full p-2'>Sign In</button>
                    <p className='text-white text-center'>OR</p>
                    <button className='bg-grey bg-opacity-50 border-grey rounded-[5px] text-white font-medium hover:bg-opacity-30 w-full p-2'>Use a Sign-In Code</button>
                    <p className='text-white text-center'>Forgot Password?</p>
                  </div>
                  <div className=' flex flex-col gap-4 FormFooterSection'>
                    <div className='flex gap-3 items-center'>
                      <input type='checkbox' />
                      <label className='text-white'>Remember Me</label>
                    </div>
                    <p className='flex gap-2 items-center'>
                      <span className='text-white text-opacity-70'>
                        New to Netflix?
                      </span>
                      <Link to={SignUp}><span className='text-white font-medium'>Sign up now.</span></Link>
                    </p>
                    <div>
                      <p className='text-lightGray text-[13px]'>
                        <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. </span>
                        <button className='text-blue'>Learn more.</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='FooterContainer'>
                <Footer />
              </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn;