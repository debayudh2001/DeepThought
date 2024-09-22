import React from 'react'

const TbContent = () => {
  return (
    <>
      <div className='w-full h-fit bg-[#FDFDFD] flex flex-col gap-6'>
        <div className='w-full h-[40px] bg-[#FEFFC0]/20 flex items-center gap-24'>
          <span className="material-symbols-outlined text-3xl">keyboard_arrow_up</span>
          <span className='font-sans font-bold text-[20px] text-[#000000]'>Thread A</span>
        </div>
        <div className='w-full h-fit flex items-center justify-evenly'>
          <div className='w-[200px] h-[95px] rounded-[10px] drop-shadow-lg bg-[#F7F7F7]'>
            <span className='font-sans font-medium text-[12px] pl-2'>Sub thread 1</span>
            <input type='text' placeholder='Enter Text here' className='w-full h-[70px] rounded-[10px] font-sans font-normal text-[12px] pl-2 outline-none' /> 
          </div>
          <div className='w-[200px] h-[95px] rounded-[10px] drop-shadow-lg bg-[#F7F7F7]'>
            <span className='font-sans font-medium text-[12px] pl-2'>Sub Interpretation 1</span>
            <input type='text' placeholder='Enter Text here' className='w-full h-[70px] rounded-[10px] font-sans font-normal text-[12px] pl-2 outline-none' />
          </div>
        </div>
        <div className='flex w-[80%] gap-6 items-center ml-24'>
          <div className='flex gap-4 h-[20px]'>
            <img className='hover:cursor-pointer' src='/Vector.png' />
            <img className='hover:cursor-pointer' src='/Vector (1).png' />
            <img className='hover:cursor-pointer' src='/Vector (2).png' />
            <img className='hover:cursor-pointer' src='/Vector (3).png' />
          </div>
          <select className='w-[91px] h-[32px] text-[10px] font-semibold outline-none drop-shadow-lg rounded-[5px] px-1'>
            <option className='font-semibold text-[10px]'>Select Category</option>
            <option className='font-semibold text-[10px]'>Item 1</option>
          </select>
          <select className='w-[91px] h-[32px] text-[10px] font-semibold outline-none drop-shadow-lg rounded-[5px] px-1'>
            <option className='font-semibold text-[10px]'>Select Process</option>
            <option className='font-semibold text-[10px]'>Item 1</option>
          </select>
        </div>
        <button className='w-[100px] h-[36px] rounded-lg bg-[#0029FF] text-[#FFFFFF] text-[12px] font-medium ml-8 mt-2 flex items-center gap-1 px-1'><span className="material-symbols-outlined text-[15px]">add</span>Sub-thread</button>
        <div className='w-[420px] h-[108px] rounded-[10px] drop-shadow-lg bg-[#F7F7F7] ml-8'>
            <span className='font-sans font-medium text-[12px] pl-2'>Summary for Thread A</span>
            <input type='text' placeholder='Enter Text here' className='w-full h-[83px] rounded-[10px] font-sans font-normal text-[12px] pl-2 outline-none' /> 
        </div>
      </div>
    </>
  )
}

export default TbContent


