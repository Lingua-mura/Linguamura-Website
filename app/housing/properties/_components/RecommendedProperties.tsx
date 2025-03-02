"use client";

import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface PropertiesData {
  name: string;
  info: string;
  city: string;
  conutry: string;
  image: string;
  amount: number;
}

interface RecommendedPropertiesProps {
  properties: PropertiesData[];
  title?: string;
}

const RecommendedProperties: React.FC<RecommendedPropertiesProps> = ({
  properties,
  title = "Recommended Properties",
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const formatAmount = (amount: number) => {
    if (amount >= 1_000_000_000)
      return `${(amount / 1_000_000_000).toFixed(0)}B`;
    if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(0)}M`;
    if (amount >= 1_000) return `${(amount / 1_000).toFixed(0)}K`;
    return amount; // If amount is less than 1K, show it as is
  };

  return (
    <div className="container px-5 mx-auto py-8 relative" style={{ zIndex: 0 }}>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      <div className="relative flex items-center">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-3 z-1 bg-[#00BBBB] text-white p-2 rounded-full shadow-lg mr-4"
          aria-label="Previous"
        >
          <Icon icon="mdi:chevron-left" width={24} height={24} />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="flex gap-4 min-w-max pb-10">
            {properties.map((city, index) => (
              <div
                key={index}
                className="w-[280px] h-full rounded-xl no-scrollbar shadow-sm bg-white flex-shrink-0"
              >
                <div className="h-64 overflow-hidden rounded-t-xl">
                  <Image
                    src={city.image}
                    alt={`${city.name}, ${city.name}`}
                    width={249}
                    height={246}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 mb-10 relative">
                  <div className="mb-3">
                    <h3 className="text-[22px] font-bold mb-1">
                      {city.name.slice(0, 10)}... properties
                    </h3>
                    <p className="text-[16px] font-medium">
                      {city.info.slice(0, 30)}...
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-4 absolute">
                    <div>
                      <p className="text-[18px] font-bold">
                        {city.city.slice(0, 7)}...
                      </p>
                      <p className="text-[12px] font-normal -mt-4">
                        {city.conutry}
                      </p>
                    </div>
                    <p className="text-[28px] text-wrap text-[#00BBBB] font-bold">
                      NGN {formatAmount(city.amount)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-3 z-1 bg-[#00BBBB] text-white p-2 rounded-full shadow-lg ml-4"
          aria-label="Next"
        >
          <Icon icon="mdi:chevron-right" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default RecommendedProperties;
