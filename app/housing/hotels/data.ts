export interface CityData {
    name: string;
    country: string;
    image: string;
    hotelCount: number;
  }
  
  export interface HotelData {
    id: string;
    title: string;
    location: string;
    price: string;
    rating: number;
    image: string;
    rooms: string;
    bedrooms: string;
    type: string;
    isFavorite?: boolean;
  }
  
  export const cityData: CityData[] = [
    {
      name: "Lagos",
      country: "Nigeria",
      image: "/housing/hotel1.png",
      hotelCount: 122,
    },
    {
      name: "Abuja",
      country: "Nigeria",
      image: "/housing/hotel2.png",
      hotelCount: 21,
    },
    {
      name: "Port Harcourt",
      country: "Nigeria",
      image: "/housing/hotel3.png",
      hotelCount: 542,
    },
    {
      name: "Kano",
      country: "Nigeria",
      image: "/housing/hotel1.png",
      hotelCount: 123,
    },
    {
      name: "Calabar",
      country: "Nigeria",
      image: "/housing/hotel2.png",
      hotelCount: 123,
    },
  ];
  
  export const hotelData: HotelData[] = [
    {
      id: "1",
      title: "Goldlux Hotel",
      location: "Lagos, Nigeria",
      price: "NGN45,000",
      rating: 4.5,
      image: "/housing/hotel1.png",
      rooms: "3",
      bedrooms: "2",
      type: "apartment",
      isFavorite: true,
    },
    {
      id: "2",
      title: "Royal Grand Hotel",
      location: "Abuja, Nigeria",
      price: "NGN35,000",
      rating: 4.2,
      image: "/housing/hotel2.png",
      rooms: "4",
      bedrooms: "3",
      type: "apartment",
    },
    {
      id: "3",
      title: "Palm View Suites",
      location: "Port Harcourt, Nigeria",
      price: "NGN50,000",
      rating: 4.8,
      image: "/housing/hotel3.png",
      rooms: "5",
      bedrooms: "4",
      type: "apartment",
      isFavorite: true,
    },
    {
      id: "4",
      title: "Emerald Heights",
      location: "Kano, Nigeria",
      price: "NGN25,000",
      rating: 4.0,
      image: "/housing/hotel1.png",
      rooms: "3",
      bedrooms: "2",
      type: "apartment",
    },
    {
      id: "5",
      title: "Sunset Bay Hotel",
      location: "Calabar, Nigeria",
      price: "NGN30,000",
      rating: 4.3,
      image: "/housing/hotel2.png",
      rooms: "4",
      bedrooms: "3",
      type: "apartment",
    },
  ];