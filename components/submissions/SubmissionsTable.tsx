import { StatusBadge } from './StatusBadge';

const rows = [
    {
        id: 1,
        title: 'Hepatic Infraction',
        doctor: '',
        createdAt: '22/02/2021',
        status: 'pending',
    },
    {
        id:2,
        title: 'Pancreatis Acute',
        doctor: 'Dr. John Doe',
        createdAt: '22/02/2021',
        status: 'in_progress',
    },
    {
        id:3,
        title: 'Bone marrow failure',
        doctor: 'Dr. John Doe',
        createdAt: '22/02/2021',
        status: 'done',
    },
];

export const SubmissionsTable = () => {
    return (
        <>
            <div className='flex justify-end mt-6'>
                <select 
                    id='statusSelectBox' 
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/5 mb-2 mr-4`}>
                    <option selected>All submissions</option>
                    <option value='pending'>Pending</option>
                    <option value='in_progress'>In Progress</option>
                    <option value='done'>Done</option>
                </select>
            </div>

            <div className='overflow-x-auto relative mr-4 ml-4 rounded-lg border border-gray-200'>
                <table className='table-fixed w-full text-sm text-left text-gray-900 dark:text-gray-400'>
                    <thead className='text-xs bg-gray-50 border-b-1 border-gray-200 text-gray-500 uppercase dark:text-gray-400 font-light'>
                        <tr>
                            <th scope='col' className='py-3 px-6 font-normal'>
                                Submission Title
                            </th>
                            <th scope='col' className='py-3 px-6 font-normal'>
                                Doctor Assigned
                            </th>
                            <th scope='col' className='py-3 px-6 font-normal'>
                                Created At
                            </th>
                            <th scope='col' className='w-40 py-3 px-6 font-normal'>
                                Status
                            </th>
                            <th scope='col' className='py-3 px-6 font-normal'>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map((row, index) => (
                                <tr key={row.id} className='odd:bg-white even:bg-slate-50'>
                                    <td className='py-4 px-6'>
                                        {row.title}
                                    </td>
                                    <td className='py-4 px-6'>
                                        {row.doctor}
                                    </td>
                                    <td className='py-4 px-6 font-light text-gray-500'>
                                        {row.createdAt}
                                    </td>
                                    <td className='py-4 px-6'>
                                        <StatusBadge status={row.status} />
                                    </td>
                                    <td className='py-4 px-6'>
                                        <button className='text-blue-600 '>
                                            View more
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
