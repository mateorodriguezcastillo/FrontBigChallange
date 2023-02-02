import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Status } from "../../interfaces";
import { useAuthStore } from "../../src/store/auth";
import { SubmissionsTable } from "../submissions";
import { NoContent } from "../ui";

const getOwnSubmissions = async (
  userId: number | undefined,
  currentPage: number,
  status: Status | "",
  token: string
) => {
  const res = await axios.get(
    `http://localhost/api/submission/user/
        ${userId}
        ?page=
        ${currentPage}
        &status=
        ${status}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return res.data;
};

export const PatientTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState<Status | "">("");
  const { user, token } = useAuthStore();

  const { data: ownSubmissions, isLoading: loadingOwnSubmissions } = useQuery(
    ["ownSubmissions", user?.id, currentPage, status, token],
    () => getOwnSubmissions(user?.id, currentPage, status, token),
    { enabled: user?.role_name === "patient" }
  );
  return (
    <>
      {!loadingOwnSubmissions &&
      ownSubmissions &&
      ownSubmissions.data.length > 0 ? (
        <SubmissionsTable
          submissions={ownSubmissions.data}
          pagination={ownSubmissions.pagination}
          status={status}
          changeStatus={setStatus}
          changePage={setCurrentPage}
        />
      ) : (
        !loadingOwnSubmissions &&
        ownSubmissions &&
        ownSubmissions.data.length === 0 && (
          <NoContent contentType="submissions" />
        )
      )}
    </>
  );
};
