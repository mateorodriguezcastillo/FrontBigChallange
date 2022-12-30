import { FC } from "react"

interface Props {
    title: string,
    subtitle: string,
}

export const SubmissionTextBox:FC<Props> = ({ title, subtitle }) => {
    return (
        <div className='flex flex-col mb-8'>
            <h3 className='text-sm text-gray-500 mb-1'>
                {title}
            </h3>
            <p className='text-sm font-light'>
                {subtitle}
            </p>
        </div>
    )
}
