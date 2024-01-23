import { useImageStore } from "@/imagesApp/store/imageStore";

export const AnimationSping = () => {
  const showAnimationTab = useImageStore((state) => state.showAnimationTab);
  return showAnimationTab ? (
    <span className="relative flex h-2 w-2 bottom-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
    </span>
  ) : (
    <div></div>
  );
};
