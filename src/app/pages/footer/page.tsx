import Code from "@/components/footer/footer1/Code";
import Preview from "@/components/footer/footer1/Preview";
import FooterCode2 from "@/components/footer/footer2/Code";
import FooterPreview2 from "@/components/footer/footer2/Preview";
import MyTabs from "@/components/PageComponents/Tabs";

const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col text-5xl text-white font-bold leading-snug mb-4">
        <span >
          Footer
        </span>{" "}
        <span className="-mt-6">Components</span>
      </div>

      
    <div className=" flex flex-col items-start gap-10 h-full w-screen">
     
     <MyTabs Preview={<Preview />} Code={<Code />} />
     <MyTabs Preview={<FooterPreview2 />} Code={<FooterCode2 />} />
     
   
 </div>
    </div>
  );
};

export default Footer;
