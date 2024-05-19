import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full mt-8 md:h-[50px] h-[170px] flex md:flex-row flex-col md:items-center justify-evenly relative z-[90] md:justify-between px-8 bg-gradient-tertiary">
          <p className="text-white text-sm text-center">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
          <div className="flex justify-center w-11/12 gap-3 text-sm text-white">
            <p>Documentation</p>
            <p>Support</p>
          </div>
        </footer>
  )
}

export default Footer