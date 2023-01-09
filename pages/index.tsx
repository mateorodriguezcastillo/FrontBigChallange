import { useEffect, useState } from "react";
import axios from "axios";
import { HomeLayout } from "../components/layout";
import { SubmissionsTable } from "../components/submissions";
import { Pagination, Submission } from "../interfaces";

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

  useEffect(() => {
    axios
      .get(
        "http://localhost/api/submission?page=" +
          currentPage +
          "&status=" +
          status,
        {
          headers: {
            // TODO: 'Get token from local storage',
            Authorization: "Bearer 1|PN3p8Fc4Khz7IM9bYxHb1FxBd0DFgvvjG2A5rUM3",
          },
        }
      )
      .then((res) => {
        setSubmissions(res.data.data);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, status]);

  console.log(currentPage + status);
  console.log(currentPage);
  console.log(pagination);

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
