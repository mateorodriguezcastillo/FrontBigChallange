import { StatusBadge, StatusEnum } from "./StatusBadge";

const rows = [
  {
    id: 1,
    title: "Hepatic Infraction",
    doctor: "",
    createdAt: "22/02/2021",
    status: StatusEnum.Pending,
  },
  {
    id: 2,
    title: "Pancreatis Acute",
    doctor: "Dr. John Doe",
    createdAt: "22/02/2021",
    status: StatusEnum.InProgress,
  },
  {
    id: 3,
    title: "Bone marrow failure",
    doctor: "Dr. John Doe",
    createdAt: "22/02/2021",
    status: StatusEnum.Done,
  },
];

export const SubmissionsTable = () => {
  return (
    <>
      <div className="mt-6 flex justify-end">
        <select
          id="statusSelectBox"
          className={`mb-2 mr-4 block w-1/5 rounded-lg border border-gray-300 
                                bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 
                                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
        >
          <option selected>All submissions</option>
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div className="relative mr-4 ml-4 overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full table-fixed text-left text-sm text-gray-900 dark:text-gray-400">
          <thead className="border-b-1 border-gray-200 bg-gray-50 text-xs font-light uppercase text-gray-500 dark:text-gray-400">
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
            {rows.map((row, index) => (
              <tr key={row.id} className="odd:bg-white even:bg-slate-50">
                <td className="py-4 px-6">{row.title}</td>
                <td className="py-4 px-6">{row.doctor}</td>
                <td className="py-4 px-6 font-light text-gray-500">
                  {row.createdAt}
                </td>
                <td className="py-4 px-6">
                  <StatusBadge status={row.status} />
                </td>
                <td className="py-4 px-6">
                  <button className="text-blue-600 ">View more</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
