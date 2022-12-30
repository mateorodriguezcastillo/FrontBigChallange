import { FC } from "react"
import { ArrowIcon } from "../icons"
import { StatusBadge } from "../submissions"

interface Props {
    title: string,
    subtitle?: string,
    status?: string,
    date?: string,
    doctor?: string,
}


export const Header: FC<Props> = ({ title, subtitle, status, date, doctor }) => {
    return (
        <>
            <div className="ml-2">
                <ArrowIcon
                    className='mb-6'
                    onClick={() => { window.history.back() }}
                />
                <div className='flex flex-col mb-6'>
                    <div className="flex mb-1">
                        <h1 className='text-xl mr-2'>
                            {title}
                        </h1>
                        {status &&
                            <StatusBadge status={status} />
                        }
                    </div>
                    {subtitle &&
                        <p className='text-sm font-light text-gray-500'>
                            {subtitle}
                        </p>
                    }
                    {date && doctor &&
                        <p className='text-sm font-light text-gray-500'>
                            {doctor}<span className='font-extrabold ml-0.5 mr-0.5'> • </span>{date}
                        </p>
                    }
                    {date && !doctor &&
                        <p className='text-sm font-light text-gray-500'>
                            {date}
                        </p>
                    }
                </div>
            </div>

            <hr className="mb-6" />
        </>
    )
}
