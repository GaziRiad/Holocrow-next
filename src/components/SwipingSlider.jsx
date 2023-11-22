// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Heading from "./Heading";

import { motion } from "framer-motion";

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
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="industrySwiper pb-16 pt-4"
      >
        {content.slides.map((slide) => (
          <SwiperSlide key={slide.img} className="!w-64 md:!w-72 2xl:!w-72">
            <div className="w-56 h-80 shadow-[5px_-10px_10px_rgb(0,0,0,0.1)] rounded-t-3xl 2xl:w-60">
              <p className=" text-center font-semibold py-4 text-lg md:py-8 2xl:py-8 ">
                {slide.title}
              </p>
              <img src={slide.img} className=" h-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}

export default SwipingSlider;
