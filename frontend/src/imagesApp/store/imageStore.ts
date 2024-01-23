import { create } from "zustand";

type Store = {
  imgId?: string;
  showModal: boolean;
  setImgId: (id?: string) => void;
  setShowModal: (value: boolean) => void;
};

export const useImageStore = create<Store>()((set) => ({
  imgId: undefined,
  showModal: true,
  setImgId: (id) => set(() => ({ imgId: id })),
  setShowModal: (value) => set(() => ({ showModal: value })),
}));
