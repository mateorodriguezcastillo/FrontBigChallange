import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { HomeLayout } from "../components/layout";
import { SubmissionsTable } from "../components/submissions";
import { Pagination, Submission } from "../interfaces";
import { useAuthStore } from "../src/store/auth";
import { NoContent } from "../components/ui/NoContent";

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

const getOwnSubmissions = async (
  userId: number | undefined,
  currentPage: number,
  status: string,
  token: string
) => {
  const res = await axios.get(
    "http://localhost/api/submission/user/" +
      userId +
      "?page=" +
      currentPage +
      "&status=" +
      status,
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
  const { user, token } = useAuthStore();

  const { data: allSubmissions, isLoading: loadingSubmissions } = useQuery(
    ["submissions", currentPage, status, token],
    () => getData(currentPage, status, token),
    { enabled: user?.role === "doctor" }
  );

  const { data: ownSubmissions, isLoading: loadingOwnSubmissions } = useQuery(
    ["ownSubmissions", user?.name, currentPage, status, token],
    () => getOwnSubmissions(user?.id, currentPage, status, token),
    { enabled: user?.role === "patient" }
  );

  useEffect(() => {
    if (allSubmissions) {
      setSubmissions(allSubmissions.data);
      setPagination(allSubmissions.pagination);
    }
    if (ownSubmissions) {
      setSubmissions(ownSubmissions.data);
      setPagination(ownSubmissions.pagination);
    }
  }, [allSubmissions, ownSubmissions]);

  return (
    <>
      <HomeLayout title={"Home page"} pageDescription={"Prescription pool"}>
        {!loadingSubmissions &&
        !loadingOwnSubmissions &&
        submissions &&
        submissions.length == 0 ? (
          <NoContent contentType="submissions" />
        ) : (
          <SubmissionsTable
            submissions={submissions}
            pagination={pagination}
            changeStatus={setStatus}
            changePage={setCurrentPage}
          />
        )}
      </HomeLayout>
    </>
  );
}
