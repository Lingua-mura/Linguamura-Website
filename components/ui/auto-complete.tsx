"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "./label"

// Define a type for the option
interface Option {
  value: string
  label: string
}

interface AutoCompleteProps {
  options: Option[] // The list of options for the combobox
  value: string      
  onValueChange: (value: string) => void // Callback when an option is selected
}

export function AutoComplete({
  options,
  value,
  onValueChange,
}: AutoCompleteProps) {
  const [open, setOpen] = React.useState<boolean>(false) // Popover open state

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="mt-5">
          <Label className={`text-sm font-medium`}>
            Country of Residence
          </Label>
          <div className={`form-group bg-slate-100 mt-1 p-2 rounded-md`}>
            {/* Display the current selected value or default text */}
            {value
              ? options.find((option) => option.value === value)?.label
              : "Select option..."}
            <span className="pl-3">
              <ChevronsUpDown className="opacity-50" />
            </span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search option..." className="h-9" />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {options.map((option, index) => (
                <CommandItem
                  key={index}
                  value={option.value}
                  onSelect={(currentValue: string) => {
                    onValueChange(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
