import React from 'react'

const SypContent = () => {
  return (
    <>
      <div className='w-full h-fit bg-[#FDFDFD] flex flex-col gap-5'>
        <span className='font-sans font-semibold text-[16px] mt-9 ml-9'>Title</span>
        <input type='text' className='w-[422px] h-[43px] rounded-[5px] bg-[#FCFBFB] drop-shadow-xl outline-none ml-8 px-2'/>
        <span className='font-sans font-semibold text-[16px] ml-9 mt-5'>Content</span>
        <div className='w-[422px] h-[213px] ml-8 bg-[#FCFBFB] rounded-[5px] drop-shadow-xl'>
            <div className='w-full h-[80px] bg-[#FCFBFB] rounded-t-[5px] drop-shadow-lg flex flex-col items-center justify-center gap-3'>
                <div className='w-full flex items-center justify-evenly'>
                  <span className='text-[12px] font-normal text-[#616161] hover:cursor-pointer'>File</span>
                  <span className='text-[12px] font-normal text-[#616161] hover:cursor-pointer'>Edit</span>
                  <span className='text-[12px] font-normal text-[#616161] hover:cursor-pointer'>View</span>
                  <span className='text-[12px] font-normal text-[#616161] hover:cursor-pointer'>Insert</span>
                  <span className='text-[12px] font-normal text-[#616161] hover:cursor-pointer'>Format</span>
                  <span className='text-[12px] font-normal text-[#616161] hover:cursor-pointer'>Tools</span>
                  <span className='text-[12px] font-normal text-[#616161] hover:cursor-pointer'>Table</span>
                  <span className='text-[12px] font-normal text-[#616161] hover:cursor-pointer'>Help</span>
                </div>
                <div className='w-full flex items-center justify-evenly'>
                  <span className="material-symbols-outlined text-[#616161] hover:cursor-pointer">turn_left</span>
                  <span className="material-symbols-outlined text-[#616161] hover:cursor-pointer">turn_right</span>
                  <span className="material-symbols-outlined text-[#616161] hover:cursor-pointer">zoom_out_map</span>
                  <input type='text' placeholder='Paragraph' className='w-[102px] h-[18px] bg-[#EBEBEB] outline-none px-1 font-normal text-[12px]' />
                  <span className="material-symbols-outlined text-[#616161] hover:cursor-pointer">more_horiz</span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SypContent

