"use client";

import React, { ReactNode } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

import '@/components/custom/slider/slider.css';

interface SliderProps {
  children: ReactNode;
  autoScroll?: boolean;
  scrollInterval?: number;
  slidesPerView?: number;
  noArrows?: boolean; 
  noPagination?: boolean;
  [key: string]: any; // Allow any other props to be passed (e.g., className, style)
}

const Slider: React.FC<SliderProps> = ({
  children,
  autoScroll = false,
  scrollInterval = 3000,
  slidesPerView = 5,
  noArrows = false,
  noPagination = false,
  ...props
}) => {
  return (
    <div className="relative w-full py-8">
      <Swiper
        pagination={noPagination ? false : { clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        grabCursor={true}
        autoplay={autoScroll ? { delay: scrollInterval } : false}
        navigation={!noArrows}
        freeMode
        {...props}
        className="w-full !pb-14"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
