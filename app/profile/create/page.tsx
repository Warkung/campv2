import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CreateProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
};

function CreateProfile() {
  return (
    <section>
      <h1 className=" capitalize text-2xl my-5 font-bold ">
        new user
      </h1>
      <div className=" border p-8 rounded-lg max-w-md ">
        <form action={CreateProfileAction}>
          <div className="mb-2 flex flex-col gap-2">
            <Label htmlFor="firstName" className="text-left font-bold text-lg font-mono">First Name</Label>
            <Input name="firstName" type="text" className="" />
          </div>
          <Button variant={"outline"} type="submit" size={"lg"}>
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
}
export default CreateProfile;
