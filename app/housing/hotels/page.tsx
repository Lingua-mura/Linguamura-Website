"use client"

import React from 'react';
import HousingSearch from '../_components/housing-search';
import AdBanner from '../_components/AdBanner';
import TopHotels from './_components/TopHotels';
import NearByYou from './_components/NearByYou';
import { cityData, hotelData } from './data';


const page = () => {
  return (
    <div>
      <HousingSearch 
        name="Hotels" 
        tagline="Find the Hotels that appeal to you the most" 
        searchRoute="/housing/hotels/search" 
      />
      <TopHotels hotels={cityData}  />
      <NearByYou hotels={hotelData}  />
      <AdBanner />
    </div>
  );
};

export default page;