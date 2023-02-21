import Link from "next/link";
import { AuthLayout } from "../../components/layout";

const EmailVerifiedPage = () => {
    return (
      <AuthLayout title={"Email verified"} pageDescription={"Email verified"}>
        <div className="mr-4 ml-4 mb-12 flex flex-col text-center">
          <h1 className="text-2xl text-white">Email has been verified</h1>
          <p className="mt-2 text-sm">
            Your email has been successfully verified.
          </p>
          <Link className="mt-4 underline right-1" href={"/auth/login"}>
            Sign In
          </Link>
        </div>
      </AuthLayout>
    );
  };
  
  export default EmailVerifiedPage;