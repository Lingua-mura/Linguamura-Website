// import {Controller, get, useFormContext} from "react-hook-form";
import {isValidPhoneNumber} from "react-phone-number-input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./style.css";

interface PhoneNumberInputProps {
  label?: string;
  name: string;
  required?: boolean;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({label = "Phone Number", name, required = true}) => {

  return (
    <div className="mt-4">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}

      <div
        className={`mt-[5px] border border-borderColor rounded-full focus-within:border-primary`}
      >
        <PhoneInput
          international
          countryCallingCodeEditable={true}
          onChange={() => {}}
          defaultCountry="NG"
        />
      </div>
    </div>
  );
};
export default PhoneNumberInput;
