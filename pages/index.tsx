import { HomeLayout } from '../components/layout'
import { SubmissionsTable } from '../components/ui';

export default function Home() {
  return (
    <>
      <HomeLayout title={'Home page'} pageDescription={'Prescription pool'}>
        <SubmissionsTable/>
      </HomeLayout>
    </>
  )
}
