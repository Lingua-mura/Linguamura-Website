/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface ApartmentData {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number; // Out of 5
  image: string;
  isFavorite?: boolean;
}

interface TopPicksProps {
  apartments: ApartmentData[];
  title?: string;
  initialDisplayCount?: number;
  showMoreIncrement?: number;
  starImageUrl?: string;
}

const TopPicks: React.FC<TopPicksProps> = ({ 
  apartments, 
  title = "Top Picks", 
  initialDisplayCount = 8,
  showMoreIncrement = 4,
  starImageUrl = "/housing/star.png"
}) => {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleShowMore = () => {
    setDisplayCount(prev => prev + showMoreIncrement);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {apartments.slice(0, displayCount).map((apartment) => (
          <div 
            key={apartment.id} 
            className="bg-white rounded-[12px] overflow-hidden shadow-md no-underline"
          >
            <div className="relative h-48 rounded-t-[12px]">
              <img 
                src={apartment.image} 
                alt={apartment.title} 
                className="w-full h-full object-cover rounded-t-[12px]"
              />
              <button 
                className="absolute top-3 right-3 bg-white p-1 rounded-[8px] shadow-md"
                onClick={() => toggleFavorite(apartment.id)}
                aria-label={favorites[apartment.id] ? "Remove from favorites" : "Add to favorites"}
              >
                <Icon 
                  icon={favorites[apartment.id] ? "mingcute:heart-fill" : "stash:heart-duotone"} 
                  width={24} 
                  height={24} 
                  className={favorites[apartment.id] ? "text-[#00BBBB]" : "text-[#A0A3BD]"}
                />
              </button>
            </div>
            
            <Link href={`/housing/apartments/${apartment.id}`} passHref className='no-underline'>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{apartment.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{apartment.location}</p>
              
              <p className="text-lg font-bold text-gray-900 mb-2">{apartment.price}</p>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <img 
                    key={i}
                    src={starImageUrl}
                    alt="Star rating"
                    className="w-5 h-5 mr-1"
                    style={{ 
                      opacity: i < apartment.rating ? 1 : 0.3 
                    }}
                  />
                ))}
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
      
      {displayCount < apartments.length && (
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
export default TopPicks;