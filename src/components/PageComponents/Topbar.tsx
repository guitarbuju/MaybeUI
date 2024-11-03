import React from 'react'
import { getSidebarLinks } from "@/lib/getSidebarLinks";
import Link from "next/link";
import { Button} from "@/components/ui/button";

const TopBar = () => {

    
        const links = getSidebarLinks();
       

  return (
   <div className=" md:hidden w-full mt-32 flex justify-center flex-wrap bg-gray-700 text-gray-50 p-4">
   {links.map((link, index) => (
     <div
       key={index}
       className="w-30 p-1" // Sets each item to take up 1/4th of the width (4 columns)
     >
       <Button variant="link" className="w-20 bg-gray-900 text-gray-50 text-xs">
         <Link href={link.path}>{link.name}</Link>
       </Button>
     </div>
   ))}
 </div>
 
  )
}

export default TopBar