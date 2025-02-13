// page.tsx
import React from 'react';
import TopSection from './TopSection';
import PropertyCard from './PropertyCard';
import PropertyDetails from './PropertyDetails';
import './prop.css';

const Page = () => {
  return (
    <div>
      <TopSection />
      <PropertyCard />
      <PropertyDetails />
    </div>
  );
};

export default Page;
