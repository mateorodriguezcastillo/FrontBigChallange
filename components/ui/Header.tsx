import { FC } from "react";
import { Status } from "../../interfaces";
import { ArrowIcon } from "../icons";
import { StatusBadge } from "../submissions";

interface HeaderProps {
  title: string;
  subtitle?: string;
  status?: Status;
  date?: string;
  doctor?: string;
}

export const Header: FC<HeaderProps> = ({
  title,
  subtitle,
  status,
  date,
  doctor,
}) => {
  return (
    <div className="ml-2 w-1/2">
      <button
        onClick={() => {
          window.history.back();
        }}
      >
        <ArrowIcon className="mb-6 text-black dark:text-white" />
      </button>
      <div className="mb-6 flex flex-col">
        <div className="mb-1 flex">
          <h1 className="mr-2 text-xl text-black dark:text-white">{title}</h1>
          {status && <StatusBadge status={status} />}
        </div>
        {subtitle && (
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        )}
        {date && doctor && (
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {doctor}
            <span className="ml-0.5 mr-0.5 font-extrabold"> • </span>
            {date}
          </p>
        )}
        {date && !doctor && (
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {date}
          </p>
        )}
      </div>
    </div>
  );
};
