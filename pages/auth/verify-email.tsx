import { AuthLayout } from "../../components/layout";

const VerifyEmailPage = () => {
  return (
    <AuthLayout title={"Verify email"} pageDescription={"Verify email page"}>
      <div className="mt-16 mr-4 ml-4 flex flex-col">
        <h1 className="text-2xl text-white">Verify email</h1>
        <p className="mt-2 text-sm">
          {" "}
          A verification link has been sent to your email. Please check your
          email address.{" "}
        </p>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmailPage;
