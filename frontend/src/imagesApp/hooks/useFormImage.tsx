import { useMutation } from "@tanstack/react-query";
import { createImage } from "../services/actions";

export const useFormImage = () => {
  const mutationCreateImg = useMutation({
    mutationFn: (formData: FormData) => {
      return createImage(formData);
    },
  });

  return { mutationCreateImg };
};
