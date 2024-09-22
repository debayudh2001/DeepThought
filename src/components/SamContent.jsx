import React from 'react'

const SamContent = () => {
  return (
    <>
       <div className='w-full h-fit bg-[#FDFDFD] flex flex-col relative'>
          <div className='w-[434px] h-[43px] bg-[#F2F2F2] flex gap-2 items-center pl-4 mx-6'>
            <span className="material-symbols-outlined text-3xl">keyboard_arrow_up</span>
            <span className='font-sans font-bold text-[16px]'>Introduction</span>
          </div>
          <span className='font-sans font-medium text-[14px] mt-5 mx-9'>The 4SA Method , How to bring a idea into progress ?</span>
          <span className='font-sans font-semibold text-[14px] text-[#606161] absolute top-28 right-9'>See More</span>
          <div className='w-[434px] h-[43px] bg-[#FCFCFC] border-[#D9D7D7] border-2 mt-16 mx-6 flex gap-2 items-center pl-4'>
            <span className="material-symbols-outlined text-3xl">keyboard_arrow_up</span>
            <span className='font-sans font-bold text-[16px]'>Thread A</span>
          </div>
          <span className='font-sans font-medium text-[14px] mt-5 mx-9'>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</span>
          <span className='font-sans font-semibold text-[14px] text-[#606161] absolute top-72 right-9'>See More</span>
          <div className='w-[394px] h-[43px] bg-[#FCFCFC] border-[#D9D7D7] border-2 mt-16 ml-16 pl-4 flex items-center'>
            <span className='font-sans font-bold text-[16px]'>Example 1</span>
          </div>
          <span className='font-sans font-medium text-[14px] ml-20 mt-4'>You have a concept , How will you put into progress?</span>
       </div>
    </>
  )
}

export default SamContent


