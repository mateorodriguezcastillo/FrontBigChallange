import { useState } from "react";
import { useQuery } from "react-query";
import { Status, Submission } from "../../interfaces";
import { useAuthStore } from "../../src/store/auth";
import { SubmissionsTable } from "../submissions";
import { NoContent } from "../ui";
import {
  getOwnSubmissions,
  getSubmissions,
} from "../../services/SubmissionService";
import { Pagination } from "../../interfaces/submission";

export const DoctorTable = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState<Status | "">("");
  const [viewOwnSubmissions, setViewOwnSubmissions] = useState(false);
  const { user } = useAuthStore();

  const { isLoading: loadingAll } = useQuery(
    ["submissions", currentPage, status],
    () => getSubmissions(currentPage, status),
    {
      enabled: !viewOwnSubmissions,
      onSuccess: (data) => {
        setSubmissions(data.data);
        setPagination(data.pagination);
      },
    }
  );

  const { isLoading: loadingOwn } = useQuery(
    ["submissions", currentPage, status],
    () => getOwnSubmissions(user?.id, currentPage, status),
    {
      enabled: viewOwnSubmissions,
      onSuccess: (data) => {
        setSubmissions(data.data);
        setPagination(data.pagination);
      },
    }
  );
  return (
    <>
      {!loadingAll && !loadingOwn && submissions.length > 0 ? (
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
        !loadingAll &&
        !loadingOwn &&
        submissions.length === 0 && <NoContent contentType="submissions" />
      )}
    </>
  );
};
