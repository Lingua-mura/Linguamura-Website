/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export interface HotelData {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  rooms: string;
  bedrooms: string;
  type: string;
  isFavorite?: boolean;
}

interface NearByYouProps {
  hotels: HotelData[];
  title?: string;
  initialDisplayCount?: number;
  showMoreIncrement?: number;
  starImageUrl?: string;
}

const NearByYou: React.FC<NearByYouProps> = ({
  hotels,
  title = "Near by you",
  initialDisplayCount = 8,
  showMoreIncrement = 4,
  starImageUrl = "/housing/star.png",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.slice(0, displayCount).map((apartment) => (
          <div
            key={apartment.id}
            className="bg-white rounded-[12px] overflow-hidden shadow-md no-underline relative"
          >
            <button
              className="absolute z-10 top-3 right-3 bg-white p-1 rounded-[8px] shadow-md"
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
                  favorites[apartment.id] ? "text-[#00BBBB]" : "text-[#A0A3BD]"
                }
              />
            </button>

            <Link
              href={`/housing/hotels/${apartment.id}`}
              passHref
              className="no-underline"
            >
              <div className="relative h-48 rounded-t-[12px]">
                <img
                  src={apartment.image}
                  alt={apartment.title}
                  className="w-full h-full rounded-t-[12px] object-cover"
                />
              </div>

              <div className="p-4 mb-10">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {apartment.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {apartment.location}
                    </p>
                  </div>

                  <div className="flex gap-1 items-center">
                    <img
                      src={starImageUrl}
                      alt="Star rating"
                      className="w-5 h-5 mr-1"
                    />
                    <span className="text-gray-700 text-[16.79] font-bold mt-1">
                      {apartment.rating.toFixed(1)}
                    </span>
                  </div>
                </div>

                <p className="text-lg font-bold text-gray-900 mb-2 absolute bottom-4">
                  {apartment.price}{" "}
                  <span className="font-normal text-[14.2px] text-[#14142A] mt-2">
                    /night
                  </span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {displayCount < hotels.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="mt-4 w-[182px] h-[45px] border-2 border-[#00BBBB] text-[#00BBBB] rounded-full hover:bg-[#00BBBB] hover:text-white transition-colors font-bold text-[16px]"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

// Example usage
export default NearByYou;
