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
      <TrustedBySection content={content} />
      <Footer icon="../assets/footer-img.png" />
    </>
  );
}

export default HowItWorks;
