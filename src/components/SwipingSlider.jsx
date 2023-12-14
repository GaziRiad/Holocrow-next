// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Heading from "./Heading";

import { motion } from "framer-motion";

const breakpoints = {
  620: {
    slidesPerView: 2,
    spaceBetween: 20,
  },

  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1520: {
    slidesPerView: 4,
    spaceBetween: 42,
  },
};

function SwipingSlider({ content }) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className=" mb-12 lg:mb-32"
    >
      <Heading type="h2" style="lg:!text-left container mx-auto">
        {content.heading}
      </Heading>
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={breakpoints}
        className="industrySwiper"
      >
        {content.slides.map((slide) => (
          <SwiperSlide key={slide.img} className="shadow-xl ">
            <div className="h-[540px] rounded-xl bg-stone-100 px-8 py-8 text-black-800">
              <img
                src={slide.img}
                className=" h-1/2 w-full block rounded-xl mb-6"
              />
              <p className="text-left font-bold text-xl mb-2 text-primary">
                {slide.title}
              </p>
              <p>
                <span className="font-medium">{slide.subTitle}</span>
                <span> {slide.text}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}

export default SwipingSlider;
