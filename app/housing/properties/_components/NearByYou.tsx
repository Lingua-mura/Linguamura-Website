/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export interface PropertiesData {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  rooms: string;
  bedrooms: string;
  type: string;
  bathrooms: number;
  isFavorite?: boolean;
}

interface NearByYouProps {
  properties: PropertiesData[];
  title?: string;
  initialDisplayCount?: number;
  showMoreIncrement?: number;
  starImageUrl?: string;
}

const NearByYou: React.FC<NearByYouProps> = ({
  properties,
  title = "Near by you",
  initialDisplayCount = 2,
  showMoreIncrement = 4,
}) => {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + showMoreIncrement);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-1 gap-6">
        {properties.slice(0, displayCount).map((apartment) => (
          <div
            key={apartment.id}
            className="bg-white rounded-[12px] overflow-hidden shadow-md flex"
          >
            {/* Left side: Image + Like button */}
            <div className="relative w-1/2">
              <img
                src={apartment.image}
                alt={apartment.title}
                className="w-full h-full rounded-l-[12px] object-cover"
              />
              <button
                className="absolute z-10 top-3 right-3 bg-white p-2 rounded-[8px] shadow-md"
                onClick={() => toggleFavorite(apartment.id)}
                aria-label={
                  favorites[apartment.id]
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
              >
                <Icon
                  icon={
                    favorites[apartment.id]
                      ? "mingcute:heart-fill"
                      : "stash:heart-duotone"
                  }
                  width={24}
                  height={24}
                  className={
                    favorites[apartment.id]
                      ? "text-[#00BBBB]"
                      : "text-[#A0A3BD]"
                  }
                />
              </button>
            </div>

            {/* Right side: Property details */}
            <div className="p-6 w-1/2">
              {/* Top Section */}
              <div className="flex items-center space-x-4 text-gray-700 text-sm mb-2">
                <div className="flex items-center bg-[#00BBBB] text-white px-2 py-1 rounded-[10px] text-[16px] font-medium">
                  {apartment.rating.toFixed(1)}
                  
                </div>
                <span className="text-[#D9DBE9] font-thin text-[28.57px]">|</span>
                <div className="flex items-center space-x-1">
                  <Icon
                    icon="bitcoin-icons:verify-outline"
                    className="text-gray-500"
                    width={34}
                    height={34}
                  />
                  <span className="text-black text-[16px]">Verified</span>
                </div>
                <span className="text-[#D9DBE9] font-thin text-[28.57px]">|</span>
                <div className="text-black text-[16px]">Quick look</div>
              </div>

              {/* Title & Location */}
              <h3 className="text-[24px] font-bold text-black mt-[20px]">
                {apartment.title}
              </h3>
              <p className="text-[#4E4B66] text-[16px] mb-[12px]">{apartment.location}</p>

              {/* Features */}
              <div className="flex items-center space-x-4 text-black text-[16px] mt-2 mb-[41px]">
                <span>Full furnished</span>
                <span className="text-[#D9DBE9] font-thin text-[28.57px]">|</span>
                <span>Parking garage</span>
                <span className="text-[#D9DBE9] font-thin text-[28.57px]">|</span>
                <span>Swimming pool</span>
              </div>

              {/* Bedrooms, Bathrooms & Price */}
              <div className="flex items-center space-x-6 text-[#6E7191] mt-4 mb-5">
                <span className="text-lg">{apartment.bedrooms} bedrooms</span>
                <span className="text-lg">{apartment.bathrooms} bathrooms</span>
              </div>
              <p className="text-3xl font-bold text-black mt-2">
                NGN {apartment.price}
              </p>

              {/* Horizontal Line */}
              <hr className="my-4 border-[#D9DBE9]" />

              {/* Bottom Section: Tour & Availability */}
              <div className="flex justify-between items-center">
                <div className="flex items-center text-[#4E4B66]">
                  <Icon
                    icon="cuida:calendar-outline"
                    width={28}
                    height={28}
                    className="mr-2"
                  />
                  <span className="text-[18px]">Tour</span>
                </div>
                <Link href={`/housing/properties/${apartment.id}`} passHref className="no-underline">
                  <button className="h-[50px] w-[211px] flex items-center justify-center text-white font-normal text-[16px] rounded-full bg-gradient-to-b from-[#04E2E2] to-[#00BBBB] shadow-[inset_0px_-4px_0.3px_#007979,inset_0px_0px_0.3px_#1AF0F0] hover:opacity-90 transition-all active:translate-y-0.5 active:shadow-[inset_0px_0px_0.3px_#007979]">
                    Check Availability
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayCount < properties.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="w-[182px] h-[45px] border-2 border-[#00BBBB] text-[#00BBBB] rounded-full hover:bg-[#00BBBB] hover:text-white transition-colors font-bold text-[16px]"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default NearByYou;