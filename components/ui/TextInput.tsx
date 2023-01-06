import { FC, useState } from "react";
import { tw } from "../../utils";
import { upperFirst } from "lodash/fp";
import { EyeIcon, EyeSlashIcon } from "../icons/Icons";


interface TextInputProps {
  inputName: string;
  inputClassName?: string;
  labelClassName?: string;
  type?: string;
}

export const TextInput: FC<TextInputProps> = ({
  inputName,
  inputClassName,
  labelClassName,
  type = "text",
}) => {
  const [currentType, setCurrentType] = useState(type);

  const changeType = () => {
    if (currentType === "password") {
      setCurrentType("text");
    } else {
      setCurrentType("password");
    }
  };

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
      <div className="relative">
        <input
          type={currentType}
          id={inputName}
          className={tw(
            `mb-6 mr-2 block w-1/2 rounded-lg border 
                            border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
                            focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 
                            dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`,
            inputClassName
          )}
        />
        {type === "password" && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
            <button onClick={changeType}>
              {currentType === "password" ? (
                <EyeSlashIcon className="mb-6 text-black dark:text-white" />
              ) : (
                <EyeIcon className="mb-6 text-black dark:text-white" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
