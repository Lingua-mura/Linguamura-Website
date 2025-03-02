import React from 'react';
import PaymentRequest from './_components/PaymentRequest';
import HousingSearch from '../../_components/housing-search';

const PaymentPage = () => {
  return (
    <>
    <HousingSearch
        name="Hotels" 
        tagline="Find the Hotels that appeal to you the most" 
        searchRoute="/housing/hotels/search" 
        placeholder="Where are you going?"
      />
    <PaymentRequest/>
    </>
  );
};

export default PaymentPage;