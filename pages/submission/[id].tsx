import { withRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { Button } from "flowbite-react";
import { acceptSubmission, getPrescription, getSubmission, uploadPrescription } from '../../services';
import { Status, Submission } from "../../interfaces";
import { getDateFormat } from "../../utils/date-format";
import { LoadingIcon } from "../../components/icons";
import { HomeLayout } from "../../components/layout/HomeLayout";
import { SubmissionTextBox } from "../../components/submissions";
import { SubmissionPrescriptionBox } from "../../components/submissions";
import { Header } from "../../components/ui";
import { useAuthStore } from "../../src/store/auth";

const SubmissionPage = (props: any) => {
  const { token } = useAuthStore();
  const { id } = props.router.query;

  const [submission, setSubmission] = useState<Submission | null>(null);
  const [loadingCircle, setLoadingCircle] = useState(false);

  useQuery(
    ["submission", id],
    () => getSubmission(id, token),
    {
      enabled: !!id,
      onSuccess: (data) => {
        setSubmission(data.data);
      }
    }
  );

  const { data: prescription } = useQuery(
    ["prescription", id],
    () => getPrescription(id, token),
    { enabled: !!id && submission?.prescription !== null }
  );

  const handleAcceptSubmission = async () => {
    setLoadingCircle(true);
    const data = await acceptSubmission(id, token);
    setSubmission(data.data);
    setLoadingCircle(false);
  };

  const handleUploadPrescription = async (file: File) => {
    setLoadingCircle(true);
    const data = await uploadPrescription(id, file, token);
    setSubmission(data.data);
    setLoadingCircle(false);
  };

  return (
    <HomeLayout
      title={"View submission"}
      pageDescription={"Information of the requested submission"}
    >
      {submission && (
        <div className="relative mt-6 mr-10 ml-10 overflow-x-auto">
          <div className="flex justify-between">
            <Header
              title={submission.title}
              status={submission.status}
              date={getDateFormat(submission.created_at)}
              doctor={submission.doctor ? submission.doctor.name : undefined}
            />
            <div className="mt-6 flex align-middle">
              {submission.status === Status.Pending && (
                <Button
                  className="mt-auto mb-auto w-36"
                  onClick={handleAcceptSubmission}
                >
                  {loadingCircle ? (
                    <LoadingIcon />
                  ) : (
                    <span className="text-sm text-white">Accept</span>
                  )}
                </Button>
              )}
            </div>
          </div>
          <hr className="mb-6" />
          <div className="mt-6 ml-2 mr-2 flex flex-col">
            <div className="columns-2 gap-1">
              <SubmissionTextBox
                title="Email address"
                subtitle={submission.patient.email}
              />
              {/* TODO: Add phone number to patient in backend */}
              <SubmissionTextBox title="Phone" subtitle="+598 96789268" />
            </div>
            <SubmissionTextBox title="Other info" subtitle={submission.info} />
            <SubmissionTextBox
              title="Symptoms"
              subtitle={submission.symptoms}
            />
            <div className="mb-8 flex flex-col">
              <h3 className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                Prescriptions
              </h3>
              <div className="flex w-full justify-between rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                <SubmissionPrescriptionBox
                  // canUpload={submission.doctor && submission.doctor.id === user.id}
                  type={
                    submission.status !== Status.Done ? "upload" : "download"
                  }
                  uploading={loadingCircle}
                  submission={submission}
                  prescription={prescription}
                  uploadPrescription={handleUploadPrescription}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </HomeLayout>
  );
};

export default withRouter(SubmissionPage);
