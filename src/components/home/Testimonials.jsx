"use client";

import Heading from "../Heading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";

import { motion } from "framer-motion";

// import person1 from "../assets/testimonials/person1.png";
// import person2 from "../assets/testimonials/person2.png";
// import person3 from "../assets/testimonials/person3.png";
// import person4 from "../assets/testimonials/person4.png";
// import person5 from "../assets/testimonials/person5.png";

function Testimonials({ content }) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 200 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="container mx-auto mb-44 "
    >
      <Heading>{content.testimonialsSection.heading}</Heading>
      <div className="flex flex-col items-center justify-left gap-2 px-4 lg:px-4 xl:gap-40 lg:flex-row  ">
        <div className=" flex flex-wrap items-center sm:px-20 md:px-0  w-full justify-center xl:w-2/4 ">
          <img
            src="../assets/testimonials/person1.png"
            alt="holocrow testimonials"
          />
          <img
            src="../assets/testimonials/person2.png"
            alt="holocrow testimonials"
          />
          <img
            src="../assets/testimonials/person3.png"
            alt="holocrow testimonials"
          />
          <img
            src="../assets/testimonials/person4.png"
            alt="holocrow testimonials"
          />
          <img
            src="../assets/testimonials/person5.png"
            alt="holocrow testimonials"
          />
        </div>
        <div className="w-full">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiperVertical h-80 "
          >
            {content.testimonialsSection.testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="ml-8 flex items-center gap-6 lg:ml-12 2xl:ml-32 "
              >
                <span>
                  <FaQuoteLeft
                    size={48}
                    className=" scale-75 md:scale-100"
                    color="#ffb800"
                  />
                </span>
                <p className="w-2/3 md:text-lg md:leading-8">
                  {testimonial.text}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
