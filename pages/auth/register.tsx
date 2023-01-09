import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Button } from "flowbite-react";
import { UserIcon } from "../../components/icons";
import { AuthLayout } from "../../components/layout";
import { RadioButton, TextInput } from "../../components/ui";

const RegisterPage = () => {
  let schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
    password_confirmation: yup
      .string()
      .required("Confirm password is required")
      .equals([yup.ref("password")], "Passwords must match"),
    role: yup
      .string()
      .nullable()
      .required("Type is required")
      .oneOf(["doctor", "patient"], "Type must be doctor or patient"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (values: any) => {
    axios
      .post("http://localhost/api/register", values)
      .then((res) => {
        router.push("/auth/verify-email");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthLayout
      title={"Sign Up"}
      pageDescription={"Enter requested data to sign up"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 mr-4 ml-4 flex flex-col">
          <UserIcon className="m-auto h-24 w-24 text-white" />
          <TextInput
            inputClassName="w-full bg-white border border-gray-300 shadow-xl"
            labelClassName="text-white dark:text-white"
            inputName={"name"}
            register={register}
            errors={errors}
          />
          <TextInput
            inputClassName="w-full bg-white border border-gray-300 shadow-xl"
            labelClassName="text-white dark:text-white"
            inputName={"email"}
            register={register}
            errors={errors}
          />
          <TextInput
            inputClassName="w-full bg-white border border-gray-300 shadow-xl"
            labelClassName="text-white dark:text-white"
            type="password"
            inputName={"password"}
            register={register}
            errors={errors}
          />
          <TextInput
            inputClassName="w-full bg-white border border-gray-300 shadow-xl"
            labelClassName="text-white dark:text-white"
            type="password"
            inputName={"password_confirmation"}
            register={register}
            errors={errors}
          />
          <div className="mb-6">
            <label htmlFor="type" className="mb-2 block text-sm text-white">
              Type
            </label>
            <ul className="grid w-full gap-6 md:grid-cols-2">
              <li>
                <RadioButton
                  inputName={"doctor"}
                  inputGroup={"role"}
                  register={register}
                />
              </li>
              <li>
                <RadioButton
                  inputName={"patient"}
                  inputGroup={"role"}
                  register={register}
                />
              </li>
            </ul>
            <span className="mt-1 text-xs text-red-500">
              {errors["role"] && errors["role"].message}
            </span>
          </div>

          <Button
            className="mt-4 w-full shadow-xl"
            onClick={handleSubmit(onSubmit)}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
