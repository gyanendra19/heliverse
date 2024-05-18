import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full mt-8 h-[50px] flex items-center relative z-[90] justify-between px-8 bg-gradient-tertiary">
          <p className="text-white text-sm">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
          <div className="flex gap-3 text-sm text-white">
            <p>Documentation</p>
            <p>Support</p>
          </div>
        </footer>
  )
}

export default Footer