"use client";

import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import { navigation } from "@/constants/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

//
import enContact from "../../../public/translations/en/contact.json";
import trContact from "../../../public/translations/tr/contact.json";
import { useEffect } from "react";
const translations = {
  en: enContact,
  tr: trContact,
};
function Contact() {
  const { activeLanguage } = useLanguage();
  const content = translations[activeLanguage];

  useEffect(() => {
    document.title = "Holocrow — Contact us page";
  });
  return (
    <AnimatePresence>
      <motion.section
        key="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="pt-14 pb-14 gradient min-h-screen"
      >
        <header className="container mx-auto flex items-center justify-between mb-24 px-8 lg:px-0 lg:mb-12">
          <Logo />
          <Navigation content={navigation} />
        </header>
        <div className="container mx-auto px-4 lg:px-32  ">
          <div className="flex flex-col items-center justify-between md:mt-20 lg:flex-row mb-10">
            <p className=" text-7xl font-bold text-white/50 mb-10 lg:mb-0 xl:text-8xl">
              Contact US
            </p>
            <motion.img
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              src="assets/footer/footerHomeIcon.png"
              className=" md:w-2/3 lg:w-1/2"
            />
          </div>
          {/*  */}
          <div className="text-center lg:text-left mb-8 ">
            <p className="text-5xl text-white font-bold mb-4">
              {content.support.title}
            </p>
            <p className=" flex gap-2 font-medium justify-center lg:justify-start">
              <span className="text-white">{content.support.wba}</span>
              <span>{content.support.number}</span>
            </p>
          </div>
          {/*  */}
          <div className="text-center lg:text-left mb-8 ">
            <p className="text-5xl text-white font-bold mb-4 ">
              {content.contact.title}
            </p>
            <p className=" flex gap-2 font-medium justify-center lg:justify-start">
              <span className="text-white">{content.contact.email}</span>
              <span>{content.contact.data}</span>
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-row lg:w-2/4 lg:justify-between">
            <div>
              <p className="text-white text-lg font-medium">
                {content.baltic.title}:
              </p>
              <p>
                {content.baltic.add1}
                <br />
                {content.baltic.add2} <br />
                {content.baltic.add3} <br />
                {content.baltic.add4}
                <br />
                {content.baltic.number}
              </p>
            </div>
            <div>
              <p className="text-white text-lg font-medium">
                {content.center.title}:
              </p>
              <p>
                {content.center.add1} <br />
                {content.center.add2}
                <br />
                {content.center.add3} <br />
                {content.center.number}
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default Contact;
