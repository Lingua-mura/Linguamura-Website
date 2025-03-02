import React from 'react';
import PaymentRequest from './_components/PaymentRequest';
import HousingSearch from '../../_components/housing-search';

const PaymentPage = () => {
  return (
    <>
    <HousingSearch
         name="Properties" 
         tagline="We look forward to welcoming you onboard." 
         searchRoute="/housing/properties/search" 
        placeholder="Where are you going?"
      />
    <PaymentRequest/>
    </>
  );
};

export default PaymentPage;