"use client";

import * as React from "react";
import { format, getMonth, getYear, setMonth, setYear } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Label } from "./label";
import CalendarIcon from "../vectors/CalendarIcon";

interface DatePickerProps {
  startYear?: number;
  endYear?: number;
  value?: Date | null; // external value for the selected date
  onChange?: (date: Date | null) => void; // handler for when the date is changed
  inputFormat?: string; // date format for the input
  renderInput?: (props: { value: string; onChange: (selectedDate: Date | undefined) => void }) => React.JSX.Element; // function for custom input rendering
}

export function DatePicker({
  startYear = getYear(new Date()) - 100,
  endYear = getYear(new Date()) + 100,
  value,
  onChange,
  inputFormat = "PPP", // default format if not provided
  renderInput,
}: DatePickerProps) {

  const [date, setDate] = React.useState<Date | undefined>(value ?? undefined); // Initialize as undefined

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

  const handleMonthChange = (month: string) => {
    const newDate = setMonth(date ?? new Date(), months.indexOf(month));
    setDate(newDate);
    onChange?.(newDate);
  };

  const handleYearChange = (year: string) => {
    const newDate = setYear(date ?? new Date(), parseInt(year));
    setDate(newDate);
    onChange?.(newDate);
  };

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      onChange?.(selectedDate);
    } else {
      setDate(undefined); // Explicitly set undefined if no date is selected
      onChange?.(null);
    }
  };

  const formattedDate = date ? format(date, inputFormat) : "";

  const defaultRenderInput = () => (
    <div className="mt-5">
      <Label className={`text-sm font-medium`}>
        Date of Birth
      </Label>
      <div className={`form-group bg-slate-100 mt-1`}>
        <span className="select-none -ml-1 mr-1"><CalendarIcon /> </span>
        <span className="flex-grow pl-3">{formattedDate || <span>Pick a date</span>}</span>
      </div>
    </div>
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        {renderInput ? (
          renderInput({ value: formattedDate, onChange: handleSelect })
        ) : (
          defaultRenderInput()
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="flex justify-between p-2">
          <Select onValueChange={handleMonthChange} value={months[getMonth(date ?? new Date())]}>
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={handleYearChange} value={getYear(date ?? new Date()).toString()}>
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Calendar
          mode="single"
          selected={date} // Ensure it's not null
          onSelect={handleSelect}
          initialFocus
          month={date ?? new Date()} // Ensure it falls back to the current date if undefined
          onMonthChange={setDate}
        />
      </PopoverContent>
    </Popover>
  );
}
