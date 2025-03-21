"use client";

import Image from "next/image";
import UserRegistrationForm from "@/components/auth/user-registration-form";
import Link from "next/link";


const SignUpPage = () => {
    return (
        <div
            className="flex scrollbar-style text-sm text-grey justify-center min-h-[100vh] lg:pt-16 pt-10"
        >
            <div className="mx-auto w-full max-w-xl p-5 sm:p-8">
                <Link href="/" className="no-underline text-black">
                    <div className="mb-2 flex items-center justify-center">
                        <Image
                            src="/linguamura_logo.svg"
                            alt="LinguaMura Logo"
                            width={40}
                            height={40}
                        />
                        <span className="font-bold text-lg">LinguaMura</span>
                    </div>
                </Link>
                <h3 className="text-center text-gray-900 font-bold text-lg md:text-2xl lg:text-4xl mb-3">
                    Create a personalized profile
                </h3>
                <UserRegistrationForm />
            </div>
        </div>
    );
};


export default SignUpPage;