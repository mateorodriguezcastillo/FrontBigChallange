import { FC } from "react";
import { upperFirst } from "lodash/fp";
import { FieldError, Merge, FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { FormSchemaType as PatientInfoForm } from '../../pages/patient-information'

interface TextAreaInputProps {
  inputName: string;
  labelName: string;
  register: UseFormRegister<PatientInfoForm>;
  errors?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const TextAreaInput: FC<TextAreaInputProps> = ({ inputName, labelName, register, errors }) => {
  return (
    <>
      <label
        htmlFor={inputName}
        className="mb-2 block text-sm text-gray-800 dark:text-white"
      >
        {labelName}
      </label>
      <textarea
        id={inputName}
        rows={8}
        className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        defaultValue={""}
        {...register(inputName)}
      />
      <span className="mt-1 text-xs text-red-500">
        {errors &&
          errors[inputName as keyof typeof errors] &&
          errors[inputName as keyof typeof errors]["message"]}
      </span>
    </>
  );
};
