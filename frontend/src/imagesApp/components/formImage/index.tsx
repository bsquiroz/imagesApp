import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../../../components/ui/button";
import { useFormImage } from "@/imagesApp/hooks/useFormImage";

export const FormImage = () => {
  const {
    mutationCreateImg,
    fileNameRef,
    handleOnchage,
    handleSubmit,
    handleUploadFile,
    values,
  } = useFormImage();

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
