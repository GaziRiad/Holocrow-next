"use client";

import Heading from "./Heading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function Slider({ slider }) {
  const breakpoints = {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <div className="px-6 pb-2 relative">
      <Heading type="h3">{slider.heading}</Heading>

      <Swiper
        slidesPerView={1}
        // style={getStyleForBreakpoint()}
        style={{ padding: "0 0px", paddingBottom: "40px" }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-10 lg:mb-24 3xl:mx-36 "
        breakpoints={breakpoints}
      >
        {slider?.slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="flex flex-col items-center justify-center">
              <img src={slide.icon} className="w-1/6 h-20 mb-8" />
              <p className="font-semibold text-lg text-black-800 capitalize mb-3 text-center">
                {slide.title}
              </p>
              <p className="text-base text-black-800 text-center">
                {slide.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
