"use-client";

// import { useState } from "react";
import DatePickerField from "../forms/DatePickerField";
import InputField from "../forms/InputField";
import PhoneNumberInput from "../forms/PhoneNumberInput/PhoneNumberInput";
import MailIcon from "../vectors/MailIcon";
import SinglePersonIcon from "../vectors/SinglePersonIcon";
import PasswordIcon from "../vectors/PasswordIcon";
import { Button } from "../ui/button";
import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



const UserRegistrationForm = () => {
    // const [country, setCountry] = useState<string>("");

    return (
        <form>
            <InputField
                label="Full Name"
                type="text"
                prefixIcon={<SinglePersonIcon />}
                placeholder="Enter your full name"
            />
            <InputField
                label="Email"
                type="email"
                prefixIcon={<MailIcon />}
                placeholder="Enter your email"
            />
            <PhoneNumberInput
                name="phone"
            />
            <DatePickerField
                name="birth_date"
            />
            <Select>
                <SelectTrigger className="mt-5 rounded-3xl">
                    <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Nigeria</SelectItem>
                    <SelectItem value="dark">Zambia</SelectItem>
                    <SelectItem value="system">Ghana</SelectItem>
                </SelectContent>
            </Select>

            <InputField
                label="Password"
                type="password"
                prefixIcon={<PasswordIcon />}
                placeholder="Enter your password"
            />

            <Button variant="primary" size="lg" className="w-full mt-10">
                Sign up
            </Button>

            <div className="mt-4 text-center">
                <span className="text-gray-700">Already have an account? {"  "}
                    <Link href="/user/signin" className="text-primary font-bold">
                        Log in
                    </Link>
                </span>
            </div>

            <div className="mt-4 text-center">
                <span className="text-gray-700 font-medium">
                    By signing up, you confirm that you have read and agreed to our
                    <span className="text-primary">Terms</span> and <span className="text-primary">Privacy Policy</span>.
                </span>
            </div>
        </form>
    )
}


export default UserRegistrationForm;