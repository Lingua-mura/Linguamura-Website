"use-client";

import InputField from "../forms/InputField";
import MailIcon from "../vectors/MailIcon";
// import SinglePersonIcon from "../vectors/SinglePersonIcon";
import PasswordIcon from "../vectors/PasswordIcon";
import { Button } from "../ui/button";
import Link from "next/link";

    const UserLoginForm = () => {
    // const router = useRouter()
    return(
        <form>
            <InputField 
                label="Email"
                type="email"
                prefixIcon={<MailIcon />}
                placeholder="Enter your email"
            />
            <InputField 
                label="Password"
                type="password"
                prefixIcon={<PasswordIcon />}
                placeholder="Enter your password"
            />

            <Button variant="primary" size="lg" className="w-full mt-8">
                <Link href="/user">
                Log in
                </Link>
            </Button>

            <div className="mt-4 text-center">
                <span className="text-gray-700">Don&apos;t have an account? {"  "}
                    <Link href="/user/signup" className="text-primary font-bold">
                        Sign up
                    </Link>
                </span>
            </div>
        </form>
    )
}


export default UserLoginForm;