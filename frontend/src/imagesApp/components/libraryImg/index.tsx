import { useLibraryImage } from "@/imagesApp/hooks/useLibraryImage";
import { ScrollArea } from "@/components/ui/scroll-area";

export const LibraryImg = () => {
  const { queryLibraryImage } = useLibraryImage();

  if (queryLibraryImage.isLoading) return <div>Loading...</div>;

  if (!queryLibraryImage.data?.status)
    return (
      <div>Something went wrong while we were waiting for the images.</div>
    );

  if (!queryLibraryImage.data?.data.length)
    return <div>There are no images to show, go upload images.</div>;

  return (
    <ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
      <section className="grid grid-cols-2 gap-2">
        {queryLibraryImage.data?.data.map((image, i) => (
          <article
            key={i}
            className="cursor-pointer flex justify-center border-2 hover:border-primary rounded-sm overflow-hidden p-2"
          >
            <img src={image.data} alt={image.name} />
          </article>
        ))}
      </section>
    </ScrollArea>
  );
};
