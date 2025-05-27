import SubmitButton from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";

const CreateProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
};

function CreateProfile() {
  return (
    <section>
      <h1 className=" capitalize text-2xl my-5 font-bold text-center ">
        new user
      </h1>
      <div className=" border p-8 rounded-lg max-w-md mx-auto">
        <form action={CreateProfileAction}>
          <FormInput
            name="firstName"
            label="First Name"
            type="text"
            placeholder="First Name"
          />
          <FormInput
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Last Name"
          />
          <FormInput
            name="userName"
            label="User Name"
            type="text"
            placeholder="User Name"
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
          />

          <SubmitButton text="Create Profile" size="lg"  />
        </form>
      </div>
    </section>
  );
}
export default CreateProfile;
