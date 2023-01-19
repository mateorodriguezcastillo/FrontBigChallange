import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { HomeLayout } from "../components/layout";
import { SubmissionsTable } from "../components/submissions";
import { Pagination, Submission } from "../interfaces";
import SubmissionService from "../services/SubmissionService";
import { useAuthStore } from "../src/store/auth";

export default function HomePage() {
  const submissionService = new SubmissionService();
  const { token } = useAuthStore();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    count: 0,
    total: 0,
    perPage: 0,
    currentPage: 0,
    totalPages: 0,
    links: {
      next: "",
      previous: "",
    },
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("");

  const { data } = useQuery(["submissions", currentPage, status], () =>
    submissionService.getSubmissions(currentPage, status, token)
  );

  useEffect(() => {
    if (data) {
      setSubmissions(data.data);
      setPagination(data.pagination);
    }
  }, [currentPage, status, data]);

  return (
    <>
      <HomeLayout title={"Home page"} pageDescription={"Prescription pool"}>
        <SubmissionsTable
          submissions={submissions}
          pagination={pagination}
          changeStatus={setStatus}
          changePage={setCurrentPage}
        />
      </HomeLayout>
    </>
  );
}
