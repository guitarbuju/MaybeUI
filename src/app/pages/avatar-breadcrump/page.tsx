import React from 'react'
import MyTabs from "@/components/PageComponents/Tabs";
import Preview from '@/components/avatar-breadcrumb/avatar/Preview';
import Code from '@/components/avatar-breadcrumb/avatar/Code';
import BreadPreview from '@/components/avatar-breadcrumb/breadcrumb/Preview';
import BreadCode from '@/components/avatar-breadcrumb/breadcrumb/Code';

const avatarBreadcrump = () => {
  return (
    <div>
    <div className=" flex flex-col text-5xl text-white font-bold leading-snug mb-4">
      <span>Avatar</span> <span className="-mt-6">Breadcrumb</span>
    </div>

    <div className=" flex flex-col items-center gap-10 h-full w-full p-2">
     
        <MyTabs Preview={<Preview />} Code={<Code />} />
        <MyTabs Preview={<BreadPreview />} Code={<BreadCode />} />
      
    </div>
  </div>
  )
}

export default avatarBreadcrump