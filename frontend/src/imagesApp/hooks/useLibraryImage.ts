import { useQuery } from "@tanstack/react-query";
import { getImage } from "../services/actions";

export const useLibraryImage = (id: string) => {
  const queryLibraryImage = useQuery({
    queryKey: ["libraryImage"],
    queryFn: () => getImage(id),
  });

  return { queryLibraryImage };
};
