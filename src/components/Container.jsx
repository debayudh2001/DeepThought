import React from 'react'
import TpmContent from './TpmContent'
import TbContent from './TbContent'
import SypContent from './SypContent'
import SamContent from './SamContent'

const Container = ({item}) => {
  return (
    <>
      <div className='w-[480px] h-[580px] rounded-[15px] bg-[#FDFDFD] drop-shadow-2xl' key={item.asset_id}>
          <div className='w-full h-[50px] rounded-t-[15px] bg-[#000000] relative '>
              <div className='font-semibold text-[16px] font-sans text-[#FFFFFF] text-center pt-[13px]'>{item.asset_title}</div>
              <img src='src\assets\Group 1735.png' alt='i' className='absolute right-6 top-4 hover:cursor-pointer'/>
          </div>
          <div className='w-full h-[98px] bg-[#FDFDFD] border-b-2 border-slate-200 flex items-center px-6 text-[14px]'>Description: {item.asset_description}</div>
          {item.asset_content_type === 'video' ? <TpmContent /> : ''}
          {item.asset_content_type === 'threadbuilder' ? <TbContent /> : ''}
          {item.asset_content_type === 'article1' ? <SypContent /> : ''}
          {item.asset_content_type === 'article2' ? <SamContent /> : ''}
      </div>
    </>
  )
}

export default Container


