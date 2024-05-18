import React from 'react'
import { RiArrowRightLine } from '@remixicon/react'

const Ratings = () => {

    const ratingBox = (photo) => {
        return <div className="flex gap-3 items-center">
        <img src={`./${photo}.png`} alt="" />
        <div className="flex flex-col gap-3">
          <img src="./stars.png" alt="" />
          <p className="text-gray-400 font-semibold text-sm">4.5 score, 9 reviews</p>
        </div>
      </div>
    }
  return (
    <>
     <div>
          <p className="w-fill text-center pb-14 text-lg text-white font-medium tracking-wide">Trusted by thousands of users around the world</p>
          <div className="flex justify-between px-12">
           {ratingBox('rating3')}
           {ratingBox('rating2')}
           {ratingBox('rating1')}
          </div>
        </div>

        <div className="flex justify-between pt-28 pb-10 px-10 relative z-[100]">
          <div className="flex flex-col gap-6 basis-3/5">
            <p className="text-4xl leading-[52px] font-semibold text-white">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
            <p className="text-gray-400 leading-8">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            <button className="px-6 py-4 w-fit flex items-center gap-3 rounded-2xl text-xl text-white bg-gradient-primary">Purcahse from Envato <RiArrowRightLine color='white' /></button>
          </div>

          <img src="./magic.png" alt="" />
        </div>

    </>
  )
}

export default Ratings