import { useMutation } from "@tanstack/react-query";
import { createImage } from "../services/actions";
import { FormDataCreateImg } from "../interfaces/formDataCreateImg";
import { useRef, useState } from "react";
import { useImageStore } from "../store/imageStore";

import { toast } from "sonner";

const initialValues: FormDataCreateImg = {
  name: "",
  file: undefined,
};

export const useFormImage = () => {
  const mutationCreateImg = useMutation({
    mutationFn: (formData: FormData) => {
      return createImage(formData);
    },
  });

  const [values, setValues] = useState<FormDataCreateImg>(initialValues);

  const setShowAnimationTab = useImageStore(
    (state) => state.setShowAnimationTab
  );
  const fileNameRef = useRef<HTMLInputElement>(null);
  const handleOnchage = (key: string, value: string | File) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.name || !values.file) return;

    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("file", values.file);

    mutationCreateImg.mutateAsync(formData).then(() => {
      toast.success("Image created successfully!!!");

      setValues(initialValues);

      if (fileNameRef.current) {
        fileNameRef.current.value = "";
        fileNameRef.current.files = null;
      }

      setShowAnimationTab(true);
    });
  };

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const kilobyte = e.target.files[0].size / 1024;

    const typeFile = e.target.files[0].type.split("/")[1];

    if (!["png", "jpg", "gif"].includes(typeFile.toLowerCase())) {
      if (fileNameRef.current) {
        fileNameRef.current.value = "";
        fileNameRef.current.files = null;
      }
      return toast.error("Error, Only files .png, .jpg or .gift");
    }

    if (kilobyte > 50) {
      if (fileNameRef.current) {
        fileNameRef.current.value = "";
        fileNameRef.current.files = null;
      }
      return toast.warning("Warning, The file must be less than 50mb");
    }

    toast.success("Success, file compatible and loaded");

    handleOnchage("file", e.target.files[0]);
  };

  return {
    mutationCreateImg,
    fileNameRef,
    handleOnchage,
    handleSubmit,
    handleUploadFile,
    values,
  };
};
