import { FC } from "react";
import { upperFirst } from "lodash/fp";
import { tw } from "../../utils";

interface RadioButtonProps {
  inputName: string;
  inputGroup: string;
  inputClassName?: string;
  labelClassName?: string;
  register: any;
}

export const RadioButton: FC<RadioButtonProps> = ({
  inputName,
  inputGroup,
  inputClassName,
  labelClassName,
  register,
}) => {
  return (
    <>
      <input
        type="radio"
        id={inputName}
        name={inputGroup}
        defaultValue={inputName}
        className={tw("peer hidden shadow-xl", inputClassName)}
        required
        {...register(inputGroup)}
      />
      <label
        htmlFor={inputName}
        className={tw(
          `inline-flex w-full cursor-pointer justify-center rounded-lg border
             border-gray-200 bg-white p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-600
            peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 
            dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 
            dark:hover:text-gray-300 dark:peer-checked:text-blue-500`,
          labelClassName
        )}
      >
        <div className="block">
          <div className="w-full">{upperFirst(inputName)}</div>
        </div>
      </label>
    </>
  );
};
