"use client";

import React from "react";
import HousingSearch from "../../_components/housing-search";
import AdBanner from "../../_components/AdBanner";
import NearByYou from "../_components/NearByYou";
import PropertiesDetail from "../_components/propertiesDetail";
import { propertiesData } from "../data";

const page = () => {
  return (
    <div>
      <HousingSearch
         name="Properties" 
         tagline="We look forward to welcoming you onboard." 
         searchRoute="/housing/properties/search" 
        placeholder="Where are you going?"
      />
      <PropertiesDetail
        title="Goldlux Studio Apartment, Agege,Lagos, Nigeria"
        location="Agege, Lagos, Nigeria"
        description="1 single room, a kitchen and bathroom"
        rating={5.0}
        reviewCount={50}
        pricePerNight="NGN 15,000"
        mainImage="/housing/bedroom.png"
        additionalImages={["/housing/bathroom.png", "/housing/kitchen.png","/housing/bedroom.png","/housing/kitchen.png"]}
        host={{
          name: "Goldlux Hotel",
          image: "/housing/host-profile.png",
          superhost: true,
          yearsHosting: 3,
        }}
        features={[
          {
            icon: "mdi:wifi",
            title: "Great for remote work",
            description:
              "Fast wifi at 111 Mbps, plus a dedicated workspace in a common area.",
          },
          {
            icon: "mdi:key",
            title: "Self check-in",
            description: "You can check in with the building staff.",
          },
          {
            icon: "mdi:calendar-remove",
            title: "Free cancellation for 48 hours",
            description: "Get a full refund if you change your mind.",
          },
        ]}
        latitude={6.625}
        longitude={3.333}
        reviews={[
          {
            content:
              "The serene/clean environment. Good food,receptive staff and the location is closer to why I came to Abuja,took extra night,ill there took 15th to 19th,might take more",
            reviewer: {
              name: "Prince",
              location: "Calabar, Nigeria",
              image: "/housing/reviewer-1.png",
              rating: 5,
            },
          },
          {
            content:
              "The serene/clean environment. Good food,receptive staff and the location is closer to why I came to Abuja,took extra night,ill there took 15th to 19th,might take more",
            reviewer: {
              name: "Prince",
              location: "Calabar, Nigeria",
              image: "/housing/reviewer-1.png",
              rating: 5,
            },
          },
          {
            content:
              "The serene/clean environment. Good food,receptive staff and the location is closer to why I came to Abuja,took extra night,ill there took 15th to 19th,might take more",
            reviewer: {
              name: "Prince",
              location: "Calabar, Nigeria",
              image: "/housing/reviewer-1.png",
              rating: 5,
            },
          },
          {
            content:
              "The serene/clean environment. Good food,receptive staff and the location is closer to why I came to Abuja,took extra night,ill there took 15th to 19th,might take more",
            reviewer: {
              name: "Prince",
              location: "Calabar, Nigeria",
              image: "/housing/reviewer-1.png",
              rating: 5,
            },
          },
        ]}
      />
      <div className="mt-10">
      <NearByYou properties={propertiesData}  />
      </div>
      <AdBanner/>
    </div>
  );
};

export default page;
