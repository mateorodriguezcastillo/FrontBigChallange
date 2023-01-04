import { NoPrescriptionIcon } from "../../components/icons";
import { HomeLayout } from "../../components/layout/HomeLayout";
import { SubmissionTextBox } from "../../components/submissions";
import { Header } from "../../components/ui";
import { StatusEnum } from "../../components/submissions";

const SubmissionPage = () => {
  return (
    <HomeLayout
      title={"View submission"}
      pageDescription={"Information of the requested submission"}
    >
      <div className="relative mt-6 mr-10 ml-10 overflow-x-auto">
        <Header
          title="Hepatic Infraction"
          status={StatusEnum.Pending}
          date="3/4/16"
          doctor="Dr. John Doe, MD"
        />
        <hr className="mb-6" />
        <div className="mt-6 ml-2 flex flex-col">
          <div className="columns-2 gap-1">
            <SubmissionTextBox
              title="Email address"
              subtitle="theresaweb@example.com"
            />
            <SubmissionTextBox title="Phone" subtitle="+598 96789268" />
          </div>
          <SubmissionTextBox
            title="Other info"
            subtitle="Proident ipsum eu dolor exercitation quis magna labore commodo cillum culpa nisi."
          />
          <SubmissionTextBox
            title="Symptoms"
            subtitle="Voluptate veniam consequat adipisicing amet et cillum dolore veniam officia esse duis."
          />
          <div className="mb-8 flex flex-col">
            <h3 className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              Prescriptions
            </h3>
            <div className="flex w-full rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <NoPrescriptionIcon className="mr-3 ml-4 text-black dark:text-white" />
              <span className="mt-auto mb-auto text-sm text-gray-800 dark:text-white">
                No prescriptions have been added yet.
              </span>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default SubmissionPage;
