import { useQuery } from "@tanstack/react-query";
import { getImages } from "../services/actions";

export const useLibraryImage = () => {
  const queryLibraryImage = useQuery({
    queryKey: ["libraryImage"],
    queryFn: () => getImages(),
  });

  return { queryLibraryImage };
};
