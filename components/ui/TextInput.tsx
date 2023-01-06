import { FC } from "react";
import { tw } from "../../utils";
import { upperFirst } from "lodash/fp";

interface TextInputProps {
  inputName: string;
  inputClassName?: string;
  labelClassName?: string;
  type: string;
}

export const TextInput: FC<TextInputProps> = ({
  inputName,
  inputClassName,
  labelClassName,
  type,
}) => {
  return (
    <div className={"flex flex-grow flex-col"}>
      <label
        htmlFor={inputName}
        className={tw(
          "mb-2 block text-sm text-gray-800 dark:text-white",
          labelClassName
        )}
      >
        {upperFirst(inputName)}
      </label>
      <input
        type={type}
        id={inputName}
        className={tw(
          `mb-6 mr-2 block w-1/2 rounded-lg border 
                            border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
                            focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 
                            dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`,
          inputClassName
        )}
      />
    </div>
  );
};
