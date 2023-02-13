import React from "react";
import { useMutation } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import router from "next/router";
import { Header, TextAreaInput, TextInput } from "../../components/ui";
import { HomeLayout } from "../../components/layout";
import { Button } from "flowbite-react";
import { createSubmission } from "../../services";

export type FormSchemaType = z.infer<typeof schema>;

const rMsg = "This field is required";

const schema = z.object({
  title: z.string().min(1, rMsg),
  symptoms: z.string().min(1, rMsg),
});

const CreateSubmissionPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  });

  const mutationCreate = useMutation({
    mutationFn: createSubmission,
    onSuccess: () => router.push("/"),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    mutationCreate.mutate(data);
  };

  return (
    <HomeLayout
      title={"Create submission"}
      pageDescription={"Provide the information requested below"}
    >
      <div className="relative mt-6 mr-10 ml-10 overflow-x-auto">
        <Header title={"New Submission"} />
        <hr className="mb-6" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-2">
            <TextInput
              inputName={"title"}
              labelName={"Title"}
              errors={errors}
              {...register("title")}
            />
            <TextAreaInput
              inputName={"symptoms"}
              labelName={"Symptoms"}
              errors={errors}
              {...register("symptoms")}
            />
            <Button
              className="mt-8 px-5 py-2 font-normal"
              size="large"
              type="submit"
            >
              Send submission
            </Button>
          </div>
        </form>
      </div>
    </HomeLayout>
  );
};

export default CreateSubmissionPage;
