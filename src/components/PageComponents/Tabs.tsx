import { Tabs as UITabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from 'react';

const MyTabs = ({
  Preview,
  Code,
}: {
  Preview: React.ReactNode;
  Code: React.ReactNode;
}) => {
  return (
    <UITabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        {Preview} {/* Render Preview component here */}
      </TabsContent>
      <TabsContent value="code">
        {Code} {/* Render Code component here */}
      </TabsContent>
    </UITabs>
  );
};

export default MyTabs;
