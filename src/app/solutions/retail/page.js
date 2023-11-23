"use client";

import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import MainFooter from "@/components/MainFooter";
import FirstSection from "@/components/solutions/FirstSection";
import ProductsSection from "@/components/solutions/ProductsSection";
import { useLanguage } from "@/contexts/LanguageContext";

import { motion } from "framer-motion";

//
import enRetail from "../../../../public/translations/en/retail.json";
import trRetail from "../../../../public/translations/tr/retail.json";
const translations = {
  en: enRetail,
  tr: trRetail,
};

function Retail() {
  const { activeLanguage } = useLanguage();
  const content = translations[activeLanguage];
  return (
    <>
      <Hero
        img={content.heroImg}
        heading={content.heroHeading}
        herobg="hero-solutions"
      />

      <FirstSection content={content} />

      <ProductsSection content={content} />

      <motion.section
        initial={{ opacity: 0, translateY: 150 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto mb-12 px-10 lg:px-0 lg:mb-40 xl:px-4"
      >
        <Heading type="h2" style="lg:!text-left">
          {content.thirdSection.heading}
        </Heading>

        <div className="flex items-center justify-center flex-col gap-8 lg:flex-row lg:gap-6 xl:gap-32 xl:px-4">
          <p className="text-lg text-center leading-relaxed lg:text-left 2xl:text-xl">
            {content.thirdSection.content.text}
          </p>
          <img
            src={content.thirdSection.content.img}
            className="w-full rounded-2xl lg:w-[40%]"
            alt={content.thirdSection.heading}
          />
        </div>
      </motion.section>

      {/* <SwipingSlider content={content.sliderSection} /> */}

      <MainFooter />
    </>
  );
}

export default Retail;
