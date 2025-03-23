"use client"

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerWithPopover from "./DatePickerPopup";

interface HousingSearchProps {
  name?: string;
  tagline?: string;
  searchRoute?: string;
  placeholder?: string;
  onSearch?: (data: { location: string; date: string; rooms: string }) => void;
}

const HousingSearch: React.FC<HousingSearchProps> = ({
  name = "Apartments",
  tagline = "Find the apartments that appeal to you the most",
  searchRoute = "#",
  placeholder = "Where are you going?",
  onSearch,
}) => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [rooms, setRooms] = useState("");
  const [errors, setErrors] = useState({
    location: false,
    date: false,
    rooms: false
  });

  const validateForm = () => {
    const newErrors = {
      location: !location.trim(),
      date: !date,
      rooms: !rooms.trim()
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const searchData = {
      location,
      date: date ? date.toISOString() : "",
      rooms,
    };
    
    if (onSearch) {
      onSearch(searchData);
    }

    const searchParams = new URLSearchParams({
      location: location,
      date: date ? date.toISOString() : "",
      rooms: rooms,
    });

    router.push(`${searchRoute}?${searchParams.toString()}`);
  };

  const inputClassName = (hasError: boolean) => `
    w-[290px] h-[56px] pl-12 pr-4 bg-[#F7F7FC] rounded-full outline-none text-gray-600
    ${hasError ? 'border-2 border-red-500' : 'border border-[#D9DBE9]'}
  `;

  return (
    <>
      <div className="bg-[#00BBBB] text-white relative pb-14 pt-8 px-4">
      <div className="container px-4 mx-auto max-w-7xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            {name}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#6E7191] mb-8">
            {tagline}
          </p>
        </div>
      </div>
      
      <div className="container -mt-10 md:-mt-28 md:px-0 lg:-mt-14 mb-20 px-4  md:translate-y-1/2 sm:left-8 sm:right-8 sm:bottom-24 lg:left-16 lg:right-16 lg:bottom-24 flex flex-wrap items-center gap-4">
        <div className="relative w-[290px] bg-[#F7F7FC] rounded-full shadow-sm">
          <Icon
            icon="gravity-ui:map-pin"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width="20"
          />
          <input
            type="text"
            placeholder={placeholder}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={inputClassName(errors.location)}
          />
          {errors.location && (
            <span className="absolute -bottom-6 left-4 text-red-500 text-sm">Location is required</span>
          )}
        </div>

        <div className="relative z-50 w-[290px]">
          <DatePickerWithPopover
            value={date}
            onChange={(date) => setDate(date)}
            placeholder="Pick a date"
            hasError={errors.date}
          />
          {errors.date && (
            <span className="absolute -bottom-6 left-4 text-red-500 text-sm">Date is required</span>
          )}
        </div>

        <div className="relative w-[290px] bg-[#F7F7FC] rounded-full shadow-sm">
          <Icon
            icon="fluent:bed-20-regular"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width="20"
          />
          <input
            type="text"
            placeholder="Number of rooms"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className={inputClassName(errors.rooms)}
          />
          {errors.rooms && (
            <span className="absolute -bottom-6 left-4 text-red-500 text-sm">Rooms is required</span>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="h-[50px] w-[151px] flex items-center justify-center text-white font-semibold rounded-full bg-gradient-to-b from-[#04E2E2] to-[#00BBBB] shadow-[inset_0px_-4px_0.3px_#007979,inset_0px_0px_0.3px_#1AF0F0] hover:opacity-90 transition-all active:translate-y-0.5 active:shadow-[inset_0px_0px_0.3px_#007979]"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default HousingSearch;