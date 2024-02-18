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
import SubHero from "@/components/SubHero";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function HowItWorks() {
  const { activeLanguage } = useLanguage();
  const content = translations[activeLanguage];

  useEffect(() => {
    document.title = "Holocrow — How It Works";
  });

  return (
    <AnimatePresence>
      <motion.div
        key="HowItWorks"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Hero img={content.heroImg} />

        <SubHero content={content.subHero} />

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
            {content.stepsSection.steps.map((step, index) => (
              <SwiperSlide key={step.title}>
                <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-44">
                  <div className="w-full lg:w-1/4 text-center px-4 lg:px-0 lg:text-left ">
                    <p className=" text-primary  font-semibold uppercase">{`${
                      content.stepsSection.step
                    } ${index + 1}`}</p>
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
        {/* <FixedPattern activeLanguage={activeLanguage} /> */}

        <Footer icon="../assets/footer-img.png" />
      </motion.div>
    </AnimatePresence>
  );
}

export default HowItWorks;
