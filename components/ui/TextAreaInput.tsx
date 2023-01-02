import { FC } from "react";
import { upperFirst } from 'lodash/fp'

interface TextAreaInputProps {
  inputName: string;
}

export const TextAreaInput: FC<TextAreaInputProps> = ({ inputName }) => {
  return (
    <>
      <label
        htmlFor={inputName}
        className="mb-2 block text-sm text-gray-800 dark:text-white"
      >
        {upperFirst(inputName)}
      </label>
      <textarea
        id={inputName}
        rows={8}
        className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        defaultValue={""}
      />
    </>
  );
};
