import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { Submission } from "../interfaces";
import {
  getSubmission,
  acceptSubmission,
  uploadPrescription,
} from "../services";

export const useSubmissionQuery = (id: number) => {
  const [submission, setSubmission] = useState<Submission | null>(null);

  const submissionQuery = useQuery(
    ["submission", id],
    () => getSubmission(id),
    {
      enabled: !!id,
      onSuccess: (data) => {
        setSubmission(data.data);
      },
    }
  );

  const acceptMutation = useMutation(() => acceptSubmission(id), {
    onSuccess: (data) => {
      setSubmission(data.data);
    },
  });

  const uploadMutation = useMutation(
    (file: File) => uploadPrescription(id, file),
    {
      onSuccess: (data) => {
        setSubmission(data.data);
      },
    }
  );

  return {
    submission,
    submissionQuery,
    acceptMutation,
    uploadMutation,
  };
};
