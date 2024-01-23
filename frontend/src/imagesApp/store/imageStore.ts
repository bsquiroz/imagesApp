import { create } from "zustand";

type Store = {
  imgId?: string;
  showModal: boolean;
  showAnimationTab: boolean;
  setImgId: (id?: string) => void;
  setShowModal: (value: boolean) => void;
  setShowAnimationTab: (value: boolean) => void;
};

export const useImageStore = create<Store>()((set) => ({
  imgId: undefined,
  showModal: true,
  showAnimationTab: false,
  setImgId: (id) => set(() => ({ imgId: id })),
  setShowModal: (value) => set(() => ({ showModal: value })),
  setShowAnimationTab: (value) => set(() => ({ showAnimationTab: value })),
}));
