import { Button } from "flowbite-react";
import { UserIcon } from "../../components/icons";
import { AuthLayout } from "../../components/layout";
import { RadioButton, TextInput } from "../../components/ui";

const RegisterPage = () => {
  return (
    <AuthLayout
      title={"Sign Up"}
      pageDescription={"Enter requested data to sign up"}
    >
      <div className="mb-4 mr-4 ml-4 flex flex-col">
        <UserIcon className="m-auto h-24 w-24 text-white" />
        <TextInput
          inputClassName="w-full bg-white border border-gray-300 shadow-xl"
          labelClassName="text-white dark:text-white"
          type="text"
          inputName={"name"}
        />
        <TextInput
          inputClassName="w-full bg-white border border-gray-300 shadow-xl"
          labelClassName="text-white dark:text-white"
          type="text"
          inputName={"email"}
        />
        <TextInput
          inputClassName="w-full bg-white border border-gray-300 shadow-xl"
          labelClassName="text-white dark:text-white"
          type="password"
          inputName={"password"}
        />
        <TextInput
          inputClassName="w-full bg-white border border-gray-300 shadow-xl"
          labelClassName="text-white dark:text-white"
          type="password"
          inputName={"confirm password"}
        />
        <div className="mb-6">
          <label htmlFor="type" className="mb-2 block text-sm text-white">
            Type
          </label>
          <ul className="grid w-full gap-6 md:grid-cols-2">
            <li>
              <RadioButton inputName={"doctor"} inputGroup={"userType"} />
            </li>
            <li>
              <RadioButton inputName={"patient"} inputGroup={"userType"} />
            </li>
          </ul>
        </div>

        <Button className="mt-4 w-full shadow-xl">Sign Up</Button>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
