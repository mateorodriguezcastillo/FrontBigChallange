import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Status } from "../../interfaces";
import { useAuthStore } from "../../src/store/auth";
import { SubmissionsTable } from "../submissions";
import { NoContent } from "../ui";

const getData = async (
  currentPage: number,
  status: Status | "",
  token: string
) => {
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

export const DoctorTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState<Status | "">("");
  const { user, token } = useAuthStore();

  const { data: allSubmissions, isLoading: loadingSubmissions } = useQuery(
    ["submissions", currentPage, status, token],
    () => getData(currentPage, status, token),
    { enabled: user?.role_name === "doctor" }
  );
  return (
    <>
      {!loadingSubmissions &&
      allSubmissions &&
      allSubmissions.data.length > 0 ? (
        <SubmissionsTable
          submissions={allSubmissions.data}
          pagination={allSubmissions.pagination}
          status={status}
          changeStatus={setStatus}
          changePage={setCurrentPage}
        />
      ) : (
        !loadingSubmissions &&
        allSubmissions &&
        allSubmissions.data.length === 0 && (
          <NoContent contentType="submissions" />
        )
      )}
    </>
  );
};
