"use client"

import React from 'react';
import HousingSearch from '../_components/housing-search';
import AdBanner from '../_components/AdBanner';
import RecommendedProperties from './_components/RecommendedProperties';
import NearByYou from './_components/NearByYou';
import { propertiesData, recommendedPropertiesData } from './data';


const page = () => {
  return (
    <div>
      <HousingSearch 
        name="Properties" 
        tagline="We look forward to welcoming you onboard." 
        searchRoute="/housing/properties/search" 
      />
      <RecommendedProperties properties={recommendedPropertiesData}  />
      <NearByYou properties={propertiesData}  />
      <AdBanner />
    </div>
  );
};

export default page;