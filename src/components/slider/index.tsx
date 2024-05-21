"use client";
import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

interface IExtendedSlider {
  children: React.ReactNode;
  childClassName?: string;
}

const Slider = ({ children, childClassName }: IExtendedSlider) => {
  return (
    <div className={`slider ${childClassName}`}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
