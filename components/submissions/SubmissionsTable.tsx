import { FC } from "react";
import { useRouter } from "next/router";
import { Pagination, Status, Submission } from "../../interfaces";
import { StatusBadge } from "./StatusBadge";
import { ChevronIcon } from "../icons/Icons";
import { format } from "date-fns";

interface SubmissionsTableProps {
  submissions: Submission[];
  pagination: Pagination | null;
  status: Status | "";
  changeStatus: (status: Status | "") => void;
  changePage: (page: number) => void;
}

const getDateFormat = (date: Date) => {
  return format(new Date(date), "dd/MM/yy");
};

export const SubmissionsTable: FC<SubmissionsTableProps> = ({
  submissions,
  pagination,
  status,
  changeStatus,
  changePage,
}) => {
  const router = useRouter();

  const handleViewSubmission = (id: number) => {
    router.push("/submission/" + id);
  };

  return (
    <>
      <div className="mt-6 flex justify-end">
        <select
          id="statusSelectBox"
          className={`mb-2 mr-4 block w-1/5 rounded-lg border border-gray-300 bg-gray-50 
                    p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 
                    dark:border-slate-700 dark:bg-black dark:text-white 
                    dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
          onChange={(e) => {
            changePage(1);
            changeStatus(e.target.value as Status | "");
          }}
          value={status}
        >
          <option value="">
            All submissions
          </option>
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div className="relative mr-4 ml-4 overflow-auto overflow-x-auto rounded-lg border border-gray-200 dark:border-slate-700">
        <table className="w-full table-fixed text-left text-sm text-gray-900 dark:text-gray-400">
          <thead className="border-b-1 border-gray-200 bg-gray-50 text-xs font-light uppercase text-gray-500 dark:border-b-2 dark:border-gray-400 dark:bg-black">
            <tr>
              <th scope="col" className="py-3 px-6 font-normal">
                Submission Title
              </th>
              <th scope="col" className="py-3 px-6 font-normal">
                Doctor Assigned
              </th>
              <th scope="col" className="py-3 px-6 font-normal">
                Created At
              </th>
              <th scope="col" className="w-40 py-3 px-6 font-normal">
                Status
              </th>
              <th scope="col" className="py-3 px-6 font-normal"></th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr
                key={submission.id}
                className="odd:bg-white even:bg-slate-50 dark:border-b dark:border-gray-700 dark:odd:bg-black dark:even:bg-black"
              >
                <td className="py-4 px-6 dark:text-gray-300">
                  {submission.title}
                </td>
                <td className="py-4 px-6 dark:text-gray-300">
                  {submission.doctor.name}
                </td>
                <td className="py-4 px-6 font-light text-gray-500">
                  {getDateFormat(submission.created_at)}
                </td>
                <td className="py-4 px-6">
                  <StatusBadge status={submission.status} />
                </td>
                <td className="py-4 px-6 text-center">
                  <button
                    className="text-blue-600"
                    onClick={() => {
                      handleViewSubmission(submission.id);
                    }}
                  >
                    View more
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className="mt-4 flex justify-center">
          <div className="flex flex-col text-center">
            <nav
              className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                type="button"
                className={`relative inline-flex items-center rounded-l-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-black dark:text-gray-300 dark:hover:bg-gray-800`}
                onClick={() => {
                  changePage(pagination.currentPage - 1);
                }}
                disabled={!pagination.links?.previous}
              >
                <ChevronIcon direction={"left"} />
              </button>
              <button
                type="button"
                className={`relative inline-flex items-center rounded-r-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-black dark:text-gray-300 dark:hover:bg-gray-800`}
                onClick={() => {
                  changePage(pagination.currentPage + 1);
                }}
                disabled={!pagination.links?.next}
              >
                <ChevronIcon direction={"right"} />
              </button>
            </nav>
            <p className="mt-2 text-sm font-light text-black dark:text-gray-400 ">
              Page {pagination.currentPage} of {pagination.totalPages}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
