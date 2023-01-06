import { Button } from "flowbite-react";
import { UserIcon } from "../../components/icons";
import { AuthLayout } from "../../components/layout";
import { TextInput } from "../../components/ui";

const LoginPage = () => {
  return (
    <AuthLayout
      title={"Sign In"}
      pageDescription={"Enter requested data to sign in"}
    >
      <div className="mt-16 mr-4 ml-4 flex flex-col">
        <UserIcon className="m-auto h-24 w-24 text-white" />
        <TextInput
          inputClassName="w-full bg-white border border-gray-300 shadow-xl"
          labelClassName="text-white"
          inputName={"email"}
        />
        <TextInput
          inputClassName="w-full bg-white border border-gray-300 shadow-xl"
          labelClassName="text-white"
          type="password"
          inputName={"password"}
        />
        <Button className="mt-4 w-full shadow-xl">Sign In</Button>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
