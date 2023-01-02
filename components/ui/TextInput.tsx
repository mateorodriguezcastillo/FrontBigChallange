import { FC } from "react"
import { tw } from "../../utils";
var _ = require('lodash');

interface Props {
    inputName: string,
    className?: string,
}

export const TextInput:FC<Props>= ({ inputName, className }) => {
    return (
        <div className={"flex flex-col flex-grow"}>
            <label
                htmlFor={inputName}
                className="block mb-2 text-sm text-gray-800 dark:text-white"
            >
                {_.upperFirst(inputName)}
            </label>
            <input
                type="text"
                id={inputName}
                className={tw(`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                            dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6 mr-2 w-1/2`, className)}
            />
        </div>
    )
}
