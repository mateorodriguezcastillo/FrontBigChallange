import { FC, useState } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
} from "react-hook-form";
import { tw } from "../../utils";
import { EyeIcon, EyeSlashIcon } from "../icons/Icons";

interface TextInputProps {
  inputName: string;
  labelName: string;
  inputClassName?: string;
  labelClassName?: string;
  type?: string;
  register: UseFormRegister<{
    password: string;
    email: string;
    name: string;
    password_confirmation: string;
    role: string;
  }> | UseFormRegister<{
    title: string;
    symptoms: string;
  }>;
  errors?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const TextInput: FC<TextInputProps> = ({
  inputName,
  labelName,
  inputClassName,
  labelClassName,
  type = "text",
  register,
  errors,
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
    <div className="mb-4 flex flex-grow flex-col">
      <label
        htmlFor={inputName}
        className={tw(
          "mb-2 block text-sm text-gray-800 dark:text-white",
          labelClassName
        )}
      >
        {labelName}
      </label>
      <div className="relative">
        <input
          type={currentType}
          id={inputName}
          className={tw(
            `mr-2 block w-1/2 rounded-lg border 
                            border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
                            focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 
                            dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`,
            inputClassName
          )}
          {...register(inputName)}
        />
        {type === "password" && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
            <button type="button" onClick={changeType}>
              {currentType === "password" ? (
                <EyeSlashIcon className="text-black dark:text-white" />
              ) : (
                <EyeIcon className="text-black dark:text-white" />
              )}
            </button>
          </div>
        )}
      </div>
      <span className="mt-1 text-xs text-red-500">
        {errors &&
          errors[inputName as keyof typeof errors] &&
          errors[inputName as keyof typeof errors]["message"]}
      </span>
    </div>
  );
};
