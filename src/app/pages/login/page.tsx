import Code from "@/components/login/login1/Code";
import Preview from "@/components/login/login1/Preview";
import LoginCode2 from "@/components/login/login2/Code";
import LoginPreview2 from "@/components/login/login2/Preview";
import MyTabs from "@/components/PageComponents/Tabs";

const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col text-5xl text-white font-bold leading-snug mb-4">
        <span >
          Login
        </span>{" "}
        <span className="-mt-6">Components</span>
      </div>

      
    <div className=" grid grid-cols-1 lg:grid-cols-2 items-start gap-4 min-h-screen sm:w-[400px] md:w-[600px] lg:w-[900px] p-2">
     
     <MyTabs Preview={<Preview />} Code={<Code />} />
     <MyTabs Preview={<LoginPreview2 />} Code={<LoginCode2 />} />
     
     
   
 </div>
    </div>
  );
};

export default Footer;
