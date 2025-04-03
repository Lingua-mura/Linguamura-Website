"use client"

import React from 'react';
import HousingHeader from '../_components/housing-search';
import TopCities from './_components/TopCities';
import TopPicks from './_components/TopPicks';
import AdBanner from '../_components/AdBanner';
import { apartmentData } from './data';


interface CityData {
  name: string;
  country: string;
  image: string;
  apartmentCount: number;
}

export default function ApartmentsPage() {

  const cityData: CityData[] = [
    {
      name: "Lagos",
      country: "Nigeria",
      image: "/housing/lagos.png",
      apartmentCount: 122
    },
    {
      name: "Lagos",
      country: "Nigeria",
      image: "/housing/paris.png",
      apartmentCount: 21
    },
    {
      name: "Lagos",
      country: "Nigeria",
      image: "/housing/lagos.png",
      apartmentCount: 542
    },
    {
      name: "Lagos",
      country: "Nigeria",
      image: "/housing/paris.png",
      apartmentCount: 123
    },
    {
      name: "Lagos",
      country: "Nigeria",
      image: "/housing/lagos.png",
      apartmentCount: 123
    }
  ];

  return (
    <div>
      <HousingHeader
        name="Apartments"
        tagline="Find the apartments that appeal to you the most"
        searchRoute="/housing/apartments/search"
      />
      <TopCities cities={cityData} />
      <TopPicks apartments={apartmentData} />
      <AdBanner />
    </div>
  );
};

// export default page;
