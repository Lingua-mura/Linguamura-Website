"use client"

import React from 'react';
import HousingHeader from '../_components/housing-search';
import TopCities from './_components/TopCities';
import TopPicks from './_components/TopPicks';
import AdBanner from '../_components/AdBanner';


export const cityData = [
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

export const apartmentData = [
  {
    id: "1",
    title: "Goldlux Studio Apartment",
    location: "Lagos, Nigeria",
    price: "NGN15,000",
    rating: 5,
    image: "/housing/apartment1.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
  },
  {
    id: "2",
    title: "Goldlux Studio Apartment",
    location: "Lagos, Nigeria",
    price: "NGN15,000",
    rating: 5,
    image: "/housing/apartment2.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
  },
  {
    id: "3",
    title: "Goldlux Studio Apartment",
    location: "Lagos, Nigeria",
    price: "NGN15,000",
    rating: 3,
    image: "/housing/apartment3.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
  },
  {
    id: "4",
    title: "Goldlux Studio Apartment",
    location: "Lagos, Nigeria",
    price: "NGN15,000",
    rating: 4,
    image: "/housing/apartment4.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
  },
  {
    id: "5",
    title: "Goldlux Studio Apartment",
    location: "Lagos, Nigeria",
    price: "NGN15,000",
    rating: 5,
    image: "/housing/apartment1.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
  },
  {
    id: "6",
    title: "Goldlux Studio Apartment",
    location: "Lagos, Nigeria",
    price: "NGN15,000",
    rating: 5,
    image: "/housing/apartment2.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
  },
  {
    id: "7",
    title: "Goldlux Studio Apartment",
    location: "Lagos, Nigeria",
    price: "NGN15,000",
    rating: 3,
    image: "/housing/apartment3.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
  },
  {
    id: "8",
    title: "Goldlux Studio Apartment",
    location: "Lagos, Nigeria",
    price: "NGN15,000",
    rating: 4,
    image: "/housing/apartment4.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
  },
  {
    id: "9",
    title: "Goldlux Studio Apartment",
    location: "Lagos, Nigeria",
    price: "NGN15,000",
    rating: 5,
    image: "/housing/apartment1.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
  },
  {
    id: "10",
    title: "Goldlux Studio Apartment",
    location: "Lagos, Nigeria",
    price: "NGN15,000",
    rating: 5,
    image: "/housing/apartment2.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
  },
  {
    id: "11",
    title: "Goldlux Studio Apartment",
    location: "Lagos, Nigeria",
    price: "NGN15,000",
    rating: 3,
    image: "/housing/apartment3.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
  },
  {
    id: "12",
    title: "Goldlux Studio Apartment",
    location: "Lagos, Nigeria",
    price: "NGN15,000",
    rating: 4,
    image: "/housing/apartment4.png",
    rooms: "3",
    bedrooms: "2",
    type: "apartment",
  },
];

const page = () => {
  return (
    <div>
      <HousingHeader 
        name="Apartments" 
        tagline="Find the apartments that appeal to you the most" 
        searchRoute="/housing/apartments/search" 
      />
      <TopCities cities={cityData}  />
      <TopPicks apartments={apartmentData}  />
      <AdBanner />
    </div>
  );
};

export default page;