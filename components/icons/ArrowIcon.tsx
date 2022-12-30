import { FC } from "react"

interface Props {
    onClick?: () => void
    className?: string
}

export const ArrowIcon:FC<Props> = ({ onClick, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={"w-6 h-6 cursor-pointer" + (className ? ` ${className}` : '')}
            onClick={ onClick }
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
        </svg>
    )
}
