import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { assetTabs } from "@/types/tabs";
import AllTab from "./AllTab";
import BandwitdhTab from "./BandwitdhTab";
import DomainTab from "./DomainTab";
import ServerTab from "./ServerTab";
import StorageTab from "./StorageTab";

const AssetsPage = () => {
  return (
    <main className="flex h-full flex-col w-full p-2 lg:p-6">
      <Tabs defaultValue="all" className="w-full space-y-2 lg:space-y-6">
        <TabsList>
          {assetTabs.map((item) => (
            <TabsTrigger key={item.value} value={item.value}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent
          value="all"
          className="flex flex-1 flex-col gap-4 md:gap-8"
        >
          <AllTab />
        </TabsContent>
        <TabsContent value="server">
          <ServerTab />
        </TabsContent>
        <TabsContent value="domain">
          <DomainTab />
        </TabsContent>
        <TabsContent value="bandwidth">
          <BandwitdhTab />
        </TabsContent>
        <TabsContent value="storage">
          <StorageTab />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default AssetsPage;
