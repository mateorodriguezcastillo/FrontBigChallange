import { useState } from "react";
import { useQuery } from "react-query";
import { Pagination, Status, Submission } from "../interfaces";
import { getSubmissions, getOwnSubmissions } from "../services";

export const useDoctorSubmissionsQuery = (
  id: number | undefined,
  viewOwnSubmissions: boolean,
  currentPage: number,
  status: Status | ""
) => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  const allSubmissions = useQuery(
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

  const ownSubmissions = useQuery(
    ["submissions", currentPage, status],
    () => getOwnSubmissions(id, currentPage, status),
    {
      enabled: viewOwnSubmissions,
      onSuccess: (data) => {
        setSubmissions(data.data);
        setPagination(data.pagination);
      },
    }
  );

  return {
    allSubmissions,
    ownSubmissions,
    submissions,
    pagination,
  };
};
