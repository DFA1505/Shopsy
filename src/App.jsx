import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import PopUp from './components/PopUp/PopUp'


const App = () => {

  const [orderPopUp,SetOrderPopUp] = useState(false)

  const handleOrderPopUp = () =>{
    SetOrderPopUp(!orderPopUp)
  }

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh()
  },[])
  
  return (
    <div className='dark:bg-gray-700'>
      <Navbar handleOrderPopUp={handleOrderPopUp} />
      <Hero handleOrderPopUp={handleOrderPopUp} />
      <Products />
      <TopProducts handleOrderPopUp={handleOrderPopUp} />
      <Banner />
      <Subscribe />
      <Testimonial />
      <Footer />
      <PopUp orderPopUp={orderPopUp} SetOrderPopUp={SetOrderPopUp}/>
    </div>
  )
}

export default App
