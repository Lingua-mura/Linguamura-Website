import React from 'react';
import Head from 'next/head';
import TopSection from './TopSection';
import NearbyCard from './NearbyCard';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Recommended Properties</title>
      </Head>
      <TopSection />
      <div className="nearby-container">
      <h3> <i className="fas fa-arrow-left ms-3"></i>  Search Result</h3>
        <NearbyCard
          image="/marketplace/img/shoe.jpeg"
          title="Solute Properties"
          description="Block 21 Morgan estate Ibeju lekki way Lagos, Nigeria"
          location="LAGOS, Nigeria"
          price="NGN 3M"
          rating={9.0}
        />
             <NearbyCard
          image="/marketplace/img/shoe.jpeg"
          title="Solute Properties"
          description="Block 21 Morgan estate Ibeju lekki way Lagos, Nigeria"
          location="LAGOS, Nigeria"
          price="NGN 3M"
          rating={9.0}
        />
        {/* More nearby properties here... */}
        <button className="btn btn-outline-primary show-more">Show More</button>
      </div>
    </div>
  );
};

export default HomePage;