import { useLibraryImages } from "@/imagesApp/hooks/useLibraryImages";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useImageStore } from "@/imagesApp/store/imageStore";

export const LibraryImg = () => {
  const { queryLibraryImages } = useLibraryImages();

  const setImgId = useImageStore((state) => state.setImgId);
  const setShowModal = useImageStore((state) => state.setShowModal);

  const handleClickImage = (id: string) => {
    setImgId(id);
    setShowModal(false);
  };

  if (queryLibraryImages.isLoading) return <div>Loading...</div>;

  if (!queryLibraryImages.data?.status)
    return (
      <div>Something went wrong while we were waiting for the images.</div>
    );

  if (!queryLibraryImages.data?.data.length)
    return <div>There are no images to show, go upload images.</div>;

  return (
    <ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
      <section className="grid grid-cols-2 gap-2">
        {queryLibraryImages.data?.data.map((image, i) => (
          <article
            key={i}
            className="cursor-pointer flex justify-center border-2 hover:border-primary rounded-sm overflow-hidden p-2"
            onClick={() => handleClickImage(image._id)}
          >
            <img src={image.data} alt={image.name} />
          </article>
        ))}
      </section>
    </ScrollArea>
  );
};
