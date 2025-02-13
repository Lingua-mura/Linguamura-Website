import React from 'react';
import "./prop.css"
import TopSection from './TopSection';
import HeaderContainer from './HeaderContainer';
import PropertyCard from './PropertyCard';
import NearbyCard from './NearbyCard';

const HomePage = () => {
  return (
    <div>
      <TopSection />
      <div className="container mt-4">
        <HeaderContainer title="Recommended properties" linkText="See more" />
        <div className="row">
          <div className="col-md-3">
            <PropertyCard
              image="/marketplace/img/shoe.jpeg"
              title="Solute Properties"
              description="3 Bedroom apartment"
              location="LAGOS, Nigeria"
              price="NGN 7M"
            />
          </div>
          <div className="col-md-3">
            <PropertyCard
              image="/marketplace/img/shoe.jpeg"
              title="Solute Properties"
              description="3 Bedroom apartment"
              location="LAGOS, Nigeria"
              price="NGN 7M"
            />
          </div>
          <div className="col-md-3">
            <PropertyCard
              image="/marketplace/img/shoe.jpeg"
              title="Solute Properties"
              description="3 Bedroom apartment"
              location="LAGOS, Nigeria"
              price="NGN 7M"
            />
          </div>
          <div className="col-md-3">
            <PropertyCard
              image="/marketplace/img/shoe.jpeg"
              title="Solute Properties"
              description="3 Bedroom apartment"
              location="LAGOS, Nigeria"
              price="NGN 7M"
            />
          </div>
        </div>
        <div className="nearby-container">
          <HeaderContainer title="Near by you" linkText="See more" />
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
          <button className="btn btn-outline-primary show-more">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;