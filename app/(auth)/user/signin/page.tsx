// (auth)/user/get-started.tsx
import Image from "next/image";
import UserLoginForm from "@/components/auth/user-login-form";
import Link from "next/link";

const SignIn = () => {

  return (
    <div className="h-screen w-full flex bg-white">
      {/* Left Column: Gradient Box */}
      <div className="hidden sm:block sm:w-2/5 bg-hero-section-gradient relative">
        <Link href="/" className="no-underline text-white">
          <div className="flex items-center space-x-4 mt-7 ml-7">
            <Image
              src="/linguamura_white.svg"
              alt="LinguaMura Logo"
              width={40}
              height={40}
            />
            <span className="font-bold text-lg">LinguaMura</span>
          </div>
        </Link>
      </div>

      {/* Right Column: Information */}
      <div className="w-full sm:w-3/5 pt-24 p-10 sm:pt-32 sm:pe-16 sm:ps-8 flex flex-col">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Welcome back
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Your gateway to learning, entertainment, shopping, and
          connection—all in one place.
        </p>
        <UserLoginForm />
      </div>
    </div>
  )
};

export default SignIn;
