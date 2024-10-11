import OtpVerificationForm from "../components/auth/OtpVerificationForm";

const OtpVerificationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-8">Vérification OTP</h1>
      <OtpVerificationForm />
    </div>
  );
};

export default OtpVerificationPage;
