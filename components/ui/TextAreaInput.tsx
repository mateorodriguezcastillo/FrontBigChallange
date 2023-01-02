import { FC } from 'react'
var _ = require('lodash');

interface Props {
    inputName: string,
}

export const TextAreaInput:FC<Props>= ({ inputName }) => {
    return (
        <>
            <label
                htmlFor={inputName}
                className='block mb-2 text-sm text-gray-800 dark:text-white'
            >
                {_.upperFirst(inputName)}
            </label>
            <textarea
                id={inputName}
                rows={8}
                className='block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                defaultValue={''}
            />
        </>
    )
}
