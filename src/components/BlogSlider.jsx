"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
function BlogSlider({ slides }) {
  const breakpoints = {
    768: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 120,
    },
  };

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="blogSwiper mb-10 lg:mb-24 3xl:mx-36 md:!px-24 "
      breakpoints={breakpoints}
    >
      {slides?.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center justify-center overflow-hidden">
            <img src={slide.img} className="w-full h-72 rounded-2xl mb-4" />
            <p className=" w-full font-bold text-lg text-black-800 capitalize mb-3 text-left">
              {slide.title}
            </p>
            <p className="text-base text-black-800 text-left">{slide.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BlogSlider;
