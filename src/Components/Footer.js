import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-black/70 to-black'>
        <div className='w-full max-w-[1870px] m-auto py-[72px] px-12'>
            <div className='flex flex-col gap-8 text-white'>
                <div>
                    <p>Questions? Call 1-613-265-9163</p>
                </div>
                <div>
                    <ul className='flex flex-wrap gap-6 justify-between text-[14px]'>
                        <li className='w-1/5'>FAQ</li>
                        <li className='w-1/5'>Help Center</li>
                        <li className='w-1/5'>About</li>
                        <li className='w-1/5'>FAQ</li>
                        <li className='w-1/5'>Terms of Use</li>
                        <li className='w-1/5'>Privacy</li>
                        <li className='w-1/5'>Cookie Preferences</li>
                        <li className='w-1/5'>Ad Choices</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <p>Language Dropdown</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;