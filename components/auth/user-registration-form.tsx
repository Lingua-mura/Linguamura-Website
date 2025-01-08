"use-client";

import InputField from "../forms/InputField";
import PhoneNumberInput from "../forms/PhoneNumberInput/PhoneNumberInput";
import MailIcon from "../vectors/MailIcon";
import SinglePersonIcon from "../vectors/SinglePersonIcon";


const UserRegistrationForm = () => {
    return(
        <form>
            <InputField 
                label="Full Name"
                type="text"
                prefixIcon={<SinglePersonIcon />}
                placeholder="Enter yout full name"
            />
            <InputField 
                label="Email"
                type="email"
                prefixIcon={<MailIcon />}
                placeholder="Enter your email"
            />
            <PhoneNumberInput 
            name="phone_input"
            />
        </form>
    )
}


export default UserRegistrationForm;