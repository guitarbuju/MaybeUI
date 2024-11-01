import React from 'react'
import MyTabs from "@/components/PageComponents/Tabs";
import Preview from '@/components/button/Preview';
import Code from '@/components/button/Code';


const buttonPage = () => {
  return (
    <div className='w-[900px]'>
    <div className=" flex flex-col items-start text-5xl text-white font-bold leading-snug mb-4 ">
      <span>Buttons</span> <span className="-mt-6">Components</span>
    </div>

    <div className=" flex flex-col items-start gap-10 h-full  p-2">
     
        <MyTabs Preview={<Preview />} Code={<Code />} />
        
      
    </div>
  </div>
  )
}

export default buttonPage