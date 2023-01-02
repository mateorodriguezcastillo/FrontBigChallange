import { NoPrescriptionIcon } from '../../components/icons';
import { HomeLayout } from '../../components/layout/HomeLayout';
import { SubmissionTextBox } from '../../components/submissions';
import { Header } from '../../components/ui';
const SubmissionPage = () => {
    return (
        <HomeLayout title={'View submission'} pageDescription={'Information of the requested submission'}>
            <div className='overflow-x-auto relative mt-6 mr-10 ml-10'>
                <Header
                    title='Hepatic Infraction'
                    status='pending'
                    date='3/4/16'
                    doctor='Dr. John Doe, MD'
                />
                <hr className='mb-6' />
                <div className='flex flex-col mt-6 ml-2'>
                    <div className='columns-2 gap-1'>
                        <SubmissionTextBox
                            title='Email address'
                            subtitle='theresaweb@example.com' />
                        <SubmissionTextBox
                            title='Phone'
                            subtitle='+598 96789268' />
                    </div>
                    <SubmissionTextBox
                        title='Other info'
                        subtitle='Proident ipsum eu dolor exercitation quis magna labore commodo cillum culpa nisi.' />
                    <SubmissionTextBox
                        title='Symptoms'
                        subtitle='Voluptate veniam consequat adipisicing amet et cillum dolore veniam officia esse duis.' />
                    <div className='flex flex-col mb-8'>
                        <h3 className='text-sm text-gray-500 mb-1'>
                            Prescriptions
                        </h3>
                        <div className='flex w-full bg-gray-100 p-2 rounded-lg'>
                            <NoPrescriptionIcon className='mr-3 ml-4' />
                            <span className='text-sm text-gray-800 mt-auto mb-auto'>
                                No prescriptions have been added yet.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default SubmissionPage