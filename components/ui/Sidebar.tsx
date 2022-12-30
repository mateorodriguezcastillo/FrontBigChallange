import { HomeIcon, NewSubmissionIcon } from '../icons';
export const Sidebar = () => {

    const tabs = [
        {
            name: 'Home',
            icon: <HomeIcon />,
            href: '/',
        },
        {
            name: 'New Submission',
            icon: <NewSubmissionIcon />,
            href: '/submission/create',
        },
    ]

    return (
        <>
            <aside className="w-72 h-screen" aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 h-full bg-gray-900">
                    <div className="flex flex-col h-full justify-between mt-1">
                        <ul className="space-y-2">
                            {
                                tabs.map((tab, index) => (
                                    <li key={index}>
                                        <a
                                            href={tab.href}
                                            className="flex items-center p-3 text-base font-normal text-white rounded-lg hover:bg-gray-700"
                                        >
                                            {tab.icon}
                                            <span className="flex-1 ml-3 whitespace-nowrap text-sm">{tab.name}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className=" flex justify-between items-center w-full">
                            <div className="flex justify-center items-center space-x-2">
                                <div>
                                    <img className="rounded-full" src="https://i.ibb.co/L1LQtBm/Ellipse-1.png" alt="avatar" />
                                </div>
                                <div className="flex justify-start flex-col items-start">
                                    <p className="cursor-pointer text-sm leading-5 text-white">Ronald Richards</p>
                                    <p className="cursor-pointer text-xs leading-3 text-gray-300">Sign Out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>


    )
}
