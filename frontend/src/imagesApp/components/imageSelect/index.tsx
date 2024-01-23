import { Button } from "@/components/ui/button";
import { useLibraryImage } from "@/imagesApp/hooks/useLibraryImage";
import { useImageStore } from "@/imagesApp/store/imageStore";

export const ImageSelect = () => {
  const imgId = useImageStore((state) => state.imgId);
  const { queryLibraryImage } = useLibraryImage(imgId!);

  const setImgId = useImageStore((state) => state.setImgId);
  const setShowModal = useImageStore((state) => state.setShowModal);

  const handleClick = () => {
    setImgId();
    setShowModal(true);
  };

  if (queryLibraryImage.isLoading) return <div>Loading...</div>;

  if (!queryLibraryImage.data?.status)
    return <div>Something went wrong while we were waiting for the image.</div>;

  const image = queryLibraryImage.data.data;

  return (
    <article className="grid gap-2">
      <figure className="max-w-sm">
        <img src={image.data} alt={image.name} />
      </figure>
      <h2 className="font-bold text-2xl text-center">{image.name}</h2>

      <Button onClick={handleClick}>Close</Button>
    </article>
  );
};
