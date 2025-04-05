"use client"

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import "react-datepicker/dist/react-datepicker.css";
// import DatePickerWithPopover from "./DatePickerPopup";

interface ProductSearchProps {
  name?: string;
  tagline?: string;
  searchRoute?: string;
  placeholder?: string;
  onSearch?: (data: { products: string }) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({
  name = "Health Marketplace",
  tagline = "Discover a wide range of health and wellness products tailored for your needs.",
  searchRoute = "#",
  placeholder = "Search health products, medical supplies, and more",
  onSearch,
}) => {
  const router = useRouter();
  const [poducts, setProducts] = useState("");
  const [errors, setErrors] = useState({
    products: false,
  });

  const validateForm = () => {
    const newErrors = {
      products: !poducts.trim(),
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
      products: poducts,
    };

    if (onSearch) {
      onSearch(searchData);
    }

    const searchParams = new URLSearchParams({
      poducts: poducts,
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
          <p className="text-base sm:text-lg lg:text-xl text-black mb-8">
            {tagline}
          </p>
        </div>
      </div>

      <div className="-mt-10 md:-mt-[3.5rem] md:px-0 lg:-mt-14 mb-20 px-4  md:translate-y-1/2 sm:left-0
       sm:right-8 sm:bottom-24 lg:left-16 lg:right-16 lg:bottom-24 flex items-center gap-2 sm:gap-4 mx-auto w-full sm:items-left ">

        <div className="relative w-full bg-[#F7F7FC] rounded-full shadow-sm max-w-[1200px]">
          <Icon
            icon="gravity-ui:map-pin"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width="20"
          />
          <input
            type="text"
            placeholder={placeholder}
            value={poducts}
            onChange={(e) => setProducts(e.target.value)}
            className={`w-full ${inputClassName(errors.products)}`}
          />
          {errors.products && (
            <span className="absolute -bottom-6 left-4 text-red-500 text-sm">Please enter a product</span>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="h-[50px] w-full max-w-[150px] sm:max-w-[160px] z-1 flex items-center justify-center sm:text-base text-sm text-white font-semibold rounded-full bg-gradient-to-b from-[#04E2E2] to-[#00BBBB] shadow-[inset_0px_-4px_0.3px_#007979,inset_0px_0px_0.3px_#1AF0F0] hover:opacity-90 transition-all active:translate-y-0.5 active:shadow-[inset_0px_0px_0.3px_#007979]"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default ProductSearch;
