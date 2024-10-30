import Image from "next/image";
import React from "react";
import World from "../../../public/icons8-world-50.png"
import Pc from "../../../public/icons8-computer-48.png"
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-screen  h-20 p-4 left-0 top-0 flex justify-between  bg-violet-400">
      <div className="flex justify-around gap-4">
        <h1 className="font-bowlby text-5xl text-violet-600">MaybeUI</h1>
      <Image src={Pc} alt='' width={60} />
      </div>
      
      <div className="flex justify-around gap-4">
        <Navbar/>
        <Image src={World} alt="" className="mr-4"/>
      </div>
      
    </div>
  );
};

export default Header;
