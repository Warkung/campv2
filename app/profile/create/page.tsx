import SubmitButton from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";

const CreateProfileAction = async (prevState: any, formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
  return {
    message: "Profile Created",
  };
};
function CreateProfile() {
  return (
    <section>
      <h1 className=" capitalize text-2xl my-5 font-bold text-center ">
        new user
      </h1>
      <div className=" border p-8 rounded-lg max-w-md mx-auto">
        <FormContainer action={CreateProfileAction}>
          <div>
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
          </div>

          <SubmitButton text="Create Profile" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProfile;
