import React from 'react'
import Header from './Header'

const SignIn = () => {
  return (
    <div className='relative'>
        <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/CA-en-20241104-TRIFECTA-perspective_c9918c41-adde-428f-b9f1-3aa64bfa091f_medium.jpg")] h-screen bg-cover bg-no-repeat'>
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50' />
            <div className='relative z-10'>
                <Header />
            </div>
        </div>
    </div>
  )
}

export default SignIn