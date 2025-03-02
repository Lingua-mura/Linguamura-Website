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
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

interface ReviewProps {
  content: string;
  reviewer: {
    name: string;
    location: string;
    image: string;
    rating: number;
  };
}

interface ApartmentDetailProps {
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

const ApartmentDetail: React.FC<ApartmentDetailProps> = ({
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
    router.push("/housing/apartments/payment");
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
        <div className="hidden md:flex w-full md:w-1/3 flex-col gap-3 relative">
          {additionalImages.slice(0, 2).map((img, index) => (
            <div 
              key={index} 
              className="h-1/2 rounded-lg overflow-hidden cursor-pointer"
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
          {/* Apartment title and details */}
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-gray-700 mb-4">{description}</p>

          {/* Rating */}
          <div className="mb-6">
            <div className="flex items-center border-l border-r border-t border-b border-[#00BBBB] rounded-lg p-1 px-4 py-1 w-fit">
              <div className="pr-4 border-r border-[#00BBBB]  flex flex-col justify-center items-center">
                <div className="font-bold text-lg">{rating.toFixed(1)}</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/housing/star.png"
                      alt="star"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  ))}
                </div>
              </div>
              <div className="pl-4 flex flex-col justify-center items-center">
                <div className="font-bold text-lg">{reviewCount}</div>
                <div className="text-sm text-gray-600">Reviews</div>
              </div>
            </div>
          </div>

          {/* Host information */}
          <div className="flex items-center mb-6 pb-6 border-b border-[#00BBBB]">
            <img
              src={host.image}
              alt={host.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-medium">Hosted By {host.name}</div>
              <div className="text-sm text-gray-600">
                Superhost · {host.yearsHosting} years hosting
              </div>
            </div>
          </div>

          <div className="border-b border-[#00BBBB]">
            {/* Features */}
            {features.map((feature, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start">
                  <Icon
                    icon={feature.icon}
                    width={24}
                    height={24}
                    className="mr-4 text-gray-600 mt-1"
                  />
                  <div>
                    <div className="font-medium">{feature.title}</div>
                    <div className="text-sm text-gray-600">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          {latitude && longitude && (
            <div className="mt-8 rounded-lg overflow-hidden border">
              <MapContainer
                center={[latitude, longitude]}
                zoom={13}
                style={{ height: "200px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[latitude, longitude]}>
                  <Popup>{title}</Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
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
                  minDate={checkIn || undefined}
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

export default ApartmentDetail;