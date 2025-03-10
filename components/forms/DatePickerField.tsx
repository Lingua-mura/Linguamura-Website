// import { useState } from "react";
import { DatePicker } from "@/components/ui/date-picker"; // Adjust the import path as necessary
import { Label } from "../ui/label";

interface DatePickerFieldProps {
  name?: string;
  label?: string;
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  bordered?: boolean;
  onDateChange?: (date: Date | null) => void;
}

const DatePickerField = ({
  // name,
  label,
  required = true,
  minDate,
  maxDate,
  // placeholder,
  bordered = true,
  // onDateChange,
}: DatePickerFieldProps) => {

  return (
    <div className="mt-5">
      {label && (
        <Label className="font-medium block text-sm mb-2">
          {label} {required && <span className="text-error">*</span>}
        </Label>
      )}
      <div className={bordered ? "" : "no-border"}>
        <DatePicker
          startYear={minDate ? minDate.getFullYear() - 100 : undefined}
          endYear={maxDate ? maxDate.getFullYear() + 100 : undefined}
        />
      </div>
    </div>
  );
};

export default DatePickerField;
