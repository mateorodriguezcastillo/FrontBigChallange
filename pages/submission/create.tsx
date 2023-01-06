import React from "react";
import { Header, TextAreaInput, TextInput } from "../../components/ui";
import { HomeLayout } from "../../components/layout";
import { Button } from "flowbite-react";

const CreateSubmissionPage = () => {
  return (
    <HomeLayout
      title={"Create submission"}
      pageDescription={"Provide the information requested below"}
    >
      <div className="relative mt-6 mr-10 ml-10 overflow-x-auto">
        <Header title={"New Submission"} />
        <hr className="mb-6" />
        <div className="m-2">
          <TextInput inputName="title" type="text" />
          <TextAreaInput inputName="symptoms" />
          <Button
            className="mt-8 px-5 py-2 font-normal"
            type="submit"
            size="large"
            onClick={() => {}}
          >
            Send submission
          </Button>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CreateSubmissionPage;
