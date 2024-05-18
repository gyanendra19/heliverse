import React from 'react'

const Hero = () => {
  return (
    <div className="flex relative z-[100] w-11/12 justify-between px-12 py-24 text-white">
          <div className="flex flex-col gap-4">
            <p className="text-lg text-gradient font-semibold">Tranform <br /> Your Website</p>
            <p>With Motion <br /> Art Effect</p>
          </div>

          <div className="w-[68%] flex flex-col mr-7 gap-3">
            <p className="text-[56px] leading-[75px] font-medium text-white">Attract Your Visitors Attention With Colorful <span className="text-gradient">Motion Art Effect</span></p>
            <p className="text-gray-400 leading-7">Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
          </div>
        </div>
  )
}

export default Hero