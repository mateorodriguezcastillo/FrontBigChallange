import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "flowbite-react";
import { UserIcon } from "../../components/icons";
import { AuthLayout } from "../../components/layout";
import { TextInput } from "../../components/ui";
import { FormSchemaType } from "./register";
import { useAuthStore } from "../../src/store/auth";

const rMsg = "This field is required";

const schema = z.object({
  email: z.string().email("Email must be a valid email").min(1, rMsg),
  password: z.string().min(1, rMsg),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();
  const { setToken, setUser } = useAuthStore();

  const onSubmit: SubmitHandler<FormSchemaType> = (values) => {
    axios
      .post("http://localhost/api/login", values)
      .then((res) => {
        setUser({
          id: res.data.data.id,
          name: res.data.data.name,
          email: res.data.data.email,
          role_name: res.data.data.role,
        });
        setToken(res.data.token);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthLayout
      title={"Sign In"}
      pageDescription={"Enter requested data to sign in"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-16 mr-4 ml-4 flex flex-col">
          <UserIcon className="m-auto h-24 w-24 text-white" />
          <TextInput
            inputClassName="w-full bg-white border border-gray-300 shadow-xl"
            labelClassName="text-white"
            inputName={"email"}
            labelName={"Email"}
            register={register}
            errors={errors}
          />
          <TextInput
            inputClassName="w-full bg-white border border-gray-300 shadow-xl"
            labelClassName="text-white"
            type="password"
            inputName={"password"}
            labelName={"Password"}
            register={register}
            errors={errors}
          />
          <Button
            className="mt-4 w-full shadow-xl"
            onClick={handleSubmit(onSubmit)}
          >
            Sign In
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
