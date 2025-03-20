import React from 'react';
import PaymentRequest from './_components/PaymentRequest';
import HousingSearch from '../../_components/housing-search';

const PaymentPage = () => {
  return (
    <>
    <HousingSearch
        name="Apartments"
        tagline="Find the apartments that appeal to you the most"
        searchRoute="/housing/apartments/search"
        placeholder="Where are you going?"
      />
    <PaymentRequest/>
    </>
  );
};

export default PaymentPage;