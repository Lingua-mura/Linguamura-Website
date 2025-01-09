import Image from "next/image";
import UserLoginForm from "@/components/auth/user-login-form";
import MultipleSelectForm from "@/components/auth/interests-form";

const Interests = () => {
  return (
    <div className="flex scrollbar-style text-sm text-grey justify-center min-h-[100vh] lg:pt-16 pt-10">
      <div className="mx-auto w-full max-w-xl p-5 sm:p-8">
        <div className="mb-2 flex items-center justify-center">
          <Image
            src="/linguamura_logo.svg"
            alt="LinguaMura Logo"
            width={40}
            height={40}
          />
          <span className="font-bold text-lg">LinguaMura</span>
        </div>
        <div className="text-center">
          <h1 className="text-center text-gray-900 font-bold text-2xl mb-3">
            Let us know why you are
          </h1>
          <p className="text-lg text-gray-700 mb-4">Select all that apply</p>
        </div>
        <MultipleSelectForm />
      </div>
    </div>
  );
};

export default Interests;
