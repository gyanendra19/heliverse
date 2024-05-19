import React from 'react'

const featureBox = (photo, text1, text2) => {
    return <div className="basis-1/3 rounded-2xl bg-transparent bg-gradient-secondary border-2 border-[#FFFFFF10] py-10 px-6">
        <img src={`./${photo}.png`} alt="" />
        <h2 className="pt-12 pb-5 text-2xl text-white font-medium">{text1}</h2>
        <p className="text-gray-400">{text2}</p>
      </div>
}

const Features = () => {
  return (
    <div className="w-full py-16 relative z-50 flex flex-col gap-6">
    <p className="md:w-[48%] w-11/12 mx-auto text-center text-4xl text-white">An All-Round Plugin With Powerful Features</p>
    <p className="md:w-[46%] text-lg md:text-md leading-9 w-11/12 mx-auto text-center md:leading-7 text-gray-400">Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
    <div className="flex md:flex-row flex-col w-11/12 pt-10 mx-auto gap-6">
        {featureBox('light', 'Light Weight', 'Motion Art for Elementor is designed to be lightweight.')}
        {featureBox('thumb', '100% Responsive', 'Create a consistent visual experience across all devices.')}
        {featureBox('moon', 'User Friendly Interface', 'Ensure a smooth experience for both applicants and administrators.')}
    </div>
  </div>
  )
}

export default Features