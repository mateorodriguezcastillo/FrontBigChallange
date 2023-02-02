import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import router from "next/router";
import { Header, TextAreaInput, TextInput } from "../../components/ui";
import { HomeLayout } from "../../components/layout";
import { Button } from "flowbite-react";
import { useAuthStore } from "../../src/store/auth";

type FormSchemaType = z.infer<typeof schema>;

const rMsg = "This field is required";

const schema = z.object({
  title: z.string().min(1, rMsg),
  symptoms: z.string().min(1, rMsg),
});

const CreateSubmissionPage = () => {
  const { token } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (values) => {
    axios
      .post("http://localhost/api/submission", values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
              register={register}
              errors={errors}
            />
            <TextAreaInput
              inputName="symptoms"
              register={register}
              errors={errors}
            />
            <Button
              className="mt-8 px-5 py-2 font-normal"
              type="submit"
              size="large"
              onClick={handleSubmit(onSubmit)}
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
