import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "flowbite-react";
import { UserIcon } from "../../components/icons";
import { AuthLayout } from "../../components/layout";
import { TextInput } from "../../components/ui";
import { FormSchemaType } from "./register";
import { useAuthStore } from "../../src/store/auth";
import { loginUser } from "../../services/SubmissionService";

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

  const mutateLogin = useMutation({
    mutationFn: (data: FormSchemaType) => loginUser(data),
    onSuccess: (res) => {
      setUser({
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
        role_name: res.data.role,
        isProfileCompleted: res.data.isComplete,
      });
      setToken(res.token);
      if (res.data.isComplete || res.data.role === "doctor") {
        router.push("/");
      } else {
        router.push("/patient-information");
      }
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    mutateLogin.mutate(data);
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
            errors={errors}
            {...register("email")}
          />
          <TextInput
            inputClassName="w-full bg-white border border-gray-300 shadow-xl"
            labelClassName="text-white"
            type="password"
            inputName={"password"}
            labelName={"Password"}
            errors={errors}
            {...register("password")}
          />
          <Button className="mt-4 w-full shadow-xl" type="submit">
            Sign In
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
