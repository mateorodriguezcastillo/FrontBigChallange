import { FC } from "react";

interface SubmissionTextBoxProps {
  title: string;
  subtitle: string;
}

export const SubmissionTextBox: FC<SubmissionTextBoxProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="mb-8 flex flex-col">
      <h3 className="mb-1 text-sm text-gray-500">{title}</h3>
      <p className="text-sm font-light">{subtitle}</p>
    </div>
  );
};
