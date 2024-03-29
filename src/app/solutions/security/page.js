"use client";

import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import SwipingSlider from "@/components/SwipingSlider";
import FirstSection from "@/components/solutions/FirstSection";
import ProductsSection from "@/components/solutions/ProductsSection";

import { motion } from "framer-motion";

//
import enSecurity from "../../../../public/translations/en/security.json";
import trSecurity from "../../../../public/translations/tr/security.json";
import { useLanguage } from "@/contexts/LanguageContext";
import OtherSolutions from "@/components/OtherSolutions";
import { useEffect } from "react";
const translations = {
  en: enSecurity,
  tr: trSecurity,
};

function Security() {
  const { activeLanguage } = useLanguage();
  const content = translations[activeLanguage];

  useEffect(() => {
    document.title = "Holocrow — Security";
  });

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

      <SwipingSlider content={content.sliderSection} />
      <OtherSolutions content={content} />
      <Footer icon="/assets/footer-img.png" />
    </>
  );
}

export default Security;
