import { FC } from "react";

interface Props {
    status: string
}

export const StatusBadge:FC<Props> = ({ status }) => {

    const statusMap = new Map([
        ['pending', {color: 'bg-blue-100 text-blue-700', text: 'Pending'}],
        ['in_progress', {color: 'bg-green-100 text-green-700', text: 'In Progress'}],
        ['done', {color: 'bg-gray-100 text-gray-700', text: 'Done'}],
    ]);

  return (
    <span className={"text-sm mt-0.5 mr-2 px-3 py-0.5 rounded-xl " + ` ${statusMap.get(status)?.color}`}>
        {statusMap.get(status)?.text}
    </span>
  )
}
