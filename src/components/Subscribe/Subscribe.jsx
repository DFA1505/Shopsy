import React from 'react'
import Banner from "../../assets/BannerImage/BannerImage.jpg"



const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className=' dark:bg-[#68471a] text-white mb-20 bg-gradient-to-r from-secondary to-primary dark:bg-none'>
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-5 max-w-xl mx-auto'>
            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
            <input type="text" data-aos="fade-up" placeholder='Enter your email' className='w-full p-3 rounded-md dark:bg-gray-800 dark:border-gray-500'/>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
