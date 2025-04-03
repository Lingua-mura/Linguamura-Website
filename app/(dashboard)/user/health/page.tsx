"use client"

import React from 'react';
import ProductHeader from './_components/product-search';
import HealthProductsDeals from './_components/HealthProductsDeals';
// import TopPicks from './_components/TopPicks';
import AdBanner from './_components/AdBanner';
// import { apartmentData } from './data';
import { ProductData } from '@/app/types/health';


export default function ApartmentsPage() {

  const productData: ProductData[] = [
    {
      id: 1, name: "Natural Vitality, CALM Gummies, Magnesi...",
      price: "150,000",
      image: "/health/image.png",
      productRating: 265
    },
    {
      id: 2, name: "Natural Vitality, CALM Gummies, Magnesi...",
      price: "150,000",
      image: "/health/image.png",
      productRating: 200
    },
    {
      id: 3, name: "Natural Vitality, CALM Gummies, Magnesi...",
      price: "150,000",
      image: "/health/image.png",
      productRating: 542
    },
    {
      id: 4, name: "Natural Vitality, CALM Gummies, Magnesi...",
      price: "150,000",
      image: "/health/image.png",
      productRating: 123
    },
    {
      id: 5, name: "Natural Vitality, CALM Gummies, Magnesi...",
      price: "150,000",
      image: "/health/image.png",
      productRating: 123
    }
  ];

  return (
    <div>
      <ProductHeader
        name="Health Marketplace"
        tagline="Discover a wide range of health and wellness products tailored for your needs."
        searchRoute="health/search"
      />
      <HealthProductsDeals products={productData} />
      <HealthProductsDeals products={productData} title={"Specials picked for you"} special />
      <HealthProductsDeals products={productData} title={"Recommended for you"} />
      {/* <TopPicks apartments={apartmentData} /> */}
      <AdBanner />
    </div>
  );
};

// export default page;
