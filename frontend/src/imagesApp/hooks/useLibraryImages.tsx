import { useQuery } from "@tanstack/react-query";
import { getImages } from "../services/actions";

export const useLibraryImages = () => {
  const queryLibraryImages = useQuery({
    queryKey: ["libraryImage"],
    queryFn: () => getImages(),
  });

  return { queryLibraryImages };
};
