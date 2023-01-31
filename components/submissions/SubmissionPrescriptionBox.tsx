import { PDFDownloadLink } from "@react-pdf/renderer";
import { FC } from "react";
import { Status, Submission } from "../../interfaces";
import { PDFDocSubmission } from "../../src/pdf/PDFDocSubmission";
import {
  AttachmentIcon,
  DownloadIcon,
  LoadingIcon,
  NoPrescriptionIcon,
  UploadIcon,
} from "../icons";

interface SubmissionPrescriptionBoxProps {
  type: "upload" | "download";
  submission: Submission;
  prescription: string;
  uploading: boolean;
  uploadPrescription: (file: File) => void;
}

export const SubmissionPrescriptionBox: FC<SubmissionPrescriptionBoxProps> = ({
  type,
  submission,
  prescription,
  uploading,
  uploadPrescription,
}) => {
  return (
    <>
      <div className="flex">
        {type === "upload" ? (
          <NoPrescriptionIcon className="mr-3 ml-4 text-black dark:text-white" />
        ) : (
          <AttachmentIcon className="mr-3 ml-4 text-black dark:text-white" />
        )}
        <span className="mt-auto mb-auto text-sm text-gray-800 dark:text-white">
          {type === "upload"
            ? "No prescriptions have been added yet."
            : "prescription.pdf"}
        </span>
      </div>
      {type === "upload" &&
      submission.status === Status.InProgress &&
      uploading ? (
        <LoadingIcon className="mr-4 text-black dark:text-white" />
      ) : (
        type === "upload" &&
        submission.status === Status.InProgress &&
        !uploading && (
          <label className="cursor-pointer">
            <UploadIcon className="mr-4 text-black dark:text-white" />
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                uploadPrescription(file);
              }}
            />
          </label>
        )
      )}
      {type === "download" && (
        <div className="flex">
          <PDFDownloadLink
            document={
              <PDFDocSubmission
                submission={submission}
                prescription={prescription}
              />
            }
            fileName="prescription.pdf"
          >
            <DownloadIcon className="mr-4 text-black dark:text-white" />
          </PDFDownloadLink>
        </div>
      )}
    </>
  );
};
