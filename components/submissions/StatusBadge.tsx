import { FC } from "react";
import { tw } from "../../utils";

export enum StatusEnum {
  Pending = "pending",
  InProgress = "in_progress",
  Done = "done",
}

interface StatusBadgeProps {
  status: StatusEnum;
}

const possibleStatus = {
  pending: { color: "bg-blue-100 text-blue-700", text: "Pending" },
  in_progress: { color: "bg-green-100 text-green-700", text: "In Progress" },
  done: { color: "bg-gray-100 text-gray-700", text: "Done" },
} as const;

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
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
