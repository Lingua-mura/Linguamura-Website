/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import { useRouter } from 'next/navigation';
import ProductSearch from '../_components/product-search';
import { productData } from '../data';
import ProductResults from '../_components/ProductResults';
import { ProductData } from '@/app/types/health';



const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<ProductData[]>(productData);
  const [searchText, setSearchText] = useState<string>('');

  const router = useRouter();

  const handleSearch = (searchData: { text: string }) => {
    const results = productData.filter(product =>
      product.name.toLowerCase().includes(searchData.text.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div>
      <ProductSearch
        name="Health Marketplace"
        tagline="Discover a wide range of health and wellness products tailored for your needs."
        searchRoute="/health/search"
  placeholder = "Search health products, medical supplies, and more"
        onSearch={({ products }) => {
          setSearchText(products);
          handleSearch({ text: products });
        }}
      />

      <div className="container mb-10 md:px-4 flex flex-wrap justify-start items-center gap-4">
        <button className="text-[#4E4B66]" onClick={handleBackClick}>
          <Icon icon="bytesize:arrow-left" width={40} height={40} />
        </button>
      </div>

      {/* Search Results */}
      <div className="mt-10">
        {searchResults.length > 0 ? (
          <>
            <div className="container mx-auto px-4 mb-4">
              <p className="text-gray-600">
                {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'} found
              </p>
            </div>
            <ProductResults products={searchResults} title="Search Results" />
          </>
        ) : (
          <div className="container mx-auto px-4 text-center py-12">
            <Icon
              icon="mdi:house-search-outline"
              className="mx-auto mb-4 text-gray-400"
              width={48}
              height={48}
            />
            <p className="text-gray-600">No products found matching your input</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
