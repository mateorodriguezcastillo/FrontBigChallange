import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { HomeLayout } from "../components/layout";
import { SubmissionsTable } from "../components/submissions";
import { Pagination, Submission } from "../interfaces";
import { useAuthStore } from "../src/store/auth";

const getData = async (currentPage: number, status: string, token: string) => {
  const res = await axios.get(
    "http://localhost/api/submission?page=" + currentPage + "&status=" + status,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return res.data;
};

export default function HomePage() {
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
  const { token } = useAuthStore();

  const { data } = useQuery(["submissions", currentPage, status, token], () =>
    getData(currentPage, status, token)
  );

  useEffect(() => {
    if (data) {
      setSubmissions(data.data);
      setPagination(data.pagination);
    }
  }, [data]);

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
