import React from 'react'

const Support = () => {
  return (
    <>
      <div className="relative z-[100] md:px-16">
          <p className="md:w-1/2 mx-auto pt-20 text-4xl leading-[44px] text-center text-white">Apply On Any Section Or Enable For Whole Page</p>

          <div className="flex w-11/12 mx-auto md:w-full md:flex-row flex-col md:gap-8 py-10 md:py-20">
            <div className="flex border-2 border-[#FFFFFF10] flex-col gap-8 h-fit rounded-2xl bg-transparent bg-gradient-secondary p-8 basis-1/2">
              <h2 className="text-2xl font-medium text-white">Apply on Section</h2>
              <p className="text-gray-400">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
              <img src="./section.png" alt="" />
            </div>
            <div className="flex mt-14 border-2 border-[#FFFFFF10] flex-col gap-8 rounded-2xl bg-transparent bg-gradient-secondary p-8 basis-1/2">
              <h2 className="text-2xl font-medium text-white">Apply on Page</h2>
              <p className="text-gray-400">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
              <img src="./page.png" alt="" />
            </div>
          </div>
        </div>


        <div className="w-full md:py-16 py-10 relative z-50">
          <div className="w-11/12 items-center py-14 mx-auto rounded-3xl border-2 border-[#FFFFFF10] bg-transparent bg-gradient-secondary flex flex-col gap-5">
            <p className="text-2xl text-center text-white">Supported by All Popular Browsers</p>
            <p className="md:w-[40%] w-8/12 md:text-md text-xl leading-9 text-center text-gray-400">Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
            <img className="md:w-4/12 w-10/12 mt-4 md:mt-0" src="./browser.png" alt="" />
          </div>
        </div>
    </>
  )
}

export default Support