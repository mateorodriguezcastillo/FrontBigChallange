import { HomeLayout } from "../components/layout";
import { useAuthStore } from "../src/store/auth";
import { DoctorTable, PatientTable } from "../components/condicionalComponents";

export default function HomePage() {
  const { user } = useAuthStore();

  return (
    <>
      <HomeLayout title={"Home page"} pageDescription={"Prescription pool"}>
        {user?.role_name === "patient" && <PatientTable />}
        {user?.role_name === "doctor" && <DoctorTable />}
      </HomeLayout>
    </>
  );
}
