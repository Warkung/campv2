import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type PropType = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
};

function FormInput({ name, label, type, placeholder, defaultValue }: PropType) {
  return (
    <div className="mb-5 flex flex-col gap-2 ">
      <Label htmlFor={name} className="text-left font-bold">
        {label}
        {defaultValue}
      </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}
export default FormInput;
