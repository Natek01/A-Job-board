import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="w-full bg-[#3B455A] flex justify-evenly items-center text-white sticky top-0 px-10 py-10">
        <h1 >Explore your potential...</h1>
        <Navbar />
      
    </div>
  )
}

export default Header
