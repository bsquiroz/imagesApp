import { Layout } from "./components/Layout";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { LibraryImg } from "./components/libraryImg";
import { FormImage } from "./components/formImage";

export const App = () => {
  return (
    <Layout>
      <Dialog>
        <DialogTrigger>
          <Button>Show library</Button>
        </DialogTrigger>
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
