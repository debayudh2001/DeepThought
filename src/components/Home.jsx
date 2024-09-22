import React from 'react'
import list from '../list'
import Container from './Container';
import NoticeBoard from './NoticeBoard';
import JourneyBoard from './JourneyBoard';


const Home = () => {
  
  return (
    <>
      <div className='w-full h-[1805px] flex flex-col gap-9 items-center mt-4 relative'>
        <div className='flex items-center justify-between w-[75%]'>
            <span className='font-bold text-[28px] text-[#0029FF]'>Technical Project Management</span>
            <button className='font-medium text-[12px] text-white bg-[#0029FF] w-[121px] h-[36px] rounded-[10px]'>Submit task</button>
        </div>
        <div className='w-[75%] h-[135px] bg-[#E9ECEF] rounded-[5px] flex flex-col gap-3 justify-center px-8'>
            <span className='font-bold text-[20px]'>Explore the world of management</span>
            <span className='font-normal text-[14px]'>As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</span>
        </div>
        <div className='grid grid-cols-2 gap-y-16 gap-x-20 mt-4'>
            {list.map((item) => (
                <Container key={item.asset_id} item={item} />
            ))}
        </div>
        <div className='flex flex-col gap-5 absolute bottom-6 right-6'>
            <div className='w-[85px] h-[85px] rounded-full bg-[#0029FF] flex items-center justify-center hover:cursor-pointer'><img src='src\assets\question-mark (2) 1.png' /></div>
            <div className='w-[85px] h-[85px] rounded-full bg-[#0029FF] flex items-center justify-center hover:cursor-pointer'><img src='src\assets\meeting 1.png' /></div>
            <div className='w-[85px] h-[85px] rounded-full bg-[#0029FF] flex items-center justify-center hover:cursor-pointer'><img src='src\assets\schedule (1) 1.png' /></div>
        </div>
        <NoticeBoard />
        <JourneyBoard />
      </div>
    </>
  )
}

export default Home


