"use client";

import CardsSection from "@/components/howItWorks/CardsSection";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import HowDoesItWork from "@/components/howItWorks/HowDoesItWork";
import TrustedBySection from "@/components/TrustedBySection";

import { useLanguage } from "@/contexts/LanguageContext";

//
import enHowItWorks from "../../../public/translations/en/howitworks.json";
import trHowItWorks from "../../../public/translations/tr/howitworks.json";
const translations = {
  en: enHowItWorks,
  tr: trHowItWorks,
};

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
function HowItWorks() {
  const { activeLanguage } = useLanguage();
  const content = translations[activeLanguage];

  return (
    <>
      <Hero img={content.heroImg} />
      <div className=" text-center text-lg md:text-xl lg:text-2xl flex flex-col gap-4 mb-12 lg:mb-32">
        {content.subHero.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <HowDoesItWork content={content} />
      <Heading type="tag">#BeyondWatching</Heading>
      <CardsSection content={content} />
      <section className="container mx-auto">
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
          className="howItWorksSlider m-24"
        >
          {content.stepsSection.map((step, index) => (
            <SwiperSlide key={step.title}>
              <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-44">
                <div className="w-full lg:w-1/4 text-center px-4 lg:px-0 lg:text-left ">
                  <p className=" text-primary  font-semibold uppercase">{`${
                    index + 1
                  }.Step`}</p>
                  <p className="font-bold text-xl text-black-800 capitalize mb-3">
                    {step.title}
                  </p>
                  <p className="text-base text-black-800">{step.text}</p>
                </div>
                <img src={step.img} className="w-1/2 mb-8 shadow-lg" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <TrustedBySection content={content} />
      <Footer icon="../assets/footer-img.png" />
    </>
  );
}

export default HowItWorks;
