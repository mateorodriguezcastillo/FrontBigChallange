import { useMutation } from "react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { Button } from "flowbite-react";
import { HomeLayout } from "../../components/layout";
import { Header, TextAreaInput, TextInput } from "../../components/ui";
import { completeProfile } from "../../services";

export type FormSchemaType = z.infer<typeof schema>;

const rMsg = "This field is required";

const schema = z.object({
  phone: z.string().trim().min(1, rMsg),
  height: z.string().min(1, rMsg),
  weight: z.string().min(1, rMsg),
  other_info: z.string().min(1, rMsg),
});

const PatientInformationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const mutationComplete = useMutation({
    mutationFn: completeProfile,
    onSuccess: () => router.push("/"),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    mutationComplete.mutate(data);
  };

  return (
    <HomeLayout
      title={"Patient Information"}
      pageDescription={"Provide the request information below"}
    >
      <div className="relative mt-6 mr-10 ml-10 overflow-x-auto">
        <Header
          title={"Patient information"}
          subtitle={
            "You need to complete your profile before adding a submission"
          }
        />
        <hr className="mb-6" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-2">
            <TextInput
              inputName="phone"
              labelName="Phone"
              errors={errors}
              {...register("phone")}
            />
            <div className="flex w-1/2">
              <TextInput
                inputClassName="w-11/12"
                inputName="weight"
                labelName="Weight"
                errors={errors}
                {...register("weight")}
              />
              <TextInput
                inputClassName="w-full"
                inputName="height"
                labelName="Height"
                errors={errors}
                {...register("height")}
              />
            </div>
            <TextAreaInput
              inputName="other_info"
              labelName="Other information"
              errors={errors}
              {...register("other_info")}
            />
            <Button
              className="mt-8 px-5 py-2 font-normal"
              type="submit"
              size="large"
            >
              Send submission
            </Button>
          </div>
        </form>
      </div>
    </HomeLayout>
  );
};

export default PatientInformationPage;
