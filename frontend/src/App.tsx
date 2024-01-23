import { Layout } from "./components/Layout";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { LibraryImg } from "./imagesApp/components/libraryImg";
import { FormImage } from "./imagesApp/components/formImage";

export const App = () => {
  return (
    <Layout>
      <Dialog>
        <DialogTrigger>Show library</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              what do you want to do?
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="library">Show images</TabsTrigger>
              <TabsTrigger value="upload">Upload image</TabsTrigger>
            </TabsList>
            <TabsContent value="library">
              <LibraryImg />
            </TabsContent>
            <TabsContent value="upload">
              <FormImage />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};
