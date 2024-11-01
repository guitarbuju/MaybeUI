import React from 'react'
import MyTabs from "@/components/PageComponents/Tabs";
import Preview from '@/components/blog/blog1/Preview';
import Code from '@/components/blog/blog1/Code';
import Blog2Preview from '@/components/blog/blog2/Preview';
import Blog2Code from '@/components/blog/blog2/Code';


const buttonPage = () => {
  return (
    <div className='w-[1000px]'>
    <div className=" flex flex-col items-start text-5xl text-white font-bold leading-snug mb-4 ">
      <span>Blog</span> <span className="-mt-6">Components</span>
    </div>

    <div className=" flex flex-col items-start gap-10 h-full  p-2">
     
        <MyTabs Preview={<Preview />} Code={<Code />} />
        <MyTabs Preview={<Blog2Preview />} Code={<Blog2Code />} />
        
      
    </div>
  </div>
  )
}

export default buttonPage