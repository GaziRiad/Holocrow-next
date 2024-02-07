"use client";

import Heading from "@/components/Heading";
import HeadingDescription from "@/components/HeadingDescription";
import Hero from "@/components/Hero";
import MainFooter from "@/components/MainFooter";
import { useLanguage } from "@/contexts/LanguageContext";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

//
import enAbout from "../../../public/translations/en/about.json";
import trAbout from "../../../public/translations/tr/about.json";
const translations = {
  en: enAbout,
  tr: trAbout,
};

function About() {
  const { activeLanguage } = useLanguage();
  const content = translations[activeLanguage];

  return (
    <AnimatePresence>
      <motion.div
        key="aboutUs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className=" relative">
          <Hero img={content.heroImg} herobg="hero-solutions" />
          <p className="absolute bottom-[5%] w-full left-1/2 -translate-x-[50%] flex items-center justify-center px-4 text-center md:px-0 lg:bottom-[10%] lg:w-auto ">
            <span className="text-3xl">{"{"}</span>
            <span className="px-2 text-lg lg:text-xl">{content.heroText}</span>
            <span className="text-3xl">{"}"}</span>
          </p>
        </div>

        <section className="container mx-auto text-center flex flex-col gap-2 mb-12 px-4 lg:gap-7 lg:px-0 lg:mb-40">
          <p className=" text-xl lg:text-3xl 2xl:text-4xl">{`${content.firstSection.text}`}</p>
          <p className=" font-semibold text-2xl lg:text-4xl 2xl:text-5xl">
            {content.firstSection.quote}
          </p>
        </section>

        <section className="bg-primary text-black-800 py-24 mb-14 lg:mb-44">
          <div className="container mx-auto px-4 lg:scroll-px-10 xl:px-20">
            <p className="text-2xl tracking-wide font-semibold mb-4 text-center leading-snug lg:leading-relaxed lg:text-left lg:mb-10 lg:text-3xl xl:text-4xl">
              {content.secondSection.heading}
            </p>
            <p className="text-base text-center lg:text-lg lg:text-left">
              {content.secondSection.text}
            </p>
          </div>
        </section>

        <section className="container mx-auto mb-12 px-4 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-24 xl:gap-32 lg:px-16 lg:mb-40 relative">
          <div className="relative w-full lg:absolute lg:-top-36 xl:right-1/4 lg:w-1/2">
            <motion.img
              src="/assets/Vector-wave.png"
              className="w-40 top-0 xl:w-52 -z-50"
              style={{}}
              initial={{ scaleY: 0.9 }}
              animate={{ scaleY: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
              }}
            />
            <p className="text-primary font-bold text-5xl md:text-6xl absolute z-10 -mt-28 pl-8 xl:-mt-32 xl:pl-[74px]">
              <span className="text-white">
                {content.thirdSection.heading.slice(0, 3)}
              </span>
              <span> {content.thirdSection.heading.slice(3, -1)}</span>
            </p>
          </div>
          <img
            src={content.thirdSection.img}
            alt={content.thirdSection.heading}
            className="rounded-xl lg:w-[40%] xl:w-[35%]"
          />
          <div className="flex flex-col gap-4 lg:gap-12 lg:text-lg">
            {content.thirdSection.text.map((par) => (
              <p key={par}>{par}</p>
            ))}
          </div>
        </section>

        <section className="container mx-auto mb-12 lg:mb-40">
          <Heading>{content.teamSection.heading}</Heading>
          <HeadingDescription>
            {content.teamSection.subHeading}
          </HeadingDescription>

          <div className="flex flex-wrap items-end justify-center gap-8 text-black-800 md:gap-16 xl:gap-24 mb-6 lg:mb-12">
            {content.teamSection.team.map((el) => (
              <div key={el.name} className="w-80">
                <img src={el.img} alt={el.name} className="mb-4" />
                <p className="font-semibold text-lg">{el.name}</p>
                <p className="uppercase text-sm text-black-700/80">
                  {el.position}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <img src="/assets/aboutUs/employees.png" className="" />
          </div>
        </section>

        <MainFooter />
      </motion.div>
    </AnimatePresence>
  );
}
export default About;
