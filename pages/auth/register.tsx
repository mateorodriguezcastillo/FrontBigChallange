import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { Button } from "flowbite-react";
import { LoadingIcon, UserIcon } from "../../components/icons";
import { AuthLayout } from "../../components/layout";
import { RadioButton, TextInput } from "../../components/ui";
import { useMutation } from "react-query";
import { registerUser } from "../../services/SubmissionService";

export type FormSchemaType = z.infer<typeof schema>;

const rMsg = "This field is required";

const schema = z
  .object({
    name: z.string().trim().min(1, rMsg),
    email: z.string().email("Email must be a valid email").min(1, rMsg),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    password_confirmation: z.string().min(1, rMsg),
    role: z
      .string()
      .min(1, rMsg)
      .refine((value) => value === "doctor" || value === "patient"),
  })
  .superRefine(({ password_confirmation, password }, ctx) => {
    if (password_confirmation !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["password_confirmation"],
      });
    }
  });

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const mutateRegister = useMutation({
    mutationFn: (data: FormSchemaType) => registerUser(data),
    onSuccess: (res) => {
      router.push("/auth/verify-email");
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (values) => {
    mutateRegister.mutate(values);
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
            labelName={"Name"}
            errors={errors}
            {...register("name")}
          />
          <TextInput
            inputClassName="w-full bg-white border border-gray-300 shadow-xl"
            labelClassName="text-white dark:text-white"
            inputName={"email"}
            labelName={"Email"}
            errors={errors}
            {...register("email")}
          />
          <TextInput
            inputClassName="w-full bg-white border border-gray-300 shadow-xl"
            labelClassName="text-white dark:text-white"
            type="password"
            inputName={"password"}
            labelName={"Password"}
            errors={errors}
            {...register("password")}
          />
          <TextInput
            inputClassName="w-full bg-white border border-gray-300 shadow-xl"
            labelClassName="text-white dark:text-white"
            type="password"
            inputName={"password_confirmation"}
            labelName={"Confirm Password"}
            errors={errors}
            {...register("password_confirmation")}
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
              {errors["role"] && errors["role"]["message"]}
            </span>
          </div>

          <Button
            className="mt-4 w-full shadow-xl"
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
          >
            {mutateRegister.isLoading ? <LoadingIcon /> : "Sign Up"}
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
