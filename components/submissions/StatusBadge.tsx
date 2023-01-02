import { FC } from "react";
import { tw } from "../../utils";

interface Props {
  status: string;
}

const possibleStatus: { [key: string]: { color: string; text: string } } = {
  pending: { color: "bg-blue-100 text-blue-700", text: "Pending" },
  in_progress: { color: "bg-green-100 text-green-700", text: "In Progress" },
  done: { color: "bg-gray-100 text-gray-700", text: "Done" },
};

export const StatusBadge: FC<Props> = ({ status }) => {
  return (
    <span
      className={tw(
        "mt-0.5 mr-2 rounded-xl px-3 py-0.5 text-sm ",
        possibleStatus[status]?.color
      )}
    >
      {possibleStatus[status]?.text}
    </span>
  );
};
