"use client"

import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
// import { Star } from "lucide-react"

import Image from 'next/image';
import { HealthProductDealsProps, ProductData } from '@/app/types/health';


const HealthProductsDeals: React.FC<HealthProductDealsProps> = ({
  products: products,
  title = "Today's Deals",
  special = false
}) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string | number) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
    <div className={`container px-5 mx-auto pt-8 ${special && "bg-[#00BBBB]"}`}>
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>

      <div className="relative flex items-center">
        <button
          onClick={() => scroll('left')}
          className={`absolute -left-3 z-10  p-2 rounded-full shadow-lg mr-4  ${special ? "text-[#00BBBB] bg-white" : "text-white bg-[#00BBBB]"}`}
          aria-label="Previous"
        >
          <Icon icon="mdi:chevron-left" width={24} height={24} />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="flex gap-4 min-w-max pb-10">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} favorites={favorites} toggleFavorite={toggleFavorite} />
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll('right')}
          className={`absolute -right-3 z-10 p-2 rounded-full shadow-lg ml-4  ${special ? "text-[#00BBBB] bg-white" : "bg-[#00BBBB] text-white"}`}
          aria-label="Next"
        >
          <Icon icon="mdi:chevron-right" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default HealthProductsDeals;


// import Image from "next/image"

export function ProductCard({ product, favorites, toggleFavorite }: { product: ProductData, favorites: Record<string, boolean>, toggleFavorite: (id: string | number) => void }) {
  return (
    <div className="relative max-w-xs rounded-3xl bg-white p-4 shadow-lg">
      <button
        className="absolute top-3 right-3 bg-gray-200 p-1 rounded-[8px] shadow-md"
        onClick={() => toggleFavorite(product.id)}
        aria-label={favorites[product.id] ? "Remove from favorites" : "Add to favorites"}
      >
        <Icon
          icon={favorites[product.id] ? "mingcute:heart-fill" : "stash:heart-duotone"}
          width={24}
          height={24}
          className={favorites[product.id] ? "text-[#00BBBB]" : "text-[#A0A3BD]"}
        />
      </button>
      <div className=" flex flex-col items-center">
        <div className="mb-4 flex justify-center">
          <Image
            src={product.image}
            alt="Natural Vitality CALM Gummies"
            width={150}
            height={200}
            className="object-contain"
          />

        </div>

        <div className="w-full text-left">
          <h3 className="mb-2 text-xl font-medium text-gray-600">{product.name}</h3>

          <div className="mb-2 flex items-center">
            {[...Array(5)].map((_, i) => (
              <Icon icon="mdi:star" key={i} width={24} height={24} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-700">265</span>
          </div>

          <div className="mt-2">
            <p className="text-2xl font-bold text-black">N150,000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

