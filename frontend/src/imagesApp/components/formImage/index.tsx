import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../../../components/ui/button";
import { useRef, useState } from "react";
import { useFormImage } from "@/imagesApp/hooks/useFormImage";
import { FormDataCreateImg } from "@/imagesApp/interfaces/formDataCreateImg";

import { toast } from "sonner";
import { useImageStore } from "@/imagesApp/store/imageStore";

const initialValues: FormDataCreateImg = {
  name: "",
  file: undefined,
};

export const FormImage = () => {
  const [values, setValues] = useState<FormDataCreateImg>(initialValues);

  const setShowAnimationTab = useImageStore(
    (state) => state.setShowAnimationTab
  );
  const fileNameRef = useRef<HTMLInputElement>(null);
  const { mutationCreateImg } = useFormImage();

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

  return (
    <section>
      <form className="flex flex-col gap-5" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <Label htmlFor="picture">Name picture</Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={(e) => handleOnchage("name", e.target.value)}
            value={values.name}
            placeholder="Ej: Typescript the best"
          />
        </div>
        <div>
          <Label htmlFor="picture">Picture</Label>
          <Input
            id="file"
            name="file"
            type="file"
            onChange={handleUploadFile}
            ref={fileNameRef}
          />
        </div>
        <Button disabled={mutationCreateImg.isPending}>
          {" "}
          {mutationCreateImg.isPending ? "Cargando..." : "Save image"}
        </Button>
      </form>
    </section>
  );
};
