import { FC } from "react";
import { tw } from "../../utils/merge-classnames";

interface SwitchProps {
  className?: string;
  checked: boolean;
  label?: string;
  onChange: (checked: boolean) => void;
}

export const Switch: FC<SwitchProps> = ({
  className,
  checked,
  label,
  onChange,
}) => {
  console.log(checked);
  return (
    <div className={tw("flex items-center", className)}>
      <label
        htmlFor="check"
        className={tw(
          "relative h-7 w-14 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-600",
          className
        )}
      >
        <input
          type="checkbox"
          id="check"
          className="peer sr-only"
          defaultChecked={checked}
          onChange={() => {
            onChange(!checked);
          }}
        />
        <span className="absolute left-[3px] top-[3px] h-4/5 w-2/5 rounded-full bg-gray-400 transition-all duration-500 peer-checked:left-[30.5px] peer-checked:bg-blue-600 dark:peer-checked:bg-white" />
      </label>
      {label && (
        <span className="ml-2 text-sm text-gray-800 dark:text-white">
          {label}
        </span>
      )}
    </div>
  );
};
