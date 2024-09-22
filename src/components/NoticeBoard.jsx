import React from 'react'

const NoticeBoard = () => {
  return (
    <>
      <div className='w-[95px] h-[394px] rounded-tl-[30px] rounded-bl-[30px] absolute right-0 bg-[#FDFDFD] drop-shadow-2xl'>
            <div className='w-[50px] h-[394px] rounded-tl-[30px] rounded-bl-[30px] bg-[#000000] flex flex-col items-center justify-center gap-7'>
                <img src='src\assets\Icon.png' />
                <div className="text-white text-base font-normal tracking-tight">N<br/>o<br/>t<br/>i<br/>c<br/>e<br/><br/>B<br/>o<br/>a<br/>r<br/>d</div>
            </div>
        </div>
    </>
  )
}

export default NoticeBoard


