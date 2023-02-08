import React from "react";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";

interface TextAreaInputProps {
  inputName: string;
  labelName: string;
  errors?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const TextAreaInput = React.forwardRef<HTMLTextAreaElement,TextAreaInputProps>(
  (
    { 
      inputName, 
      labelName, 
      errors, 
      ...props 
    }, ref
  ) => {
  return (
    <>
      <label
        htmlFor={inputName}
        className="mb-2 block text-sm text-gray-800 dark:text-white"
      >
        {labelName}
      </label>
      <textarea
        ref={ref}
        id={inputName}
        rows={8}
        className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        defaultValue={""}
        {...props}
      />
      <span className="mt-1 text-xs text-red-500">
        {errors &&
          errors[inputName as keyof typeof errors] &&
          errors[inputName as keyof typeof errors]["message"]}
      </span>
    </>
  );
});
