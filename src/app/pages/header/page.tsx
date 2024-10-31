import React from 'react'
import MyTabs from "@/components/PageComponents/Tabs";
import HeaderPreview from '@/components/header/header1/Preview';
import HeaderCode from '@/components/header/header1/Code';
import HeaderPreview2 from '@/components/header/header2/Preview';
import HeaderCode2 from '@/components/header/header2/Code';

const header = () => {
  return (
    <div>
    <div className=" flex flex-col text-5xl text-white font-bold leading-snug mb-4">
      <span>Header</span> <span className="-mt-6">Components</span>
    </div>

    <div className=" flex flex-col gap-10 h-full sm:w-[400px] lg:w-[600px] xl:w-[900px] p-2">
     
        <MyTabs Preview={<HeaderPreview />} Code={<HeaderCode />} />
        <MyTabs Preview={<HeaderPreview2 />} Code={<HeaderCode2 />} />
        
      
    </div>
  </div>
  )
}

export default header