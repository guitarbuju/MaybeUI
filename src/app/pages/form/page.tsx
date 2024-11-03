import Code from "@/components/form/Code";
import Preview from "@/components/form/Preview";
import MyTabs from "@/components/PageComponents/Tabs";

const Footer = () => {
  return (
    <div >
      <div className=" flex flex-col text-5xl text-white font-bold leading-snug mb-4">
        <span >
          Form
        </span>{" "}
        <span className="-mt-6">Components</span>
      </div>

      
    <div className=" flex flex-col items-start gap-10 h-full sm:w-[400px] md:w-[800px] lg:w-full p-2">
     
     <MyTabs Preview={<Preview />} Code={<Code />} />
     
     
   
 </div>
    </div>
  );
};

export default Footer;
