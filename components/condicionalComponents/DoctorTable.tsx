import { useState } from "react";
import { Status } from "../../interfaces";
import { useAuthStore } from "../../src/store/auth";
import { SubmissionsTable } from "../submissions";
import { NoContent } from "../ui";
import { useDoctorSubmissionsQuery } from "../../hooks/useDoctorSubmissionsQuery";

export const DoctorTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState<Status | "">("");
  const [viewOwnSubmissions, setViewOwnSubmissions] = useState(false);
  const { user } = useAuthStore();

  const { submissions, pagination, allSubmissions, ownSubmissions } =
    useDoctorSubmissionsQuery(
      user?.id,
      viewOwnSubmissions,
      currentPage,
      status
    );

  return (
    <>
      {!allSubmissions.isLoading &&
      !ownSubmissions.isLoading &&
      submissions.length > 0 ? (
        <SubmissionsTable
          submissions={submissions}
          pagination={pagination}
          status={status}
          viewOwnSubmissions={viewOwnSubmissions}
          changeStatus={setStatus}
          changePage={setCurrentPage}
          changeViewOwnSubmissions={setViewOwnSubmissions}
        />
      ) : (
        !allSubmissions.isLoading &&
        !ownSubmissions.isLoading &&
        submissions.length === 0 && <NoContent contentType="submissions" />
      )}
    </>
  );
};
