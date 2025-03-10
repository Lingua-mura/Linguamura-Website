/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRouter } from "next/navigation";
import DatePickerWithPopover from "../../_components/DatePickerPopup";

// Fix for default marker icon issue with Leaflet
L.Icon.Default.prototype.options.iconRetinaUrl =
  "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png";
L.Icon.Default.prototype.options.iconUrl =
  "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png";
L.Icon.Default.prototype.options.shadowUrl =
  "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png";

interface ReviewProps {
  content: string;
  reviewer: {
    name: string;
    location: string;
    image: string;
    rating: number;
  };
}

interface HostelDetailProps {
  title: string;
  location: string;
  description: string;
  rating: number;
  reviewCount: number;
  pricePerNight: string;
  mainImage: string;
  additionalImages: string[];
  host: {
    name: string;
    image: string;
    superhost: boolean;
    yearsHosting: number;
  };
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  reviews: ReviewProps[];
  latitude: number;
  longitude: number;
}

const ReviewCard: React.FC<ReviewProps> = ({ content, reviewer }) => {
  return (
    <div className="border-t border-b border-l border-r rounded-[24px] p-4 flex flex-col h-full border-[#00BBBB]">
      <p className="text-sm text-gray-700 mb-4 flex-grow">
        &quot;{content}&quot;
      </p>
      <div className="flex items-center mt-14">
        <img
          src={reviewer.image}
          alt={reviewer.name}
          className="w-14 h-14 rounded-full mr-3"
        />
        <div>
          <div className="font-medium">{reviewer.name}</div>
          <div className="text-xs text-gray-600">{reviewer.location}</div>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="/housing/star.png"
                alt="star"
                width={14}
                height={14}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const HostelDetail: React.FC<HostelDetailProps> = ({
  title,
  location,
  description,
  rating,
  reviewCount,
  pricePerNight,
  mainImage,
  additionalImages,
  host,
  features,
  reviews,
  latitude,
  longitude,
}) => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState<number>(1);
  const [showGuestSelector, setShowGuestSelector] = useState<boolean>(false);
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);
  const [showAllPhotos, setShowAllPhotos] = useState<boolean>(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  // Combine main image with additional images for the gallery
  const allImages = [mainImage, ...additionalImages];

  // For demo purposes
  const nightsStay = 2;
  const basePrice = parseInt(pricePerNight.replace(/[^0-9]/g, ""));
  const discount = 20000;
  const cleaningFee = 5000;
  const serviceFee = 3000;
  const totalPrice =
    basePrice * nightsStay - discount + cleaningFee + serviceFee;

  const handleReserve = () => {
    router.push("/housing/hotels/payment");
  };

  const handleBackClick = () => {
    router.back(); // Navigate back to previous page
  };

  // Close guest selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.guest-selector-container')) {
        setShowGuestSelector(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close photo gallery with Escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowAllPhotos(false);
        setSelectedPhotoIndex(null);
      }    
    };

    if (showAllPhotos || selectedPhotoIndex !== null) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showAllPhotos, selectedPhotoIndex]);

  // Prevent body scrolling when photo gallery is open
  useEffect(() => {
    if (showAllPhotos || selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showAllPhotos, selectedPhotoIndex]);

  // Popular amenities
  const popularAmenities =  [
      { icon: "material-symbols:pool-rounded", name: "Pool" },
      { icon: "hugeicons:desk-01", name: "24/7 front desk" },
      { icon: "material-symbols:meeting-room-outline", name: "Connecting rooms available" },
      { icon: "fluent-mdl2:weights", name: "Gym" },
      { icon: "material-symbols:local-bar-outline", name: "Bar" },
      { icon: "material-symbols:unpaved-road-outline", name: "Parking available" },
  ];

  // Nearby locations
  const nearbyLocations = [
    { name: "Parliament Hill", distance: "3 min walk", icon: "gravity-ui:map-pin" },
    { name: "Iyanu Ipaja", distance: "7 min walk", icon: "gravity-ui:map-pin" },
    { name: "Nyc camp", distance: "5 min walk", icon: "gravity-ui:map-pin" },
    { name: "100 Momodu St, Ottawa Off Abekoko", distance: "18 min drive", icon: "typcn:plane-outline" },
  ];


  return (
    <div className="container mx-auto px-4 py-6">
      {/* Full screen photo gallery */}
      {showAllPhotos && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="p-4 flex justify-between items-center sticky top-0 bg-white z-10 border-b">
            <button 
              className="p-2 rounded-full hover:bg-gray-100" 
              onClick={() => setShowAllPhotos(false)}
            >
              <Icon icon="mdi:close" width={24} height={24} />
            </button>
            <div className="font-medium">{title} - All Photos</div>
            <div className="w-10"></div> {/* Spacer to center the title */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {allImages.map((img, index) => (
              <div 
                key={index} 
                className="aspect-w-16 aspect-h-9 cursor-pointer rounded-lg overflow-hidden"
                onClick={() => setSelectedPhotoIndex(index)}
              >
                <img
                  src={img}
                  alt={`${title} ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Full screen single photo view */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
          <div className="p-4 flex justify-between items-center text-white">
            <button 
              className="p-2 rounded-full hover:bg-gray-800" 
              onClick={() => setSelectedPhotoIndex(null)}
            >
              <Icon icon="mdi:close" width={24} height={24} />
            </button>
            <div className="font-medium">
              {selectedPhotoIndex + 1} / {allImages.length}
            </div>
            <div></div>
          </div>
          <div className="flex-grow flex items-center justify-center p-4 relative">
            {selectedPhotoIndex > 0 && (
              <button 
                className="absolute left-4 p-2 rounded-full bg-black bg-opacity-50 text-white"
                onClick={() => setSelectedPhotoIndex(selectedPhotoIndex - 1)}
              >
                <Icon icon="mdi:chevron-left" width={24} height={24} />
              </button>
            )}
            <img
              src={allImages[selectedPhotoIndex]}
              alt={`${title} ${selectedPhotoIndex}`}
              className="max-h-full max-w-full object-contain"
            />
            {selectedPhotoIndex < allImages.length - 1 && (
              <button 
                className="absolute right-4 p-2 rounded-full bg-black bg-opacity-50 text-white"
                onClick={() => setSelectedPhotoIndex(selectedPhotoIndex + 1)}
              >
                <Icon icon="mdi:chevron-right" width={24} height={24} />
              </button>
            )}
          </div>
          <div className="overflow-x-auto p-4 bg-black bg-opacity-50">
            <div className="flex gap-2">
              {allImages.map((img, index) => (
                <div 
                  key={index} 
                  className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden ${selectedPhotoIndex === index ? 'ring-2 ring-white' : 'opacity-70'}`}
                  onClick={() => setSelectedPhotoIndex(index)}
                >
                  <img
                    src={img}
                    alt={`${title} thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Back button */}
      <div className="mb-10 md:px-4">
        <button className="flex items-center text-[#4E4B66]" onClick={handleBackClick}>
          <Icon icon="bytesize:arrow-left" width={40} height={40} />
        </button>
      </div>
      
      {/* Image gallery */}
<div className="flex flex-col md:flex-row gap-3 mb-6 md:px-4">
  <div className="w-full md:w-2/3 rounded-lg overflow-hidden h-[300px] md:h-auto cursor-pointer" onClick={() => setSelectedPhotoIndex(0)}>
    <img
      src={mainImage}
      alt={title}
      className="w-full h-full object-cover"
    />
  </div>
  <div className="hidden md:grid w-full md:w-1/2 grid-cols-2 grid-rows-2 gap-3 relative">
    {additionalImages.slice(0, 4).map((img, index) => (
      <div 
        key={index} 
        className="rounded-lg overflow-hidden cursor-pointer"
        onClick={() => setSelectedPhotoIndex(index + 1)}
      >
        <img
          src={img}
          alt={`${title} ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
    <button 
      className="absolute bottom-4 right-4 flex justify-center items-center bg-white text-[#00BBBB] font-normal text-[18px] rounded-[12px] w-[191.46px] h-[53px]"
      onClick={() => setShowAllPhotos(true)}
    >
      <Icon
        icon="mdi:image-multiple"
        width={20}
        height={20}
        className="mr-2"
      />
      Show All Photos
    </button>
  </div>
  <div className="flex md:hidden overflow-x-auto gap-3 px-2">
    {additionalImages.map((img, index) => (
      <div
        key={index}
        className="w-[280px] h-[200px] flex-shrink-0 rounded-lg overflow-hidden cursor-pointer"
        onClick={() => setSelectedPhotoIndex(index + 1)}
      >
        <img
          src={img}
          alt={`${title} ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</div>

      <div className="flex flex-col lg:flex-row gap-8 md:px-4">
      <div className="lg:w-2/3">
          {/* Modified Apartment title and details to match the design */}
          <div className="mb-6">
            <div className="flex items-center">
              <h1 className="text-[2rem] font-bold text-[#14142B] mr-2">Goldlux Hotel</h1>
            </div>

            <div className="flex items-center justify-start space-x-2">

              <div className="bg-[#00C8C8] w-[#41.82] text-white rounded-lg px-2 py-1 text-sm font-medium text-[14.87]">
                9.0
              </div>
            
            {/* Star rating */}
            <div className="flex">
              {[...Array(5)].map((_, i) => (
               <img
               key={1}
               src="/housing/star.png"
               alt="star"
               width={24}
               height={24}
               className="object-contain mr-1"
             />
              ))}
            </div>
            </div>
            
            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex -mb-px">
                {['Overview', 'Amenities', 'Rooms', 'Accessibility', 'Policies'].map((tab) => {
                  const isActive = tab.toLowerCase() === activeTab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab.toLowerCase())}
                      className={`mr-8 py-4 px-1 font-medium text-base ${
                        isActive 
                          ? 'border-b-2 border-[#00C8C8] text-[#00C8C8]' 
                          : 'text-[#6E7191] hover:text-[#14142B]'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </nav>
            </div>

            {activeTab === 'overview' && (
            <>
            {/* Popular amenities section */}
            <h2 className="text-xl font-bold mb-4">Popular amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {popularAmenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <Icon 
                    icon={amenity.icon} 
                    width={24} 
                    height={24} 
                    className="mr-3 text-[#4E4B66]" 
                  />
                  <span className="text-[#4E4B66]">{amenity.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mb-4">
              <button className="text-[#00C8C8] flex items-center">
                See other properties amenities
                <Icon icon="mdi:chevron-right" width={18} height={18} />
              </button>
            </div>
            </>
            )}


            {activeTab === 'accessibility' && (
  <div className="mb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <div>
        <h3 className="text-xl font-bold mb-4">If you have specific needs</h3>
        <p className="text-gray-700">
          If you have requests for specific accessibility needs, please contact the hotel using the information 
          on the reservation confirmation received after booking.
        </p>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Common areas</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Icon icon="mdi:check-circle" className="text-[#00C8C8] mr-2" width={20} height={20} />
            <span>Wheelchair accessible (may have limitations)</span>
          </li>
          <li className="flex items-center">
            <Icon icon="mdi:check-circle" className="text-[#00C8C8] mr-2" width={20} height={20} />
            <span>Wheelchair-accessible concierge desk</span>
          </li>
          <li className="flex items-center">
            <Icon icon="mdi:check-circle" className="text-[#00C8C8] mr-2" width={20} height={20} />
            <span>Wheelchair-accessible registration desk</span>
          </li>
          <li className="flex items-center">
            <Icon icon="mdi:check-circle" className="text-[#00C8C8] mr-2" width={20} height={20} />
            <span>Wheelchair-accessible restaurant</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
)}

{activeTab === 'policies' && (
  <div className="mb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Refundable deposits</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Deposit: 30,000 per accommodation</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Parking</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Valet parking costs 1000 per day with in/out privileges</li>
          <li>Parking height restrictions apply</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Pool, Spa & Gym (if applicable)</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Pool access available from 6:30 AM to 10:00 PM</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Optional extras</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Full breakfast is offered for an extra charge of approximately 3 to 5 for adults and 6 to 10 for children</li>
          <li>Late checkout can be arranged for an extra charge of 85 (subject to availability)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Policies</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>The hotel has connecting/adjoining rooms. These are subject to availability and can be requested by contacting the hotel using the number on the booking confirmation.</li>
          <li>This hotel&apos;s policy is to refuse certain bookings for the purpose of group events or parties, including pre-wedding stag and hen parties.</li>
          <li>The name on the credit card used at check-in to pay for incidentals must be the primary name on the hotel room reservation.</li>
          <li>Special event policies or charges may apply for group reservations (more than 8 rooms for the same hotel room/stay dates).</li>
          <li>This hotel accepts credit cards. Cash is not accepted.</li>
          <li>Special requests are subject to availability.</li>
          <li>Please note that cultural norms and guest policies may differ by country and by the hotel. The policies listed are provided by the hotel management.</li>
        </ul>
      </div>
    </div>
  </div>
)}

            {/* What's around section */}
            <h2 className="text-xl font-bold mb-4 mt-8">What&apos;s around</h2>
            
            {/* Map */}
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200">
              <MapContainer
                center={[latitude || 6.6018, longitude || 3.3515]} 
                zoom={15}
                style={{ height: "250px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[latitude || 6.6018, longitude || 3.3515]}>
                  <Popup>Goldlux Hotel</Popup>
                </Marker>
              </MapContainer>
              
              <div className="p-4 border-t border-gray-200">
                <p className="font-medium">100 Momodu St, Ottawa Off Abekoko bus stop</p>
                <button className="text-[#00C8C8]">View in a map</button>
              </div>
            </div>
            
            {/* Nearby locations */}
            <div className="space-y-4 mb-8">
              {nearbyLocations.map((location, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon 
                      icon={location.icon} 
                      width={24} 
                      height={24} 
                      className="mr-3 text-gray-600" 
                    />
                    <span>{location.name}</span>
                  </div>
                  <span className="text-gray-600">{location.distance}</span>
                </div>
              ))}
            </div>
            
            <div className="mb-8">
              <button className="text-[#00C8C8] flex items-center">
                See more
                <Icon icon="mdi:chevron-right" width={18} height={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          {/* Booking card */}
          <div className="border-l border-r border-t border-b border-[#00BBBB] rounded-lg p-6 sticky top-4">
            <div className="text-2xl font-bold mb-1">
              {pricePerNight} <span className="text-sm font-normal">Daily</span>
            </div>

            {/* Date pickers */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="border rounded-lg overflow-hidden">
                <div className="text-xs text-gray-600 uppercase px-2 pt-2">CHECK-IN</div>
                <DatePickerWithPopover
                  value={checkIn}
                  onChange={(date) => setCheckIn(date)}
                  placeholder="Select check-in"
                  className="border-0 rounded-none"
                />
              </div>
              <div className="border rounded-lg overflow-hidden">
                <div className="text-xs text-gray-600 uppercase px-2 pt-2">CHECK-OUT</div>
                <DatePickerWithPopover
                  value={checkOut}
                  onChange={(date) => setCheckOut(date)}
                  placeholder="Select check-out"
                  className="border-0 rounded-none"
                  disabled={!checkIn}
                  // Disable dates before check-in
                />
              </div>
            </div>

            {/* Guest selector */}
            <div className="border rounded p-2 mb-6 relative guest-selector-container">
              <div className="text-xs text-gray-600 uppercase">GUEST</div>
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowGuestSelector(!showGuestSelector)}
              >
                <input
                  type="text"
                  value={`${guests} guest${guests !== 1 ? 's' : ''}`}
                  className="outline-none w-full cursor-pointer"
                  readOnly
                />
                <Icon
                  icon="mdi:chevron-down"
                  width={20}
                  height={20}
                  className="text-[#00BBBB]"
                />
              </div>

              {/* Guest selector dropdown */}
              {showGuestSelector && (
                <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-[#00BBBB] rounded-lg p-4 z-10 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-medium">Adults</div>
                      <div className="text-sm text-gray-600">Age 13+</div>
                    </div>
                    <div className="flex items-center">
                      <button 
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-[#00BBBB] text-[#00BBBB] disabled:opacity-50"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        disabled={guests <= 1}
                      >
                        <Icon icon="mdi:minus" width={20} height={20} />
                      </button>
                      <span className="mx-3 w-4 text-center">{guests}</span>
                      <button 
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-[#00BBBB] text-[#00BBBB]"
                        onClick={() => setGuests(Math.min(10, guests + 1))}
                        disabled={guests >= 10}
                      >
                        <Icon icon="mdi:plus" width={20} height={20} />
                      </button>
                    </div>
                  </div>
                  <button 
                    className="text-[#00BBBB] font-medium text-right w-full"
                    onClick={() => setShowGuestSelector(false)}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            {/* Reserve button */}
            <button
              className="h-[50px] w-full flex items-center justify-center text-white font-semibold rounded-full bg-gradient-to-b from-[#04E2E2] to-[#00BBBB] shadow-[inset_0px_-4px_0.3px_#007979,inset_0px_0px_0.3px_#1AF0F0] hover:opacity-90 transition-all active:translate-y-0.5 active:shadow-[inset_0px_0px_0.3px_#007979] no-underline mb-4"
              onClick={handleReserve}
            >
              Reserve
            </button>
            <p className="text-center text-sm text-gray-600 mb-6">{`You won't be charged yet`}</p>

            {/* Price breakdown */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="text-gray-700">
                  {pricePerNight} x {nightsStay}days
                </div>
                <div>NGN{basePrice * nightsStay}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-700">Discount</div>
                <div className="text-[#00BBBB]">
                  NGN-{discount.toLocaleString()}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-700">Cleaning fee</div>
                <div>NGN{cleaningFee.toLocaleString()}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-700">
                  Linguamura service fee (10%)
                </div>
                <div>NGN{serviceFee.toLocaleString()}</div>
              </div>
              <div className="pt-3 border-t flex justify-between font-bold">
                <div>Total before taxes</div>
                <div>NGN {totalPrice.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-20 mb-6 px-2 md:px-4">
        <div className="flex items-center mb-4">
          <img
            src="/housing/star.png"
            alt="star"
            width={24}
            height={24}
            className="object-contain mr-2"
          />
          <span className="font-bold text-xl">
            {rating.toFixed(1)} · {reviewCount} reviews
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviews
            .slice(0, showAllReviews ? reviews.length : 4)
            .map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
        </div>

        <div className="mt-6 text-center">
          <button
            className="mt-4 w-[182px] h-[45px] border-2 border-[#00BBBB] text-[#00BBBB] rounded-full hover:bg-[#00BBBB] hover:text-white transition-colors font-bold text-[16px]"
            onClick={() => setShowAllReviews(!showAllReviews)}
          >
            {showAllReviews
              ? "Show less reviews"
              : `Show all ${reviewCount} reviews`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostelDetail;