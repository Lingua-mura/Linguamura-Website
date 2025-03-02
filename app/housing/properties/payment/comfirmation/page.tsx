"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import HousingSearch from '@/app/housing/_components/housing-search';

const ConfirmationPage = () => {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation effect
  useEffect(() => {
    // Start animation immediately
    setIsAnimating(true);
    
    // Set up repeating animation
    const animationInterval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 1000); // Toggle every 2 seconds
    
    return () => clearInterval(animationInterval);
  }, []);

  const handleViewReceipt = () => {
    router.push('/housing/properties/payment/receipt');
  };

  const handleBackToHome = () => {
    router.push('/housing');
  };

  return (
    <>
      <HousingSearch
         name="Properties" 
         tagline="We look forward to welcoming you onboard." 
         searchRoute="/housing/properties/search" 
        placeholder="Where are you going?"
      />
      
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-md w-full">
          {/* Animated Success Icon */}
          <div 
            className={`w-16 h-16 rounded-full bg-[#00BBBB] flex items-center justify-center transition-all duration-700 ease-in-out mb-20 ${
              isAnimating ? 'scale-150' : 'scale-100'
            }`}
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-700 ease-in-out"
            >
              <path 
                d="M20 6L9 17L4 12" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
          
          {/* Success Message */}
          <h1 className="text-2xl font-bold text-center mb-12">Payment Successful</h1>
          
          {/* View Receipt Button */}
          <button 
            onClick={handleViewReceipt}
            className="h-[66px] w-full md:w-[398px] flex items-center justify-center text-white rounded-full bg-gradient-to-b from-[#04E2E2] to-[#00BBBB] shadow-[inset_0px_-4px_0.3px_#007979,inset_0px_0px_0.3px_#1AF0F0] hover:opacity-90 transition-all active:translate-y-0.5 active:shadow-[inset_0px_0px_0.3px_#007979] no-underline mb-8 font-bold text-[24px]"
          >
            View Receipt
          </button>
          
          {/* Back to Homepage Button */}
          <button 
            onClick={handleBackToHome}
            className="text-[#00BBBB] font-medium hover:underline"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;