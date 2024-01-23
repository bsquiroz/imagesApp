import { imagesAppApi } from "../api/imagesAppApi";
import { Image, Images } from "../interfaces/images";

export const getImages = async (): Promise<Images> => {
  const { data } = await imagesAppApi<Images>(`/images`);
  return data;
};

export const getImage = async (id: string): Promise<Image> => {
  const { data } = await imagesAppApi<Image>(`/images/${id}`);
  return data;
};
