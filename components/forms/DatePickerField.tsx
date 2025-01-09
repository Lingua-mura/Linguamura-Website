import { useState } from "react";
import { DatePicker } from "@/components/ui/date-picker"; // Adjust the import path as necessary
import { Label } from "../ui/label";

interface DatePickerFieldProps {
  name: string;
  label?: string;
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  bordered?: boolean;
  onDateChange?: (date: Date | null) => void;
}

const DatePickerField = ({
  name,
  label,
  required = true,
  minDate,
  maxDate,
  placeholder,
  bordered = true,
  onDateChange,
}: DatePickerFieldProps) => {
//   const { control, formState: { errors } } = useFormContext();
//   const error = get(errors, name);

  return (
    <div className="mt-5">
      {label && (
        <Label className="font-medium block text-sm mb-2">
          {label} {required && <span className="text-error">*</span>}
        </Label>
      )}
      <div className={bordered ? "" : "no-border"}>
        {/* <Controller
          name={name}
          control={control}
          rules={{
            required: required ? "This field is required" : false,
            validate: (value) => {
              if (minDate && value && value < minDate) {
                return `Date cannot be before ${minDate.toLocaleDateString()}`;
              }
              if (maxDate && value && value > maxDate) {
                return `Date cannot be after ${maxDate.toLocaleDateString()}`;
              }
              return true;
            },
          }}
          render={({ field: { onChange, value } }) => (
            <> */}
              <DatePicker
                // value={value ?? selectedDate}
                // onDateChange={(date) => {
                //   setSelectedDate(date);
                //   onChange(date); // Update the form state with the selected date
                //   if (onDateChange) {
                //     onDateChange(date); // Optional callback for date change
                //   }
                // }}
                // placeholder={placeholder}
                startYear={minDate ? minDate.getFullYear() - 100 : undefined}
                endYear={maxDate ? maxDate.getFullYear() + 100 : undefined}
              />
            {/* </>
          )}
        /> */}
      </div>
      {/* {error && <div className="input-err-msg pt-2 text-red-600">{error.message}</div>} */}
    </div>
  );
};

export default DatePickerField;
