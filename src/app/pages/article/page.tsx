import Preview from "@/components/articleComp/Preview";
import Code from "@/components/articleComp/Code";
import MyTabs from "@/components/PageComponents/Tabs";

const ArticleComp = () => {
  return (
    <div className="md:mt-10">
      <div className=" flex flex-col items-center text-5xl text-white font-bold leading-snug mb-4">
        <span>Article</span> <span className="-mt-6 ">Components</span>
      </div>

      <div className="flex flex-col items-start gap-8 h-full p-2">
        <div>
          <MyTabs Preview={<Preview />} Code={<Code />} />
        </div>
      </div>
    </div>
  );
};

export default ArticleComp;
