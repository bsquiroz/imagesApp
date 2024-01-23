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
            onChange={(e) => {
              if (!e.target.files?.length) return;
              handleOnchage("file", e.target.files[0]);
            }}
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
