import React from 'react'
import MyTabs from "@/components/PageComponents/Tabs";
import Preview from '@/components/banner/banner1/Preview';
import Code from '@/components/banner/banner1/Code';
import BannerPreview from '@/components/banner/banner2/Preview';
import BannerCode from '@/components/banner/banner2/Code';

const avatarBreadcrump = () => {
  return (
    <div className='w-[900px]'>
    <div className=" flex flex-col items-start text-5xl text-white font-bold leading-snug mb-4 ">
      <span>Banner</span> <span className="-mt-6">Components</span>
    </div>

    <div className=" flex flex-col items-start gap-10 h-full w-[400px] lg:w-[600px] xl:w-[900px] p-2">
     
        <MyTabs Preview={<Preview />} Code={<Code />} />
        <MyTabs Preview={<BannerPreview />} Code={<BannerCode />} />
      
    </div>
  </div>
  )
}

export default avatarBreadcrump