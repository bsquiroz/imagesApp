import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../../../components/ui/button";

export const FormImage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
      <Button>Send image</Button>
    </div>
  );
};
