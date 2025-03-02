"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import "react-datepicker/dist/react-datepicker.css";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const PaymentRequest = () => {
  const [dates, setDates] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestSelector, setShowGuestSelector] = useState<boolean>(false);
  const router = useRouter();

  // Close guest selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".guest-selector-container")) {
        setShowGuestSelector(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle date change with correct type signature
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setDates(date);
      setShowDatePicker(false);
    }
  };

  // Price details
  const pricePerNight = 15000;
  const nights = 2;
  const subtotal = pricePerNight * nights;
  const discount = 20000;
  const cleaningFee = 5000;
  const serviceFee = 3000;
  const total = subtotal - discount + cleaningFee + serviceFee;

  const handleBackClick = () => {
    router.back();
  };

  const handlePayNow = () => {
    router.push("/housing/apartments/payment/comfirmation");
  }

  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-10 md:px-4 flex flex-wrap justify-start items-center gap-4">
        <button className="text-[#4E4B66]" onClick={handleBackClick}>
          <Icon icon="bytesize:arrow-left" width={40} height={40} />
        </button>
        <h1 className="font-bold text-[32px] lg:ml-14">Request to book</h1>
      </div>

      {/* Main content */}
      <div className="flex justify-center flex-col-reverse lg:flex-row gap-8 md:px-4 items-stretch">
        {/* Left column */}
        <div className="lg:w-[464px] border-t-[1.5px] border-[#00BBBB] flex flex-col h-full pb-10">
          <section className="mb-8 mt-4">
            <h2 className="text-2xl font-bold mb-4">Your Apartment</h2>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold">Dates</h3>
                <button
                  className="text-[#00BBBB] font-semibold"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                >
                  Edit
                </button>
              </div>
              
              <Popover open={showDatePicker} onOpenChange={setShowDatePicker}>
                <PopoverTrigger asChild>
                  <button className="flex justify-start w-full p-2 text-gray-700 bg-white border-none outline-none cursor-pointer">
                    {dates ? format(dates, "MMMM d, yyyy") : "Select date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dates}
                    onSelect={handleDateChange}
                    initialFocus
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="mb-4 relative guest-selector-container">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold">Guests</h3>
                <button
                  className="text-[#00BBBB] font-semibold"
                  onClick={() => setShowGuestSelector(!showGuestSelector)}
                >
                  Edit
                </button>
              </div>
              <input
                type="text"
                value={`${guests} guest${guests !== 1 ? "s" : ""}`}
                className="outline-none w-full cursor-pointer"
                readOnly
                onClick={() => setShowGuestSelector(!showGuestSelector)}
              />
              
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
            <div className="mt-4 border-b-[1.5px] border-[#00BBBB]" />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Payment Method</h2>

            <div className="border-t-[1.5px] border-b-[1.5px] border-l-[1.5px] border-r-[1.5px] border-[#00BBBB] rounded-full p-2 px-4 flex justify-between items-center mb-6 py-3">
              <div className="flex items-center">
                <button
                  className={`p-2 flex items-center justify-center font-semibold rounded-full border-[1.5px] border-[#00BBBB] transition-all active:translate-y-0.5 group mr-3 ${
                    isSelected
                      ? "bg-gradient-to-b from-[#00BBBB] to-[#00BBBB] shadow-[inset_0px_-4px_0.3px_#007979,inset_0px_0px_0.3px_#1AF0F0]"
                      : "hover:bg-gradient-to-b hover:from-[#00BBBB] hover:to-[#00BBBB] hover:shadow-[inset_0px_-4px_0.3px_#007979,inset_0px_0px_0.3px_#1AF0F0]"
                  }`}
                  onClick={() => setIsSelected(!isSelected)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      isSelected
                        ? "stroke-white"
                        : "stroke-[#00BBBB] group-hover:stroke-white"
                    }`}
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <span className="text-gray-700 font-medium">
                  Muracoin Wallet
                </span>
              </div>
              <div className="flex items-center font-bold">
                <Icon
                  icon="game-icons:two-coins"
                  width="36"
                  height="36"
                  color="#FFB300"
                />
                <span className="ml-1 mt-3">250</span>
              </div>
            </div>

            <button className="h-[66px] w-full flex items-center justify-center text-white font-semibold rounded-full bg-gradient-to-b from-[#04E2E2] to-[#00BBBB] shadow-[inset_0px_-4px_0.3px_#007979,inset_0px_0px_0.3px_#1AF0F0] hover:opacity-90 transition-all active:translate-y-0.5 active:shadow-[inset_0px_0px_0.3px_#007979] no-underline" onClick={handlePayNow}>
              Pay now
            </button>
          </section>
        </div>

        {/* Right column */}
        <div className="lg:w-[498px] flex flex-col h-full pb-10">
          <div className="border-t-[1.5px] border-b-[1.5px] border-l-[1.5px] border-r-[1.5px] border-[#00BBBB] rounded-2xl p-6">
            <div className="flex mb-4 border-b-[1.5px] border-[#00BBBB] pb-4">
              <img
                src="/housing/apartment1.png"
                alt="Goldlux Studio Apartment"
                className="w-24 h-24 rounded-lg object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">Goldlux Studio Apartment</h3>
                <p className="text-gray-700">Lagos, Nigeria</p>
                <div className="flex flex-wrap items-center mt-2">
                <img
                      src="/housing/star.png"
                      alt="star"
                      width={24}
                      height={24}
                      className="object-contain mr-2"
                    />
                  <span>5.00 (50 reviews)</span>
                  <div className="ml-4 flex flex-wrap items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="ml-1">Superhost</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-xl mb-3">Price details</h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>
                  NGN{pricePerNight.toLocaleString()} x {nights}days
                </span>
                <span>NGN{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-[#00BBBB]">
                  NGN-{discount.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Cleaning fee</span>
                <span>NGN{cleaningFee.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span>Linguamura service fee (10%)</span>
                <span>NGN{serviceFee.toLocaleString()}</span>
              </div>
            </div>

            <div className="border-t border-[#00BBBB] mt-4 pt-4">
              <div className="flex justify-between font-bold">
                <span>Total before taxes</span>
                <span className="text-[18px]">
                  NGN {total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;