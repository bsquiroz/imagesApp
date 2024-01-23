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
import { ImageSelect } from "./imagesApp/components/imageSelect";
import { useImageStore } from "./imagesApp/store/imageStore";

export const App = () => {
  const showModal = useImageStore((state) => state.showModal);
  return (
    <Layout>
      {showModal ? (
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
      ) : (
        <ImageSelect />
      )}
    </Layout>
  );
};
