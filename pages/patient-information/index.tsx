import { Button } from "flowbite-react";
import { HomeLayout } from "../../components/layout";
import { Header, TextAreaInput, TextInput } from "../../components/ui";

const PatientInformationPage = () => {
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
        <div className="m-2">
          <TextInput inputName="phone" type="text" />
          <div className="flex w-1/2">
            <TextInput
              inputClassName="w-11/12"
              inputName="weight"
              type="text"
            />
            <TextInput inputClassName="w-full" inputName="height" type="text" />
          </div>
          <TextAreaInput inputName="other info" />
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

export default PatientInformationPage;
