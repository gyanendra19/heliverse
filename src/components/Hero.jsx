import React from 'react'

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col relative z-[100] md:w-11/12 justify-between text-center md:px-12 py-12 md:py-24 text-white">
          <div className="flex flex-col gap-4">
            <p className="text-lg text-gradient font-semibold">Tranform <br /> Your Website</p>
            <p>With Motion <br /> Art Effect</p>
          </div>

          <div className="md:w-[68%] w-10/12 mx-auto flex flex-col mr-7 gap-3">
            <p className="md:text-[56px] text-[35px] leading-[60px] md:leading-[75px] font-medium text-white">Attract Your Visitors Attention With Colorful <span className="text-gradient">Motion Art Effect</span></p>
            <p className="text-gray-400 leading-7">Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
          </div>
        </div>
  )
}

export default Hero