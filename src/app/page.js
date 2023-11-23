"use client";

import Features from "@/components/Features";
import HeroMain from "@/components/home/HeroMain";
import HowItWorks from "@/components/home/HowItWorks";
import MainFooter from "@/components/MainFooter";
import PlatformOverview from "@/components/home/PlatformOverview";
import SlidersSection from "@/components/SlidersSection";
import Statics from "@/components/home/Statics";
import Testimonials from "@/components/home/Testimonials";

import enHome from "../../public/translations/en/home.json";
import trHome from "../../public//translations/tr/home.json";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: enHome,
  tr: trHome,
};
export default function Home() {
  const { activeLanguage } = useLanguage();
  const content = translations[activeLanguage];

  return (
    <>
      <HeroMain />
      <Features content={content} />
      <Statics content={content} />
      <HowItWorks content={content} />
      <SlidersSection content={content} />
      <PlatformOverview content={content} />
      <Testimonials content={content} />
      <MainFooter />
    </>
  );
}
