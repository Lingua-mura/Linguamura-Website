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
  // const {
  //   control,
  //   formState: {errors},
  // } = useFormContext();
  // const error = get(errors, name);
  return (
    <div className="mt-4">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}

      {/* <div
        className={`mt-[5px]  p-4 border-[1.5px] border-borderColor rounded-[0.75rem] focus-within:border-primary ${
          error && "invalid border-error focus-within:border-error "
        } `}
      > */}
      <div
        className={`mt-[5px] border-[1.5px] border-borderColor rounded-full focus-within:border-primary`}
      >
        <PhoneInput
          international
          countryCallingCodeEditable={true}
          onChange={() => {}}
          defaultCountry="NG"
        />
        {/* <Controller
          name={name}
          control={control}
          rules={{
            required: required ? "This field is required" : "",
            maxLength: {
              value: 15,
              message: "Phone number is too long",
            },
            validate: (value) =>
              isValidPhoneNumber(value) || "Incorrect phone number",
          }}
          render={({field: {onChange, value}}) => (
            <PhoneInput
              international
              countryCallingCodeEditable={true}
              value={value}
              onChange={onChange}
              defaultCountry="NG"
            />
          )}
        /> */}
      </div>
      {/* {error && (
        <div className="input-err-msg pt-[-10rem]">{error.message || ""}</div>
      )} */}
    </div>
  );
};
export default PhoneNumberInput;
