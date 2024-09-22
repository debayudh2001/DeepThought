import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="w-full h-24 bg-[#f0f0f0] shadow-xl flex items-center justify-center space-x-[800px]">
        <div className="w-80 h-12 hover:cursor-pointer">
          <img src='src\assets\logo 1.png' alt="log" />
        </div>
        <div className="w-80 h-12 flex items-center justify-evenly">
          <div className='hover:cursor-pointer'><img src='src\assets\Group 1097.png' alt='Home' /></div>
          <div className='hover:cursor-pointer'><img src='src\assets\Group 1100.png' alt='Settings' /></div>
          <div className='relative hover:cursor-pointer'>
            <img src='src\assets\Vector.png' alt='Notifications' />
            <span className='absolute top-[7px] right-[7px]'><img src='src\assets\Ellipse 55.png' alt='Dot' /></span>
          </div>
          <div className='hover:cursor-pointer'><img src='src\assets\Ellipse 53.png' alt='Profile' /></div>
          <span className="material-symbols-outlined text-[#3683F0] hover:cursor-pointer">more_vert</span>
        </div>
      </div>
    </>
  )
}

export default Navbar


