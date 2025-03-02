/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import HousingSearch from '../../_components/housing-search';
import NearByYou, { PropertiesData } from '../_components/NearByYou';
import { propertiesData } from '../page';

interface FilterState {
  priceRange: string;
  bedrooms: string;
  propertyType: string;
}

const SearchPage = () => {
  const searchParams = useSearchParams();
  const [searchResults, setSearchResults] = useState<PropertiesData[]>(propertiesData); // Initialize with all properties
  const [filters, setFilters] = useState<FilterState>({
    priceRange: '',
    bedrooms: '',
    propertyType: ''
  });

  const router = useRouter();
  // Add this check at the beginning of the component
  useEffect(() => {
    // console.log('Initial PropertiesData:', PropertiesData);
    setSearchResults(propertiesData);
  }, []);

  // Handle initial search from URL params
  useEffect(() => {
    const location = searchParams.get('location');
    const date = searchParams.get('date');
    const rooms = searchParams.get('rooms');

    if (location || date || rooms) {
      handleSearch({
        location: location || '',
        date: date || '',
        rooms: rooms || ''
      });
    }
  }, [searchParams]); // Add searchParams as dependency

  // Update handleSearch to apply filters
  const handleSearch = (searchData: { location: string; date: string; rooms: string }) => {
    // console.log('Search Data:', searchData);
    // console.log('Current Filters:', filters);
    
    const results = propertiesData.filter(propertie => {
      const matchLocation = searchData.location ? 
        propertie.location.toLowerCase().includes(searchData.location.toLowerCase()) : 
        true;
      
      const matchRooms = searchData.rooms ? 
        propertie.rooms === searchData.rooms : 
        true;
      
      // Handle price range filtering
      let matchPrice = true;
      if (filters.priceRange) {
        // Remove 'NGN' and ',' from price string and convert to number
        const price = parseInt(propertie.price.replace('NGN', '').replace(',', ''));
        if (filters.priceRange === '100000+') {
          matchPrice = price >= 100000;
        } else {
          const [min, max] = filters.priceRange.split('-').map(Number);
          matchPrice = price >= min && price <= max;
        }
      }

      const matchBedrooms = filters.bedrooms ? 
        propertie.bedrooms === filters.bedrooms : 
        true;

      const matchType = filters.propertyType ? 
        propertie.type === filters.propertyType : 
        true;

      // Log individual matches for debugging
      // console.log(`propertie ${propertie.title}:`, {
      //   matchLocation,
      //   matchRooms,
      //   matchPrice,
      //   matchBedrooms: matchBedrooms,
      //   matchType: matchType
      // });

      return matchLocation && matchRooms && matchPrice && matchBedrooms && matchType;
    });
    
    // console.log('Filtered Results:', results);
    setSearchResults(results);
  };

  // Update the useEffect for filters
useEffect(() => {
  handleSearch({
    location: searchParams.get('location') || '',
    date: searchParams.get('date') || '',
    rooms: searchParams.get('rooms') || ''
  });
}, [filters, searchParams]); // Add searchParams to dependencies

const handleBackClick = () => {
  router.back();
};

  return (
    <div>
      <HousingSearch
        name="Properties" 
        tagline="We look forward to welcoming you onboard." 
        searchRoute="/housing/properties/search" 
        onSearch={handleSearch}
      />

<div className="container mb-10 md:px-4 flex flex-wrap justify-start items-center gap-4">
        <button className="text-[#4E4B66]" onClick={handleBackClick}>
          <Icon icon="bytesize:arrow-left" width={40} height={40} />
        </button>
      </div>

      {/* Filters Section */}
      {/* <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-[#00BBBB] font-bold mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> */}
            {/* Price Range Filter */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Any Price</option>
                <option value="0-50000">₦0 - ₦50,000</option>
                <option value="50000-100000">₦50,000 - ₦100,000</option>
                <option value="100000+">₦100,000+</option>
              </select>
            </div> */}

            {/* Bedrooms Filter */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bedrooms
              </label>
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Any</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
              </select>
            </div> */}

            {/* Property Type Filter */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Any Type</option>
                <option value="propertie">propertie</option>
                <option value="studio">Studio</option>
                <option value="house">House</option>
              </select>
            </div> */}
          {/* </div>
        </div>
      </div> */}

      {/* Search Results */}
      <div className="mt-10">
        {searchResults.length > 0 ? (
          <>
            <div className="container mx-auto px-4 mb-4">
              <p className="text-gray-600">
                {searchResults.length} {searchResults.length === 1 ? 'property' : 'properties'} found
              </p>
            </div>
            <NearByYou properties={searchResults} title="Search Results" />
          </>
        ) : (
          <div className="container mx-auto px-4 text-center py-12">
            <Icon 
              icon="mdi:house-search-outline" 
              className="mx-auto mb-4 text-gray-400"
              width={48} 
              height={48}
            />
            <p className="text-gray-600">No properties found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
