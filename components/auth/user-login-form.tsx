"use-client";

import InputField from "../forms/InputField";
import MailIcon from "../vectors/MailIcon";
import SinglePersonIcon from "../vectors/SinglePersonIcon";
import PasswordIcon from "../vectors/PasswordIcon";
import { Button } from "../ui/button";


const UserLoginForm = () => {
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
                Log in
            </Button>
        </form>
    )
}


export default UserLoginForm;