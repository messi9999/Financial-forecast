import React from 'react'
import logo from './../src/logo/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="flex p-16 borderflex justify-between items-center text-white max-w-7xl gap-4 mx-auto border border-[#FFFFFF]/[0.16] px-4 py-2 rounded-lg w-[95%] inset-x-0 backdrop-blur-md z-50 shadow-lg">
          <div className="flex gap-5 items-center">
            <img src={logo} className="w-16 h-16 shadow-sm" alt="Logo" />
            <h1 className="text-[30px] font-bold cursor-pointer text-white/[0.9] hover:text-white/[0.64] transition duration-200">
              USD to JPY Forecast
            </h1>
          </div>
          <div className="flex items-center gap-16 pr-16">
            <Link to ='/news'>
              <p className="text-[20px] cursor-pointer text-white/[0.9] hover:text-white/[0.64] transition duration-200">
                News
              </p>
              </Link>
              <Link to='/'>
              <p className="text-[20px] cursor-pointer text-white/[0.9] hover:text-white/[0.64] transition duration-200 ">
                Forecast
              </p>
              </Link>
          </div>
    </div>
  )
}

export default Header