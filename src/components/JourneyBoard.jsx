import React, {useState} from 'react'
import list from '../list'

const JourneyBoard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${isOpen ? 'w-[392px]' : 'w-[130px]'} h-[742px] absolute left-0 rounded-tr-[20px] rounded-br-[20px] drop-shadow-2xl bg-[#FDFDFD] transition-all duration-700`}>
            <div className='w-full h-[50px] bg-[#000000] rounded-tr-[20px] flex justify-between items-center px-4 relative'>
                <span className={`${isOpen ? 'block' : 'hidden'} font-semibold text-[16px] text-[#ffffff]`}>Journey Board</span>
                <div className={`w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center hover:cursor-pointer ${isOpen ? '' : 'absolute right-4'}`} onClick={toggleSidebar}>
                    {isOpen ? <span className="material-symbols-outlined font-semibold text-lg">arrow_back</span> :
                    <span className="material-symbols-outlined font-semibold text-lg">arrow_forward</span>} 
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} w-full h-full bg-[#FDFDFD] rounded-br-[20px] pt-9 flex justify-center`}>
                <ul>
                    <li className='font-semibold text-[16px] list-disc mb-6 hover:cursor-pointer'>Explore the world of management</li>
                    {list.map((item) => (
                        <li key={item.asset_id} className='text-[16px] font-normal list-disc pl-6'>{item.asset_title}</li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}

export default JourneyBoard


