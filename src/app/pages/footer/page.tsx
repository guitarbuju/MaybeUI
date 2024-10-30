import Code from "@/components/footer/footer1/Code";
import Preview from "@/components/footer/footer1/Preview";
import Code2 from "@/components/footer/footer2/Code";
import Preview2 from "@/components/footer/footer2/Preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col text-5xl text-white font-bold leading-snug mb-4">
        <span >
          Footer
        </span>{" "}
        <span className="-mt-6">Components</span>
      </div>

      <div className="flex flex-col items-center gap-8 h-full p-2">
        <div>
          <Tabs defaultValue="preview" className="w-[800px] ">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <Preview />
            </TabsContent>
            <TabsContent value="code">
              <Code />
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <Tabs defaultValue="preview" className="w-[800px] ">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <Preview2 />
            </TabsContent>
            <TabsContent value="code">
              <Code2 />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Footer;
