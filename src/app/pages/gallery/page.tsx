import Preview from "@/components/gallery/gallery1/Preview";
import Code from "@/components/gallery/gallery1/Code";
import GalleryPreview2 from "@/components/gallery/gallery2/Preview";
import GalleryCode2 from "@/components/gallery/gallery2/Code";
import MyTabs from "@/components/PageComponents/Tabs";

const ArticleComp = () => {
  return (
    <div>
      <div className=" flex flex-col items-center text-5xl text-white font-bold leading-snug mb-4">
        <span>Gallery</span> <span className="-mt-6">Components</span>
      </div>

      <div className="flex flex-col items-start gap-10 h-full p-2">
        <div>
          <MyTabs Preview={<Preview />} Code={<Code />} />
          <MyTabs Preview={<GalleryPreview2 />} Code={<GalleryCode2/>} />
        </div>
      </div>
    </div>
  );
};

export default ArticleComp;
