"use client";

import Hero from "@/components/Hero";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { useLanguage } from "@/contexts/LanguageContext";

//
import enSuccess from "../../../public/translations/en/success.json";
import trSuccess from "../../../public/translations/tr/success.json";
import { useState } from "react";
const translations = {
  en: enSuccess,
  tr: trSuccess,
};

function SuccessStories() {
  const { activeLanguage } = useLanguage();
  const content = translations[activeLanguage];
  const [currStory, setCurrStory] = useState(1);

  console.log(content.stories[0].text.split("**"));

  return (
    <div className="mb-24 text-black-800">
      <section className="relative h-screen mb-12 sm:mb-24 md:-mb-32 xl:-mb-20">
        <Hero herobg="hero-solutions" noPattern={true} />
        <div className="absolute top-0 w-full h-full">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            effect="coverflow"
            centeredSlides
            initialSlide={1}
            onSlideChange={(swiper) => {
              setCurrStory(swiper.activeIndex);
            }}
            className="storiesSlider w-[95%] absolute top-[40%] -translate-y-1/3 sm:top-[40%] md:top-[35%] lg:w-[80%] xl:top-[45%] xl:w-[65%] shadow-2xl rounded-2xl h-[80%] md:h-[60%]"
          >
            {content.stories.map((story, index) => {
              return (
                <SwiperSlide
                  className={`transition-transform duration-300 transform`}
                  key={index}
                >
                  <div className="bg-white/50 h-full flex flex-col items-center justify-center gap-2 px-6 py-6 xl:flex-row xl:p-10 2xl:p-20 2xl:gap-20">
                    <div className="xl:w-1/2">
                      <img src={story.img} className="rounded-2xl" />
                    </div>
                    <div className=" flex flex-col justify-center gap-6 h-full xl:w-1/2">
                      <img
                        src={story.logo}
                        className="w-1/4"
                        alt={story.text}
                      />
                      <p>
                        {story.text.split("**").map((text, index) =>
                          index % 2 === 0 ? (
                            <span key={index}>{text}</span>
                          ) : (
                            <strong className="text-black-800" key={index}>
                              {text}
                            </strong>
                          )
                        )}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section className=" flex flex-col items-center justify-center">
        <p className=" text-primary text-3xl font-semibold mb-4">
          {content.stories[currStory].clientName}
        </p>
        <p className=" flex items-center justify-center">
          <span className="text-3xl">{"{"}</span>
          <span className="px-2 text-lg lg:text-xl">
            {content.stories[currStory].date}
            {" / "}
            {content.stories[currStory].location}
          </span>
          <span className="text-3xl">{"}"}</span>
        </p>
      </section>
    </div>
  );
}

export default SuccessStories;
