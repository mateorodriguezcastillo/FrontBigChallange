import { FC } from "react";
import { Status } from "../../interfaces";
import { tw } from "../../utils";

interface StatusBadgeProps {
  status: Status;
}

const possibleStatus = {
  pending: {
    color:
      "bg-blue-100 text-blue-700 dark:bg-gray-900 dark:text-blue-400 dark:border dark:border-blue-400",
    text: "Pending",
  },
  in_progress: {
    color:
      "bg-green-100 text-green-700 dark:bg-gray-900 dark:text-green-400 dark:border dark:border-green-400",
    text: "In Progress",
  },
  ready: {
    color:
      "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:border dark:border-gray-200",
    text: "Done",
  },
} as const;

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span
      className={tw(
        "mt-0.5 mr-2 rounded-xl px-3 py-0.5 text-sm ",
        possibleStatus[status].color
      )}
    >
      {possibleStatus[status].text}
    </span>
  );
};
