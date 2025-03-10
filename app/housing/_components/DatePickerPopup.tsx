"use client"

import React, { useState, forwardRef } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Icon } from "@iconify/react";
import { format, isValid } from "date-fns";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  className?: string;
  placeholder?: string;
  hasError?: boolean;
  disabled?: boolean;
}

const DatePickerWithPopover = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ value, onChange, className, placeholder = "Pick a date", hasError = false, disabled = false }) => {
    const [open, setOpen] = useState(false);

    const handleSelect = (date: Date | undefined) => {
      onChange(date || null);
      setOpen(false);
    };

    const inputClassName = cn(
      "w-full h-[56px] pl-12 pr-4 bg-[#F7F7FC] rounded-full outline-none text-gray-600",
      hasError ? "border-2 border-red-500" : "border border-[#D9DBE9]",
      className
    );

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={inputClassName}
            disabled={disabled}
            onClick={() => setOpen(true)}
          >
            <div className="flex w-full items-center justify-between">
              <span className="text-left">
                {value && isValid(value) ? format(value, "dd/MM/yyyy") : placeholder}
              </span>
              <Icon
                icon="cuida:calendar-outline"
                className="text-gray-400"
                width="20"
              />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value || undefined}
            onSelect={handleSelect}
            initialFocus
            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
          />
        </PopoverContent>
      </Popover>
    );
  }
);

DatePickerWithPopover.displayName = "DatePickerWithPopover";

export default DatePickerWithPopover;