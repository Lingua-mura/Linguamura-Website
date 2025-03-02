"use client"

import React from 'react';
import HousingSearch from '../_components/housing-search';
import AdBanner from '../_components/AdBanner';
import RecommendedProperties from './_components/RecommendedProperties';
import NearByYou from './_components/NearByYou';


export const recommendedPropertiesData = [
  {
    name: "Lagos Luxury Suites",
    info: "A premium stay with ocean views",
    city: "Lagos",
    conutry: "Nigeria",
    image: "/housing/properties1.png",
    amount: 45000
  },
  {
    name: "Abuja Grand Hotel",
    info: "A 5-star experience in the capital",
    city: "Abuja",
    conutry: "Nigeria",
    image: "/housing/properties1.png",
    amount: 60000
  },
  {
    name: "Port Harcourt Royal",
    info: "Luxury and comfort in the heart of PH",
    city: "Port Harcourt",
    conutry: "Nigeria",
    image: "/housing/properties1.png",
    amount: 55000
  },
  {
    name: "Kano Palace Hotel",
    info: "A traditional experience with modern comfort",
    city: "Kano",
    conutry: "Nigeria",
    image: "/housing/properties1.png",
    amount: 30000
  },
  {
    name: "Calabar Resort",
    info: "Relax in nature with top-class service",
    city: "Calabar",
    conutry: "Nigeria",
    image: "/housing/properties1.png",
    amount: 40000
  }
];

export const propertiesData = [
  {
    id: "1",
    title: "Goldlux Hotel",
    location: "Lagos, Nigeria",
    price: "NGN45,000",
    rating: 4.5,
    image: "/housing/properties1.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
    bathrooms: 3,
    isFavorite: true,
  },
  {
    id: "2",
    title: "Royal Grand Hotel",
    location: "Abuja, Nigeria",
    price: "NGN35,000",
    rating: 4.2,
    image: "/housing/properties1.png",
    rooms: "4",
    bedrooms: "3",
    type: "apartment",
    bathrooms: 3,
    isFavorite: false,
  },
  {
    id: "3",
    title: "Palm View Suites",
    location: "Port Harcourt, Nigeria",
    price: "NGN50,000",
    rating: 4.8,
    image: "/housing/properties1.png",
    rooms: "5",
    bedrooms: "4",
    type: "apartment",
    bathrooms: 3,
    isFavorite: true,
  },
  {
    id: "4",
    title: "Emerald Heights",
    location: "Kano, Nigeria",
    price: "NGN25,000",
    rating: 4.0,
    image: "/housing/properties1.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
    bathrooms: 3,
    isFavorite: false,
  },
  {
    id: "5",
    title: "Sunset Bay Hotel",
    location: "Calabar, Nigeria",
    price: "NGN30,000",
    rating: 4.3,
    image: "/housing/properties1.png",
    rooms: "4",
    bedrooms: "3",
    type: "apartment",
    bathrooms: 3,
    isFavorite: false,
  },
];


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