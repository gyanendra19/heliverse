import React from 'react'

const Header = () => {
  return (
    <>
    <nav className='w-full h-[54px] bg-[#262626] fixed z-[1000] px-5 flex items-center justify-between'>
          <img className="h-[18px]" src="./envato_market.svg" alt="" />
          <button className="px-5 py-1.5 bg-[#82b440] text-sm text-white rounded-md">Buy now</button>
        </nav>

        <div className="w-full relative z-10 pt-20 px-14 pb-6 flex justify-between items-center">
          <img className="h-12" src="./motion-logo.png" alt="logo" />
          <button className="px-7 py-3 bg-white transition-all text-black duration-300 rounded-md hover:bg-transparent hover:text-white border-2 border-white">Purchase Now</button>
        </div>
    </>
  )
}

export default Header