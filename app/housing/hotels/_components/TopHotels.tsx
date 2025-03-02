"use client"

import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

interface hotelData {
  name: string;
  country: string;
  image: string;
  hotelCount: number;
}

interface TopHotelsProps {
  hotels: hotelData[];
  title?: string;
}

const TopHotels: React.FC<TopHotelsProps> = ({ 
  hotels, 
  title = "Top Hotels" 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      const newScrollPosition = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container px-5 mx-auto py-8 relative" style={{ zIndex: 0 }}>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      
      <div className="relative flex items-center">
        <button 
          onClick={() => scroll('left')}
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
            {hotels.map((city, index) => (
              <div 
              key={index} 
              className="w-[280px] h-[400px] rounded-xl no-scrollbar shadow-sm bg-white flex-shrink-0"
              >
              <div className="h-64 overflow-hidden rounded-t-xl">
                <Image 
                src={city.image} 
                alt={`${city.name}, ${city.country}`} 
                width={249}
                height={246}
                className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <div className='mb-3'>
                <h3 className="text-xl font-medium">{city.name}</h3>
                <p className="text-gray-500 mb-2">{city.country}</p>
                </div>
                <p className="text-lg font-bold">{city.hotelCount} Hotels</p>
              </div>
              </div>
            ))}
            </div>
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute -right-3 z-1 bg-[#00BBBB] text-white p-2 rounded-full shadow-lg ml-4"
          aria-label="Next"
        >
          <Icon icon="mdi:chevron-right" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default TopHotels;